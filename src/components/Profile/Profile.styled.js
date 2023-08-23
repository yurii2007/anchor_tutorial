import { styled } from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-shadow: 0px 4px 10px 4px #9e9e9e;
  border-radius: 10px;
  background-color: #9e9e9e;
  width: 600px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
`;

export const UlElem = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  padding: 0;
`;

export const LiElem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #f2f2f2;
  width: calc(100% / 3);
  text-align: center;
  font-size: 20px;
`;
