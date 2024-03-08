import React, { useState } from 'react';
import { AddLanguageWrapper } from './AllLanguage.styles';
import { Select, Form } from 'antd';
import { CustomButton } from '@/globalStyles';
import Icon from '@ant-design/icons';
import downArrow from '@/assets/images/icons/DownArrowSvg';
import { useDispatch, useSelector } from 'react-redux';
import appActions from '@/redux/app/app.action';
import actions from '@/redux/admin/languages/languages.action';

const AddLanguage = ({ setIsModalOpen, languageList }: any) => {
  const dispatch = useDispatch();
  const [payload, setPayload] = useState<any>({});
  const option: any = languageList?.map((item: any) => {
    return {
      value: item.code.toUpperCase(),
      label: `${item.name} (${item.code.toUpperCase()})`,
    };
  });

  const handleSelect = (value: any) => {
    const selectLabel = languageList.find(
      (i: any) => i.code === value.toLowerCase()
    );
    setPayload({
      name: selectLabel.name,
      language_code: selectLabel.code.toUpperCase(),
    });
  };
  const handleSave = () => {
    dispatch(actions.createLanguage({ createLanguageInput: payload }));
  };

  return (
    <AddLanguageWrapper>
      <Form>
        <Form.Item name='language' label='Select Language'>
          <Select
            placeholder='Select Language'
            suffixIcon={<Icon component={downArrow} />}
            onSelect={handleSelect}
            options={option}
          />
        </Form.Item>
        <Form.Item>
          <div className='btn-wrapper'>
            <CustomButton
              className='fill'
              onClick={() => {
                setIsModalOpen(false);
                handleSave();
              }}
            >
              Add
            </CustomButton>
            <CustomButton onClick={() => setIsModalOpen(false)}>
              Cancel
            </CustomButton>
          </div>
        </Form.Item>
      </Form>
    </AddLanguageWrapper>
  );
};

export default AddLanguage;
