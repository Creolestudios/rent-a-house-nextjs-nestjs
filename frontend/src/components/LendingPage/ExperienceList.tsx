import React, { useState } from "react";
import { ExperienceListWrapper } from "./LendingPage.styles";
import Image from "next/image";
import user1 from "@/assets/images/user1.png";
import user2 from "@/assets/images/user2.png";
import user3 from "@/assets/images/user3.png";
import { gql, useMutation } from "@apollo/client";

const listData = [
  {
    id: 1,
    user: user1,
    title: "This is Suzie. She just booked her new home",
    description:
      "“I was looking for a place for ages. Then I discovered RentSmartly. Within one week I found my new home!”",
  },
  {
    id: 2,
    user: user2,
    title: "This is Suzie. She just booked her new home",
    description:
      "“I was looking for a place for ages. Then I discovered RentSmartly. Within one week I found my new home!”",
  },
  {
    id: 3,
    user: user3,
    title: "This is Suzie. She just booked her new home",
    description:
      "“I was looking for a place for ages. Then I discovered RentSmartly. Within one week I found my new home!”",
  },
];

const ExperienceList = ({ isEdit, id, content }: any) => {
  const [img, setImg] = useState<any>();
  const [obj, setObj] = useState<any>({});

  const [mutate] = useMutation(gql`
    mutation ($file: Upload!) {
      uploadForCmsPage(file: $file)
    }
  `);
  const imageHandler = async (event,id) => {
    const file = event.target.files[0];
    let responseImage = await mutate({ variables: { file } });
    setObj((prevObj)=>{
      let newObj = {...prevObj};
      newObj[`ExperienceListImg${id}`]=responseImage.data.uploadForCmsPage;
      return newObj
    });
  };
  return (
    <ExperienceListWrapper>
      {listData.map((item, key) => (
        <div className="list" key={key}>
          <Image
            id={`ExperienceListImg${item?.id}`}
            onClick={() => {
              isEdit && document.getElementById(`ExperienceListImgInput${item?.id}`).click();
            }}
            className="list-img"
            // src={content[`ExperienceListImg${item?.id}`]}
            src={obj[`ExperienceListImg${item?.id}`]?obj[`ExperienceListImg${item?.id}`]:content[`ExperienceListImg${item?.id}`]}
            alt="list-img"
            width={320}
            height={400}
          />
          <input
            style={{ visibility: "hidden", display: "none" }}
            type="file"
            accept="image/*"
            id={`ExperienceListImgInput${item?.id}`}
            onChange={(e) => imageHandler(e,item?.id)}
          />
          <div
            className="title"
            contentEditable={isEdit}
            id={`${id}${item?.id}Title`}
          >
            {content[`${id}${item?.id}Title`]}
          </div>
          <div
            className="sub-title"
            contentEditable={isEdit}
            id={`${id}${item?.id}Description`}
          >
            {content[`${id}${item?.id}Description`]}
          </div>
        </div>
      ))}
    </ExperienceListWrapper>
  );
};

export default ExperienceList;
