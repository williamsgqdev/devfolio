import styles from "../styles/Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <p> &lt;/Hello World /&gt; my name is </p>

      <h1>Williams Agbunu .</h1>

      <h1>I build stuff for the web . </h1>

      <p>
        I’m a software engineer specializing in building (and occasionally{" "}
        <br />
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, <br /> human-centered <br />
        products at Upstatement.
      </p>

      <button className={styles.btn}>Try out the Terminal </button>
    </div>
  );
};

export default Hero;
