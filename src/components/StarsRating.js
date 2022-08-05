import StarRatings from "react-star-ratings";

export default function StarsRating({vote}){
    return(
        <div>
            <StarRatings

                rating={vote}
                numberOfStars={10}
                starDimension="20px"
                starSpacing="10px"
                starRatedColor='rgb(255, 239, 18)'
            />
        </div>
    );
}