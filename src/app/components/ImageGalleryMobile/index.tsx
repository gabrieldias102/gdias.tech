import Image from "next/image";

import image1 from "images/introduction/image-1.jpg";
import image2 from "images/introduction/image-2.jpg";
import image3 from "images/introduction/image-3.jpg";
import image4 from "images/introduction/image-4.jpg";
import image5 from "images/introduction/image-5.jpg";
import image6 from "images/introduction/image-6.jpg";

export default function ImageGalleryMobile() {
  return (
    <div className="flex md:hidden flex-col w-full gap-4 px-8 pb-16">
      <div>
        <Image
          src={image1}
          alt="A topdown picture of me, showing my desk"
          height={450}
        />
      </div>
      <div className="flex flex-row justify-around">
        <Image
          src={image2}
          alt="A topdown picture of me, showing my desk"
          height={80}
        />
        <Image
          src={image6}
          alt="A topdown picture of me, showing my desk"
          height={80}
        />
      </div>
      <div className="flex flex-row justify-around">
        <Image
          src={image3}
          alt="A topdown picture of me, showing my desk"
          height={115}
        />
        <Image
          src={image4}
          alt="A topdown picture of me, showing my desk"
          height={115}
        />
        <Image
          src={image5}
          alt="A topdown picture of me, showing my desk"
          height={115}
        />
      </div>
    </div>
  );
}
