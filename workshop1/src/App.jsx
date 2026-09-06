import "./App.css";
import { Footer } from "./Components/Footer";
import Greetings from "./Components/greetings";
import Css from "./Components/Css";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="#">Widgets</a>
        </li>
        <li className="nav-item">
          <button aria-expanded="false">Apps</button>
          <ul className="sub-menu" aria-label="Apps">
            <li>
              <a href="#">Calendar</a>
            </li>
            <li>
              <a href="#">Chat</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <Greetings name="My App" isLoggedIn={false} />
      <Greetings name="Fast App" isLoggedIn={true} />
      <Css />
      <Footer />
    </>
  );
}

export default App;
