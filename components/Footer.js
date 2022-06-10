import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.pre}>Built with</p>
      <FavoriteIcon className={styles.icon} />
      <small>by</small>
      <p className={styles.name}>Williams Agbunu</p>
    </div>
  );
};

export default Footer;
