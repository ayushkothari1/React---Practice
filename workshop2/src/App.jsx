import "./App.css";

export function Card({ name, title, bio }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="card-title">{title}</p>
      <p>{bio}</p>
    </div>
  );
}

export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image}></img>
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export default function App() {
  const profiles = [
    {
      id: 1,
      name: "Mark",
      title: "Front-End developer",
      bio: "I like to work with different front-end technologies and play video games.",
    },
    {
      id: 2,
      name: "Tiffany",
      title: "Engineering manager",
      bio: "I have worked in tech for 15 years and love to help people grow in this industry.",
    },
    {
      id: 3,
      name: "Doug",
      title: "Back-End developer",
      bio: "I have been a software developer for over 20 years and I love working with Go and Rust.",
    },
  ];
  return (
    <>
      <div className="flex-container">
        {profiles.map((profile) => (
          <Card
            key={profile.id}
            name={profile.name}
            title={profile.title}
            bio={profile.bio}
          />
        ))}
      </div>
      <div>
        <h1 className="mood-board-heading">Destination Mood Board</h1>
        <div className="mood-board">
          <MoodBoardItem
            color="yellow"
            image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
            description="Beautiful velly looking mountain"
          />
          <MoodBoardItem
            color="blue"
            image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg
"
            description="A ship always look majestic"
          />
          <MoodBoardItem
            color="green"
            image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg
"
            description="Grass and water look beautiful"
          />
        </div>
      </div>
    </>
  );
}
