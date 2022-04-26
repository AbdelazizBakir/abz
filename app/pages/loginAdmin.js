// pages/index.js
import { useUser } from '@auth0/nextjs-auth0';

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a className='mt-28' href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a className='mt-28' href="/api/auth/login">Login</a>;
}
