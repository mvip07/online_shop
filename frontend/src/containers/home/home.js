import Navbar from "../../components/navbar/navbar";
import Advertising from "../../components/advertising/advertising";
import Products from "../products/products";
import Footer from "../../components/footer/footer";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("")
  console.log(search)
  return (
    <div id="wrapper" className="wrapper-full">
      <Navbar setSearch={setSearch} />
      <Advertising />
      <Products search={search} />
      <Footer />
    </div>
  );
}

export default Home;
