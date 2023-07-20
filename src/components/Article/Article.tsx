import React from 'react';
import { ArticleStyled } from './Article.styled';

type ArticleProps = React.PropsWithChildren<{}>;

const Article: React.FC<ArticleProps> = ({ children }) => {
  return <ArticleStyled>{children}</ArticleStyled>;
};

export { Article };
