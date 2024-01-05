import { flattedArrayOfUrl } from './AdministrationPanelLayout.data';

const getValueFromPath = (path: string): number => {
  return flattedArrayOfUrl.indexOf(path);
};

export { getValueFromPath };
