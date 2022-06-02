import { useEffect, useState } from "react";
import API from "../utils/axios";
import Navbar from "../../components/navbar/navbar";

import Advertising from "../../components/advertising/advertising";
import Products from "../products/products";
import Footer from "../../components/footer/footer";

function Home() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    API.get("/products").then((res) => {
      setproduct(res.data);
    });
  }, []);
  return (
    <div id="wrapper" className="wrapper-full">
      <Navbar />
      {/* <Advertising />
      <Products product={product} />
      <Footer /> */}
    </div>
  );
}

export default Home;
