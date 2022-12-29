import styles from "./MoreCaloriesCard-left.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export type Exr = {
  name: string;
  img: string;
  time: number;
  des: { id: number; text: string }[];
};

const MoreCaloriesCardLeft: React.FC<Exr> = (props) => {
  const { name, img, des, time } = props;

  const refineTime = time.toFixed(1)
  return (
    <div className={styles.main_card}>
      <div className={styles.title_div}>
        <p>{name}</p>
        <p> {refineTime}분 </p>
      </div>

      {/* Description Part */}
      <div className={styles.main_desc_div}>
        <div className={styles.main_desc_img_div}>
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img src={img} alt={"img"}></img>
          </AnimationOnScroll>
        </div>
        <ul className={styles.main_desc_text_ul}>
          {des.map((item) => (
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              key={item.id}
              delay={300}
            >
              <li key={item.id}> {item.text}</li>
            </AnimationOnScroll>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoreCaloriesCardLeft;
