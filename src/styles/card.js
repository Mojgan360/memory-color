import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 150px;
  visibility: ${(props) => (props.isMatched ? "hidden" : "")};
`;

export const Wrapper = styled.div`
  width: 150px;
  height: 150px;
  position: relative;

  .front {
    transition: all ease-in 0.2s;
    transform: rotateY(90deg);
    position: absolute;
  }

  .flipped .front {
    transition-delay: 0.2s;
    transform: rotateY(0);
  }
`;

export const FrontCard = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${({ color }) => (color ? color : "")};
  border-radius: 6px;
  display: flex;
  justify-content: left;
  h3 {
  }
`;
export const BackCard = styled.div`
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;

  .flipped .back {
    transform: rotateY(90deg);
    transition-delay: 0.2s;
  }
  img {
    width: 150px;
    height: 150px;
    display: block;
    backface-visibility: hidden;
    object-fit: cover;
    cursor: pointer;
  }
`;
export const TextWrapper = styled.div`
  background-color: #ccc;
  width: 75px;
  border-bottom-right-radius: 7px;
  height: 25px;
  display: flex;
  align-items: center;
`;
