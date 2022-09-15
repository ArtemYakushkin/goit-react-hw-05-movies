import PropTypes from 'prop-types';
import { Image, ActorName, ActorCharacter } from './CastActors.styled';

import { IMAGE_URL } from "services/movieApi";
import defaultImage from "../../images/default-user.png";

const CastActors = ({ cast }) => {

    const { character, original_name, profile_path } = cast;
    const fullImgUrl = `${IMAGE_URL}${profile_path}`;
    const imageUrl = profile_path ? fullImgUrl : defaultImage;

    return (
        <div>
            <Image src={imageUrl} alt={original_name} />
            <ActorName>{original_name}</ActorName>
            <ActorCharacter>{character}</ActorCharacter>
        </div>
    )
};

export default CastActors;

CastActors.propTypes = {
    cast: PropTypes.shape({
        character: PropTypes.string.isRequired,
        original_name: PropTypes.string.isRequired,
    })
};