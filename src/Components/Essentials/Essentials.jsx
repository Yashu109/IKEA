import "./Essentials.css";

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
      <h2>Get more warmth for less with our winter essentials</h2>
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

// import "./Essentials.css";

// const CardCarousel = () => {
//   const cards = [
//     {
//       image: "/src/assets/allthingswedding.avif",
//       title: "All things wedding, all things home",
//       description:
//         "Discover beautiful wedding gifts or essentials to set up your new home, making this season unforgettable.",
//       link: "#",
//     },
//     {
//       image: "/src/assets/outdoorfurniture.avif",
//       title: "Find the perfect outdoor furniture for those crisp winter evenings",
//       description:
//         "Outdoor essentials for every gathering—weather-resistant chairs, stylish tables, and storage solutions.",
//       link: "#",
//     },
//     {
//       image: "/src/assets/jinglefestive.avif",
//       title: "Jingle all the way with festive cheer!",
//       description:
//         "Fill your home with festive cheer with our Christmas tree, aromatic candles, and hangings that bring the holiday spirit to life!",
//       link: "#",
//     },
//     {
//       image: "/src/assets/cozywinter.avif",
//       title: "Cozy winter blankets to keep you warm all season",
//       description:
//        "Consider how your bedding, pajamas, sunlight coming into the bedroom might be impacting your sleep",
//       link: "#",
//     },
//   ];

//   const horizontalScrollCards = [
//     {
//       image: "/src/assets/beddingfrom.avif",
//       title: "Bedding",
//       price: "Rs.149",
//     },
//     {
//       image: "/src/assets/rugsfrom.avif",
//       title: "Rugs",
//       price: "Rs.99",
//     },
//     {
//       image: "/src/assets/duvetsfrom.avif",
//       title: "Duvets",
//       price: "Rs.349",
//     },
//     {
//       image: "/src/assets/kitchenfrom.avif",
//       title: "Table Lamps",
//       price: "Rs.299",
//     },
//     {
//       image: "/src/assets/tablelampsfrom.avif",
//       title: "Kitchen Organisers",
//       price: "Rs.59",
//     },
//     {
//       image: "/src/assets/cookwarefrom.avif",
//       title: "Cookware",
//       price: "Rs.99",
//     },
//   ];

//   return (
//     <div>
//       {/* First Carousel Section */}
//       <div className="card-carousel">
//         <div className="card-wrapper">
//           {cards.map((card, index) => (
//             <div key={index} className="card">
//               <img src={card.image} alt={card.title} className="card-image" />
//               <div className="card-content">
//                 <h3>{card.title}</h3>
//                 <p>{card.description}</p>
//                 <a href={card.link} className="card-link">
//                   <span>→</span>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Second Horizontal Scroll Section */}
//       <div className="horizontal-scroll-section">
//         <div className="horizontal-wrapper">
//           {horizontalScrollCards.map((item, index) => (
//             <div key={index} className="horizontal-card">
//               <img src={item.image} alt={item.title} className="horizontal-image" />
//               <div className="horizontal-content">
//                 <h4>{item.title}</h4>
//                 <p>{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardCarousel;
