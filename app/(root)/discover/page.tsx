"use client";

// React/Next
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// UI
import EmptyState from "@/components/EmptyState";
import PodcastCard from "@/components/podcast-card";
import SearchBar from "@/components/SearchBar";

// Convex
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const DiscoverPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("search") || ""; // Safely retrieve the "search" parameter
  const [currentSearch, setCurrentSearch] = useState(search);

  useEffect(() => {
    setCurrentSearch(search);
  }, [search]);

  const podcastData = useQuery(api.podcasts.getPodcastBySearch, {
    search: currentSearch,
  });
  return (
    <div className="flex flex-col gap-9">
      <SearchBar />
      <div className="flex flex-col gap-9">
        <h1 className="text-white-1 text-20 font-bold">
          {!currentSearch
            ? "Discover Trending Podcasts"
            : "Search Results for: "}{" "}
          {currentSearch && (
            <span className="text-white-2">{currentSearch}</span>
          )}
        </h1>
        {podcastData ? (
          <>
            {podcastData.length > 0 ? (
              <div className="podcast_grid">
                {podcastData?.map(
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
            ) : (
              <EmptyState title="No results found..." />
            )}
          </>
        ) : (
          <EmptyState title="No results found..." />
        )}
      </div>
    </div>
  );
};

export default DiscoverPage;
