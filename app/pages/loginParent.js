// pages/login.js
import { useUser } from '@auth0/nextjs-auth0';

export default function Index() {

    return (
      <div className='mt-28'>
         <a  href="/api/auth/logout">Logout</a>
         <a className='mt-28' href="/api/auth/login">login</a>
         
      </div>
    );
  }
