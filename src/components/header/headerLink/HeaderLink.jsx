import styles from "./headerLink.module.css";
const HeaderLink = ({to, buttonTitle}) => {
    return (
        <a
            href={to}
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }}
            target={"noreferer"}
            rel={"noreferrer"}
            className={styles.headerLink}
        >
            {buttonTitle}
        </a>
    )
}

export default HeaderLink;