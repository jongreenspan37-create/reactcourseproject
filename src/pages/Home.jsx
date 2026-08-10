import { useState, useEffect } from "react";
import BtnBlue from "../components/BtnBlue.jsx";
import BtnPill from "../components/BtnPill.jsx";
import Photo from "../components/Photo.jsx";

function Home() {
  const [photo, setPhoto] = useState({ id: "all", src: null, title: null });
  const photos = [
    { id: "1", src: "/S1.JPG", title: "Flower 1" },
    { id: "2", src: "/S2.JPG", title: "Flower 2" },
    { id: "3", src: "/S3.JPG", title: "Flower 3" },
    { id: "4", src: "/S4.JPG", title: "Flower 4" },
    { id: "5", src: "/S5.JPG", title: "Flower 5" },
  ];

  function goBack() {
    setPhoto({ id: "all", src: null, title: null });
  }

  return (
    <>
      {photo.id === "all" && (
        <>
          <h1 className="mt-4 text-center text-3xl">
            Click on a photo for a full sized image
          </h1>
          <p className="mt-2 text-center text-xl">
            or open other items from menu above
          </p>
          <div className="max-w-5xl mt-20 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((p) => (
              <img
                key={p.id}
                src={p.src}
                alt=""
                className="rounded-lg w-full object-cover"
                onClick={() => setPhoto(p)}
              />
            ))}
          </div>
        </>
      )}

      {photo.id === "1" && (
        <Photo title={photo.title} src={photo.src} onClick={goBack} />
      )}
      {photo.id === "2" && (
        <Photo title={photo.title} src={photo.src} onClick={goBack} />
      )}
      {photo.id === "3" && (
        <Photo title={photo.title} src={photo.src} onClick={goBack} />
      )}
      {photo.id === "4" && (
        <Photo title={photo.title} src={photo.src} onClick={goBack} />
      )}
      {photo.id === "5" && (
        <Photo title={photo.title} src={photo.src} onClick={goBack} />
      )}
    </>
  );
}

export default Home;
