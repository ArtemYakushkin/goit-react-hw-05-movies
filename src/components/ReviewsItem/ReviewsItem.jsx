import PropTypes from 'prop-types';
import { ContainerTitle, Username, Created, Text } from './ReviewsItem.styled';

const ReviewsItem = ({ reviews }) => {
    
    const { author_details: { name }, created_at, content } = reviews;

    return (
        <div>
            <ContainerTitle>
                <Username>{name ? name : 'Anonymus'}</Username>
                <Created>| {new Date(created_at).toLocaleDateString()}</Created>
            </ContainerTitle>
            <Text>{content}</Text>
        </div>
    )
};

export default ReviewsItem;

ReviewsItem.propTypes = {
    reviews: PropTypes.shape({
        author_details: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }),
        created_at: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }),
};