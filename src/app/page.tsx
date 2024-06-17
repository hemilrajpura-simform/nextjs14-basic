"use client";
import TopicCard from "./component/TopicCard";
import { TopicDetails } from "./utils/TopicsData";

export default function Component() {
  return (
    <div className="flex flex-wrap gap-4">
      {TopicDetails.map((topic) => {
        return (
          <TopicCard
            key={topic.cardHeader}
            CardDesc={topic.cardDesc}
            CardHeader={topic.cardHeader}
            cardImageLink={topic.cardImage}
            CardLink={topic.CardLink}
          />
        );
      })}
    </div>
  );
}
