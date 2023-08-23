import { styled } from 'styled-components';

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Випадкова компонента Red (0-255)
  const g = Math.floor(Math.random() * 256); // Випадкова компонента Green (0-255)
  const b = Math.floor(Math.random() * 256); // Випадкова компонента Blue (0-255)

  return `rgb(${r}, ${g}, ${b})`;
}

export const Section = styled.section`
  text-align: center;
`;

export const UlElem = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const LiElem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 4);
  gap: 5px;
  background-color: ${getRandomColor};
`;
