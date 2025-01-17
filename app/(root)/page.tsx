"use client";

import React from "react";
// import { podcastData } from "@/constants";
import PodcastCard from "@/components/podcast-card";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const Home = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-white-1 text-20 font-bold">Trending Podcast</h1>
        <div className="podcast_grid">
          {trendingPodcasts?.map(
            ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
              <PodcastCard
                key={_id}
                title={podcastTitle}
                description={podcastDescription}
                imgUrl={imageUrl!}
                podcastId={_id}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
