import { useState } from "react";
function ImageCarousel() {
  const imageUrls = [
    "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206233_68-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-69.jpg",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://www.superiorwallpapers.com/water/wonderful-landscape-nature-mountain-river_5120x3200.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handelClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img
        src={imageUrls[currentImageIndex]}
        alt="Carusel"
        style={{ width: "800px", height: "800px" }}
      />
      <button
        onClick={handelClick}
        style={{
          border: "1px solid green",
          borderRadius: "10px",
          height: "70px",
          width: "200px",
        }}
      >
        Click
      </button>
    </div>
  );
}

export default ImageCarousel;
