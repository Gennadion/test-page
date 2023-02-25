import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
import HeaderLogo from '../../images/fxbox.png';
import HeaderLogoWh from '../../images/fxbox-wh.png'

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#000')};
  height: 80px;
  margin-top: -80px;
  margin-left: ${({scrollNav}) => (scrollNav ? '0' : 'auto')};
  margin-right: ${({scrollNav}) => (scrollNav ? '0' : 'auto')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 990;
  transition: all 0.4s ease-in-out;
  box-shadow: ${({ scrollNav }) => (scrollNav ? '0px 0px 5px 1px black' : 'transparent')};

  &.a {
    color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#000')};
  }
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    background: #000000;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 100%;
`;

export const NavLogo = styled.a`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 4rem;
  display: flex;
  align-items: center;
  margin-left: 0;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 5px 5px 10px black;

  img {
    //content: url(${({scrollNav}) => (scrollNav ? HeaderLogoWh : HeaderLogo)});
    max-width: 100%;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000000;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`

  font-size: 1.8rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #0091FF;
    transition: all 0.2s ease-in-out;
  }

  &.active {
    border-bottom: 1px solid #0091FF;
    color: #0091FF;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #03045E;
  white-space: nowrap;
  padding: 10px 22px;
  color: #ffffff;
  font-size: 1.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0091FF;
    box-shadow: 0px 0px 0px 1px #f2f2f2;
  }
`;


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [changeImg, setChangeImg] = useState(HeaderLogo);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
      setChangeImg(HeaderLogoWh);
    } else {
      setScrollNav(false);
      setChangeImg(HeaderLogo);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
            <img src={changeImg} alt="icon" width="180rem"/>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='collect'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Collect
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='HowToEarn'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  How To Earn
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='features'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Features
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='lucky'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Lucky Box
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='token'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Tokenomics
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='roadmap'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Roadmap
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin'>Sign in</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
