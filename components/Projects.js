import styles from "../styles/Projects.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h3>Things I have Built</h3>
      <div className={styles.project}>
        <div className={styles.info}>
          <h4>Patricia Clone</h4>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique
          </p>
          <div className={styles.links}>
            <button className={styles.live__link}>Live Link</button>
            <GitHubIcon className={styles.repo__link} />
          </div>
        </div>
        <div className={styles.img}>
          <img src="/img/patricia_clone.png" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
