// PhotoGallery.jsx
import { useState, useEffect } from "react";
import { accessKey } from "./constant";
import Search from "./Search";
import FilterPic from "./FilterPic";
import { Link } from "react-router-dom";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [filteredPhoto, setFilterPhoto] = useState([]);
  const handleSearch = async (inputElement) => {
    if (inputElement === "") return setFilterPhoto(photos);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${inputElement}&client_id=${accessKey}&count=${30}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }
      const data = await response.json();
      console.log(data);

      setFilterPhoto(data.results);
    } catch (error) {
      console.error("Error searching photos:", error);
    }
  };
  // Get Random Pic
  const handleRandomPic = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${30}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error("Error searching photos:", error);
    }
  };
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${30}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }
        const data = await response.json();
        setPhotos(data);
        setFilterPhoto(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <>
      <Search onSearch={handleSearch} />
      <FilterPic onSearch={handleSearch} onRandom={handleRandomPic} />
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredPhoto.map((photo) => (
          <Link
            to={`photos/${photo.id}`}
            key={photo.id}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-full object-cover cursor-pointer"
              src={photo.urls.regular}
              alt={photo.alt_description}
              style={{ borderRadius: "10px" }}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default PhotoGallery;
