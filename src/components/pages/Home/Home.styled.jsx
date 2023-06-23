import styled from 'styled-components';

export const Container = styled.div`
  // display: grid;
  // grid-template-columns: repeat(auto-fit, 200px);
  // gap: 16px;
  padding: 0 15px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
export const Name = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
