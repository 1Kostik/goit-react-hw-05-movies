import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
  @media (min-width: 1199px) {
    justify-content: space-between;
    gap: 20px;
  }
  padding: 0;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
   gap: 30px;
`;

export const MovieItem = styled.li`
  @media (min-width: 768px) {
    flex-basis: calc((100% - 100px) / 2);
  }
  @media (min-width: 1199px) {
    flex-basis: calc((100% - 100px) / 5);
  }
  max-height: 100%;
  min-height: 390px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 3px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
  transition: all 200ms ease-in-out;
  :hover {
    box-shadow: 0px 0px 10px orangered, 3px 3px 5px rgba(0, 0, 0, 0.1);
    transition: all 200ms ease-in-out;
    transform: scale(1.03);
    cursor: pionter;
  }
`;

export const MovieLink = styled(Link)`
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  text-decoration: none;
  &:hover img {
    filter: grayscale(0);
  }

  &:hover p {
    color: orangered;
  }

  color: currentColor;
`;

export const MovieImg = styled.img`
  margin-bottom: 5px;
  filter: grayscale(0.4);
  transition: all 200ms ease-in-out;
  :hover {
    transform: scale(1.03);
    cursor: pionter;
  }
`;

export const MovieName = styled.p`
  height: 100%;
  padding: 10px 8px;
  font-weight: 500;
  font-size: 18px;
  transition: all 200ms ease-in-out;
`;
