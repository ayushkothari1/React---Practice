import "./App.css";

export function CoffeeCard({ name, type, description, price }) {
  return (
    <div className="coffee-card">
      <div className="coffee-icon">☕</div>

      <div className="coffee-info">
        <h2>{name}</h2>
        <span className="coffee-type">{type}</span>
        <p>{description}</p>
      </div>

      <strong className="coffee-price">{price}</strong>
    </div>
  );
}

export function Feature({ icon, title, text }) {
  return (
    <div className="feature">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default function App() {
  const coffees = [
    {
      id: 1,
      name: "Caramel Latte",
      type: "Sweet & Creamy",
      description: "Smooth espresso blended with steamed milk and caramel.",
      price: "$5.50",
    },
    {
      id: 2,
      name: "Cold Brew",
      type: "Smooth & Bold",
      description: "Slow-steeped coffee served cold for a rich flavor.",
      price: "$4.00",
    },
    {
      id: 3,
      name: "Mocha",
      type: "Chocolatey",
      description: "Espresso, chocolate and steamed milk topped with foam.",
      price: "$5.00",
    },
  ];

  return (
    <main className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">WELCOME TO BEAN HOUSE</p>
          <h1>Your daily cup of happiness.</h1>
          <p className="hero-text">
            Fresh coffee, cozy spaces and good conversations.
          </p>

          <button>Explore Menu</button>
        </div>

        <div className="hero-cup">☕</div>
      </section>

      <section className="menu-section">
        <h2>Popular Drinks</h2>

        <div className="coffee-grid">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              name={coffee.name}
              type={coffee.type}
              description={coffee.description}
              price={coffee.price}
            />
          ))}
        </div>
      </section>

      <section className="features">
        <Feature
          icon="🌱"
          title="Fresh Beans"
          text="We use carefully selected coffee beans."
        />

        <Feature
          icon="🔥"
          title="Freshly Made"
          text="Every drink is prepared when you order."
        />

        <Feature
          icon="❤️"
          title="Made With Love"
          text="A warm cup made to brighten your day."
        />
      </section>
    </main>
  );
}
