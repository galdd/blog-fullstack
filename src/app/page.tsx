// src/app/page.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
