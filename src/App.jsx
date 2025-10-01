import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import NewsBar from "./components/NewsBar/NewsBar";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Product from "./pages/Product";
import BlogPost from "./pages/BlogPost";
import Contacts from "./pages/Contact";
import { useState } from "react";
import Error from "./pages/Error";

function App() {
  const [isNewsBar, setIsNewsBar] = useState(true);
  return (
    <Layout>
      <NewsBar setIsNewsBar={setIsNewsBar} />
      <Navbar isNewsBar={isNewsBar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/blog-post/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;
