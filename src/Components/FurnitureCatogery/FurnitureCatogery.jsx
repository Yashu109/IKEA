import "./FurnitureCatogery.css";

const Carousel = () => {
  const items = [
    
{
  image: "/src/assets/beddingfrom.avif",
  title: "Bedding",
  price: "Rs.149",
},
{
  image: "/src/assets/rugsfrom.avif",
  title: "Rugs",
  price: "Rs.99",
},
{
  image: "/src/assets/duvetsfrom.avif",
  title: "Duvets",
  price: "Rs.349",
},
{
  image: "/src/assets/kitchenfrom.avif",
  title: "Table Lamps",
  price: "Rs.299",
},
{
  image: "/src/assets/tablelampsfrom.avif",
  title: "Kitchen Organisers",
  price: "Rs.59",
},
{
  image: "/src/assets/cookwarefrom.avif",
  title: "Cookware",
  price: "Rs.99",
},
{
    image: "/src/assets/framesfrom.webp",
    title: "Cookware",
    price: "Rs.99",
  },

  ];

  return (
    <div className="carousel-container">
      <h2>Top furniture categories</h2>
      <div className="carousel">
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.image} alt={item.title} className="carousel-image" />
            <div className="carousel-info">
              <h3>{item.title}</h3>
              <p>From {item.price}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Carousel;
