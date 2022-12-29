import styles from "./2.what-should-you-do.module.css";
import { FormEvent, useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { calculateActions } from "../../store/calculation";

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
        <hr className="cross_line_green_rotate" />
        <hr className="cross_line_green_rotate" />
        <div className={styles.information_section_exercise}>
          <p className={styles.information_section_exercise_title}>
            추가적으로 해야하는 운동
          </p>
          <div className={styles.information_section_exercise_detail}>
            <div>
              <MoreCaloriesCard
                name={"런닝"}
                img={"/3.loss-weight/tyler-nix-Y1drF0Y3Oe0-unsplash.jpg"}
                des={[
                  { id: 0, text: "소모되는 칼로리 : 500kcal/hr" },
                  { id: 1, text: "최고의 유산소 운동" },
                  {
                    id: 2,
                    text: "아무런 장비가 필요 없다",
                  },
                ]}
                time={MoreCaloiresState / 500}
              />
            </div>
            <div>
              <MoreCaloriesCardLeft
                name={"수영"}
                img={"/3.loss-weight/tyler-nix-Y1drF0Y3Oe0-unsplash.jpg"}
                des={[
                  { id: 0, text: "소모되는 칼로리 : 500kcal/hr" },
                  { id: 1, text: "최고의 유산소 운동" },
                  {
                    id: 2,
                    text: "아무런 장비가 필요 없다",
                  },
                ]}
                time={MoreCaloiresState / 400}
              />
            </div>
            <div></div>
            <MoreCaloriesCard
              name={"사이클"}
              img={"/3.loss-weight/tyler-nix-Y1drF0Y3Oe0-unsplash.jpg"}
              des={[
                { id: 0, text: "소모되는 칼로리 : 500kcal/hr" },
                { id: 1, text: "최고의 유산소 운동" },
                {
                  id: 2,
                  text: "아무런 장비가 필요 없다",
                },
              ]}
              time={MoreCaloiresState / 300}
            />

            <div>
              <MoreCaloriesCardLeft
                name={"고강도 웨이트"}
                img={"/3.loss-weight/tyler-nix-Y1drF0Y3Oe0-unsplash.jpg"}
                des={[
                  { id: 0, text: "소모되는 칼로리 : 500kcal/hr" },
                  { id: 1, text: "최고의 유산소 운동" },
                  {
                    id: 2,
                    text: "아무런 장비가 필요 없다",
                  },
                ]}
                time={MoreCaloiresState / 200}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default WhatShouldYouDo;
