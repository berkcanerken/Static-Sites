const strapiUrl = process.env.STRAPI_URL;

type SignInCredentialsType = {
  email: string;
  password: string;
}

type SignInResponseType = {
  jwt: string;
  user: {
    id: string;
    username?: string;
    email?: string;
  };
};

type SignUpCredentialsType = {
  username: string;
  email: string;
  password: string;
}

const signIn = async ({ email, password }: SignInCredentialsType): Promise<SignInResponseType> => {
  const response = await fetch(`${strapiUrl}/api/auth/local`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier: email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data = await response.json();

  return data;
}

const signUp = async ({ email, password, username }: SignUpCredentialsType): Promise<SignInResponseType> => {
  const response = await fetch(`${strapiUrl}/api/auth/local/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      identifier: email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data = await response.json();

  return data;
}

export { signIn, signUp };