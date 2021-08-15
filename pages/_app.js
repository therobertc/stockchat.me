import "../styles/globals.css";

const NavBar = () => (
  <header className="navbar">
    <div className="navbar__title navbar__item">Cutco</div>
    <div className="navbar__item">About Us</div>
    <div className="navbar__item">Contact</div>
    <div className="navbar__item">Help</div>
  </header>
);

function MyApp({ Component, pageProps }) {
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
  />;
  return (<NavBar> </NavBar>), (<Component {...pageProps} />);
}

export default MyApp;
