import React from 'react';
import {
  DividerStyled,
  DraverStyled,
  // DraverTabListStyled,
  // DraverTabStyled,
  DraverWrapperStyled,
  ExitButton,
  ExitIcon,
} from './Draver.styled';
import {
  DraverContext,
  DirectionObject,
  DraverObjectType,
} from './Draver.context';
import { Divider } from '@mui/material';
// import TabContext from '@mui/lab/TabContext';
// import TabPanel from '@mui/lab/TabPanel';
// import { RegistrationForm } from '../RegistrationForm';
// import { LoginForm } from '../LoginForm';

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

{
  /* <TabContext value={value}>
<AccountDraverTabListStyled
  onChange={handleChange}
  aria-label="Tabki"
>
  <AccountDraverTabStyled label="Rejestracja" value="1" />

  <AccountDraverTabStyled label="Logowanie" value="2" />
</AccountDraverTabListStyled>

<AccountDraverWrapperStyled>
  <TabPanel value="1">
    <RegistrationForm />
  </TabPanel>

  <TabPanel value="2">
    <LoginForm />
  </TabPanel>
</AccountDraverWrapperStyled>
</TabContext> */
}
