import styles from "./not-found.module.css";

const NotFound = () => {
  return (
    <div>
      <div className={styles.main_div}>
        <section className={styles.main_title_text_section}>
          <div>
            <p className={styles.main_title_text_section_textP}>
              404 Not-Found
            </p>
            <p className={styles.main_title_text_section_textP}>
              페이지를 잘못 찾아오셨군요!
            </p>
          </div>
        </section>
      </div>
      <div className={`cross_line_green_thick ${styles.sub_description}`}>
        주소를 다시한번 확인해주세요!
      </div>
    </div>
  );
};

export default NotFound;
