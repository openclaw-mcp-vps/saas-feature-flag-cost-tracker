import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FlagCost — Track Feature Flag Costs Across Platforms',
  description: 'Monitor feature flag usage costs across LaunchDarkly, Split, and more. Optimize spend with real-time analytics and recommendations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f5817fc6-2dc9-48b0-a848-f7aa14fb3199"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
