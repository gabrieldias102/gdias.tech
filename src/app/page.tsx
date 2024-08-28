"use client";

import Introduction from "@/Introduction";
import ImageGallery from "@/ImageGallery";
import ImageGalleryMobile from "@/ImageGalleryMobile";
import Technologies from "@/Technologies";
import Strengths from "@/Strengths";
import Contact from "@/Contact";
import Footer from "@/Footer";

export default function Page() {
  return (
    <div>
      <Introduction />
      <ImageGallery />
      <ImageGalleryMobile />
      <Technologies />
      <Strengths />
      <Contact />
      <Footer />
    </div>
  );
}
