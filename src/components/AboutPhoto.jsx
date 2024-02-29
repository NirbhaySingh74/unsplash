import { useParams } from "react-router-dom";
import usePhotoDetails from "../utils/usePhotoDetails";
import Shimmer from "./Shimmer";

const AboutPhoto = () => {
  const { photoId } = useParams();
  const photoData = usePhotoDetails(photoId);

  if (!photoData) return <Shimmer />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img
          className="w-full rounded-md h-auto max-w-full max-h-64 object-cover"
          src={photoData?.urls?.regular}
          alt={photoData?.alt_description}
        />
        <div className="p-6">
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={photoData?.user?.profile_image?.medium}
              alt={photoData?.user?.name}
            />
            <h1 className="text-2xl font-bold">{photoData?.alt_description}</h1>
          </div>
          <p className="text-gray-600 italic mb-4">
            Photo by: {photoData?.user?.name}
          </p>
          <div className="flex justify-between items-center mb-4">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {photoData?.width} x {photoData?.height}
            </span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {photoData?.created_at}
            </span>
          </div>
          <p className="text-gray-800">
            {photoData?.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPhoto;
