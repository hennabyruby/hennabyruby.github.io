import React, { Fragment, memo } from "react"
import { Link } from "gatsby"
import readingTime from "reading-time"

import SEO from "../../components/seo"
import Categories from "./categories"
import Tags from "./tags"

import style from "./style.module.scss"

const PostTitle = ({ title, isSinglePost = false }) => {
  return isSinglePost ? (
    <h1 dangerouslySetInnerHTML={{ __html: title }} />
  ) : (
    <h3 dangerouslySetInnerHTML={{ __html: title }} />
  )
}

const PostMetadata = ({ date, timeToRead }) => (
  <Fragment>
    <span className={style.date}>{date}</span>
    <span className={style.timeToRead}>{timeToRead}</span>
  </Fragment>
)

const PostContent = ({ content }) => (
  <div
    className={style.content}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

const PostExcerpt = ({ excerpt }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: excerpt.slice(0, 155).concat("..."),
      }}
    />
  )
}

const Post = ({ post, isSinglePost = false }) => {
  const {
    wordpress_id,
    title,
    date,
    content,
    excerpt,
    slug,
    path,
    categories,
    tags,
  } = post
  const { text: timeToRead } = readingTime(content || "")

  return (
    <article key={`${wordpress_id}-${slug}`} className={style.article}>
      {isSinglePost ? (
        <Fragment>
          <SEO title={title} description={excerpt} />
          <PostTitle title={title} isSinglePost={isSinglePost} />
          <PostMetadata date={date} timeToRead={timeToRead} />
          {categories && <Categories cats={categories} />}
          <PostContent content={content} />
          {tags && <Tags tags={tags} />}
        </Fragment>
      ) : (
        <Fragment>
          <Link to={path} className={style.link}>
            <div className={style.articleWrapper}>
              <PostMetadata date={date} timeToRead={timeToRead} />
              <PostTitle title={title} />
              <PostExcerpt excerpt={excerpt} />
            </div>
          </Link>
          {categories && <Categories cats={categories} />}
        </Fragment>
      )}
    </article>
  )
}

export default memo(Post)
