import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  div#logo {
    display: flex;
    flex-direction: column;
    img {
      width: 12.5rem;
    }
  }

  div#info {
    display: flex;
    flex-direction: column;
    width: 30rem;
    strong {
      height: 13.5vh;
      display: flex;
      align-items: flex-end;

      text-align: center;

      font-size: 2rem;
      font-weight: bold;
    }

    article {
      display: flex;
      align-items: center;
      width: 30rem;
      height: 13vh;
      p {
        font-size: 1.25rem;
      }
    }
    div#button-bottom {
      display: flex;
      flex-direction: row;
      align-items: flex-end;

      height: 12vh;
      cursor: pointer;
      img {
        width: 1.5rem;
        margin-right: 1rem;
      }
      p {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
`;
