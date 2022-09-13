
import PropTypes from 'prop-types';
// import { MdOutlineSearch } from "react-icons/md"
import { useState } from 'react';

const Form = ({onSubmit}) => {

    const [searchRequest, setSearchRequest] = useState('');

    const handleRequestChange = event => {
        setSearchRequest(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(searchRequest);
        setSearchRequest('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit">
                    {/* <MdOutlineSearch size={20} /> */}
                    Search
                </button>
                <input
                    type="text"
                    name='searchRequest'
                    value={searchRequest}
                    onChange={handleRequestChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </div>
    );
};

export default Form;

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};