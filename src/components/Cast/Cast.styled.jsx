import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 80px;
  justify-content: center;
  list-style: none;
`;

export const Item = styled.li`
  flex-basis: 200px;
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Img = styled.img`
  margin-bottom: 5px;
  border-radius: 4px;
`;

export const Name = styled.p`
  margin-bottom: 5px;
  font-weight: 500;
`;

export const Character = styled.p`
  font-weight: 500;
`;

export const Wrapper = styled.div`
  text-align: center;
`;
