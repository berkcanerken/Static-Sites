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

  return (
    <BreadcrumbsStyled>
      <InsideLink borderRadius="6" padding="0 10" hyperLink="/">
        <HomeIcon />
      </InsideLink>

      {pathChunks(currentPath).map((url, index, array) => {
        const nameFromUrl = url.replace(/-/g, ' ');
        const prefix = array.filter((_, indentifier) => indentifier < index);
        const currentUrl = `/${[...prefix, url].join('/')}`;

        return (
          <InsideLink
            borderRadius="6"
            padding="0 10"
            hyperLink={currentUrl}
            fontSize={13}
          >
            {nameFromUrl}
          </InsideLink>
        );
      })}
    </BreadcrumbsStyled>
  );
};

export { Breadcrumbs };
