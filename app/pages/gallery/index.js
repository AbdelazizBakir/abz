import GridGallery from "./grid-gallery";

export default function Index() {
  const images = [
    "./cl.jpg",
    "./cl.jpg",
    "./cl.jpg",
    "./cl.jpg",
    "./cl.jpg",
    "./cl.jpg",
    "./cl.jpg",
    "./cl.jpg",
    "./cl.jpg",
    "./cl.jpg"

  ];

  return (
    <>
      <GridGallery images={images} />
    </>
  );
}
