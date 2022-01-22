import { NavLink } from "react-router-dom";
import useDarkMode from "./useDarkMode";

function NavBar() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <nav>
      <NavLink to="/">
        <div className="logo">
          <div className="circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>
          <h1>Podcasts</h1>
        </div>
      </NavLink>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="/"
          >
            Bladeren
          </NavLink>
        </li>
      </ul>
      <button className="theme" onClick={toggleTheme}>
        {theme === "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroklinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>
    </nav>
  );
}

export default NavBar;
