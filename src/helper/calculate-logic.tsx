// https://ourcalc.com/%EA%B8%B0%EC%B4%88%EB%8C%80%EC%82%AC%EB%9F%89-%EA%B3%84%EC%82%B0%EA%B8%B0/

// 해리스-베네딕트(Harris-Benedict) 공식:
//          남성: 88.4 ＋ (13.4 × 몸무게) ＋ (4.8 × 키) – (5.68 × 나이)
//          여성: 447.6 + (9.25 × 몸무게) ＋ (3.1 × 키) – (4.33 × 나이)
//
//  미플린-지어(Mifflin-St.Jeor) 공식:
//          기본식: (10 × 몸무게) + (6.25 × 키) – (5 × 나이)
//          남성: 기본식 ＋ 5
//          여성: 기본식 － 161

//  활동대사량(AMR: Activem Metabolic Rate)은 걷기, 청소, 출·퇴근 등과 운동을 통해 소비하는 에너지입니다.
//       걷는 시간과 수행한 운동 종류를 특정하여 직접 계산할 수도 있지만, 활동 및 운동 수준을 구분하여 추산하는 방식으로 계산하기도 하는데요,

//       아래와 같이 ‘활동 및 운동 수준’을 5단계로 구분한 후 기초대사량 칼로리(㎉)에 일정 수치를 곱하여 계산하게 됩니다.

//      예를 들어, 기초대사량이 2000㎉ 이고, 주로 앉아서 생활을 한다면 활동대사량은 2000 × 0.2 = 400(㎉)로 추정할 수 있습니다.

//      그런데 칼로리 소비량을 계산할 필요가 있는 사람 입장에서는 활동대사량 자체 보다는 기초대사량에 활동대사량을 더한 수치가 필요하기 때문에
//          본 기초대사량 계산기는 다음과 같은 방식으로 하여 ‘기초대사량＋활동대사량’을 계산합니다.

//  기초대사량 ＋ 활동대사량 계산 식:

//      거의 운동하지 않음: 기초대사량 × 1.2
//      가벼운 운동(주 1~3일): 기초대사량 × 1.375
//      보통 수준: 기초대사량 × 1.55
//      적극적으로 운동(주 6~7일): 기초대사량 × 1.725
//      매우 적극적으로 운동(주 6~7일): 기초대사량 × 1.9

// AMR 계산 로직
export const CalculateFunction = (
  sex: number,
  age: number,
  weight: number,
  tall: number,
  activity: number
) => {
  let BMR;
  if (sex === 1) {
    BMR = 88.4 + 13.4 * weight + 4.8 * tall - 5.68 * age;
  } else {
    BMR = 447.6 + 9.25 * weight + 3.1 * tall - 4.33 * age;
  }
  const finalAMR = BMR * activity;

  return finalAMR;
};

// 추가 소모 칼로리 로직

export const MoreCaloriesFunction = (AMR: number, UserEat: number) => {
  const moreExercise = UserEat - AMR;
  return moreExercise;
};
