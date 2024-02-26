const Header = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h3 className="text-white text-lg font-semibold mb-2 sm:mb-0">Home</h3>
        <h3 className="text-white text-lg font-semibold cursor-pointer">
          About
        </h3>
      </div>
    </div>
  );
};

export default Header;
