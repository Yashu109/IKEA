// import React from 'react';
import  { useState } from "react";
import NavigationTabs from "../Navigation/Navigation";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import "./CatogerySection.css";

const allProducts = [
  { name: "Everyday essentials", image: "/src/assets/essential-product.avif", id: "everyday-essentials", category: "shopProducts" },
  { name: "Storage & organisation", image: "/src/assets/storage-organisation-st001.avif", id: "storage", category: "shopProducts" },
  { name: "Furniture", image: "/src/assets/furniture-fu001.avif", id: "furniture", category: "shopProducts" },
  { name: "Beds & mattresses", image: "/src/assets/beds-mattresses-bm001.avif", id: "beds", category: "shopProducts" },
  { name: 'Home textiles', image: '/src/assets/textiles-tl001.avif', id: 'textiles',category: "shopProducts" },
  { name: 'Decoration', image: '/src/assets/decoration-de001.avif', id: 'decoration',category: "shopProducts" },,
  { name: "Outdoor products", image: "/src/assets/outdoor-products-od001.avif", id: "outdoor", category: "shopProducts" },
  { name: "Kitchenware & tableware", image: "/src/assets/kitchenware-tableware-kt001.webp", id: "kitchenware", category: "shopProducts" },
  { name: "Bathroom products", image: "/src/assets/bathroom-products-ba001.avif", id: "bathroom", category: "shopProducts" },
  { name: "Baby & children", image: "/src/assets/baby-children-bc001.avif", id: "baby-children", category: "shopProducts" },
  { name: "Laundry & cleaning", image: "/src/assets/laundry-cleaning-lc001.avif", id: "Laundry & cleaning", category: "shopProducts" },
  { name: "Pots & plants", image: "/src/assets/pots-plants-pp001.avif", id: "Pots & plants", category: "shopProducts" },
  { name: "Modular kitchens", image: "/src/assets/kitchen-appliances-ka001.avif", id: "Modular kitchens", category: "shopProducts" },


];

const CategorySection = () => {
  const [selectedTab, setSelectedTab] = useState("shopProducts");

  const handleTabClick = (action) => {
    setSelectedTab(action);
  };

  // Filter products based on the selected tab
  const filteredProducts = allProducts.filter(
    (product) => product.category === selectedTab
  );

  return (
    <div className="category-section">
      <NavigationTabs onTabClick={handleTabClick} />
      <FeaturedProducts products={filteredProducts}showImages={selectedTab === "shopProducts"}  />
    </div>
  );
};

export default CategorySection;
