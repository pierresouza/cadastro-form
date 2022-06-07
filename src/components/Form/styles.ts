import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40vh;
  form {
    display: flex;
    flex-direction: column;
    input {
      margin: 0.25rem;
      border: 1.5px solid #dcdce6;
      border-radius: 0.5rem;
      padding: 1rem;
      &::placeholder {
        color: #a8a8b3;
        font-size: 1.125rem;
      }
    }
  }
`;

export const NameInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    width: 28rem;
    height: 3.75rem;
  }
  label {
    display: flex;
    flex-direction: column;
    span {
      color: #ff0000;
      padding-left: 1.25rem;
    }
  }
`;

export const EmailInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    width: 28rem;
    height: 3.75rem;
  }
  label {
    display: flex;
    flex-direction: column;
    span {
      color: #ff0000;
      padding-left: 1.25rem;
    }
  }
`;
export const NumberInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    width: 28rem;
    height: 3.75rem;
  }
  label {
    display: flex;
    flex-direction: column;
    span {
      color: #ff0000;
      padding-left: 1.25rem;
    }
  }
`;
export const CityInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input#uf {
    width: 4.5rem;
    height: 3.75rem;

    text-align: center;
    &::placeholder {
      font-size: 1.125rem;
    }
  }

  input#city {
    width: 23rem;
    height: 3.75rem;
  }
  span {
    color: #ff0000;
    padding-left: 1.25rem;
  }
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  button {
    width: 28rem;
    height: 3.75rem;
    border: 0;
    border-radius: 0.5rem;
    background-color: #e02041;
    color: #f0f0f5;
    font-weight: 700;
    font-size: 1.125rem;
    margin-top: 0.5rem;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
`;
