import React from 'react'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=4'
  )
  const data = await res.json()

  return {
    props: { posts: data }
  }
}

const Blog = ({ posts }) => {
  return (
    <div className='container pt-4'>
      <div className='row'>
        <h1>Blog</h1>
        <hr />
      </div>
      <div className='row'>
        {posts.map((post) => (
          <div className='col-12 col-md-47' key={post.id}>
            <div className="card mb-4">
              <img
                src={`https://source.unsplash.com/720x400/?${post.id}`}
                className='card-img-top'
                alt='une image de blog'
              />
              <div className='card-body'>
                <h5 className='card-title'> {post.title} </h5>
                <Link href={`/blog/${post.id}`}>
                  <a className='btn btn-primary'>titre de blog</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
