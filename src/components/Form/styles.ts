import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  border: 1px solid #ff0000;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    border: 1px solid #ff0000;

    input {
      width: 22rem;
      height: 3.75rem;
      padding: 0.75rem;
      margin: 0.75rem;
      border-radius: 1rem;
      border: 1px solid;
      outline: 0;
    }

    #uf {
      width: 4.5rem;
    }

    #campo {
      width: 28rem;
    }

    div {
      justify-content: center;
      button {
        width: 28rem;
      }
    }
  }
`;
