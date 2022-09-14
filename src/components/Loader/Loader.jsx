import { Audio } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div>
            <Audio height="80" width="80" radius="9" color='#ffffff' ariaLabel='three-dots-loading' />
        </div>
    )
};

export default Loader;