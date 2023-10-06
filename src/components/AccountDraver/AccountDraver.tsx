import React from 'react';
import {
  AccountDraverStyled,
  AccountDraverTabListStyled,
  AccountDraverTabStyled,
  AccountDraverWrapperStyled,
  AccountExitButton,
  AccountExitIcon,
} from './AccountDraver.styled';
import { AccountDraverContext, BooleanObject } from './AccountDraver.context';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { RegistrationForm } from '../RegistrationForm';
import { LoginForm } from '../LoginForm';
import { defaultTheme } from '@/providers/ThemeProvider';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const AccountDraver: React.FC = () => {
  const AccountContext = React.useContext(AccountDraverContext);
  const [value, setValue] = React.useState<string>('1');

  const object = AccountContext?.booleanObject;
  const setObject = AccountContext?.setBooleanObject;
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
    <AccountDraverStyled
      anchor={activedElement?.[0] ?? 'right'}
      open={AccountContext?.booleanObject[activedElement?.[0] ?? 'right']}
      onClose={toggleDrawer(activedElement?.[0] ?? 'right', false)}
    >
      <AccountDraverWrapperStyled>
        <AccountExitButton
          onClick={toggleDrawer(activedElement?.[0] ?? 'right', false)}
        >
          <AccountExitIcon />
        </AccountExitButton>

        <TabContext value={value}>
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
        </TabContext>
      </AccountDraverWrapperStyled>
    </AccountDraverStyled>
  );
};

export { AccountDraver };

// z jakiegośpowodu activedElemet 'zawsze jest drugą wartością anchor={activedElement?.[0] ?? 'bottom'}'
