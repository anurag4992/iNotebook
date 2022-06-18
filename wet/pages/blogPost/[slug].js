import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const slug = () => {
    const router=useRouter();
    const {slug}=router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>This is my blog bill bol bill {slug}</h1>
      <hr />
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate placeat magni, eos inventore dolores illo, hic minima, amet dignissimos tenetur fugiat veniam. Autem perspiciatis blanditiis ipsa earum magni debitis suscipit.
      </div>
      </main>

    </div>
  )
}

export default slug;