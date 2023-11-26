import React from "react";
import SceneHeader from "../../components/scene/SceneHeader";
import ControlledAccordions from "../../components/Accordion";
import ThoughtBox from "../financialDashboard/ThoughtBox";
import MainContentWrapper from "../../components/wrappers/MainContentWrapper";
import FooterContentWrapper from "../../components/wrappers/FooterContentWrapper";
import SceneFooter from "../../components/scene/SceneFooter";

const YourFinancials = () => {
  return (
    <>
      <SceneHeader />
      <MainContentWrapper>
        <ControlledAccordions />
        <ControlledAccordions />
        <ControlledAccordions />
        <ControlledAccordions />
        <ControlledAccordions />
        <ControlledAccordions />
      </MainContentWrapper>

      <FooterContentWrapper>
        <ThoughtBox />
        <ThoughtBox />
        <ThoughtBox />
        <ThoughtBox />
        <ThoughtBox />
      </FooterContentWrapper>
      <SceneFooter />
    </>
  );
};

export default YourFinancials;
