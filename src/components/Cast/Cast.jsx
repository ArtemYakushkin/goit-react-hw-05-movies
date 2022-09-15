import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ActorsList, ActorsItem, NoData } from "./Cast.styled";
import movieApi from "services/movieApi";
import CastActors from "components/CastActors/CastActors";

const Cast = () => {

    const [movieCast, setMovieCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        movieApi.getCast(movieId).then(data => setMovieCast(data.cast))
    }, [movieId]);

    return (
        <div>
            {movieCast && movieCast.length ? (
                <ActorsList>
                    {movieCast.map(item => (
                        <ActorsItem key={item.id}>
                            <CastActors cast={item} />
                        </ActorsItem>
                    ))}
                </ActorsList>
            ) : (
                <NoData>No data</NoData>
            )}
        </div>
    )
};

export default Cast;