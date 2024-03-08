import React from 'react';
import { notification } from 'antd';
interface Iprop {
  type: NotificationType;
  message: string;
  description?: string;
  contextHolder?: any;
}
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const ToastNotification = ({
  type,
  message,
  description,
  contextHolder,
}: Iprop) => {
  message === undefined ? notification.open({
    duration: 5,
    type: type,
    message: "Something went wrong!",
    description: description,
  }) :
    notification.open({
      duration: 5,
      type: type,
      message: message,
      description: description,
    });

  return <>{contextHolder}</>;
};

export default ToastNotification;
