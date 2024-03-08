import React from 'react';
import Faq from '../Pricing/Faq';
import Title from '../Title/Title';
import { SendBookingFaqWrapper } from './InquiryRequest.styles';
import { color , fontFamily} from '@/styles/variable';
import { FaqWrapper } from "../Pricing/Pricing.styles";
import { Collapse } from "antd";
const { Panel } = Collapse;
import Icon from "@ant-design/icons";
import downArrow from "@/assets/images/icons/DownArrowSvg";

const SendBookingFaq = () => {
  const data = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem.",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem.",
    },
  ];
  return (
    <SendBookingFaqWrapper>
        <Title title="How to book this property" color={`${color.blackColor}`} fontFamily={`${fontFamily.ptBold}`} marginBottom={"10px"} />
      {/* <Faq /> */}
      <FaqWrapper className="faq-block">
        <Collapse
          accordion
          defaultActiveKey={["1"]}
          expandIcon={() => <Icon component={downArrow} />}
        >
          {data.map((item: any) => (
            <Panel header={<div>{item?.title}</div>} key={item?.id}>
              {<p>{item?.description}</p>}
            </Panel>
          ))}
        </Collapse>
      </FaqWrapper>
    </SendBookingFaqWrapper>
  );
};

export default SendBookingFaq;
