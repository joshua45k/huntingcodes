import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroller';


 //www.freeformatter.com/json-escape.html#before-output

const Blog = (props) => {
    console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
//   useEffect(() => {
    
//   }, [])

  return <div className={styles.container}>
        <main className={styles.main}>
            {blogs.map((blogitem) => {
                return <div key={blogitem.slug}>
                    <Link href={`/blogpost/${blogitem.slug}`}>
                        <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
                    <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 140)}...</p>
                    <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>
                </div>
            })}
        </main>
    </div>
};

export async function getStaticProps(context) {  
   
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      console.log(item)
      myfile = await fs.promises.readFile('blogdata/' + item), 'utf-8' 
      console.log(myfile)
      allBlogs.push(JSON.parse(myfile))
 
    }
 
    return {
      props: {allBlogs}, // will be passed to the page component as props
    }
  }

export default Blog;
  
    
  