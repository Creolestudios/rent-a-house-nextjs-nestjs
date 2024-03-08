import React from "react";
import { FaqWrapper } from "./Pricing.styles";
import { Collapse } from "antd";
import Icon from "@ant-design/icons";
import downArrow from "@/assets/images/icons/DownArrowSvg";

const { Panel } = Collapse;

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

const Faq = ({ isEdit, content,id }: any) => {
  // return (
  //   <FaqWrapper className="faq-block">
  //     <Collapse
  //       accordion
  //       defaultActiveKey={["1"]}
  //       expandIcon={() => <Icon component={downArrow} />}
  //     >
  //       {data.map((item: any) => (
  //         <Panel
  //           header={ id === 'tenant'?
  //             <div contentEditable={isEdit} id={`faqHeading${item?.id}${id}`}>
  //               {content && content[`faq${item?.id + 8}`]}
  //             </div>
  //             :
  //             <div contentEditable={isEdit} id={`faqHeading${item?.id}${id}`}>
  //             {content && content[`faq${item?.id + 13}`]}
  //           </div>
  //           }
  //           key={item?.id}
  //         >{
  //           id === 'tenant'?
  //           <p contentEditable={isEdit} id={`faqdesc${item?.id}${id}`}>
  //             {/* {item?.description} */}
  //             {content && content[`faq${item?.id + 2}`]}
  //           </p>
  //           :
  //           <p contentEditable={isEdit} id={`faqdesc${item?.id}${id}`}>
  //             {/* {item?.description} */}
  //             {content && content[`faq${item?.id + 17}`]}
  //           </p>
  //         }
            
  //         </Panel>
  //       ))}
  //     </Collapse>
  //   </FaqWrapper>
  // );
   return (
    <FaqWrapper className="faq-block">
      <Collapse
        accordion
        defaultActiveKey={["1"]}
        expandIcon={() => <Icon component={downArrow} />}
      >
        {/* for price faq tennant */}
        {id === 'PriceTenant' && 
        (
           data.map((item: any) => (   
          <Panel
            header={ 
              <div contentEditable={isEdit} id={`faqHeading${item?.id}${id}`}>
                {content && content[`pricing${item?.id + 30}`]}
              </div>
            
             
            }
            key={item?.id}
          >{
          
            <p contentEditable={isEdit} id={`faqdesc${item?.id}${id}`}>
              {content && content[`pricing${item?.id + 34}`]}
            </p>
           
          }
            
          </Panel>
        ))
        )
        }

           {/* for price faq landlord */}
           {id === 'PriceLandlord' && 
        (
           data.map((item: any) => (   
          <Panel
            header={ 
              <div contentEditable={isEdit} id={`faqHeading${item?.id}${id}`}>
                {content && content[`faqHeading${item?.id}PriceLandlord`]}
              </div>
            
             
            }
            key={item?.id}
          >{
          
            <p contentEditable={isEdit} id={`faqdesc${item?.id}${id}`}>
              {content && content[`faqdesc${item?.id}PriceLandlord`]}
            </p>
           
          }
            
          </Panel>
        ))
        )
        }

        { id !== 'PriceTenant' && id !== 'PriceLandlord' &&
        (data.map((item: any) => (   
          <Panel
            header={ id === 'tenant'?
              <div contentEditable={isEdit} id={`faqHeading${item?.id}${id}`}>
                {content && content[`faq${item?.id + 8}`]}
              </div>
              :
              <div contentEditable={isEdit} id={`faqHeading${item?.id}${id}`}>
              {content && content[`faq${item?.id + 13}`]}
            </div>
            }
            key={item?.id}
          >{
            id === 'tenant'?
            <p contentEditable={isEdit} id={`faqdesc${item?.id}${id}`}>
              {/* {item?.description} */}
              {content && content[`faq${item?.id + 2}`]}
            </p>
            :
            <p contentEditable={isEdit} id={`faqdesc${item?.id}${id}`}>
              {/* {item?.description} */}
              {content && content[`faq${item?.id + 17}`]}
            </p>
          }
            
          </Panel>
        )))
        }
      </Collapse>
    </FaqWrapper>
  );
};

export default Faq;
