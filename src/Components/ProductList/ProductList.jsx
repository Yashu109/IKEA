  // import './ProductList.css';
  import productImage from '../../assets/product.jpg';
  import sofasImage from '../../assets/sofas.avif';
  import bedroomImage from '../../assets/bedroom.avif';
  import EatingImage from '../../assets/Eating.webp';
  import decorationImage from '../../assets/decoration.avif';

    import "./ProductList.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Left Promo Image */}
      <div className="promo-image">
        <img src={productImage} alt="Promo" />
      </div>

      {/* Right Image Grid */}
      <div className="image-grid">
        <div className="image-card">
          <img src={sofasImage} alt="Sofa" />
        </div>
        <div className="image-card">
          <img src={bedroomImage} alt="Bedroom" />
        </div>
        <div className="image-card">
          <img src={EatingImage} alt="Eating" />
        </div>
        <div className="image-card">
          <img src={decorationImage} alt="Decoration" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
