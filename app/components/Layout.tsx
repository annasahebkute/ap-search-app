import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
}