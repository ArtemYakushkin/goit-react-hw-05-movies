import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
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
                <ul>
                    {movieCast.map(item => (
                        <li key={item.id}>
                            <CastActors cast={item} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No data</p>
            )}
        </div>
    )
};

export default Cast;