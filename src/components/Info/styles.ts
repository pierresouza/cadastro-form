import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  div.content {
    width: 35rem;
    height: 23.5rem;
    div#top {
      display: flex;
      flex-direction: column;
      img {
        width: 200px;
      }
      strong {
        display: flex;
        align-items: flex-end;
        height: 8.5rem;

        text-align: center;

        font-size: 2rem;
        font-weight: bold;
      }
    }

    div#info {
      display: flex;
      width: 30rem;
      align-items: center;
      height: 5.75rem;
      p {
        font-size: 1.25rem;
      }
    }

    div#bottom {
      display: flex;
      align-items: flex-end;

      width: 30rem;
      height: 8rem;
      img {
        margin-right: 1rem;
      }
      p {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
`;
