import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header = () => (
  <header class={style.header}>
    <a href="/" class={style.logo}>
      <img
        src="../../assets/logo.svg"
        alt="Amply Logo"
        height="96"
        width="96"
      />

      <h1>Rebate Control Board</h1>
    </a>
    <nav>
      <Link activeClassName={style.active} href="/">
        Rebates
      </Link>
      <Link activeClassName={style.active} href="/projects">
        Projects
      </Link>
    </nav>
  </header>
);

export default Header;
