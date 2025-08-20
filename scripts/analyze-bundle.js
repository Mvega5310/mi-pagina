#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));
const dependencies = Object.keys(packageJson.dependencies || {});
const devDependencies = Object.keys(packageJson.devDependencies || {});

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

// Find all source files
const sourceFiles = findSourceFiles(path.join(projectRoot, 'src'));

// Read all source files and extract imports
const usedDependencies = new Set();
const importRegex = /import\s+(?:[^'"]*\s+from\s+)?['"]([^'"]+)['"]/g;

for (const file of sourceFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    
    // Check if it's a package import (not relative)
    if (!importPath.startsWith('.') && !importPath.startsWith('/')) {
      // Extract package name (handle scoped packages)
      const packageName = importPath.startsWith('@') 
        ? importPath.split('/').slice(0, 2).join('/')
        : importPath.split('/')[0];
      
      usedDependencies.add(packageName);
    }
  }
}

// Find unused dependencies
const unusedDependencies = dependencies.filter(dep => !usedDependencies.has(dep));
const unusedDevDependencies = devDependencies.filter(dep => !usedDependencies.has(dep));

// Bundle size analysis
const distPath = path.join(projectRoot, 'dist');
let totalSize = 0;
let jsSize = 0;
let cssSize = 0;

if (fs.existsSync(distPath)) {
  function calculateSize(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        calculateSize(fullPath);
      } else if (stat.isFile()) {
        const size = stat.size;
        totalSize += size;
        
        if (item.endsWith('.js')) {
          jsSize += size;
        } else if (item.endsWith('.css')) {
          cssSize += size;
        }
      }
    }
  }
  
  calculateSize(distPath);
}

// Generate report
console.log('\n📦 Bundle Analysis Report\n');
console.log('='.repeat(50));

console.log('\n📊 Bundle Size:');
console.log(`Total: ${(totalSize / 1024).toFixed(2)} KB`);
console.log(`JavaScript: ${(jsSize / 1024).toFixed(2)} KB`);
console.log(`CSS: ${(cssSize / 1024).toFixed(2)} KB`);

console.log('\n📋 Dependencies Analysis:');
console.log(`Total dependencies: ${dependencies.length}`);
console.log(`Used dependencies: ${Array.from(usedDependencies).filter(dep => dependencies.includes(dep)).length}`);
console.log(`Unused dependencies: ${unusedDependencies.length}`);

if (unusedDependencies.length > 0) {
  console.log('\n🚨 Unused Dependencies:');
  unusedDependencies.forEach(dep => console.log(`  - ${dep}`));
  
  console.log('\n💡 Suggested removal command:');
  console.log(`npm uninstall ${unusedDependencies.join(' ')}`);
}

if (unusedDevDependencies.length > 0) {
  console.log('\n⚠️  Potentially Unused Dev Dependencies:');
  unusedDevDependencies.forEach(dep => console.log(`  - ${dep}`));
}

console.log('\n✅ Used Dependencies:');
Array.from(usedDependencies)
  .filter(dep => dependencies.includes(dep))
  .sort()
  .forEach(dep => console.log(`  - ${dep}`));

console.log('\n🎯 Optimization Recommendations:');
if (jsSize > 200 * 1024) {
  console.log('  - Consider code splitting for large JS bundles');
}
if (totalSize > 500 * 1024) {
  console.log('  - Bundle size is large, consider lazy loading');
}
if (unusedDependencies.length > 0) {
  console.log('  - Remove unused dependencies to reduce bundle size');
}
console.log('  - Enable tree shaking in production builds');
console.log('  - Consider using dynamic imports for heavy libraries');

console.log('\n='.repeat(50));