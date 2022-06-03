import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  form {
    display: flex;
    flex-direction: column;

    label {
      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }
      input {
        width: 22.5rem;
        height: 3.75rem;
        margin: 0.5rem;
        padding: 0.75rem;
        border-radius: 0.5rem;
        border: 1px solid #dcdce5;
      }

      .campo {
        width: 28rem;
        &::placeholder {
          font-size: 1.125rem;
        }
      }
      div {
        display: flex;
        justify-content: flex-start;
        width: 20rem;
        span {
          padding-left: 0.75rem;
          color: red;
        }
      }

      #camp {
        &::placeholder {
          font-size: 1.125rem;
        }
      }

      #uf {
        width: 4.5rem;
        text-align: center;
        &::placeholder {
          font-size: 1.125rem;
        }
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
        margin-top: 0.5rem;
        background-color: #e02041;
        cursor: pointer;
      }
    }
  }
`;
