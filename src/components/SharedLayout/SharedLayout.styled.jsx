import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 0px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 15px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.20)
   -webkit-box-shadow: 0px 3px 5px -1px rgba(34, 60, 80, 0.6);
   -moz-box-shadow: 0px 3px 5px -1px rgba(34, 60, 80, 0.6);
   box-shadow: 0px 3px 5px -1px rgba(34, 60, 80, 0.6);

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size:20px;

  &.active {
    color: orangered;   
  }
`;
