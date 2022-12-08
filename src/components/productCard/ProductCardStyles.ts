import styled from "styled-components/macro";

export const ProductStyle = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 100%;
  }
`;

export const ProductBodyStyle = styled.div`
  .title {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 20px 0px;
    h5 {
      font-size: 20px;
      font-weight: 500;
    }
    p {
      font-weight: 500;
      white-space: nowrap;
    }
  }
`;

export const ButtonWrapperStyle = styled.div`
  display: flex;
  button {
    background-color: #e6e4e7;
    border: none;
    padding: 15px 32px;
    font-size: 16px;
    cursor: pointer;
    flex: 1;
  }
`;
