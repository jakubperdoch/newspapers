import { PrimeReactProvider } from 'primereact/api';
import './globals.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="en">
   <body>
    <PrimeReactProvider>{children}</PrimeReactProvider>
   </body>
  </html>
 );
}
