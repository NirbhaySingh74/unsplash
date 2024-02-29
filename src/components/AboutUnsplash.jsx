const AboutUnsplash = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Unsplash</h1>
      <p className="text-gray-800 mb-4">
        Unsplash is a website dedicated to sharing stock photography under the
        Unsplash license. The website claims over 110,000 contributing
        photographers and generates more than 17 billion photo impressions per
        month on their growing library of over 2 million photos.
      </p>
      <p className="text-gray-800 mb-4">
        Unsplash allows photographers to upload photos to their website, which
        are then curated by a team of photo editors. Users can freely download
        and use these high-quality images for any purpose, including commercial
        projects, without the need for attribution.
      </p>
      <p className="text-gray-800 mb-4">
        Unsplash has become one of the largest photography websites in the
        world, offering a vast collection of images that cater to a wide range
        of creative needs. It has gained popularity among designers, developers,
        bloggers, and social media marketers as a valuable resource for
        high-resolution visuals.
      </p>
      <p className="text-gray-800">
        To learn more or contribute to Unsplash, visit their website at{" "}
        <a
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          unsplash.com
        </a>
        .
      </p>
    </div>
  );
};

export default AboutUnsplash;
