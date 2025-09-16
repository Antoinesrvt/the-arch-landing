#!/usr/bin/env node

/**
 * Simple build script for static site deployment
 * This script ensures all files are ready for deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Building static site...');

// Check if index.html exists
if (!fs.existsSync('index.html')) {
    console.error('❌ index.html not found!');
    process.exit(1);
}

// Check if assets directory exists
if (!fs.existsSync('assets')) {
    console.error('❌ assets directory not found!');
    process.exit(1);
}

// List all files that will be deployed
const files = [];
function listFiles(dir, prefix = '') {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            listFiles(fullPath, prefix + item + '/');
        } else {
            files.push(prefix + item);
        }
    });
}

listFiles('.');
console.log(`✅ Found ${files.length} files to deploy`);

// Check critical files
const criticalFiles = [
    'index.html',
    'assets/css/main.css',
    'assets/css/components.css',
    'assets/css/animations.css',
    'assets/js/data/translations.js',
    'assets/js/modules/translations.js',
    'assets/js/modules/animations.js',
    'assets/js/main.js'
];

let missingFiles = [];
criticalFiles.forEach(file => {
    if (!files.includes(file)) {
        missingFiles.push(file);
    }
});

if (missingFiles.length > 0) {
    console.error('❌ Missing critical files:', missingFiles);
    process.exit(1);
}

console.log('✅ All critical files present');
console.log('✅ Build completed successfully!');
console.log('🌐 Ready for deployment to Vercel');
