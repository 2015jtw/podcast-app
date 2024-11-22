"use client";

import React from "react";
import { podcastData } from "@/constants";
import PodcastCard from "@/components/podcast-card";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Home = () => {
  const tasks = useQuery(api.tasks.get);

  return (
    <div className="mt-9 flex flex-col gap-9">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {tasks?.map(({ _id, text }) => (
          <div key={_id} className="text-white-1">
            {text}
          </div>
        ))}
      </main>

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
