import React, { useEffect } from "react";
import Title from "../Title/Title";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/rootReducer";
import actions from "@/redux/admin/cms/cms.action";
import { Container } from "@/globalStyles";
import { PolicyWrapper } from "../TermsConditions/TermsCondition.styles";

function PrivacyPolicy({ isEdit }: any) {
  const dispatch = useDispatch();
  const pageContent = useSelector(
    (state: RootState) => state.staticPageReducer.pageContent
  );
  useEffect(() => {
    dispatch(actions.getContent({ pageName: "privacy-policy" }));
  }, []);
  let data = pageContent && JSON.parse(pageContent);

  return (
    <Container>
      <PolicyWrapper>
      <Title
        title={data.privacyPolicyTitle}
        id="privacyPolicyTitle"
        isEdit={isEdit}
      />
      <p contentEditable={isEdit} id="privacyPolicySubTitle">
        {data?.privacyPolicySubTitle}
      </p>
      </PolicyWrapper>
    </Container>
  );
}

export default PrivacyPolicy;
