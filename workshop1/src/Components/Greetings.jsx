const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Mango" },
  { id: 3, name: "Cherry" },
];

function Greetings(props) {
  return (
    <>
      <h1>
        {props.isLoggedIn ? `Welcome to ${props.name}!` : `Please sign in.`}
      </h1>
      {fruits.map((fruit) => (
        <div key={fruit.id}>
          <h1>I love </h1>
          <li>{fruit.name}</li>
        </div>
      ))}
    </>
  );
}

export default Greetings;
