#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Performance thresholds
const THRESHOLDS = {
  bundleSize: 600 * 1024, // 600KB
  chunkSize: 200 * 1024,  // 200KB per chunk
  lighthouse: {
    performance: 98,
    accessibility: 95,
    bestPractices: 95,
    seo: 95
  }
};

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logHeader(message) {
  console.log('\n' + '='.repeat(50));
  log(message, 'bold');
  console.log('='.repeat(50));
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(2)} KB`;
}

function formatPercentage(score) {
  return `${(score * 100).toFixed(1)}%`;
}

// Check if build exists
function checkBuildExists() {
  const distPath = path.join(projectRoot, 'dist');
  if (!fs.existsSync(distPath)) {
    log('❌ Build not found. Running build first...', 'yellow');
    return false;
  }
  return true;
}

// Analyze bundle size
function analyzeBundleSize() {
  logHeader('📦 Bundle Size Analysis');
  
  const distPath = path.join(projectRoot, 'dist');
  let totalSize = 0;
  let jsSize = 0;
  let cssSize = 0;
  const chunks = [];
  
  function analyzeDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        analyzeDirectory(fullPath);
      } else if (stat.isFile()) {
        const size = stat.size;
        totalSize += size;
        
        if (item.endsWith('.js')) {
          jsSize += size;
          chunks.push({ name: item, size, type: 'js' });
        } else if (item.endsWith('.css')) {
          cssSize += size;
          chunks.push({ name: item, size, type: 'css' });
        }
      }
    }
  }
  
  analyzeDirectory(distPath);
  
  // Sort chunks by size
  chunks.sort((a, b) => b.size - a.size);
  
  log(`Total bundle size: ${formatBytes(totalSize)}`, totalSize > THRESHOLDS.bundleSize ? 'red' : 'green');
  log(`JavaScript: ${formatBytes(jsSize)}`);
  log(`CSS: ${formatBytes(cssSize)}`);
  
  console.log('\n📊 Largest chunks:');
  chunks.slice(0, 10).forEach(chunk => {
    const color = chunk.size > THRESHOLDS.chunkSize ? 'red' : 'green';
    log(`  ${chunk.name}: ${formatBytes(chunk.size)}`, color);
  });
  
  // Check thresholds
  const issues = [];
  if (totalSize > THRESHOLDS.bundleSize) {
    issues.push(`Total bundle size exceeds ${formatBytes(THRESHOLDS.bundleSize)}`);
  }
  
  const largeChunks = chunks.filter(chunk => chunk.size > THRESHOLDS.chunkSize);
  if (largeChunks.length > 0) {
    issues.push(`${largeChunks.length} chunks exceed ${formatBytes(THRESHOLDS.chunkSize)}`);
  }
  
  if (issues.length > 0) {
    log('\n⚠️  Performance Issues:', 'yellow');
    issues.forEach(issue => log(`  - ${issue}`, 'yellow'));
  } else {
    log('\n✅ Bundle size within acceptable limits', 'green');
  }
  
  return { totalSize, jsSize, cssSize, chunks, issues };
}

// Run Lighthouse analysis
function runLighthouse() {
  return new Promise((resolve, reject) => {
    logHeader('🔍 Lighthouse Performance Analysis');
    
    log('Starting Lighthouse CI...', 'blue');
    
    const lighthouse = spawn('npx', ['lhci', 'autorun'], {
      cwd: projectRoot,
      stdio: 'inherit'
    });
    
    lighthouse.on('close', (code) => {
      if (code === 0) {
        log('✅ Lighthouse analysis completed successfully', 'green');
        resolve();
      } else {
        log('❌ Lighthouse analysis failed', 'red');
        reject(new Error(`Lighthouse exited with code ${code}`));
      }
    });
    
    lighthouse.on('error', (error) => {
      log(`❌ Failed to start Lighthouse: ${error.message}`, 'red');
      reject(error);
    });
  });
}

// Generate performance report
function generateReport(bundleAnalysis) {
  logHeader('📋 Performance Report Summary');
  
  const score = {
    bundleSize: bundleAnalysis.totalSize <= THRESHOLDS.bundleSize ? 100 : 0,
    chunkOptimization: bundleAnalysis.chunks.filter(c => c.size > THRESHOLDS.chunkSize).length === 0 ? 100 : 50
  };
  
  const overallScore = Object.values(score).reduce((a, b) => a + b, 0) / Object.keys(score).length;
  
  log(`Bundle Size Score: ${score.bundleSize}%`, score.bundleSize === 100 ? 'green' : 'red');
  log(`Chunk Optimization Score: ${score.chunkOptimization}%`, score.chunkOptimization === 100 ? 'green' : 'yellow');
  log(`Overall Performance Score: ${overallScore.toFixed(1)}%`, overallScore >= 90 ? 'green' : overallScore >= 70 ? 'yellow' : 'red');
  
  console.log('\n💡 Recommendations:');
  if (bundleAnalysis.totalSize > THRESHOLDS.bundleSize) {
    log('  - Consider code splitting and lazy loading', 'yellow');
    log('  - Remove unused dependencies', 'yellow');
  }
  if (bundleAnalysis.chunks.some(c => c.size > THRESHOLDS.chunkSize)) {
    log('  - Split large chunks into smaller ones', 'yellow');
    log('  - Use dynamic imports for heavy libraries', 'yellow');
  }
  log('  - Enable tree shaking in production builds', 'blue');
  log('  - Optimize images and use modern formats (WebP)', 'blue');
  log('  - Implement proper caching strategies', 'blue');
}

// Main function
async function main() {
  try {
    log('🚀 Starting Performance Check...', 'bold');
    
    // Check if build exists, if not, create it
    if (!checkBuildExists()) {
      log('Building application...', 'blue');
      await new Promise((resolve, reject) => {
        const build = spawn('npm', ['run', 'build'], {
          cwd: projectRoot,
          stdio: 'inherit'
        });
        
        build.on('close', (code) => {
          if (code === 0) {
            resolve();
          } else {
            reject(new Error(`Build failed with code ${code}`));
          }
        });
      });
    }
    
    // Analyze bundle
    const bundleAnalysis = analyzeBundleSize();
    
    // Run Lighthouse (optional, can be skipped if server is not running)
    try {
      await runLighthouse();
    } catch (error) {
      log('⚠️  Lighthouse analysis skipped (server may not be running)', 'yellow');
      log('   Run `npm run preview:ssr` in another terminal and try again', 'yellow');
    }
    
    // Generate report
    generateReport(bundleAnalysis);
    
    log('\n✅ Performance check completed!', 'green');
    
  } catch (error) {
    log(`❌ Performance check failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}