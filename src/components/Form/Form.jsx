
import PropTypes from 'prop-types';
import { MdOutlineSearch } from "react-icons/md"
import { useState } from 'react';
import { FormMovies, BtnSearch, InputSearch } from './Form.styled';

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
            <FormMovies onSubmit={handleSubmit}>
                <BtnSearch type="submit">
                    <MdOutlineSearch size={25} />
                    Search
                </BtnSearch>
                <InputSearch
                    type="text"
                    name='searchRequest'
                    value={searchRequest}
                    onChange={handleRequestChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                />
            </FormMovies>
        </div>
    );
};

export default Form;

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};