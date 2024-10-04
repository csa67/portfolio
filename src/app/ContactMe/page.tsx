import styles from './Contact.module.css';

export default function ContactMe(){
    return (
        <div className={styles.Contact}>
    <h2> Get in touch! </h2>
    <p> My inbox is always open, whether you have a question, chat about new opportunities(even if they don't exist yet) or just want to say hi, I'm always down to chat! </p>
    <a href="mailto:sa.chava@ufl.edu" rel="noopener noreferrer" target="_blank"> Say Hello! </a>
    </div>
    )
}