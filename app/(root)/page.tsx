import React from "react";
import { podcastData } from "@/constants";
import PodcastCard from "@/components/podcast-card";
const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-white-1 text-20 font-bold">Trending Podcast</h1>
        <div className="podcast_grid">
          {podcastData.map(({ id, title, description, imgURL }) => (
            <PodcastCard
              key={id}
              title={title}
              description={description}
              imgUrl={imgURL}
              podcastId={id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
