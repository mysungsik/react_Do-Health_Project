import styles from "./1.EstimateBMR.module.css";
import { FormEvent, useEffect, useRef, useState } from "react";
import { CalculateFunction } from "../../helper/calculate-logic";
import { useSelector, useDispatch } from "react-redux";
import { calculateActions } from "../../store/calculation";
import { RootState } from "../../store";

const EstimateBMR = () => {
  const [buttonStyle, setButtonStyle] = useState<string>(
    `${styles.answer_section_totalCal} animate__animated animate__bounce` // 버튼 Bounce 용 State
  );

  const AMRState = useSelector((state: RootState) => state.calulate.AMR); // AMR State, from store
  const dispatch = useDispatch();

  const sexRef = useRef<HTMLSelectElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);
  const tallRef = useRef<HTMLInputElement>(null);
  const activityRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    setButtonStyle(
      `${styles.answer_section_totalCal} animate__animated animate__bounce` // 버튼 Bounce 용 useEffect
    );
  }, [buttonStyle]);

  const submitHanlder = (event: FormEvent) => {
    event.preventDefault();
    setButtonStyle(`${styles.answer_section_totalCal}`);
    const sex = Number(sexRef.current!.value);
    const age = Number(ageRef.current!.value);
    const weight = Number(weightRef.current!.value);
    const tall = Number(tallRef.current!.value);
    const activity = Number(activityRef.current!.value);

    const AMRData = CalculateFunction(sex, age, weight, tall, activity);

    dispatch(
      calculateActions.updateAMR({ updatingAMR: Number(AMRData.toFixed(0)) }) // 스토어에 업데이트
    );
  };

  return (
    <div className={styles.main_div}>
      {/* 타이틀 섹션 */}
      <section className={styles.main_div_title}>
        <p> 당신이 소비하는 하루의 칼로리</p>
      </section>

      {/* 폼 섹션 */}
      <section className={styles.form_section}>
        <form className={styles.form_section_form} onSubmit={submitHanlder}>
          <div>
            <label htmlFor="sex"> 성별 </label>
            <select id="sex" required ref={sexRef}>
              <option value={1}> 남성 </option>
              <option value={2}> 여성 </option>
            </select>
          </div>
          <hr className="cross_line_gray_normal" />
          <div>
            <label htmlFor="age"> 나이(만) </label>
            <input
              type={"number"}
              id="age"
              placeholder="만 나이"
              required
              ref={ageRef}
            />
          </div>
          <hr className="cross_line_gray_normal" />
          <div>
            <label htmlFor="weight"> 몸무게(kg) </label>
            <input
              type={"number"}
              id="weight"
              placeholder="몸무게(kg)"
              required
              ref={weightRef}
            />
          </div>
          <hr className="cross_line_gray_normal" />
          <div>
            <label htmlFor="tall"> 키(cm) </label>
            <input
              type={"number"}
              id="tall"
              placeholder="키 (cm)"
              required
              ref={tallRef}
            
            />
          </div>
          <hr className="cross_line_gray_normal" />
          <div>
            <label htmlFor="activity"> 운동량을 선택하세요 </label>
            <select id="activity" required ref={activityRef}>
              <option value={1.2}> 거의 운동하지 않음 </option>
              <option value={1.375}> 가벼운 활동(주 1~3회) </option>
              <option value={1.55}> 보통 활동 (주 3~5회) </option>
              <option value={1.725}> 적극적인 운동 (주 6~7회) </option>
              <option value={1.9}> 매우 적극적인 운동 (주 6~7회) </option>
            </select>
          </div>
          <hr className="cross_line_gray_normal" />
          <div className={styles.form_section_buttons}>
            <button className="Just_Click_Button_Default"> 계산하기</button>
          </div>
        </form>
      </section>
      {/* 결과 섹션 */}
      <section className={styles.answer_section}>
        <div>
          <div className={styles.answer_section_title_div}>
            <img src="/3.loss-weight/icons8-gymnastics-100.png" />
            <p className={styles.answer_section_textP}>
              당신의 하루 소비 칼로리 량
            </p>
          </div>
          <h1 className={buttonStyle}>{AMRState} kcal</h1>
        </div>
      </section>
    </div>
  );
};
export default EstimateBMR;
