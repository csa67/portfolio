import { GitHub, Linkedin, Code, Inbox} from 'react-feather';
import styles from './Links.module.css';

const LeftLinks = () => {
  return (
    <div className={styles.leftLinks}>
      <ul className={styles.linkList}>
        <li>
          <a href="https://www.github.com/csa67" target="_blank" rel="noopener noreferrer">
            <GitHub size={20}/>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/csa67" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20}/>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/csa67" target="_blank" rel="noopener noreferrer">
            <Code size={20}/>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/csa67" target="_blank" rel="noopener noreferrer">
            <Inbox size={20}/>
          </a>
        </li>
      </ul>
      <div className={styles.verticalLine}></div>
    </div>
  );
};

export default LeftLinks;
