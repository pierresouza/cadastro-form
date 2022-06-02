import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  form {
    display: flex;
    flex-direction: column;
    height: auto;

    input {
      width: 22.5rem;
      height: 3.75rem;
      margin: 0.5rem;
      padding: 0.75rem;
      border-radius: 0.5rem;
      border: 1px solid #dcdce5;
      outline: 0;
    }

    .campo {
      width: 28rem;

      &::placeholder {
        font-size: 1.125rem;
      }
    }

    #camp {
      &::placeholder {
        font-size: 1.125rem;
      }
    }

    #uf {
      width: 4.5rem;
      &::placeholder {
        padding-left: 0.65rem;
        font-size: 1.125rem;
      }
    }

    div {
      display: flex;
      justify-content: center;
      button {
        width: 28rem;
        height: 3.75rem;
        border-radius: 0.5rem;
        border: 0;
        margin-top: 1rem;
        background-color: #e02041;
        cursor: pointer;
      }
    }
  }
`;
