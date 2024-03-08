import React, { useEffect, useState } from "react";
import { Container } from "@/globalStyles";
import { WorkIntroWrapper } from "./AboutUs.styles";
import Image from "next/image";
import workImg from "@/assets/images/work-img.png";
import { DatePicker } from "antd";
import { gql, useMutation } from "@apollo/client";

const WorkIntroSection = ({ isEdit, isClicked, content }: any) => {
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
    <WorkIntroWrapper>
      <Container>
        <div className="header-wrapper">
          <div className="title" contentEditable={isEdit} id="about_us_5">
            {content && content.aboutUs5}
          </div>
          <div contentEditable={isEdit} id="about_us_6">
          {isEdit ? (content && content.aboutUs6):(
              <p
                dangerouslySetInnerHTML={{
                  __html: content ? content.aboutUs6:<></>,
                }}
              />
            )}
          </div>
        </div>
        <div className="img-wrapper">
          <Image
            id="img9"
            src={img ? img : content.img9}
            width={1120}
            height={210}
            alt="img"
            onClick={() => {if(isEdit){

              document.getElementById("i9").click();
            }
            }}
          />
          <input
            style={{ visibility: "hidden", display: "none" }}
            accept="image/*"
            type="file"
            id="i9"
            onChange={imageHandler}
          />
        </div>

        <div className="content-area" contentEditable={isEdit} id="about_us_7">
        {isEdit ? (content && content.aboutUs7):(
              <p
                dangerouslySetInnerHTML={{
                  __html: content ? content.aboutUs7:<></>,
                }}
              />
            )}

          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
            semper aenean sed sit ut. Risus interdum metus non facilisis aliquet
            erat aliquet imperdiet pulvinar. Justo magna odio pharetra est
            semper nisi. Nunc, euismod mauris nam sem. Velit fermentum porttitor
            praesent ac. Feugiat nam ipsum ut tincidunt at fermentum
            suspendisse. Nullam quam etiam hendrerit risus tellus rhoncus,
            bibendum.
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
              semper aenean sed sit ut.
            </li>
            <li>
              Risus interdum metus non facilisis aliquet erat aliquet imperdiet
              pulvinar.{" "}
            </li>
            <li>
              Justo magna odio pharetra est semper nisi. Nunc, euismod mauris
              nam sem.{" "}
            </li>
            <li>
              Velit fermentum porttitor praesent ac. Feugiat nam ipsum ut
              tincidunt at fermentum suspendisse.{" "}
            </li>
            <li>Nullam quam etiam hendrerit risus tellus rhoncus, bibendum.</li>
          </ul> */}
        </div>
      </Container>
    </WorkIntroWrapper>
  );
};

export default WorkIntroSection;
