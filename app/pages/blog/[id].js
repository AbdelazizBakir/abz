import React from "react"

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=9"
  );
  const data = await res.json();
  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const data = await res.json();

  return { props: { post: data } };
};

/*<div className="grid grid-cols-span-10 bg-gray-100 mx-10 mt-20">
      <h2  className='flex justify-center items-center'>{post.title}</h2>
      <hr />
      <p  className='flex justify-center items-center h-screen p-2'>{post.body}</p>
    </div>*/

const Post = ({ post }) => {
  return (
    <>
    <dev className="flex-center items-center selection:mt-10 align-middle max-w-screen px-2 sm:mt-12 sm:px-4 xl:md:mt-16 md:mt-20">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{post.title}</span>
        </h1>
        <p className="flex justify-center text-justify mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-screen sm:mx-auto md:mt-5 md:text-md md:mx-0">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
    </dev>
      <img
      className="w-full object-cover sm:h-72 sm:p-2 sm:w-full md:h-full shadow-sm border-2 border-gray-300 rounded-3xl md:relative md:inset-y-0 md:right-0 md:w-1/2"
      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
      alt=""
      />
</>
  );
};

export default Post;
