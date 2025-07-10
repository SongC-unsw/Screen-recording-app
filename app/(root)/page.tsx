import React from "react";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants/index";
const page = () => {
  return (
    <main className="wrapper page">
      <Header title="Welcome to PopCast" subHeader="Your personal video hub" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dummyCards.map((card) => (
          <VideoCard {...card} />
        ))}
      </div>
    </main>
  );
};

export default page;
