import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

// firebase stuff
import firebase from "firebase/app"
import { auth } from '../firebase-init';
import { useAuthState } from 'react-firebase-hooks/auth'

interface Props {
}


// the navigation bar -- will deal with the firebase stuff as well
export const MyNavbar = (props: Props) => {

    // user from useAuthState will give the current logged in user or null
    const [user] = useAuthState(auth);

    // two functions for logging in and logging out, only required in navbar
    function login() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    function logout() {
        auth.signOut();
    }

    // navbar will have login/logout, a path to / and a search bar that will redirect to a query
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
