import './globals.css';

export const metadata = {
  title: 'Nexus Media Group',
  description: 'Nexus TV Kenya',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}