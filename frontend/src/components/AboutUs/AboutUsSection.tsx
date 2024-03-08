import { Container } from "@/globalStyles";
import React, { useEffect, useState } from "react";
import { AboutUsWrapper } from "./AboutUs.styles";
import img1 from "@/assets/images/about1.png";
import img2 from "@/assets/images/about2.png";
import img3 from "@/assets/images/about3.png";
import img4 from "@/assets/images/about4.png";
import img5 from "@/assets/images/about5.png";
import img6 from "@/assets/images/about6.png";
import img7 from "@/assets/images/about7.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { gql, useMutation } from "@apollo/client";

const data = [
  {
    id: 1,
    item: [img1],
  },
  {
    id: 2,
    item: [img2, img3],
  },
  {
    id: 3,
    item: [img4, img5],
  },
  {
    id: 4,
    item: [img6],
  },
  {
    id: 5,
    item: [img7],
  },
];

const AboutUsSection = ({ isEdit, isClicked, content }: any) => {
  const [mutate] = useMutation(gql`
    mutation ($file: Upload!) {
      uploadForCmsPage(file: $file)
    }
  `);
  const [obj, setObj] = useState<any>({});

  const { windowWidth } = useSelector((state: any) => state.appReducer);

  const imageHandler = async (event, index, i) => {
    const file = event.target.files[0];
    let responseImage = await mutate({ variables: { file } });
    setObj((prevObj) => {
      const newObj = { ...prevObj };
      newObj[`i${index}${i}`] = responseImage.data.uploadForCmsPage;
      return newObj;
    });

  };



  return (
    <AboutUsWrapper>
      <Container>
        <div className="header-wrapper">
          <div className="title" contentEditable={isEdit} id="about_us_1">
          {content && content.aboutUs1}
           
          </div>
          <div contentEditable={isEdit} id="about_us_2">
            {isEdit?(content && content.aboutUs2):
            (
              <p
                dangerouslySetInnerHTML={{
                  __html: content ? content.aboutUs2 : <></>,
                }}
              />
            )
            }
           
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu
            ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros
            dolor, elementum eu nisl eget, interdum mattis lorem. Phasellus
            sagittis scelerisque iaculis.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec,
            ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget,
            interdum mattis lorem. Phasellus sagittis scelerisque iaculis. */}
          </div>
        </div>

        {windowWidth < 768 ? (
          <div className="img-wrapper mobile-img-wrapper">
            {data.map((el, index): any =>
              el?.item.map((img: any, i) => (
                <>
                  <Image
                    id={`img${index}${i}`}
                    src={
                      obj[`i${index}${i}`]
                        ? obj[`i${index}${i}`]
                        : content?.[`img${index}${i}`]
                    }
                    width={216}
                    height={200}
                    alt="img"
                    onClick={() => {
                      if(isEdit){

                        document.getElementById(`i${index}${i}`).click();
                      }
                    }}
                  />
                  <input
                    style={{ visibility: "hidden", display: "none" }}
                    type="file"
                    accept="image/*"
                    id={`i${index}${i}`}
                    onChange={(e) => imageHandler(e, index, i)}
                  />
                </>
              ))
            )}
          </div>
        ) : (
          <div className="img-wrapper">
            {data.map((el, index): any => (
              <div key={el?.id} className={`img-grid index${index}`}>
                {el?.item.map((img: any, i) => (
                  <div>
                    <Image
                      id={`img${index}${i}`}
                      src={
                        obj[`i${index}${i}`]
                          ? obj[`i${index}${i}`]
                          : content?.[`img${index}${i}`]
                      }
                      width={216}
                      height={200}
                      alt="img"
                      onClick={() => {
                        if(isEdit){

                          document.getElementById(`i${index}${i}`).click();
                        }
                      }}
                    />

                    <input
                      style={{ visibility: "hidden", display: "none" }}
                      type="file"
                      accept="image/*"
                      id={`i${index}${i}`}
                      onChange={(e) => imageHandler(e, index, i)}
                      // onChange={

                      //     (event)=>{

                      //       const file = event.target.files[0];
                      //       if (file) {
                      //         const imageUrl = URL.createObjectURL(file);
                      //         setObj((prevObj) => {
                      //           const newObj = { ...prevObj };
                      //           newObj[`i${index}${i}`] = imageUrl;
                      //           return newObj;
                      //         });
                      //       }

                      //   }
                      // }
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </Container>
    </AboutUsWrapper>
  );
};

export default AboutUsSection;
