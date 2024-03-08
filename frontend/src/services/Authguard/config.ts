// To access Local Storage

// Get data from Local Storage

export const getLocalItem = (name: string) => {
  const data: any = sessionStorage.getItem(name);

  if (name === 'token') {
    return data;
  } else {
    JSON.parse(data);
  }
};

// Set data to Local Storage

// export const setLocalItem = (name: string, value: string | number) => {
//   let data: any;

//   if (name === 'token') {
//     data = value;
//   } else {
//     data = JSON.stringify(value);
//   }

//   return sessionStorage.setItem(name, data);
// };

// // Remove Particular data from Local Storage
// export const removeLocalItem = (name: string) => {
//   return sessionStorage.removeItem(name);
// };

// // Clear all data from Local Storage
// export const clearLocalItem = (name: string) => {
//   return sessionStorage.clear();
// };
