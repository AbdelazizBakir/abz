import React from 'react'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=7'
  )
  const data = await res.json()

  return {
    props: { posts: data }
  }
}

const Blog = ({ posts }) => {
  return (
    <>
    <div className='max-w-2xl font-bold text-3xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1>Blog de l'atlas</h1>
        <hr />
    </div>
    <div className='flex justify-center items-center min-h-screen m-2'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {posts.map((post) => (
          <div className='flex justify-center items-center' key={post.id}>
            <div className='w-full items-baseline aspect-w-1 aspect-h-1 border-2 shadow-lg bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
              <img
                src={`https://source.unsplash.com/720x400/?${post.id}`}
                className='w-full h-full object-center object-cover group-hover:opacity-90'
                alt='image de blog' />
              <div className='mt-4 text-sm text-gray-700'>
                <h5 className='flex justify-center items-center'> {post.title} </h5>
                <Link href={`/blog/${post.id}`}>
                  <a className='flex justify-center items-center m-1 text-lg font-medium text-gray-900'>Titre de blog</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}



/*
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  */

export default Blog
