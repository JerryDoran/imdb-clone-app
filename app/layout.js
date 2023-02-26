import Header from './components/Header';
import '../styles/global.css';
import Providers from './Providers';
import Navbar from './components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
