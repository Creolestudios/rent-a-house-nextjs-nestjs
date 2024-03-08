import React, { useEffect, useState } from "react";
import { IntroductionSectionWrapper } from "./AboutUs.styles";
import introImg from "@/assets/images/intro-img.png";
import Image from "next/image";
import { Container } from "@/globalStyles";
import { gql, useMutation } from "@apollo/client";

const IntroductionSection = ({ isEdit, isClicked, content }: any) => {
  const [img, setImg] = useState<any>();
  const [mutate] = useMutation(gql`
    mutation ($file: Upload!) {
      uploadForCmsPage(file: $file)
    }
  `);
  const imageHandler = async (event) => {
    const file = event.target.files[0];
    let responseImage = await mutate({ variables: { file } });

    setImg(responseImage.data.uploadForCmsPage);
  };

  return (
    <IntroductionSectionWrapper>
      <Container className="container">
        <div className="left">
          <div className="title" contentEditable={isEdit} id="about_us_3">
          {content && content.aboutUs3}
          </div>
          <div contentEditable={isEdit} id="about_us_4">
            {isEdit ? (
              content && content.aboutUs4
            ) : (
              <p
                dangerouslySetInnerHTML={{
                  __html: content ? content.aboutUs4 : <></>,
                }}
              />
            )}

            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu.
              Curabitur eros dolor, elementum eu nisl eget, interdum mattis
              lorem. Phasellus sagittis scelerisque iaculis.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut
              porttitor nec, ullamcorper eu arcu. Curabitur eros dolor,
              elementum eu nisl eget, interdum mattis lorem. Phasellus sagittis
              scelerisque iaculis.
            </p>
            <p>
              Lorem ipsum dolor sit <strong>amet</strong>, consectetur
              adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec,
              ullamcorper eu arcu. <strong>Curabitur</strong> eros dolor,
              <strong>elementum</strong> eu nisl eget, interdum mattis lorem.
            </p> */}
          </div>
        </div>
        <div className="right">
          <div className="img-wrapper">
            <Image
              id="img8"
              src={img ? img : content.img8}
              width={540}
              height={282}
              alt="img"
              onClick={() => {
                if(isEdit){

                  document.getElementById("i8").click();
                }
              }}
            />
            <input
              style={{ visibility: "hidden", display: "none" }}
              accept="image/*"
              type="file"
              id="i8"
              onChange={imageHandler}
            />
          </div>
        </div>
      </Container>
    </IntroductionSectionWrapper>
  );
};

export default IntroductionSection;
