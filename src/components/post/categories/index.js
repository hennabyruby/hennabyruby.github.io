import React, { memo } from "./node_modules/react"

import style from "./style.module.scss"

const Categories = ({ cats }) => {
  return (
    <p>
      {cats.map(cat => (
        <Link
          key={`${cat.wordpress_id}-${cat.slug}`}
          className={style.category}
          to={cat.path}
        >
          {cat.name}
        </Link>
      ))}
    </p>
  )
}

export default memo(Categories)
