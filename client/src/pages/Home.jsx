import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import CategoriesWomen from "../components/CategoriesWomen";
import CategoriesMen from "../components/CategoriesMen";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";

const Home = (type) => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      {type.type === "men" ? <CategoriesMen/> : type.type === "women" ? <CategoriesWomen/> : <Categories/>}
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
