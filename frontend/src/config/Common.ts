import moment from 'moment';

// Disable dates before today
export const disabledDate = (current) => {
  const today = moment().startOf('day');
  return current && current < today;
};
