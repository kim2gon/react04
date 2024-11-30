import React from "react";

const Section01 = () => {]
  const currentImage = 

  currentImageIndex.on("change", (latest) => {
    console.log(`스크롤 진행도: ${latest}`);
  });

  return (
    <section className="w-full h-[400vh] relative bg-black text-white">
      <div className="sticky top-0 flex items-center justify-center h-screen">
        <div
          style={{ backgroundImage: `url(/digivice.jpg)` }}
          className="w-[400px] h-[400px] flex justify-center items-center"
        >
          <img
            src={`/001/egg00.png`}
            alt={`egg 00`}
            className="max-w-full max-h-full"
          />
        </div>
      </div>
      <div className="sticky top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute left-0 w-1/4 h-full bg-white"></div>
        <div className="absolute w-1/4 h-full bg-white left-1/4"></div>
        <div className="absolute w-1/4 h-full bg-white left-2/4"></div>
        <div className="absolute w-1/4 h-full bg-white left-3/4"></div>
      </div>
    </section>
  );
};

export default Section01;
