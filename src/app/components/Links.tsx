import { GitHub, Linkedin, Code, FileText} from 'react-feather';
import styles from './Links.module.css';

const LeftLinks = () => {
  return (
    <div className={styles.leftLinks}>
      <ul className={styles.linkList}>
        <li>
          <a href="https://www.github.com/csa67" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
            <GitHub size={20}/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/csaiarathy/" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
            <Linkedin size={20}/>
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/u/csa_37/" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
            <Code size={20}/>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/csa67" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
            <FileText size={20}/>
          </a>
        </li>
      </ul>
      <div className={styles.verticalLine}></div>
    </div>
  );
};

export default LeftLinks;
