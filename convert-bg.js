
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = 'C:\\Users\\User\\Új mappa (8)\\CyberLabs_Export\\WEB\\CyberLabs_Export\\photo-1660914256311-918659fae88f.avif';
const outputPath = 'C:\\Users\\User\\Új mappa (8)\\CyberLabs_Export\\WEB\\public\\images\\hero-bg-v4.webp';

console.log(`Converting ${inputPath} to ${outputPath}...`);

sharp(inputPath)
    .toFormat('webp')
    .toFile(outputPath)
    .then(info => {
        console.log('Conversion successful:', info);
    })
    .catch(err => {
        console.error('Conversion failed:', err);
        process.exit(1);
    });
