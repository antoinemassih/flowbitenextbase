import React, { FC } from "react";
import { Rating, RatingStar } from "flowbite-react";


export default function MyRatingStars (){
  return(
    <RatingStars></RatingStars>
  )
}


const RatingStars: FC = function () {
  return (
    <div className="flex flex-col justify-center gap-4">
      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          4.95 out of 5
        </p>
      </Rating>

    </div>
  );
};

