import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';

async function run() {
  console.log("Starting background removal...");
  try {
    const inputPath = 'public/premium_hero.png';
    const outputPath = 'public/premium_hero_transparent.png';
    
    // Convert local file to blob
    const buffer = fs.readFileSync(inputPath);
    const blob = new Blob([buffer], { type: 'image/png' });
    
    const blobOutput = await removeBackground(blob);
    
    const arrayBuffer = await blobOutput.arrayBuffer();
    const bufferOutput = Buffer.from(arrayBuffer);
    
    fs.writeFileSync(outputPath, bufferOutput);
    console.log("Background removed successfully! Saved to", outputPath);
  } catch (error) {
    console.error("Error removing background:", error);
  }
}

run();
