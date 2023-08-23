import { styled } from 'styled-components';

export const LiElem = styled.li`
  display: flex;
  background-color: #9e9e9e;
  margin-bottom: 5px;
  span {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .online {
    background-color: lightgreen;
  }
  .offline {
    background-color: red;
  }
`;
