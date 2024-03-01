// usePhotoDetails.js
import { useEffect, useState } from "react";
import { accessKey } from "../components/constant";

const usePhotoDetails = (photoId) => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    if (photoId) {
      fetchPhoto();
    }
  }, []);

  const fetchPhoto = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/${photoId}`,
        {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch photo with ID ${photoId}. Status: ${response.status}`
        );
      }

      const photoData = await response.json();
      setPhoto(photoData);
    } catch (error) {
      console.error("Error fetching photo:", error);
    }
  };

  return photo;
};

export default usePhotoDetails;
