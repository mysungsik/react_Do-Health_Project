import ChestPartDes from "../components/2.how-to-workout/1.chest-part-description";
import BackPartDes from "../components/2.how-to-workout/2.back-part-description";
import ShouldersPartDes from "../components/2.how-to-workout/3.shoulders-part-description";
import BicepsPartDes from "../components/2.how-to-workout/4.biceps-part-description";
import TricepsPartDes from "../components/2.how-to-workout/5.triceps-part-description";
import AbsPartDes from "../components/2.how-to-workout/6.abs-part-description";
import LegsPartDes from "../components/2.how-to-workout/7.legs-part-description";
import GlutesPartDes from "../components/2.how-to-workout/8.glutes-part-description";

import ChooseParts from "../components/2.how-to-workout/choose-parts";
import DefaultDes from "../components/2.how-to-workout/default-description";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const HowToWorkOut = () => {
  const chooseDescription = useSelector((state: RootState) => state.choosePart);

  return (
    <div>
      <ChooseParts />
      {chooseDescription.descriptionState.onDefaultPart && <DefaultDes />}
      {chooseDescription.descriptionState.onChestPart && <ChestPartDes />}
      {chooseDescription.descriptionState.onBackPart && <BackPartDes />}
      {chooseDescription.descriptionState.onShoulderPart && (
        <ShouldersPartDes />
      )}
      {chooseDescription.descriptionState.onBicepsPart && <BicepsPartDes />}
      {chooseDescription.descriptionState.onTricepsPart && <TricepsPartDes />}
      {chooseDescription.descriptionState.onAbsPart && <AbsPartDes />}
      {chooseDescription.descriptionState.onLegsPart && <LegsPartDes />}
      {chooseDescription.descriptionState.onGlutesPart && <GlutesPartDes />}
    </div>
  );
};

export default HowToWorkOut;
