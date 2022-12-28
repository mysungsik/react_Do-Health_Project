import ChestPartDes from "../components/2.how-to-workout/1.chest-part-description";
import ChooseParts from "../components/2.how-to-workout/choose-parts";
import DefaultDes from "../components/2.how-to-workout/default-description";
// 츄즈 파트를 누르지 않는다면 -> 디폴트 Des
// 츄즈 파트를 누른다면, => 해당 부위에 해당하는 설명 란이 쭉
// 리덕스를 이용하여, State 를 만들어서, 츄즈 파트에서, 무언가 누르면,
// 이 HowToWorkOut Page 에 와서, 적절한 설명을 띄우는 것으로 하자

const HowToWorkOut = () => {
  return (
    <div>
      <ChooseParts />
      <DefaultDes />
      <ChestPartDes />
    </div>
  );
};

export default HowToWorkOut;
