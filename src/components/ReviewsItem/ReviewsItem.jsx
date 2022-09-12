import PropTypes from 'prop-types';

const ReviewsItem = ({ reviews }) => {
    
    const { author_details: { name }, created_at, content } = reviews;

    return (
        <div>
            <div>
                <h4>{name ? name : 'Anonymus'}</h4>
                <p>| {new Date(created_at).toLocaleDateString()}</p>
            </div>
            <p>{content}</p>
        </div>
    )
};

export default ReviewsItem;

ReviewsItem.propTypes = {
    reviews: PropTypes.shape({
        author_details: PropTypes.shape({
            name: PropTypes.string.isRequired,
            // rating: PropTypes.number.isRequired,
        }),
        created_at: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }),
};