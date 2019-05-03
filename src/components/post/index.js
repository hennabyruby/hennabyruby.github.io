import React, { Fragment, memo } from "react"
import { Link } from "gatsby"
import readingTime from "reading-time"

import SEO from "../../components/seo"

import style from "./style.module.scss"

const Categories = ({ cats }) => {
  return (
    cats &&
    cats.map(cat => (
      <Link key={cat.wordress_id} className={style.category} to={cat.path}>
        {cat.name}
      </Link>
    ))
  )
}

const Post = ({ post, isSinglePost = false }) => {
  const {
    wordpress_id,
    title,
    date,
    content,
    excerpt,
    path,
    categories,
    tags,
  } = (post.node && post.node) || post
  const { text: timeToRead } = readingTime(content)

  return (
    <article key={wordpress_id} className={style.article}>
      {isSinglePost ? (
        <Fragment>
          <SEO title={title} description={excerpt} />
          <h1>{title}</h1>
          <span className={style.date}>{date}</span>
          <span className={style.timeToRead}>{timeToRead}</span>
          <p>
            <Categories cats={categories} />
          </p>
          <div
            className={style.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <p>
            <Categories cats={tags} />
          </p>
        </Fragment>
      ) : (
        <Fragment>
          <Link to={path} className={style.link}>
            <div className={style.articleWrapper}>
              <span className={style.date}>{date}</span>
              <span className={style.timeToRead}>{timeToRead}</span>
              <h3 dangerouslySetInnerHTML={{ __html: title }} />
              <div
                dangerouslySetInnerHTML={{
                  __html: excerpt.slice(0, 155).concat("..."),
                }}
              />
            </div>
          </Link>
          <Categories cats={categories} />
        </Fragment>
      )}
    </article>
  )
}

export default memo(Post)
