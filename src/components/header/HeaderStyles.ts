import styled from "styled-components/macro";

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 20px auto;
  h3 {
    border: 2px solid #9479ff;
    padding: 5px;
    span {
      vertical-align: super;
      font-size: 14px;
    }
  }
`;
