import { useState, useEffect } from "react";
import { accessKey } from "./constant";

const useSearch = (inputElement) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${inputElement}&client_id=${accessKey}`
        );
        const data = await response.json();
        setPhotos(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMenu();
  }, [inputElement]); // Include inputElement in the dependency array

  // Return the photos state
  return photos;
};

export default useSearch;
