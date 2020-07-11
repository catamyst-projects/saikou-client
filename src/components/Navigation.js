import React from 'react'
import styled from '@xstyled/styled-components'
import { Link } from 'react-router-dom'

const Logo = styled.p`
  font-family: title;
  font-size: 50;
  color: primary;
  margin: 0;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 30;
`

const SubNav = styled.div`
  display: flex;
  align-items: center;
`
const NavLink = styled(Link)`
  font-family: title;
  font-size: 30;
  margin: 0 15;
  text-decoration: none;
  color: darkFont;
`

const Navigation = () => {
  return (
    <Nav>
      <SubNav>
        <NavLink to="/">
          <Logo>Saikou!</Logo>
        </NavLink>
      </SubNav>
      <SubNav>
        <NavLink to="/anime">Anime</NavLink>
        <NavLink to="/manga">Manga</NavLink>
      </SubNav>
      <SubNav>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </SubNav>
    </Nav>
  )
}

export default Navigation
