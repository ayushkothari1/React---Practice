function Greetings(props) {
  return (
    <h1>
      {props.isLoggedIn ? `Welcome to ${props.name}!` : `Please sign in.`}
    </h1>
  );
}

export default Greetings;
