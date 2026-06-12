import { writeFile, mkdir } from 'node:fs/promises';

const ids = ['7578896754783964419', '7578894223823359254', '7574553055065083158'];
await mkdir('public/tiktok', { recursive: true });

for (const id of ids) {
  const url = `https://www.tiktok.com/@obrafacil2025_/video/${id}`;
  const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`);
  const data = await res.json();
  const img = await fetch(data.thumbnail_url);
  const buf = Buffer.from(await img.arrayBuffer());
  await writeFile(`public/tiktok/${id}.jpg`, buf);
  console.log(`${id}.jpg → ${buf.length} bytes`);
}
