const EstimateBMR = () => {
  // 계산은 State 로 하던가 하고,
  // 최종적인 값만 Redux Store에 넣고 사용하여, 다른 쪽으로 넘기도록 하자.
  return (
    <div>
      <h1> 하루 소모 계산기</h1>
      <form>
        <div>
          <select>
            <option value={1}> 남성 </option>
            <option value={2}> 여성 </option>
          </select>
        </div>
        <div>
          <label htmlFor="age"> 나이(만) </label>
          <input type={"number"} id="age" />
        </div>
        <div>
          <label htmlFor="weight"> 몸무게(kg) </label>
          <input type={"number"} id="weight" />
        </div>
        <div>
          <label htmlFor="tall"> 키(cm) </label>
          <input type={"number"} id="tall" />
        </div>
        <div>
          <input type={"radio"} name="activity" id="activity1" value={1} />
          <label htmlFor="activity1"> 거의 운동하지 않음</label>

          <input type={"radio"} name="activity" id="activity2" value={2} />
          <label htmlFor="activity2"> 가벼운 활동(주 1~3회) </label>

          <input type={"radio"} name="activity" id="activity3" value={3} />
          <label htmlFor="activity3"> 보통 활동 (주 3~5회) </label>

          <input type={"radio"} name="activity" id="activity4" value={4} />
          <label htmlFor="activity4"> 적극적인 운동 (주 6~7회)</label>

          <input type={"radio"} name="activity" id="activity5" value={5} />
          <label htmlFor="activity5"> 매우 적극적인 운동 (주 6~7회)</label>
        </div>
        <div>
          <button> 계산하기</button>
        </div>
      </form>
      <div>
        <h1> 당신의 하루 소비 칼로리 량</h1>
        <h1> xxxx kcal</h1>
      </div>
      <div>
        <h1> 당신이 먹는 칼로리 량</h1>
        <form>
          <input type={"number"} /> <label>kcal</label>
        </form>
      </div>
      <div>
        <div>
          <h1>추가적으로 해야하는 운동</h1>
          <div>
            <h3> 런닝 xx 분</h3>
            <p> 시간당 몇 kcal 소모</p>
          </div>
          <div>
            <h3> 수영 xx 분</h3>
            <p> 시간당 몇 kcal 소모</p>
          </div>
          <div>
            <h3> 사이클 xx 분</h3>
            <p> 시간당 몇 kcal 소모</p>
          </div>
          <div>
            <h3> 강도높은 웨이트 xx 분</h3>
            <p> 시간당 몇 kcal 소모</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EstimateBMR;
