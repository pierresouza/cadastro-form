import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40vh;

  form {
    display: flex;
    flex-direction: column;

    label {
      input {
        width: 23rem;
        height: 3.75rem;
        margin: 0.25rem;
        padding: 0.75rem;
        border-radius: 0.5rem;
        border: 1px solid #dcdce5;
      }

      #campo {
        width: 28rem;
        &::placeholder {
          font-size: 1.125rem;
        }
      }
      #phone {
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
        font-weight: 700;
        color: #f0f0f5;

        cursor: pointer;
      }
    }
  }
`;
