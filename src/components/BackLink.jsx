import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  width: 110px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 4px;
  padding: 8px 0px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  border: 1px solid #80808008;
  border-radius: 10px;
  margin-bottom: 20px;
  border-shadow: gba(34, 60, 80, 0.6) 0px 3px 5px -1px;
  box-shadow: rgb(255 255 255) 0px 0px 10px 4px;

  :hover {
    color: white;
    background: orangered;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
