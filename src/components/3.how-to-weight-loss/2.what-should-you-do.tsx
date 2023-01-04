import styles from "./2.what-should-you-do.module.css";
import { FormEvent, useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { calculateActions } from "../../store/calculation";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { MoreCaloriesFunction } from "../../helper/calculate-logic";
import MoreCaloriesCard from "../UI/descriptionCard/MoreCaloriesCard";
import MoreCaloriesCardLeft from "../UI/descriptionCard/MoreCaloriesCard-left";

const WhatShouldYouDo = () => {
  const [fadeStyle, setFadeStyle] = useState(
    `${styles.information_section_more_calories_calories} animate__animated animate__fadeInUp` // 1. 애니메이션용 스타일 지정
  );
  // AMR 와 추가 칼로리 State
  const AMRState = useSelector((state: RootState) => state.calulate.AMR); // AMR State, from store
  const MoreCaloiresState = useSelector(
    (state: RootState) => state.calulate.MoreCaloires
  );

  const dispatch = useDispatch();

  const EatCaloriesRef = useRef<HTMLInputElement>(null); // 섭취 칼로리 Input

  useEffect(() => {
    setFadeStyle(
      `${styles.information_section_more_calories_calories} animate__animated animate__fadeInUp` // 3. 스타일 다시 켜기
    );
  }, [fadeStyle]);
  // 버튼 핸들러
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    setFadeStyle(`${styles.information_section_more_calories_calories}`); // 2. 스타일 끄기

    const EatCaloiresData = Number(EatCaloriesRef.current!.value);
    const moreCalories = MoreCaloriesFunction(AMRState, EatCaloiresData);

    dispatch(
      calculateActions.updatingMoreCalores({
        updatingMoreCaloires: moreCalories,
      })
    );
  };
  return (
    <div className={styles.main_div}>
      {/* 섭취 칼로리 Form 섹션 */}
      <section className={styles.form_section}>
        <p className={styles.form_section_title}> 하루 섭취 칼로리 량</p>

        <form className={styles.form_section_form} onSubmit={submitHandler}>
          <label> 하루 섭취 칼로리(kcal)</label>
          <input
            type={"number"}
            placeholder={"칼로리를 입력하세요"}
            ref={EatCaloriesRef}
            required
          />
          <label>kcal</label>
          <hr className="cross_line_gray_normal" />
          <div className={styles.form_section_form_buttons}>
            <button className="Just_Click_Button_Default"> 등록 </button>
          </div>
        </form>
      </section>

      {/* 추가 소모칼로리, 운동 섹션 */}
      <section className={styles.information_section}>
        <div className={styles.information_section_more_calories}>
          <div>
            <img src="/3.loss-weight/icons8-fire-alt-100.png" alt="fire" />
            <p> 불태워야하는 칼로리 </p>
          </div>
          <p className={fadeStyle}>{MoreCaloiresState} kcal</p>
        </div>
        <div className={styles.cross_line_div}>
          <hr className="cross_line_green_rotate" />
          <hr className="cross_line_green_rotate" />
        </div>
        <div className={styles.information_section_exercise}>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOutUp"
            duration={2}
          >
            <p className={styles.information_section_exercise_title}>
              이렇게 한번 해보세요!
            </p>
          </AnimationOnScroll>

          <div className={styles.information_section_exercise_detail}>
            <div>
              <MoreCaloriesCard
                name={"런닝"}
                img={"/3.loss-weight/pexels-andrea-piacquadio-3756042.jpg"}
                des={[
                  { id: 0, text: "소모되는 칼로리 : 576 kcal / 시간" },
                  { id: 1, text: "장비가 필요없는 최고의 유산소 운동" },
                  {
                    id: 2,
                    text: "온 몸의 코어 근육이 살아납니다",
                  },
                  {
                    id: 3,
                    text: "심폐 기능이 향상됩니다",
                  },
                  {
                    id: 4,
                    text: "세로토닌을 활성화 하여, 스트레스가 감소합니다",
                  },
                ]}
                time={(MoreCaloiresState / 576) * 60}
              />
            </div>
            <div>
              <MoreCaloriesCardLeft
                name={"수영"}
                img={"/3.loss-weight/pexels-guduru-ajay-bhargav-863988.jpg"}
                des={[
                  { id: 0, text: "소모되는 칼로리 : 892 kcal / 시간" },
                  { id: 1, text: "가장 안전한 유산소 운동" },
                  {
                    id: 2,
                    text: "필요한건 단 하나 수영복세트!",
                  },
                  {
                    id: 3,
                    text: "덜 고통스럽게, 온 몸의 칼로리를 소모시킵니다.",
                  },
                  {
                    id: 4,
                    text: "온 몸의 근육을 활성화 하는 전신운동입니다",
                  },
                  {
                    id: 5,
                    text: "심폐 기능을 향상시킵니다",
                  },
                  {
                    id: 6,
                    text: "물이 가져오는 편안함은, 심신을 안정시킵니다",
                  },
                ]}
                time={(MoreCaloiresState / 892) * 60}
              />
            </div>
            <div></div>
            <MoreCaloriesCard
              name={"사이클"}
              img={"/3.loss-weight/beau-runsten-mR-N67XjTHg-unsplash.jpg"}
              des={[
                { id: 0, text: "소모되는 칼로리 : 588 kcal / 시간" },
                { id: 1, text: "허벅지를 강하게! 사이클" },
                {
                  id: 2,
                  text: "강한 허벅지의 자극을 줍니다",
                },
                {
                  id: 3,
                  text: "시원한 바람과 경치를 즐길 수 있습니다.",
                },
                {
                  id: 4,
                  text: "생각보다 관절에 무리를 주지 않습니다",
                },
              ]}
              time={(MoreCaloiresState / 588) * 60}
            />

            <div>
              <MoreCaloriesCardLeft
                name={"고강도 웨이트"}
                img={"/3.loss-weight/pexels-victor-freitas-841130.jpg"}
                des={[
                  { id: 0, text: "소모되는 칼로리 : 440 kcal / 시간" },
                  { id: 1, text: "근력운동을 가장한 유산소운동" },
                  {
                    id: 2,
                    text: "가까운 헬스장에 찾아가세요",
                  },
                  {
                    id: 3,
                    text: "당신의 근육은 생각보다 산소를 요구합니다.",
                  },
                  {
                    id: 4,
                    text: "근력과 함께 심폐지구력까지 향상시킵니다",
                  },
                  {
                    id: 5,
                    text: "안전사고에 유의하세요",
                  },
                ]}
                time={(MoreCaloiresState / 440) * 60}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default WhatShouldYouDo;
