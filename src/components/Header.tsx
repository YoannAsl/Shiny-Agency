import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/survey/42'>Survey</Link>
            <Link to='/freelances'>Freelances</Link>
        </nav>
    );
};

export default Header;
