import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import firebase from "firebase/app"
import { auth } from '../firebase-init';
import { useAuthState } from 'react-firebase-hooks/auth'

interface Props {

}



export const MyNavbar = (props: Props) => {

    const [user] = useAuthState(auth);

    function login() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    function logout() {
        auth.signOut();
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Event</Navbar.Brand>
            <Nav className="mr-auto">
                {user
                ?
                    <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
                :
                    <Nav.Link onClick={() => login()}>Login</Nav.Link>
                }
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}
