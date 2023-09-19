import React from 'react';
import { AutenticationDraverStyled } from './AutenticationDraver.styled';
import {
  AutenticationDraverContext,
  BooleanObject,
} from './AutenticationDraver.context';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const AutenticationDraver: React.FC = () => {
  const autenticationDraverContext = React.useContext(
    AutenticationDraverContext
  );
  const object = autenticationDraverContext?.booleanObject;
  const setObject = autenticationDraverContext?.setBooleanObject;
  const activedElement = Object.entries(object as BooleanObject).find(
    ([_, value]) => value === true
  ) as [keyof BooleanObject, boolean] | undefined;

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
        setObject({ ...object, [anchor]: open } as BooleanObject);
      }
    };

  return (
    <AutenticationDraverStyled
      anchor={activedElement?.[0] ?? 'right'}
      open={
        autenticationDraverContext?.booleanObject[
          activedElement?.[0] ?? 'right'
        ]
      }
      onClose={toggleDrawer(activedElement?.[0] ?? 'right', false)}
    >
      <h2>panel rejestracyjny</h2>
    </AutenticationDraverStyled>
  );
};

export { AutenticationDraver };

// z jakiegośpowodu activedElemet 'zawsze jest drugą wartością anchor={activedElement?.[0] ?? 'bottom'}'
