import type { Metadata } from "next";
import "../styles/globals.css";
import { ClientProviders } from "@/components/layout/ClientProviders";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | Harish UI",
    default: "Harish UI — React Component Library",
  },
  description:
    "A professional React UI component library with TypeScript, CSS variables theming, and full accessibility support.",
  keywords: ["react", "ui", "components", "design-system", "typescript", "accessible"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientProviders>
          <Header />
          <div
            style={{
              display: "flex",
              minHeight: "calc(100vh - var(--docs-header-height))",
              maxWidth: "1400px",
              margin: "0 auto",
              paddingTop: "var(--docs-header-height)",
            }}
          >
            <Sidebar />
            <main
              style={{
                flex: 1,
                minWidth: 0,
                padding: "40px 48px",
                maxWidth: "var(--docs-content-max-width)",
              }}
            >
              {children}
            </main>
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
