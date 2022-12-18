import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 15px;

  font-size: ${({ isBig }) => (isBig ? "18px" : "14px")};
  width: ${({ isBig }) => (isBig ? "400px" : "250px")};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  border: none;
  cursor: pointer;
  transition: background-color 150ms;
  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    h3 {
      letter-spacing: 1px;
    }
  }
`;
