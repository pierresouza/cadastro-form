import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div.content {
    border: 1px solid #ff0000;
    height: 45%;
    display: flex;
    flex-direction: column;
    div#top-info {
      width: 30rem;
      padding-bottom: 0 2rem;
      display: flex;
      flex-direction: column;

      img {
        width: 16rem;
      }

      strong {
        font-size: 1.75rem;
      }
    }

    div#bottom-info {
      display: flex;
      flex-direction: column;
      width: 30rem;

      img {
        width: 1.5rem;
      }

      p {
        font-size: 1.125rem;
      }
    }
    div#teste {
      display: flex;
      width: 30rem;
      padding-top: 1rem;
      img {
        margin-right: 1rem;
      }
      p {
        padding: 0.25rem;
        font-weight: bold;
        font-size: 1.125rem;
      }
    }
  }
`;
