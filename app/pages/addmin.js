import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
export default function Addmin() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="mt-36">
        <h1>
          You&apos;re Logged In As{` ${session.user.username}`}
          <button onClick={signOut}>Sign Out</button>
        </h1>
      </div>
    );
  } else if (!session) {
    return (
      <div className="mt-36">
        <h1>
          You&apos;re Not Logged In
          <button onClick={signIn}>Sign In</button>
        </h1>
      </div>
    );
  }
}