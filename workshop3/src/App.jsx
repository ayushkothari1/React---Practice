import "./App.css";
import { useState } from "react";

export function Book({ title, author, genre, rating }) {
  return (
    <div className="book-box">
      <h2>{title}</h2>
      <p className="author">Written by {author}</p>
      <p>Genre: {genre}</p>
      <span className="rating">⭐ {rating}/5</span>
    </div>
  );
}

export function TipsOfReading({ icon, heading, text }) {
  return (
    <section className="reading-box">
      <div className="icon">{icon}</div>
      <div>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const books = [
    {
      id: 101,
      title: "Godaan",
      author: "Munsi Premchand",
      genre: "Social realist",
      rating: 4.7,
    },
    {
      id: 102,
      title: "Beyond the Stars",
      author: "Daniel Reed",
      genre: "Science Fiction",
      rating: 4.5,
    },
    {
      id: 103,
      title: "Harry Potter Collction",
      author: "J. K. Rowling",
      genre: "Fantasy ",
      rating: 4.8,
    },
  ];
  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <main className="library">
      <header className="library-header">
        <h1>My Book Library</h1>
        <p>Discover something new to read.</p>
      </header>

      <div className="book-grid">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            rating={book.rating}
          />
        ))}
      </div>
      <div id="toggle-container">
        <button onClick={handleToggleVisibility} id="toggle-button">
          {isVisible ? "Hide Message" : "Show Message"}
        </button>
        {isVisible && <p id="message">I love Coding!</p>}
      </div>

      <div className="tips">
        <h2>Tips for Reading</h2>

        <TipsOfReading
          icon="📖"
          heading="Read Every Day"
          text="Even a few pages each day can help you finish more books."
        />

        <TipsOfReading
          icon="☕"
          heading="Create a Cozy Space"
          text="Find a comfortable place where you can focus without distractions."
        />

        <TipsOfReading
          icon="📝"
          heading="Take Notes"
          text="Write down interesting ideas or quotes you want to remember."
        />
      </div>
    </main>
  );
}
