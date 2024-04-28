// Home page
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
