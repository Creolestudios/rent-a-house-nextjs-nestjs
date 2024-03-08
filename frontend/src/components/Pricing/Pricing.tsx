import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@/globalStyles";
import { PricingWrapper } from "./Pricing.styles";
import TabList from "../TabList/TabList";
import PricingRenter from "./PricingRenter";
import PricingLendlord from "./PricingLendlord";
import FaqSection from "./FaqSection";
import actions from "@/redux/admin/cms/cms.action";
import { RootState } from "@/redux/store/rootReducer";

const tabList = [
  { id: 1, label: "Tenants" },
  { id: 2, label: "Landlords" },
];

const Pricing = ({ isEdit }: any) => {
  const dispatch = useDispatch();
  const pageContent = useSelector(
    (state: RootState) => state.cmsReducer.pageContent
  );
  const pageContentFaq = useSelector(
    (state: RootState) => state.cmsReducer?.priceFaq
  );
 
  // const newly = useSelector(
  //   (state: RootState) => state.cmsReducer?.cmsDetails[0]?.content
  // );
  const { activeTab } = useSelector((state: any) => state.appReducer);
  const [tabId, setTabId] = useState(1);

  useEffect(() => {
    dispatch(actions.getContent({ pageName: "pricing" }));

  }, []);


  let data = pageContent && JSON.parse(pageContent);



  let faq = pageContentFaq && JSON.parse(pageContentFaq);

  return (
    <PricingWrapper>
      <Container>
        <div className="heading-section">
          <div className="left">
            <h1 contentEditable={isEdit} id="pricing1">
              {data.pricing1}
            </h1>
            <p contentEditable={isEdit} id="pricing2">
              {data.pricing2}
            </p>
          </div>
          <div className="right">
            <TabList tabList={tabList} setTabId={setTabId} tabId={tabId} />
          </div>
        </div>
      </Container>
      {activeTab === 1 ? (
        <PricingRenter isEdit={isEdit} data={data} />
      ) : (
        <PricingLendlord isEdit={isEdit} data={data} />
      )}
      <FaqSection data={data} isEdit={isEdit} activeTab={activeTab}/>
    </PricingWrapper>
  );
};

export default Pricing;
