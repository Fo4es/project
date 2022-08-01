export default function MoviesListCard({movie}){
    //console.log(movie)
    const {original_title} = movie
    return(
        <div>
            <div>{original_title}</div>
        </div>
    );
}