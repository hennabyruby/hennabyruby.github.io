import React, { memo } from "react"
import { Link } from "gatsby"

import tagIcon from "./tag.svg"
import tagsIcon from "./tags.svg"
import style from "./style.module.scss"

const Tags = ({ tags, isSinglePost = false }) => {
  return (
    <div className={isSinglePost ? style.singleView : ""}>
      <img
        src={tags.length === 1 ? tagIcon : tagsIcon}
        alt=""
        className={style.icon}
      />
      {tags.map(tag => (
        <Link
          key={`${tag.wordpress_id}-${tag.slug}`}
          className={style.tag}
          to={tag.path}
        >
          {tag.name}
        </Link>
      ))}
    </div>
  )
}

export default memo(Tags)
