import React from "react";
import {
	Nav,
	NavDropdown,
	Navbar,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";

const NavbarComponent = () => {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto"></Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavbarComponent;
