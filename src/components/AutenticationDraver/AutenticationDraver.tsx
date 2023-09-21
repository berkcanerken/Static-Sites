import React from 'react';
import {
  AutenticationDraverStyled,
  AuthenticationDraverTabListStyled,
  AuthenticationDraverTabStyled,
  AuthenticationDraverWrapperStyled,
} from './AutenticationDraver.styled';
import {
  AutenticationDraverContext,
  BooleanObject,
} from './AutenticationDraver.context';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { RegistrationForm } from '../RegistrationForm';
import { LoginForm } from '../LoginForm';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const AutenticationDraver: React.FC = () => {
  const autenticationDraverContext = React.useContext(
    AutenticationDraverContext
  );
  const [value, setValue] = React.useState<string>('1');

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

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
      <AuthenticationDraverWrapperStyled>
        <TabContext value={value}>
          <AuthenticationDraverTabListStyled
            onChange={handleChange}
            aria-label="Tabki"
          >
            <AuthenticationDraverTabStyled label="Rejestracja" value="1" />

            <AuthenticationDraverTabStyled label="Logowanie" value="2" />
          </AuthenticationDraverTabListStyled>

          <AuthenticationDraverWrapperStyled>
            <TabPanel value="1">
              <RegistrationForm />
            </TabPanel>

            <TabPanel value="2">
              <LoginForm />
            </TabPanel>
          </AuthenticationDraverWrapperStyled>
        </TabContext>
      </AuthenticationDraverWrapperStyled>
    </AutenticationDraverStyled>
  );
};

export { AutenticationDraver };

// z jakiegośpowodu activedElemet 'zawsze jest drugą wartością anchor={activedElement?.[0] ?? 'bottom'}'
