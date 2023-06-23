import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const WrapperContainer = styled.section`
    padding: 0px 15px;
    max-width: 100vw;
`;

export const WrapperMain = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapperText = styled.div`
  height: 480px;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  justify-content: space-between;
`;
export const WrapperAddInfo = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;
  h2 {
    font-size: 35px;
    margin-bottom: 20px;
  }
`;
export const AddInfo = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin-bottom: 20px;
`;
export const AddInfoName = styled.li`
  border: 1px solid gray;
  border-radius: 5px;
  width: 100px;
  text-align: center;
  border-shadow: gba(34, 60, 80, 0.6) 0px 3px 5px -1px;
  box-shadow: rgb(255 255 255) 0px 0px 10px 4px;

  :hover {
    background: orangered;
    a {
      color: white;
    }
  }
`;
export const InfoLink = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  font-weight: 600;
  &:hover {
    color: #6a9bd8;
  }
  color: currentColor;
`;
export const OverviewText = styled.p`
  max-width: 800px;
  font-weight: 400;
  font-size: 20px;
`;
export const Title = styled.h2`
  font-size: 40px;

`;
export const Another = styled.h2`
  font-weight: 600;
  font-size: 30px;
 
`;
export const TextGenre = styled.li`
  font-weight: 600;
  font-size: 20px;
  list-style:none;
  margin-bottom:10px;
`;
