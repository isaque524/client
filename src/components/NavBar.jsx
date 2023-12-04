import{ Container,Nav, Navbar, Stack} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext";
import Notification from "./chat/Notification";

const NavBar = () =>{

    const { user, logoutUser } = useContext(AuthContext);

    return (
        <Navbar bg="dark" className="mb-4" style={{ height: "3.75rem", backgroundImage: 'linear-gradient(-91deg, #000000 0%, #434343 100%)' }}>
            <Container>
                <h2>
                    <Link to="/" className="link-light text-decoration-none" >PFC | CHAT</Link>
                </h2>
                {user && <span  style={{ color: "#2980b9"  }} >Logado como {user?.name}</span>}
                <Nav>
                    <Stack direction="horizontal" gap={3}>
                        {user &&(
                            <>
                            <Notification/>
                            <Link onClick={() => logoutUser()} to="/login" className="link-light text-decoration-none">
                        Deslogar
                        </Link>
                            </>
                        )}
                        {!user && (<>
                            <Link to="/login" className="link-light text-decoration-none">
                        Login
                        </Link>
                        <Link to="/cadastro" className="link-light text-decoration-none">
                        Cadastro
                        </Link>
                        </>
                        )}
                    </Stack>
                </Nav>
            </Container>
        </Navbar>
    
    );
};

export default NavBar;