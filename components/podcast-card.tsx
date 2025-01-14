import Image from "next/image";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { PodcastCardProps } from "@/types";
import { useRouter } from "next/navigation";

const PodcastCard = ({
  podcastId,
  title,
  imgUrl,
  description,
}: PodcastCardProps) => {
  const router = useRouter();

  const handleViews = () => {
    router.push(`/podcasts/${podcastId}`, {
      scroll: true,
    });
  };

  return (
    <div className="cursor-pointer" onClick={handleViews}>
      <figure className="flex flex-col gap-2">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
        <div className=" flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
