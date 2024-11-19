import React from "react";
import { Button } from "@/components/ui/button";
const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-white-1 text-20 font-bold">Trending Podcast</h1>
        <Button className="text-white-1 bg-orange-1">View All</Button>
      </section>
    </div>
  );
};

export default Home;
