import Header from "@/components/Header";
import React from "react";
import { dummyCards } from "@/constants/index";
import VideoCard from "@/components/VideoCard";
const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="songyu.work@outlook.com"
        title="Songyu's Profile"
        userImg="/assets/images/dummy.jpg"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dummyCards.map((card) => (
          <VideoCard {...card} />
        ))}
      </div>
    </div>
  );
};

export default page;
