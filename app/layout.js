import "../styles/globals.css";
import Footer from "../component/Footer";

export const metadata = {
  title: "GiveAGift",
  description: "تطبيق إلكتروني",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-white">
        {children}
        <Footer />
      </body>
    </html>
  );
}
