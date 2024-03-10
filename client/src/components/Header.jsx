import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-3xl flex flex-wrap items-center">
            <span className="text-slate-500">YOUR</span>
            <span className="text-slate-700">Space</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center ml-3">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-10">
          <Link
            to="/"
            className="hover:transform duration-300 hover:scale-110 "
          >
            <li className="hidden sm:inline text-slate-700  hover:text-slate-950">Home</li>
          </Link>
          <Link
            to="/about"
            className="hover:transform duration-300 hover:scale-110"
          >
            <li className="hidden sm:inline text-slate-700  hover:text-slate-950">About</li>
          </Link>
          <Link
            to="/sign-in"
            className="hover:transform duration-300 hover:scale-110"
          >
            <li className="text-slate-700 font-medium  hover:text-slate-950">Sign in</li>
          </Link>{" "}
        </ul>
      </div>
    </header>
  );
}

export default Header;
