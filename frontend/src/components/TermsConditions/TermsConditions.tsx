import React, { useEffect } from "react";
import Title from "../Title/Title";
import { useDispatch, useSelector } from "react-redux";
import actions from "@/redux/admin/cms/cms.action";
import { RootState } from "@/redux/store/rootReducer";
import { Container } from "@/globalStyles";
import { PolicyWrapper } from "./TermsCondition.styles";

function TermsConditions({ isEdit }: any) {
  const dispatch = useDispatch();
  const pageContent = useSelector(
    (state: RootState) => state.staticPageReducer.pageContent
  );
  useEffect(() => {
    dispatch(actions.getContent({ pageName: "terms&conditions" }));
  }, []);
  let data = pageContent && JSON.parse(pageContent);

  return (
      <Container>
    <PolicyWrapper>
      <Title
        title={data?.termsConditionTitle}
        isEdit={isEdit}
        id="termsConditionTitle"
      />
      <p contentEditable={isEdit} id="termsConditionSubTitle">
        {data?.termsConditionSubTitle}
      </p>
    </PolicyWrapper>
      </Container>
  );
}

export default TermsConditions;
