import logo from "../../logo.svg";
import "./style.css";

const Main = () => {
  return (
    <div className="main">
      <header className="main-header">
        <img src={logo} className="main-logo" alt="logo" />
        <div className="header_link">
          {" "}
          <a className="link" href="/">
            ABOUT US
          </a>
          <a className="link" href="/shops">
            SHOPS
          </a>
          <a className="link" href="/products">
            PRODUCTS
          </a>
          <a className="link" href="/sign_in">
            SIGN IN
          </a>
        </div>
      </header>
    </div>
  );
};

export default Main;
