#!/usr/bin/env node

/**
 * Script de migration vers le nouveau système i18n d'Astro
 * Supprime l'ancien système JavaScript côté client
 */

import fs from 'fs';
import path from 'path';

const publicDir = './public/assets/js';

// Fichiers à supprimer
const filesToRemove = [
  'data/translations.js',
  'modules/translations.js'
];

// Supprimer les anciens fichiers de traduction
filesToRemove.forEach(file => {
  const filePath = path.join(publicDir, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`✅ Supprimé: ${filePath}`);
  }
});

// Mettre à jour main.js pour supprimer l'import des traductions
const mainJsPath = path.join(publicDir, 'main.js');
if (fs.existsSync(mainJsPath)) {
  let content = fs.readFileSync(mainJsPath, 'utf8');
  
  // Supprimer les imports de traduction
  content = content.replace(/import.*translations.*\n/g, '');
  
  fs.writeFileSync(mainJsPath, content);
  console.log('✅ Mis à jour: main.js');
}

console.log('🎉 Migration i18n terminée !');
console.log('📝 Prochaines étapes:');
console.log('   1. Tester les pages /fr et /en');
console.log('   2. Vérifier le sélecteur de langue');
console.log('   3. Mettre à jour les autres composants avec les traductions');
