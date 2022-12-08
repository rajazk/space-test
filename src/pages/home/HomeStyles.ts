import styled from "styled-components/macro";
import bgImage from "assets/images/bg.jpg";

export const BgImageStyle = styled.div`
  background-image: url(${bgImage});
  width: 100%;
  height: 300px;
  background-size: cover;
`;

export const Select = styled.select`
  width: 300px;
  height: 35px;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-bottom: 20px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const ProductListWrapperStyle = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const ProductListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

export const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
  button {
    background-color: #e6e4e7;
    border: none;
    padding: 15px 32px;
    font-size: 16px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }
`;
