import { SearchIcon, UploadIcon, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DropdownList from "./DropdownList";

const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
  return (
    <header className="header">
      <section className="header-container">
        <div className="details">
          {userImg && (
            <Image
              src={userImg || "/assets/images/dummy.jpg"}
              alt="user image"
              width={48}
              height={48}
              className="rounded-full"
            />
          )}
          <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
          </article>
        </div>
        <aside>
          <div className="hover:bg-gray-200 rounded-full transition-all duration-200">
            <Link href="/upload">
              <UploadIcon className="w-5 h-5" />
              <span>Upload your video</span>
            </Link>
          </div>
          <div className="bg-pink-600 rounded-full hover:bg-pink-700 transition-all duration-200">
            <button className="primary-btn">
              <Link href="/record" className="flex items-center text-white">
                <VideoIcon className="w-5 h-5" />
                <span>Record a video</span>
              </Link>
            </button>
          </div>
        </aside>
      </section>
      <section className="search-filter">
        <div className="search">
          <SearchIcon className="w-4 h-4 absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search for video, tags, folders..." />
        </div>

        <DropdownList />
      </section>
    </header>
  );
};

export default Header;
