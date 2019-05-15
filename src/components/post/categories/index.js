import React, { memo } from "react"
import { Link } from "gatsby"

import style from "./style.module.scss"

const Categories = ({ cats, isSinglePost = false }) => {
  return (
    <div className={isSinglePost ? style.singleView : ""}>
      {cats.map(cat => (
        <Link
          key={`${cat.wordpress_id}-${cat.slug}`}
          className={style.category}
          to={cat.path}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  )
}

export default memo(Categories)
