import Link from "next/link"
import styles from "./links.module.css"

const Links = function () {
  const links = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ]
  return (
    <div className={styles.link}>
      {links.map(function (link) {
        return (
          <Link href={link.path} key={link.title}>
            {link.title}
          </Link>
        )
      })}
    </div>
  )
}

export default Links
