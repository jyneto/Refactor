import React from "react";
import HomeContent from "../components/homeContent/HomeContent";
import "../components/homeContent/Home.css";
import { main } from "framer-motion/client";

export default function Home() {
  return (
    <main className="main-content">
      <HomeContent />
    </main>
  );
}
