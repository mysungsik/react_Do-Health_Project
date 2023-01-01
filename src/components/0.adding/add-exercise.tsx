// 아이디 :  e1, e2 ...
// 파트 : chest, back, shoulders, biceps, triceps, abs, legs, glutes
// des : [{id:1, text:"..."}, {id:2, text:"..."}]
// warn : [{id:1, text:"..."}, {id:2, text:"..."}]

import { FormEvent, useState, useRef } from "react";
import styles from "./add-exercise.module.css";
import { postExercise } from "../../helper/add-exercise-fetch";

const AddExercise = () => {
  const desTextRef = useRef<HTMLInputElement>(null);
  const warnTextRef = useRef<HTMLInputElement>(null);

  const [id, setId] = useState<string>("");
  const [part, setPart] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [img, setImg] = useState<string>("/2.parts/do-parts/");
  const [des, setDes] = useState<{ text: string }[]>([]);
  const [warn, setWarn] = useState<{ text: string }[]>([]);

  // des, warn 추가
  const AddDes = (event: FormEvent) => {
    event.preventDefault();
    const desText = desTextRef.current!.value;

    setDes([...des, { text: desText }]);

    desTextRef.current!.value = "";
  };

  const AddWarn = (event: FormEvent) => {
    event.preventDefault();
    const warnText = warnTextRef.current!.value;

    setWarn([...warn, { text: warnText }]);

    warnTextRef.current!.value = "";
  };

  //fetch
  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    const exerciseData = { id, part, name, img, des, warn };
    await postExercise(exerciseData);
    setId(() => "");
    setPart(() => "");
    setName(() => "");
    setImg(() => "/2.parts/do-parts/");
    setDes(() => []);
    setWarn(() => []);
  };

  return (
    <div className={styles.main_div}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="id"> 아이디 </label>
          <input
            placeholder="e1,e2..."
            type={"text"}
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="part"> 파트 </label>
          <input
            placeholder="chest,back..."
            type={"text"}
            id="part"
            value={part}
            onChange={(e) => setPart(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name"> 운동이름 </label>
          <input
            placeholder="벤치 프레스, 킥 백, 숄더 프레스..."
            type={"text"}
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          {/* /2.parts/do-parts/파츠/이미지이름 */}
          <label htmlFor="img"> 이미지 </label>
          <input
            type={"text"}
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            style={{ width: "30rem" }}
          />
        </div>
        <div>
          <label htmlFor="des"> 설명 </label>
          <input
            placeholder="1.xxx, 2.xxx ..."
            type={"text"}
            id="des"
            ref={desTextRef}
            style={{ width: "25rem" }}
          />
          {des.map((item) => (
            <p key={item.text}>{item.text}</p>
          ))}
          <button onClick={AddDes}> 추가 </button>
        </div>
        <div>
          <label htmlFor="warn"> 유의사항 </label>
          <input
            placeholder="1.xxx, 2.xxx ..."
            type={"text"}
            id="warn"
            ref={warnTextRef}
            style={{ width: "25rem" }}
          />
          {warn.map((item) => (
            <p key={item.text}>{item.text}</p>
          ))}
          <button onClick={AddWarn}> 추가 </button>
        </div>
        <div>
          <button> 제출</button>
        </div>
      </form>
    </div>
  );
};

export default AddExercise;
