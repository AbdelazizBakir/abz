import { getProviders, getSession, signIn } from "next-auth/react";
import styles from '../styles/Home.module.css'
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        permanent: true,
        destination: "/signin",
      },
    };
  }
  return {
    props: {
      providers: await getProviders(context),
    },
  };
}
const Login = (e) => {
  signIn(e.target.credentialsID.value, {
    username: e.target.username.value,
    password: e.target.password.value,
  });
};
function signin({ providers }) {
  return (
<section className="h-screen">
  <div className="px-6 h-full text-gray-800">
    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
      <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
        <Image src="/atlas.png" className="w-full" width={600} height={440} alt="logo d'atlas" />
      </div>
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form method="POST" onSubmit={Login}>
          <div className="mb-6">
          <input
          type="hidden"
          name="credentialsID"
          value={providers.credentials.id}/>
            <input
              type="text"
              name="username"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="username"
              placeholder="Bakir"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="password"
              placeholder="Mot de passe"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <Link href="/contact"><a className="text-gray-800 left-0">Mot de passe oublié?</a></Link>
          </div>
          <div className="text-center lg:text-left">
            <button
              type="submit"
              className="inline-block px-7 py-3 bg-blue-600 hover:bg-amber-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out"
            >
              Connexion
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
  );
}

export default signin;