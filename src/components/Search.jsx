// Search.jsx
import { useState } from "react";
import PropTypes from "prop-types";

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
    <div className="flex flex-col sm:flex-row justify-center items-center my-2 gap-2 ">
      <input
        type="text"
        placeholder="Search photos..."
        value={searchTerm}
        onChange={handleInputChange}
        className="border bg-gray-300 rounded-md py-2 px-4 outline-none w-full sm:w-auto"
      />
      <button
        onClick={handleSearch}
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
