import React from 'react';
import { useAuthContext } from '@asgardeo/auth-react';

const LandingPage = () => {
  const { signIn } = useAuthContext();

  return (
    <div>
      <h1>This is the landing page</h1>
      <button onClick={() => signIn()}>Sign me in!!!</button>
    </div>
  );
};

export default LandingPage;
