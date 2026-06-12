const ids = ['7578896754783964419', '7578894223823359254', '7574553055065083158'];
for (const id of ids) {
  const url = `https://www.tiktok.com/@obrafacil2025_/video/${id}`;
  const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`);
  const data = await res.json();
  console.log(JSON.stringify({ id, title: data.title, thumb: data.thumbnail_url, w: data.thumbnail_width, h: data.thumbnail_height }, null, 2));
}
