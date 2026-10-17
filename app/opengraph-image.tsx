import { ImageResponse } from "next/og";
export const alt = "Stephen Mathenge Kisangi | AI Engineer & Founder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0a0a0b", color: "#ededed" }}>
      <div style={{ fontSize: 28, color: "#5b8def" }}>CMU Africa MSEAI '26 · First-Class Honours, BSc IT</div>
      <div style={{ fontSize: 76, fontWeight: 700, marginTop: 24 }}>Stephen Mathenge Kisangi</div>
      <div style={{ fontSize: 36, color: "#8a8a8f", marginTop: 16 }}>AI Engineer · Founder · Builder of live products</div>
    </div>), size);
}
