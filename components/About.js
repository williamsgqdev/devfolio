import Image from "next/image";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about__container}>
      <div className={styles.about}>
        <h3>A Brief About Me</h3>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        </p>
        <p>
          {" "}
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
        </p>
      </div>
      <div className={styles.img}>
        <Image
          src="/img/aboutme.png"
          alt="about image"
          width={700}
          height={700}
          style={{ filter: " drop-shadow(2px 2px 5px #646fd4)" }}
        />
      </div>
    </div>
  );
};

export default About;
