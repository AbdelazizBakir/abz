import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function loginAdmin() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <>
    <div className='min-h-screen'>
        {!session ? (
          <button className="mt-28" onClick={() => signIn("github")}>GitHub Connect</button>
        ) : (
          <span>
            <span className="mt-28">{session.user.name}</span>
            {session.user.image && (
              <img
              className="mt-28"
                src={session.user.image}
                style={{ width: "50px", borderRadius: "70%" }}
              />
            )}
            <button className="mt-28" onClick={signOut}>Sign Out</button>
            </span>
        )}
    </div>
  </>
  );
}
