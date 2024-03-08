import React, { useEffect, useState } from "react";
import { DataWrapper } from "./Account.styles";
import {
  Avatar,
  DatePicker,
  Form,
  Input,
  Select,
  Upload,
  UploadFile,
} from "antd";
import Icon from "@ant-design/icons";
import downArrow from "@/assets/images/icons/DownArrowSvg";
import calenderIcon from "@/assets/images/icons/CalenderSvg";
import { CustomButton } from "@/globalStyles";
import dayjs from "dayjs";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import actions from "@/redux/account/account.action";
import { RcFile, UploadProps } from "antd/es/upload";
import { RootState } from "@/redux/store/rootReducer";
import ProfileUpload from "../ProfileUpload";
import { useRouter } from "next/router";

const Profile = ({ title }: any) => {
  const dispatch = useDispatch();
  const [id, setId] = useState<Number>();
  const [remove, setRemove] = useState(false);
  const router = useRouter();


  const [profileForm] = Form.useForm();
  const userDetails = useSelector(
    (state: RootState) => state.accountReducer.userDetails
  );
  const [selectedDate, setSelectedDate] = useState<any>(
    dayjs(userDetails.dob, "YYYY-MM-DD")
  );
  const countryList = useSelector(
    (state: RootState) => state.accountReducer.countryList
  );
  const accountRemove = useSelector(
    (state: RootState) => state.accountReducer.accountRemoved
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    console.log("we form useEffect",id)
   
    if (id || userDetails.id) {
      console.log("after id")
      if (Object.keys(userDetails).length !== 0) {
        profileForm.setFieldsValue({
          first_name: userDetails.first_name,
          last_name: userDetails.last_name,
          address: userDetails.address,
          email: userDetails.email,
          country_id: userDetails.country_id,
          gender: userDetails.gender,
          dob:
            userDetails.dob === null
              ? undefined
              : dayjs(userDetails.dob, "YYYY-MM-DD"),
          occupation: userDetails.occupation,
          image:
            userDetails?.image?.split("/")?.[6] === "profile-avtar.png"
              ? null
              : [
                  {
                    uid: 1,
                    name: "profile",
                    thumbUrl: userDetails.image,
                    url: userDetails.image,
                  },
                ],
        });
      }
    }
  }, [userDetails]);

  useEffect(() => {
    console.log("getting id")
    setId(Number(sessionStorage.getItem("user_id")));
  },[]);

  useEffect(() => {
    dispatch(
      actions.getUserDetails({ id: Number(sessionStorage.getItem("user_id")) })
    );
    dispatch(actions.getCountryList());
  }, [id]);

  const handleSave = (values) => {
    if (remove) {
      console.log("remove");
      let user_id = Number(sessionStorage.getItem("user_id"));
      let id = { user_id: user_id };
      dispatch(actions.removeProfile(id));
      return;
    }
    console.log("update");
    let payload;
    if (
      Array.isArray(profileForm.getFieldValue("image")) &&
      profileForm.getFieldValue("image").length === 0
    ) {
      payload = {
        UpdateUserProfileOnly: {
          first_name: values.first_name,
          last_name: values.last_name,
          address: values.address,
          occupation: values.occupation,
          gender:values.gender,
          dob:
            values.dob !== null
              ? moment(dayjs(values.dob).toDate()).format("YYYY-MM-DD")
              : null,
          id: Number(id),
          image: null,
        },
      };
    } else if (
      Array.isArray(profileForm.getFieldValue("image")) &&
      profileForm.getFieldValue("image").length === 1
    ) {
      payload = {
        UpdateUserProfileOnly: {
          first_name: values.first_name,
          last_name: values.last_name,
          address: values.address,
          occupation: values.occupation,
          gender:values.gender,
          dob:
            values.dob !== null
              ? moment(dayjs(values.dob).toDate()).format("YYYY-MM-DD")
              : null,
          id: Number(id),
        },
      };
    } else {
      payload = {
        image: values.image?.file?.originFileObj,
        UpdateUserProfileOnly: {
          first_name: values.first_name,
          last_name: values.last_name,
          address: values.address,
          occupation: values.occupation,
          gender:values.gender,

          dob:
            values.dob !== null
              ? moment(dayjs(values.dob).toDate()).format("YYYY-MM-DD")
              : null,
          id: Number(id),
        },
      };
    }

    dispatch(actions.updateProfile(payload));
    dispatch(actions.getUserDetails({ id }));

    console.log("values",values)
  };
  useEffect(() => {
    if(accountRemove){

      router.push('/home')
      console.log("first", accountRemove);
      dispatch(actions.resettingRemoveFlag())
    }
  }, [accountRemove]);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>
        Add <br /> Media
      </div>
    </div>
  );
  return (
    <DataWrapper>
      <h3>{title}</h3>
      <Form onFinish={handleSave} form={profileForm}>
        <Form.Item name="image">
          <div className="avatar">
            <ProfileUpload
              maxCount={1}
              form={profileForm}
              name="image"
              label="Upload Photo"
              edit={true}
            />
          </div>
        </Form.Item>
        <Form.Item label="Name">
          <Form.Item name="first_name" className="w-50">
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item name="last_name" className="w-50 mr-remove">
            <Input placeholder="Last Name" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="address">
          <Form.Item name="country_id">
            <Select
              placeholder="Select Country*"
              suffixIcon={<Icon component={downArrow} />}
              options={countryList.map((item: any) => {
                return {
                  value: item.id,
                  label: item.name,
                };
              })}
            />
          </Form.Item>
          <Form.Item name="address">
            <Input placeholder="Enter Street/House no." />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Gender" className="w-33" name="gender">
          <Select
            placeholder="Select Gender*"
            suffixIcon={<Icon component={downArrow} />}
            options={[
              { value: 0, label: "Male" },
              { value: 1, label: "Female" },
            ]}
          />
        </Form.Item>
        {
          <Form.Item name="dob" label="Birthdate" className="w-33">
            <DatePicker
              format={"YYYY-MM-DD"}
              value={selectedDate !== null ? selectedDate : undefined}
              placeholder="DOB"
              suffixIcon={<Icon component={calenderIcon} />}
              onChange={handleDateChange}
            />
          </Form.Item>
        }
        <Form.Item
          label="Occupation"
          className="w-33 mr-remove"
          name="occupation"
        >
          <Input placeholder="Enter Occupation*" />
        </Form.Item>
        <Form.Item className="btn-wrapper">
          <CustomButton
            onClick={() => {
              setRemove(true);
            }}
          >
            Remove Account
          </CustomButton>
          <CustomButton className="fill" type="submit">
            Save
          </CustomButton>
        </Form.Item>
      </Form>
    </DataWrapper>
  );
};

export default Profile;
