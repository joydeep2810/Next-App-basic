import Links from "../Links/Links"
import styles from "./navbar.module.css"

const Navbar = function () {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div>
        <Links></Links>
      </div>
    </div>
  )
}

export default Navbar
