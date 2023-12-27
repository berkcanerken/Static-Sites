import React from 'react';
import { BreadcrumbsStyled } from './Breadcrumbs.styled';
import { InsideLink } from '../InsideLink';
import HomeIcon from '@mui/icons-material/Home';

const Breadcrumbs: React.FC = () => {
  const [currentPath, setCurrentPath] = React.useState<string>('');

  React.useEffect((): void => {
    const currentUrl = window.location;
    const path = currentUrl.pathname;

    setCurrentPath(path);
  }, []);

  const pathChunks = (path: string): string[] => {
    const resolvedPath = path.split('/').filter((chunk) => chunk !== '');

    return resolvedPath;
  };

  const fullPaths = (givenIndex: number): string => {
    const resolvedPaths = pathChunks(currentPath).filter(
      (_, index) => index <= givenIndex
    );

    return '';
  };

  console.log('dupa', fullPaths(0));

  return (
    <BreadcrumbsStyled>
      <InsideLink borderRadius="6" padding="0 10" hyperLink="/">
        <HomeIcon />
      </InsideLink>

      {pathChunks(currentPath).map((url) => {
        const nameFromUrl = url.replace(/-/g, ' ');

        return (
          <InsideLink borderRadius="6" padding="0 10" hyperLink={url}>
            {nameFromUrl}
          </InsideLink>
        );
      })}
    </BreadcrumbsStyled>
  );
};

export { Breadcrumbs };
