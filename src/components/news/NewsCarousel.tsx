import { Carousel } from "components/common";
import { useGetNewsItemsQuery } from "generated/mockGraphql";
import React from "react";
import { NewsCard } from "components/news";

export interface NewsCarousel {
  limit: number;
}

export function NewsCarousel({ limit }: NewsCarousel) {
  const { data: news, isLoading } = useGetNewsItemsQuery({ limit });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return <div></div>;
}
