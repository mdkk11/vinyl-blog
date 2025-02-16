import type { Metadata } from 'next'

import './globals.css'
import { DefaultLayout } from '@/components/layouts'
import { SITE_DESCRIPTION, SITE_TITLE } from '@/const/metadata'
import { ThemeProvider } from '@/providers/ThemeProvider'

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DefaultLayout>{children}</DefaultLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
