import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const files = [
  "Cinematch.png",
  "cinescope.png",
  "Electronest.png",
  "Kharchi.png",
  "MePhotoo.png",
  "Nepali News.png",
  "snake game.png",
  "space Invader.png",
  "Urbanwave.png",
];

const sourceDir = path.join(root, "src", "components", "images");

for (const file of files) {
  const target = path.join(sourceDir, file);
  const metadata = await sharp(target).metadata();
  const maxWidth = file === "MePhotoo.png" ? 900 : 1400;

  await sharp(target)
    .resize({
      width: Math.min(metadata.width || maxWidth, maxWidth),
      withoutEnlargement: true,
    })
    .png({
      quality: 72,
      compressionLevel: 9,
      adaptiveFiltering: true,
      palette: true,
      effort: 10,
    })
    .toFile(`${target}.optimized`);

  await sharp(`${target}.optimized`).toFile(target);
}

console.log("Image optimization complete.");
