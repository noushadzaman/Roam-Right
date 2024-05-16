import Image from "next/image";

const Gallery = ({ gallery }) => {
  const newGallery = [...gallery];
  newGallery.shift();

  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image
          src={gallery[0]}
          height={400}
          width={400}
          className="h-[400px]"
          alt="Main pic"
        />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {
            newGallery.map(img => <Image
              key={img}
              src={img}
              className="h-[400px]"
              width={400}
              height={400}
              alt="Sub pics"
            />)
          }
        </div>
      </div>
    </section>
  );
};

export default Gallery;
