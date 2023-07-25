import styled from 'styled-components';

const ArticleStyled = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  width: 100vw;
  min-height: 300px;
  height: fit-content;
  margin: auto;
  margin-bottom: 400px;

  @media screen and (min-width: 1024px) {
    width: 70vw; 
  }
`;

export { ArticleStyled };
