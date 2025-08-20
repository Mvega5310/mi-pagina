#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Function to recursively find all JS/TS files
function findSourceFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
      findSourceFiles(fullPath, files);
    } else if (stat.isFile() && /\.(js|jsx|ts|tsx)$/.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Optimize imports in a file
function optimizeFileImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let optimizedContent = content;
  let hasChanges = false;

  // Optimize React imports
  const reactImportRegex = /import\s+React(?:\s*,\s*\{[^}]*\})?\s+from\s+['"]react['"]/g;
  const reactUsageRegex = /React\./g;
  
  if (reactImportRegex.test(content) && !reactUsageRegex.test(content)) {
    // Remove React import if not used directly
    optimizedContent = optimizedContent.replace(
      /import\s+React(?:\s*,\s*)?/g,
      'import '
    ).replace(
      /import\s+,\s*\{/g,
      'import {'
    );
    hasChanges = true;
  }

  // Optimize Heroicons imports - use specific imports instead of general ones
  const heroiconsRegex = /import\s*\{([^}]+)\}\s*from\s*['"]@heroicons\/react\/24\/outline['"]/g;
  let match;
  while ((match = heroiconsRegex.exec(content)) !== null) {
    const icons = match[1].split(',').map(icon => icon.trim());
    if (icons.length > 3) {
      console.log(`⚠️  Consider splitting large Heroicons import in ${path.relative(projectRoot, filePath)}`);
    }
  }

  // Check for unused imports
  const importRegex = /import\s+(?:\{([^}]+)\}|([^\s,]+))(?:\s*,\s*\{([^}]+)\})?\s+from\s+['"]([^'"]+)['"]/g;
  const imports = [];
  
  while ((match = importRegex.exec(content)) !== null) {
    const namedImports = match[1] || match[3];
    const defaultImport = match[2];
    const modulePath = match[4];
    
    if (namedImports) {
      const names = namedImports.split(',').map(name => name.trim());
      names.forEach(name => {
        imports.push({ name, type: 'named', module: modulePath, fullMatch: match[0] });
      });
    }
    
    if (defaultImport) {
      imports.push({ name: defaultImport, type: 'default', module: modulePath, fullMatch: match[0] });
    }
  }

  // Check if imports are actually used
  const unusedImports = [];
  imports.forEach(imp => {
    const usageRegex = new RegExp(`\\b${imp.name}\\b`, 'g');
    const matches = content.match(usageRegex) || [];
    
    // If only found in import statement, it's unused
    if (matches.length <= 1) {
      unusedImports.push(imp);
    }
  });

  if (unusedImports.length > 0) {
    console.log(`🚨 Unused imports in ${path.relative(projectRoot, filePath)}:`);
    unusedImports.forEach(imp => {
      console.log(`  - ${imp.name} from ${imp.module}`);
    });
  }

  return { optimizedContent, hasChanges, unusedImports };
}

// Main optimization function
function optimizeImports() {
  console.log('🔍 Analyzing imports for optimization...\n');
  
  const sourceFiles = findSourceFiles(path.join(projectRoot, 'src'));
  let totalOptimizations = 0;
  let totalUnusedImports = 0;
  
  const optimizationSummary = {
    filesWithUnusedImports: 0,
    filesOptimized: 0,
    totalUnusedImports: 0
  };

  sourceFiles.forEach(file => {
    const result = optimizeFileImports(file);
    
    if (result.unusedImports.length > 0) {
      optimizationSummary.filesWithUnusedImports++;
      optimizationSummary.totalUnusedImports += result.unusedImports.length;
    }
    
    if (result.hasChanges) {
      optimizationSummary.filesOptimized++;
      // Uncomment to apply changes automatically
      // fs.writeFileSync(file, result.optimizedContent);
    }
  });

  console.log('\n📊 Import Optimization Summary:');
  console.log('='.repeat(40));
  console.log(`Files analyzed: ${sourceFiles.length}`);
  console.log(`Files with unused imports: ${optimizationSummary.filesWithUnusedImports}`);
  console.log(`Total unused imports: ${optimizationSummary.totalUnusedImports}`);
  console.log(`Files that could be optimized: ${optimizationSummary.filesOptimized}`);
  
  if (optimizationSummary.totalUnusedImports > 0) {
    console.log('\n💡 Recommendations:');
    console.log('  - Remove unused imports to reduce bundle size');
    console.log('  - Use tree-shakable imports where possible');
    console.log('  - Consider dynamic imports for heavy libraries');
  }
  
  console.log('\n✅ Import analysis complete!');
}

// Run optimization
optimizeImports();