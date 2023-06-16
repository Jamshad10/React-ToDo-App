import { Container, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { GoSignIn } from 'react-icons/go';
import { RiTodoLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';

function Header() {

    const { user, logOut } = UserAuth()

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to='/' className='navbar-brand' style={{ fontFamily: 'cursive' }}><RiTodoLine /> Todo-List</Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {user?.displayName ? <Button variant='secondary' onClick={handleSignOut}>{user?.displayName} <FiLogOut /></Button> : <Link
                        className='navbar-text' to='/' style={{ textDecoration: 'none' }}>
                        Sign in <GoSignIn />
                    </Link>}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;