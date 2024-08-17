import Image from "next/image";

import image1 from "images/introduction/image-1.jpg";
import image2 from "images/introduction/image-2.jpg";
import image3 from "images/introduction/image-3.jpg";
import image4 from "images/introduction/image-4.jpg";
import image5 from "images/introduction/image-5.jpg";
import image6 from "images/introduction/image-6.jpg";

export default function ImageGallery() {
  return (
    <div className="flex flex-row w-full gap-4 px-32 pb-24">
      <div>
        <Image
          src={image4}
          alt="A topdown picture of me, showing my desk"
          height={450}
        />
      </div>
      <div className="flex items-end pt-28">
        <Image
          src={image3}
          alt="A topdown picture of me, showing my desk"
          height={425}
        />
      </div>
      <div className="flex flex-col gap-8 pt-8">
        <Image
          src={image1}
          alt="A topdown picture of me, showing my desk"
          height={250}
        />
        <Image
          src={image2}
          alt="A topdown picture of me, showing my desk"
          height={200}
        />
      </div>
      <div className="flex flex-col gap-8">
        <Image
          src={image5}
          alt="A topdown picture of me, showing my desk"
          height={275}
        />
        <Image
          src={image6}
          alt="A topdown picture of me, showing my desk"
          height={225}
        />
      </div>
    </div>
  );
}
