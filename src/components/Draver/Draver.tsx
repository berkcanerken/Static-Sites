import React from 'react';
import {
  DividerStyled,
  DraverStyled,
  DraverWrapperStyled,
  ExitButton,
  ExitIcon,
} from './Draver.styled';
import { DraverContext, DirectionObject } from './Draver.context';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Draver: React.FC = () => {
  const draverContext = React.useContext(DraverContext);
  const [value, setValue] = React.useState<string>('1');

  const object = { ...draverContext?.draverObject.directionObject };
  const setObject = draverContext?.setDraverObject;
  const activedElement = Object.entries(object as DirectionObject).find(
    ([_, value]) => value === true
  ) as [keyof DirectionObject, boolean] | undefined;

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      if (setObject) {
        setObject({
          directionObject: { ...object, [anchor]: open } as DirectionObject,
          children: draverContext.draverObject.children,
        });
      }
    };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <DraverStyled
      anchor={activedElement?.[0] ?? 'right'}
      open={
        draverContext?.draverObject.directionObject[
          activedElement?.[0] ?? 'right'
        ]
      }
      onClose={toggleDrawer(activedElement?.[0] ?? 'right', false)}
    >
      <DraverWrapperStyled>
        <ExitButton
          onClick={toggleDrawer(activedElement?.[0] ?? 'right', false)}
        >
          <ExitIcon />
        </ExitButton>

        <DividerStyled />

        {draverContext?.draverObject.children}
      </DraverWrapperStyled>
    </DraverStyled>
  );
};

export { Draver };

// z jakiegośpowodu activedElemet 'zawsze jest drugą wartością anchor={activedElement?.[0] ?? 'bottom'}'
