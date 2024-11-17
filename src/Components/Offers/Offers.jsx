import "./Offers.css";

const CardCarousel = () => {
  const cards = [
    {
      image: "/src/assets/offers.png",
      title: "Affordable living room sets starting at Rs.40,000",
      description:
        "Make this multifunctional space that meets all your needs without breaking the bank.",
      link: "#",
    },
  ];

  return (
    <div className="card-carousel">
      {/* <div className="card-wrapper">
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
      </div> */}
      <div className="offers">
        <img src="/src/assets/offers.png"></img>
      </div>
    </div>
  );
};

export default CardCarousel;
