import Image from "next/image";

function TrendCategory() {
  return (
    <div className="py-20 w-11/12 mx-auto">
      <div className="text-center">
        <h1 className="lg:text-2xl text-xl font-bold">#Trend Now</h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-7 gap-3 pt-8 justify-items-center">
        <div>
          <Image
            alt=""
            src="https://i.postimg.cc/qB9mzmbJ/ezgif-com-webp-to-jpg-converted.jpg"
            width="600"
            height="500"
          />
        </div>
        <div>
          <Image
            alt=""
            src="https://i.postimg.cc/vZ85Bfs8/ezgif-com-webp-to-jpg-converted-1.jpg"
            width="600"
            height="500"
          />
        </div>
        <div>
          <Image
            alt=""
            src="https://i.postimg.cc/KjNrqN2V/ezgif-com-webp-to-jpg-converted-2.jpg"
            width="600"
            height="500"
          />
        </div>
      </div>
    </div>
  );
}

export default TrendCategory;
