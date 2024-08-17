"use client";

import Introduction from "@/Introduction";
import Technologies from "@/Technologies";
import Strengths from "@/Strengths";
import ImageGallery from "@/ImageGallery";

export default function Home() {
  return (
    <div>
      <Introduction />
      <ImageGallery />
      <Technologies />
      <Strengths />
    </div>
  );
}
