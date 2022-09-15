import { Audio } from 'react-loader-spinner';
import { SpinnerContainer } from './Loader.styled';

const Loader = () => {
    return (
        <SpinnerContainer>
            <Audio height="80" width="80" radius="9" color='#ff6500' ariaLabel='three-dots-loading' />
        </SpinnerContainer>
    )
};

export default Loader;