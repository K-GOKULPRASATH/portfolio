import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-gamma-ten-otdwnif2gn.vercel.app"),
  title: { default: `${site.name} — Developer Lab`, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: "Gokulprasath Developer Lab",
  openGraph: { type: "website", title: `${site.name} — Developer Lab`, description: site.description, siteName: "Gokulprasath Developer Lab" },
  twitter: { card: "summary_large_image", title: `${site.name} — Developer Lab`, description: site.description },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#0b0e0f", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader/><main>{children}</main><footer className="site-footer"><div className="footer-inner"><div><span className="brand-mark">g<span>.</span></span><span>Built with curiosity. Shipped with care.</span></div><div className="footer-links"><a href="https://github.com/K-GOKULPRASATH" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/gokulprasath-k-b8078733a/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="/contact">Contact ↗</a></div><span className="copyright">© {new Date().getFullYear()} Gokulprasath K</span></div></footer></body></html>;
}