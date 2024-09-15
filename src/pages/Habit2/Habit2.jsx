import React from "react";
import PageWrapperWithFooter from "../../components/PageWrapper/PageWrapperWithFooter";
import SectionWrapper from "../../components/common/SectionWrapper";
import HabitTrackerGrid from "../../components/Habit2component/HabitTrackerGrid";

const Habit2 = () => {
  return (
    <PageWrapperWithFooter>
      <SectionWrapper heading={"4 to 5 years"} showViewAll={false}>
        <HabitTrackerGrid/>
      </SectionWrapper>
    </PageWrapperWithFooter>
  );
};

export default Habit2;
