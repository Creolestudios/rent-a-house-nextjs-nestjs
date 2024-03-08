import Title from "../Title/Title";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "@/redux/admin/cms/cms.action";
import { RootState } from "@/redux/store/rootReducer";
import { Container } from "@/globalStyles";
import { PolicyWrapper } from "../TermsConditions/TermsCondition.styles";

function CookiePolicy({ isEdit }: any) {
  const dispatch = useDispatch();
  const pageContent = useSelector(
    (state: RootState) => state.staticPageReducer.pageContent
  );
  useEffect(() => {
    dispatch(actions.getContent({ pageName: "cookie-policy" }));
  }, []);
  let data = pageContent && JSON.parse(pageContent);

  return (
      <Container>
    <PolicyWrapper>
      <Title
        title={data?.cookiePolicyTitle} 
        isEdit={isEdit}
        id="cookiePolicyTitle"
      />
      <p contentEditable={isEdit} id="cookiePolicySubTitle">
        {data?.cookiePolicySubTitle}
      </p>
    </PolicyWrapper>
      </Container>
  );
}

export default CookiePolicy;
