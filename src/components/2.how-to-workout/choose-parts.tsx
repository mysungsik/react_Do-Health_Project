import styles from "./choose-parts.module.css";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ChooseActions } from "../../store/choose-part-slice";

// 가슴, 등, 이두 등의 버튼을 누르면, 리덕스 Store 에 State 를 전달
// 전달된 State 를 이용해,
// [2.how-to-workout Page ] 에 가서, 필요한 Description 렌더

const ChooseParts = () => {
  const dispatch = useDispatch();

  const onChestHandler = useCallback(() => {
    dispatch(ChooseActions.ChestDescription());
  }, [dispatch]);
  const onBackHandler = useCallback(() => {
    dispatch(ChooseActions.BackDescription());
  }, [dispatch]);
  const onShoulderHandler = useCallback(() => {
    dispatch(ChooseActions.ShoulderDescription());
  }, [dispatch]);
  const onBicepsHandler = useCallback(() => {
    dispatch(ChooseActions.BicepsDescription());
  }, [dispatch]);
  const onTricepsHandler = useCallback(() => {
    dispatch(ChooseActions.TricepsDescription());
  }, [dispatch]);
  const onAbsHandler = useCallback(() => {
    dispatch(ChooseActions.AbsDescription());
  }, [dispatch]);
  const onLegsHandler = useCallback(() => {
    dispatch(ChooseActions.LegsDescription());
  }, [dispatch]);
  const onGlutesHandler = useCallback(() => {
    dispatch(ChooseActions.GlutesDescription());
  }, [dispatch]);

  return (
    <div className={styles.main_div}>
      <div className={styles.main_title_text}>
        <p> Do-Parts + </p>
      </div>
      <div className={styles.select_parts_div}>
        <ul className={styles.select_parts}>
          <li onClick={() => onChestHandler()}>
            <div className={styles.parts_text}>
              <img src="/2.parts/torso.png" alt="torso" />
              <p>가슴</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" alt="arrow" />
            </div>
          </li>
          <li onClick={() => onBackHandler()}>
            <div className={styles.parts_text}>
              <img src="/2.parts/back.png" alt="back" />
              <p>등</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" alt="arrow" />
            </div>
          </li>
          <li onClick={() => onShoulderHandler()}>
            <div className={styles.parts_text}>
              <img src="/2.parts/shoulders.png" alt="back" />
              <p>어깨</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" alt="arrow" />
            </div>
          </li>
          <li onClick={() => onBicepsHandler()}>
            <div className={styles.parts_text}>
              <img src="/2.parts/biceps.png" alt="biceps" />
              <p>이두</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" alt="arrow" />
            </div>
          </li>
          <li onClick={() => onTricepsHandler()}>
            <div className={styles.parts_text}>
              <img src="/2.parts/triceps.png" alt="triceps" />
              <p>삼두</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" alt="arrow" />
            </div>
          </li>
          <li onClick={() => onAbsHandler()}>
            <div className={styles.parts_text}>
              <img src="/2.parts/abs.png" alt="abs" />
              <p>복근</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" alt="arrow" />
            </div>
          </li>
          <li onClick={() => onLegsHandler()}>
            <div className={styles.parts_text}>
              <img src="/2.parts/legs.png" alt="legs" />
              <p>하체</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" alt="arrow" />
            </div>
          </li>
          <li onClick={() => onGlutesHandler()}>
            <div className={styles.parts_text}>
              <img src="/2.parts/glutes.png" alt="glutes" />
              <p>엉덩이</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" alt="arrow" />
            </div>
          </li>
        </ul>
        <div className={styles.description_div}>
          <p> 원하시는 부위를 선택하세요</p>
          <p> Do-Health 가 알려드립니다!</p>
        </div>
      </div>
    </div>
  );
};
export default ChooseParts;
