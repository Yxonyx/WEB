
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const bgPath = 'C:\\Users\\User\\Új mappa (8)\\CyberLabs_Export\\WEB\\public\\images\\hero-bg-v4.webp';
const outputDir = 'C:\\Users\\User\\Új mappa (8)\\CyberLabs_Export\\WEB\\public\\images';

const tasks = [
    {
        filename: 'blog-chatbot-conversion.webp',
        title: 'AI chatbot: látogatóból érdeklődő',
        subtitle: 'Hogyan lesz a látogatóból vevő?'
    },
    {
        filename: 'blog-design-2026.webp',
        title: 'Egyedi webdizájn 2026-ban',
        subtitle: 'Miért nem elég a sablon?'
    },
    {
        filename: 'blog-customer-journey.webp',
        title: 'Fogyasztói út a weboldalon',
        subtitle: 'A látogatóból ügyfél'
    }
];

async function createPlaceholder(task) {
    const width = 1200;
    const height = 630;

    // Create SVG with text
    const svgImage = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .title { fill: white; font-size: 60px; font-family: sans-serif; font-weight: bold; }
      .subtitle { fill: #00f0ff; font-size: 40px; font-family: sans-serif; }
    </style>
    <rect width="100%" height="100%" fill="rgba(0,0,0,0.7)" />
    <text x="50%" y="45%" text-anchor="middle" class="title">${task.title}</text>
    <text x="50%" y="60%" text-anchor="middle" class="subtitle">${task.subtitle}</text>
  </svg>
  `;

    const outputPath = path.join(outputDir, task.filename);
    console.log(`Creating ${outputPath}...`);

    try {
        // Load background, resize to cover, composite with text
        await sharp(bgPath)
            .resize(width, height, { fit: 'cover' })
            .composite([
                { input: Buffer.from(svgImage), top: 0, left: 0 }
            ])
            .toFile(outputPath);

        console.log(`Created ${task.filename}`);
    } catch (error) {
        console.error(`Error creating ${task.filename}:`, error);
    }
}

// Ensure output dir exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Run all tasks
(async () => {
    for (const task of tasks) {
        await createPlaceholder(task);
    }
})();
