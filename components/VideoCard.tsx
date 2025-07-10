"use client";
import { EyeIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type VideoCardProps = {
  id: string;
  title: string;
  thumbnail: string;
  userImg: string;
  createdAt: Date;
  userName: string;
  views: number;
  visibility: string;
  duration: number;
};

const VideoCard = ({
  id,
  title,
  thumbnail,
  userImg,
  createdAt,
  userName,
  views,
  visibility,
  duration,
}: VideoCardProps) => {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <Link
      href={`/video/${id}`}
      className="bg-white rounded-xl container shadow-md max-w-[300px] py-4 px-4 hover:scale-105 transition-all duration-200 relative"
    >
      <Image
        src={thumbnail}
        alt="thumbnail"
        className="thumbnail cursor-pointer rounded-xl shadow-md"
        width={300}
        height={300}
      />
      <article>
        <figure className="flex items-center gap-2 mt-2 w-full">
          <Image
            src={userImg}
            className="rounded-full aspect-square"
            alt="user avatar"
            width={32}
            height={32}
          />
          <div className="flex flex-col ">
            <h3 className="text-sm font-medium">{userName}</h3>
            <p className="text-sm text-gray-500">{visibility}</p>
          </div>
          <div className="flex items-center ms-auto gap-1">
            <EyeIcon className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">{views}</span>
          </div>
        </figure>
        <h2 className="text-lg font-medium mt-2">
          {title} -{" "}
          {createdAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h2>
      </article>
      <button
        className="copy-btn h-6 w-6  bg-white rounded-full shadow-md absolute top-6 right-6 flex items-center justify-center"
        onClick={() => {}}
      >
        <LinkIcon className="w-4 h-4 hover:text-gray-500 hover:scale-105 transition-all duration-200" />
      </button>
      <div className="duration-text absolute bottom-28 right-6 bg-gray-700 text-white rounded-full px-2 py-1 text-sm flex items-center justify-center">
        {formatDuration(duration)}
      </div>
    </Link>
  );
};

export default VideoCard;
