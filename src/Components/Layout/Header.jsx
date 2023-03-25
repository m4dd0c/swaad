import React, { useState } from 'react';
import './header.css';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Avatar, Box, Button, Spacer } from '@chakra-ui/react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <Link to="home" spy={true} smooth={true}>
        <Box className="logo-container">
          <Avatar src="./logo.png" alt="logoooo" className="avatar-itself" />
        </Box>
      </Link>
      <Spacer />
      <ul className={`navbar-ul ${isOpen && 'active'}`}>
        <li className="navbar-li">
          <Link spy={true} smooth={true} activeClass="active" to="home">
            Home
          </Link>
        </li>
        <li className="navbar-li">
          <Link spy={true} smooth={true} to="cuisine">
            Cuisine
          </Link>
        </li>
        <li className="navbar-li">
          <Link spy={true} smooth={true} to="about">
            Our Team
          </Link>
        </li>
        <li className="navbar-li">
          <Link spy={true} smooth={true} to="contact">
            Contact
          </Link>
        </li>
      </ul>
      <ColorModeSwitcher variant={'solid'} mx=".5rem" rounded={'full'} />
      <Button
        visibility={['inherit', 'hidden']}
        onClick={toggleOpen}
        variant="solid"
        rounded={'full'}
      >
        {isOpen ? <IoMdClose /> : <IoMdMenu size={'1.5rem'} />}
      </Button>
    </nav>
  );
};

export default Header;
