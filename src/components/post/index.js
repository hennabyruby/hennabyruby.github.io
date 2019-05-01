import React, { memo } from "react"
import { Link } from "gatsby"
import readingTime from "reading-time"

import style from "./style.module.scss"

const Post = ({ post }) => {
  const { text: timeToRead } = readingTime(post.node.content)

  return (
    <article className={style.article}>
      <Link to={post.node.path} className={style.link}>
        <div className={style.articleWrapper}>
          <span className={style.date}>{post.node.date}</span>
          <span className={style.timeToRead}>{timeToRead}</span>
          <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
          <div
            dangerouslySetInnerHTML={{
              __html: post.node.excerpt.slice(0, 155).concat("..."),
            }}
          />
        </div>
      </Link>
      {(post.node.categories &&
        post.node.categories.map(category => {
          return (
            <Link
              key={category.wordress_id}
              className={style.category}
              to={category.path}
            >
              {category.name}
            </Link>
          )
        })) ||
        ""}
    </article>
  )
}

export default memo(Post)
