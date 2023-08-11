import styled from 'styled-components';

const LayoutChildrenWrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  width: 100vw;
  min-height: 300px;
  height: fit-content;
  padding: 72px 0 80px;
  margin: auto;
  margin-bottom: 400px;

  @media screen and (min-width: 600px) {
    width: 80vw;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 70vw;
  }
`;

export { LayoutChildrenWrapperStyled };
