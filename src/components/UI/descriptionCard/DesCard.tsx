import styles from "./DesCard.module.css";

export type Exr = {
  name: string;
  img: string;
  des: string[];
  warn: string[];
};

const DesCard: React.FC<Exr> = (props) => {
  const { name, img, des, warn } = props;
  return (
    <div className={styles.main_card}>
      <div className={styles.title_div}>
        <p>{name}</p>
      </div>

      {/* Description Part */}

      <div className={styles.main_desc_div}>
        <ul className={styles.main_desc_text_ul}>
          {des.map((text) => (
            <li> {text}</li>
          ))}
        </ul>
        <div className={styles.main_desc_img_div}>
          <img src={img}></img>
        </div>
      </div>

      {/* Warning Part */}

      <div className={styles.main_warning_div}>
        <p> 유의사항</p>
        <ul className={styles.main_warning_lists}>
          {warn.map((text) => (
            <li> {text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DesCard;
