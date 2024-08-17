"use client";

import Introduction from "@/Introduction";
import Technologies from "@/Technologies";
import Strengths from "@/Strengths";
import ImageGallery from "@/ImageGallery";
import Contact from "@/Contact";
import Footer from "@/Footer";

export default function Home() {
  return (
    <div>
      <Introduction />
      <ImageGallery />
      <Technologies />
      <Strengths />
      <Contact />
      <Footer />
    </div>
  );
}
