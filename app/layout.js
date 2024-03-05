import cls from "@/app/lib/cls";
import "@/app/ui/style/globals.css";
import Footer from "./ui/components/Footer";
import Header from "@/app/ui/components/Header";
import { interRegular } from "@/app/ui/style/fonts";

export const metadata = {
  title: "Nguji",
  description: "Modern and simplified POS system",
};

export default function RootLayout({ children }) {
  const _cls = cls(style);
  return (
    <html lang="en">
      <body className={_cls`body`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const style = {
  body: {
    text: `${interRegular.className} font-[500]`,
    wrapper: `flex flex-col items-center h-screen`,
  },
};
