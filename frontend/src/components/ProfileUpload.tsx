import React, { useEffect, useState } from 'react';
import { Form, Upload } from 'antd';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

interface Iprops {
  maxCount?: number;
  label?: string;
  rules?: any;
  name: string;
  form?: any;
  edit?: boolean;
}
const dummyRequest = ({ file, onSuccess }: any) => {
  setTimeout(() => {
    onSuccess('ok');
  }, 0);
};
const ProfileUpload = ({
  maxCount,
  name,
  label,
  form,
  edit,
  rules,
}: Iprops) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const fileName = Form.useWatch(name, form);

  useEffect(() => {
    if (edit && fileName !== undefined && fileName?.[0] !== undefined) {
      setFileList(fileName);
    }
  }, [fileName]); //eslint-disable-line

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const beforeUpload = (file: File) => {
    const isValidImage =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/jpg';
    if (!isValidImage) {
      form.setFields([
        {
          name: name,
          errors: ['Please upload JPG/ PNG/ JPEG files only.'],
        },
      ]);
      return Upload.LIST_IGNORE;
    }
    form.setFields([
      {
        name: name,
        errors: [''],
      },
    ]);
  };

  const handleChangeUpload = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    if (e.file.status === 'removed') {
      form.setFieldValue(name, e);
      return e && e.fileList;
    } else if (e.file.status === 'done') {
      return e;
    }
  };

  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      getValueFromEvent={handleChangeUpload}
    >
      <Upload
        listType='picture-card'
        fileList={fileList}
        onChange={onChange}
        customRequest={dummyRequest}
        onPreview={onPreview}
        maxCount={maxCount}
        accept={'image/*'}
        beforeUpload={beforeUpload}
      >
        {fileList.length >= 1 ? null : '+ Upload'}
      </Upload>
    </Form.Item>
  );
};

export default ProfileUpload;
