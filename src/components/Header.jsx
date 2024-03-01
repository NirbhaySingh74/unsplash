import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white py-4 px-0 md:px-8">
      <div className="container mx-auto px-4 sm:px-0 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968763.png"
            alt=""
            className="w-10"
          />
        </Link>
        <Link to="/about">
          <h3 className="text-black text-lg font-bold cursor-pointer">About</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
