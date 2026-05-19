import './globals.css'

export const metadata = {
  title: 'SERENA HOTEL PMS',
  description: 'Hotel Management System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  )
}
