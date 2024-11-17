import "./ImageBanners.css";

const CardCarousel = () => {
  const cards = [
    {
      image: "/src/assets/allthingswedding.avif",
      title: "All things wedding, all things home",
      description:
        "Discover beautiful wedding gifts or essentials to set up your new home, making this season unforgettable.",
      link: "#",
    },
    
    {
      image: "/src/assets/jinglefestive.avif",
      title: "Jingle all the way with festive cheer!",
      description:
        "Fill your home with festive cheer with our Christmas tree, aromatic candles, and hangings that bring the holiday spirit to life!",
      link: "#",
    },
    {
      image: "/src/assets/outdoorfurniture.avif",
      title: "Find the perfect outdoor furniture for those crisp winter evenings",
      description:
        "Outdoor essentials for every gathering—weather-resistant chairs, stylish tables, and storage solutions.",
      link: "#",
    },
  ];

  return (
    <div className="card-carousel">
      <div className="card-wrapper">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.link} className="card-link">
                <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
