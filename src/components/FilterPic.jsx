import PropTypes from "prop-types";

const FilterPic = ({ onSearch, onRandom }) => {
  const handleNature = () => {
    onSearch("nature");
  };
  const handlesoftware = () => {
    onSearch("software");
  };
  const handleGym = () => {
    onSearch("gym");
  };
  const handleRandom = () => {
    onRandom();
  };
  return (
    <div className="flex flex-col sm:flex-row justify-center my-4 gap-3">
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleNature}
      >
        Nature
      </button>
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handlesoftware}
      >
        Software
      </button>
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleGym}
      >
        Gym
      </button>
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleRandom}
      >
        Get Random Picture
      </button>
    </div>
  );
};

FilterPic.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onRandom: PropTypes.func.isRequired,
};

export default FilterPic;
