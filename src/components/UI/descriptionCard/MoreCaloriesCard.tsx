import styles from "./MoreCaloriesCard.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export type Exr = {
  name: string;
  img: string;
  time: number;
  des: { id: number; text: string }[];
};

const MoreCaloriesCard: React.FC<Exr> = (props) => {
  const { name, img, des, time } = props;

  const refineTime = time.toFixed(1);
  return (
    <div className={styles.main_card}>
      <div className={styles.title_div}>
        <p>{name}</p>
        <p> {refineTime}분 </p>
      </div>

      {/* Description Part */}

      <div className={styles.main_desc_div}>
        <ul className={styles.main_desc_text_ul}>
          {des.map((item) => (
            <AnimationOnScroll animateIn="animate__fadeInUp" key={item.id}>
              <li key={item.id}> {item.text}</li>
            </AnimationOnScroll>
          ))}
        </ul>
        <div className={styles.main_desc_img_div}>
          <AnimationOnScroll animateIn="animate__fadeInRight" delay={400}>
            <img src={img} alt={"img"}></img>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default MoreCaloriesCard;
