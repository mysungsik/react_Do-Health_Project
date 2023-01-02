import styles from "./DesCard.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export type Exr = {
  name: string;
  img: string;
  des: { text: string }[];
  warn: { text: string }[];
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
          {des.map((item) => (
            <li key={item.text}> {item.text}</li>
          ))}
        </ul>
        <div className={styles.main_desc_img_div}>
          <img src={img} alt={"img"}></img>
        </div>
      </div>

      {/* Warning Part */}

      <div className={styles.main_warning_div}>
        <p> 유의사항</p>
        <ul className={styles.main_warning_lists}>
          {warn.map((item) => (
            <AnimationOnScroll animateIn="animate__bounceIn" key={item.text}>
              <li key={item.text}> {item.text}</li>
            </AnimationOnScroll>
          ))}
        </ul>
      </div>
      <hr className="cross_orange_line" />
      <hr className="cross_orange_line" />
    </div>
  );
};

export default DesCard;
