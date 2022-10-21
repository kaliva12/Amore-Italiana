import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark className='dark' sticky='top' expand='md'>
            <NavbarBrand className='ms-1' href='/'>
                    <h5>469-672-6292 &nbsp; 
                        <SocialIcon url="https://www.facebook.com/amoreitalianatx" /> &nbsp;
                      
                    </h5>
                    
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>

                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                        <i className='fa fa-home fa-lg'/> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/directory'>
                        <i className='fa fa-list fa-lg'/> Location
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                        <i className='fa fa-info fa-lg'/> About
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;