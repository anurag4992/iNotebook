import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/Link'

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs").then((a) => {
      return a.json();
    }).then((parsed) => {
      setBlogs(parsed);
    })
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          <div key={blogItem.slug} className={styles.blogItem}>
            <Link href={`/blogPost/${blogItem.slug}`}>
              <h3>{blogItem.title}</h3></Link>
            <p>{blogItem.content.substr(0, 400)}</p>
          </div>
        })}
        <div>hello world</div>
      </main>
    </div>


  )
}

export default Blog