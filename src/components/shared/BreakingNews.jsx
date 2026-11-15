import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: "Breaking News:Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News:New policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News:Sports Team Wins Championship",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 text-black px-4 py-2 container mx-auto">
      <button className="btn bg-pink-700 text-white">Latest News</button>
     <Marquee pauseOnHover={true} speed={100}>
        {news.map((item) => (
            <span key={item._id} className="mx-4">
                {item.title}
            </span>
        ))} 
     </Marquee>
    </div>
  );
};

export default BreakingNews;
