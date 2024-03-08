import { Container } from "@/globalStyles";
import React, { useEffect } from "react";
import GetStartedSection from "../RenterLendlord/GetStartedSection";
import AboutUsSection from "./AboutUsSection";
import IntroductionSection from "./IntroductionSection";
import WorkIntroSection from "./WorkIntroSection";
import actions from "@/redux/admin/cms/cms.action";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "@/redux/store/rootReducer";

const AboutUs = ({ isEdit, isClicked }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pageContent = useSelector(
    (state: RootState) => state.staticPageReducer.pageContent
  );
  useEffect(() => {
    dispatch(actions.getContent({ pageName: 'about-us' }));
  }, []);
  let data = pageContent && JSON.parse(pageContent);
  return (
    <div>
      {/* {pageContent && (
        <div
          dangerouslySetInnerHTML={{
            __html: pageContent,
          }}
        ></div>
      )} */}

      <AboutUsSection isEdit={isEdit} isClicked={isClicked} content={data} />
      <IntroductionSection
        isEdit={isEdit}
        isClicked={isClicked}
        content={data}
      />
      <WorkIntroSection isEdit={isEdit} isClicked={isClicked} content={data} />
      <Container>
        <GetStartedSection />
      </Container>
    </div>
  );
};

export default AboutUs;
