import Image from "next/image";

import image1 from "images/introduction/image-1.jpg";
import image2 from "images/introduction/image-2.jpg";
import image3 from "images/introduction/image-3.jpg";
import image4 from "images/introduction/image-4.jpg";
import image5 from "images/introduction/image-5.jpg";
import image6 from "images/introduction/image-6.jpg";

import { motion } from "framer-motion";

export default function ImageGallery() {
  return (
    <div className="hidden md:flex flex-row w-full gap-4 px-32 pb-24">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 3 }}
      >
        <Image
          src={image4}
          alt="The image shows a person working at a laptop in a dimly lit room, 
          with code displayed on the screen. They are wearing headphones and 
          glasses, concentrating on their work. A black cat is sitting on the 
          desk beside the laptop, looking toward the camera with glowing eyes, 
          adding a mysterious and cozy atmosphere to the scene."
          height={450}
        />
      </motion.div>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 2.5 }}
        className="flex items-end pt-28"
      >
        <Image
          src={image3}
          alt="The image shows a person working at a desk with a laptop and a 
          large monitor displaying code. They are wearing glasses and headphones, 
          smiling slightly at the camera. The desk also has a mechanical keyboard, 
          a mouse, a coffee mug, and some keys. The workspace appears organized, 
          with a tech-focused setup."
          height={425}
        />
      </motion.div>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col gap-8 pt-8"
      >
        <Image
          src={image1}
          alt="The image shows someone working at a computer in a dim room, 
          wearing glasses and headphones. They're focused on a laptop with 
          a desktop computer nearby, which is lit up inside. The scene has 
          a techy vibe."
          height={250}
        />
        <Image
          src={image2}
          alt="The image shows a person smiling while sitting in a café. 
          They're wearing glasses and headphones, leaning slightly back
          with a relaxed posture. A laptop is in front of them on the table, 
          with a bottle of water nearby. The café has a modern, cozy atmosphere, 
          with a few other people in the background."
          height={200}
        />
      </motion.div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 3 }}
        className="flex flex-col gap-8"
      >
        <Image
          src={image5}
          alt="The image shows a person gaming at a computer with a colorful 
          backlit keyboard. They are wearing glasses and a headset with RGB 
          lighting. A small dog is sitting comfortably on their lap, looking 
          up at the camera. The scene is cozy and focused, with the person 
          deeply engaged in the game while the dog adds a touch of warmth 
          to the setup"
          height={275}
        />
        <Image
          src={image6}
          alt="The image shows a person sitting at a wooden table in a cozy café or 
          restaurant with a brick wall in the background. They are wearing glasses 
          and looking thoughtfully to the side, resting their chin on their hand.
          On the table, there are a few drinks, including a glass of wine, a 
          bottle of water, and a bottle of soda. The atmosphere is warm and relaxed."
          height={225}
        />
      </motion.div>
    </div>
  );
}
