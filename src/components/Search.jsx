import { useState } from "react";
import PropTypes from "prop-types";
import SearchImg from "../assets/search.png";
const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center my-2 gap-2">
      <div className="relative flex w-full sm:w-auto lg:w-96">
        <input
          type="text"
          placeholder="Search photos..."
          value={searchTerm}
          onChange={handleInputChange}
          className="border bg-gray-300 rounded-md py-2 px-4 outline-none w-full"
        />
        <button
          onClick={handleSearch}
          className="absolute inset-y-0 right-0 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ marginLeft: "-40px" }}
        >
          <img src={SearchImg} alt="Search" className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
