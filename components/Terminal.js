import styles from "../styles/Terminal.module.css";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const Terminal = () => {
  const [command, setCommand] = useState("");
  const [terminalItems, setTerminalItems] = useState([]);
  const router = useRouter();

  const fireCommand = (e) => {
    if (e.key === "Enter") {
      command.replace(/\s+/g, " ").trim();
      //   if (command == "cd about") {
      //     console.log("ok");
      //     router.push("/about");
      //   }
      //   console.log(command);
      switch (command) {
        case "cd about":
          console.log("ok");
          break;
        case "cd projects":
          console.log("projects");
          break;
        default:
          console.log("command not found");
      }
    }
  };

  const commandRef = useRef(null);
  useEffect(() => {
    commandRef.current.focus();
  }, []);

  return (
    <div className={styles.terminal__container}>
      <div className={styles.terminal}>
        <div className={styles.top__bar}>
          <div className={styles.controls__btns}>
            <span className={styles.close__btn}></span>
            <span className={styles.minimize__btn}></span>
            <span className={styles.bigger__btn}></span>
          </div>
          <div className={styles.terminal__heder__container}>
            <p className={styles.terminal__header}>
              Terminal - zsh $williams__porfolio
            </p>
          </div>
        </div>
        <div className={styles.terminal__command__container}>
          <div className={styles.terminal__input}>
            <span className={styles.pre}>$</span>{" "}
            <input
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={fireCommand}
              className={styles.command__input}
              autoFocus
              type="text"
              ref={commandRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
