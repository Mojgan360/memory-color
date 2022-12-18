import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 0;
  h3 {
    letter-spacing: 1px;
    padding: 0 30px;
  }
  h3:nth-child(1) {
    border-right: 3px solid #fff;
  }
`;
