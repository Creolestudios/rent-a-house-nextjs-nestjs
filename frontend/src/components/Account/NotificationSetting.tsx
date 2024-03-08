import React, { useEffect, useState } from "react";
import { DataWrapper } from "./Account.styles";
import { Avatar, Checkbox, DatePicker, Form, Input, Select } from "antd";
import Icon from "@ant-design/icons";
import downArrow from "@/assets/images/icons/DownArrowSvg";
import { CustomButton } from "@/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/rootReducer";
import actions from '@/redux/account/account.action';

type option = {
  id: number;
  language_code: string;
  name: string;
  __typename: string;
};

const NotificationSetting = ({ title }: any) => {
  const dispatch = useDispatch();
  const [id, setId] = useState<Number>();
  const languageList = useSelector(
    (state: RootState) => state.accountReducer.languageList
  );
  const userDetails = useSelector(
    (state: RootState) => state.accountReducer.userDetails
  );
  const [checkbox, setCheckbox] = useState<Number>(
    userDetails.notification_is_enable
  );
  const [language, setLanguage] = useState<Number>(
    userDetails.notification_language
  );



  useEffect(() => {
    setId(Number(sessionStorage.getItem("user_id")));
    dispatch(actions.getLanguageList());
  }, [languageList]);

  const handleChange = (value: any) => {
    setLanguage(Number(value));
  };

  const handleCheckbox = (e: any) => {
    e.target.checked ? setCheckbox(1) : setCheckbox(0);
  };

  const handleSave = (e: any) => {
    let payload = {
      id: id,
      notification_is_enable: checkbox,
      notification_language: language,
    };
    dispatch(actions.notificationSetting({ NotificationSetting: payload }));
  };
  return (
    <DataWrapper>
      <h3>{title}</h3>
      <Form style={{ maxWidth: "470px" }} onFinish={handleSave}>
        <Form.Item label="Notification language">
          <Select
            defaultValue={language}
            // style={{ width: 120 }}
            placeholder="Select"
            onChange={handleChange}
            suffixIcon={<Icon component={downArrow} />}
            options={languageList?.map((x: option) => {
              return {
                value: x.id,
                label: x.name,
              };
            })}
          />
          <Checkbox onChange={handleCheckbox} defaultChecked={checkbox === 1}>
            Enable SMS notifications
          </Checkbox>
        </Form.Item>
        <Form.Item className="btn-wrapper">
          <CustomButton className="fill">Save</CustomButton>
        </Form.Item>
      </Form>
    </DataWrapper>
  );
};

export default NotificationSetting;
