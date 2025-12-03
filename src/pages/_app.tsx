// Global styles and application setup
import "@/styles/globals.css";
import Head from 'next/head'; // Next.js head management
import { Inter, Geist_Mono } from "next/font/google"; // Google Fonts
import { Analytics } from "@vercel/analytics/next"; // Vercel Analytics
import createUniformContext from "@/uniformContext/context"; // Uniform context creation
import { UniformAppProps } from "@uniformdev/context-next"; // Uniform Next.js integration
import { UniformContext } from "@uniformdev/context-react"; // Uniform React context
import { MobileMenuProvider } from "@/contexts/MobileMenuContext"; // Mobile navigation state
import type { RootComponentInstance } from '@uniformdev/canvas'; // Uniform composition types

/**
 * Font Configuration - Google Fonts Setup
 *
 * Using Next.js font optimization for better performance:
 * - Inter: Main UI font (clean, professional sans-serif)
 * - Geist Mono: Code/monospace font (for technical content)
 *
 * CSS Variables:
 * - --font-inter: Available in CSS as var(--font-inter)
 * - --font-geist-mono: Available in CSS as var(--font-geist-mono)
 */
const inter = Inter({
  subsets: ["latin"], // Character subset to load
  variable: "--font-inter", // CSS variable name
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// Create Uniform context for client-side operations
const clientContext = createUniformContext();

/**
 * Next.js App Component - Application Root
 *
 * This is the root component that wraps every page in the application.
 * It sets up global providers, fonts, metadata, and Uniform context.
 *
 * Key Responsibilities:
 * - Global CSS injection
 * - SEO metadata management (title, description, keywords)
 * - Font loading and CSS variable setup
 * - Uniform context provider setup
 * - Mobile menu state management
 * - Server/client context handling
 *
 * Metadata Handling:
 * - Extracts page metadata from Uniform composition parameters
 * - Sets HTML title, meta description, and keywords
 * - Provides fallback values for better SEO
 *
 * Provider Hierarchy:
 * 1. MobileMenuProvider: Mobile navigation state
 * 2. UniformContext: Uniform CMS context and personalization
 * 3. Font variables: CSS custom properties for fonts
 */
export default function App({
  Component, // The page component being rendered
  pageProps, // Props passed to the page component
  serverUniformContext, // Uniform context from server-side
}: UniformAppProps<{ data: RootComponentInstance }>) {
  const outputType = "standard"; // Uniform output type for rendering

  // Extract composition data for metadata
  const { data: composition } = pageProps || {};
  const { pageTitle, pageMetaDescription, pageKeywords } = composition?.parameters || {};

  // Extract metadata values with fallbacks
  const title = (pageTitle?.value as string) || 'Nova Insurance - Affordable Coverage for Everyone';
  const description = (pageMetaDescription?.value as string) || 'Get the insurance coverage you need at prices you can afford. Auto, home, life, and more.';
  const keywords = (pageKeywords?.value as string) || 'insurance, auto insurance, home insurance, life insurance, affordable coverage';

  return (
    <>
      {/* HTML Head - SEO and Metadata */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Application Providers and Layout */}
      <MobileMenuProvider>
        <UniformContext
          context={serverUniformContext ?? clientContext}
          outputType={outputType}
        >
          {/* Font CSS variables wrapper */}
          <div className={`${inter.variable} ${geistMono.variable} font-sans`}>
            {/* Render the current page component */}
            <Component {...pageProps} />
          </div>
          <Analytics />
        </UniformContext>
      </MobileMenuProvider>
    </>
  );
}
