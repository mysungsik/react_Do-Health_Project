import styles from "./food-previewcard.module.css";

const FoodPreview: React.FC<{
  id: string;
  img: string;
  category: string;
  name: string;
  majorNutri: string;
  nutri: string;
  price: number;
}> = (props) => {
  const { img, category, name, majorNutri, nutri, price } = props;

  return (
    <div className={styles.main_div}>
      <section className={styles.img_section}>
        <img src={img} alt="img" />
        <div className={styles.img_section_category}> {category}</div>
      </section>
      <section className={styles.info_section}>
        <div className={styles.info_section_title}>
          <p> {name}</p>
        </div>
        <div className={styles.info_section_info_detail}>
          <div className={styles.info_section_info_detail_category}>
            {majorNutri} +
          </div>
          <div className={styles.info_section_info_detail_nutri_price}>
            <p> {nutri}</p>
            <p> {price} 원</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodPreview;
