import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  color: #fff;
  z-index: ${(props) => (props.isGameFinished ? 999 : -1)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 500px;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin: 30px 0;
  }
  span {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin: 0 20px;
    width: 300px;
    height: 200px;
    object-fit: contain;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    border: 1px solid #fff;
  }
  h2 {
    margin: 0 20px;
    color: ${({ theme }) => theme.colors.orange};
  }
`;
