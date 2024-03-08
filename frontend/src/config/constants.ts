import parkingImg from '@/assets/images/parking.svg';
import gardenImg from '@/assets/images/garden.svg';
import toiletImg from '@/assets/images/toilet.svg';
import balconyImg from '@/assets/images/balcony.svg';
import kitchenImg from '@/assets/images/kitchen.svg';
import checkCircle from '@/assets/images/icons/check-circle.svg';
import document from '@/assets/images/file.png';
import petAllow from '@/assets/images/pet.svg';

export const appConstant = {
  formValidation: {
    emailRequired: 'Please enter your email.',
    emailValidate: 'Please enter valid email.',
    userNameRequired: 'Please enter your username',
    firstNameRequired: 'Please enter first name',
    lastNameRequired: 'Please enter last name',
    passwordRequired: 'Please enter your password',
    siteNameRequired: 'Please enter site name.',
    contactRequired: 'Please enter contact number',
    contactValidate: 'Please enter valid contact.',
    addressRequired: 'Please enter address',
    messageRequired: 'Please enter your message',
    passwordValidation:
      'Minimum eight characters, at least one letter, one number, one capital and one special character',
    passwordNotMatch: 'The two passwords that you entered do not match!',
    status: 'Please select admin status.',
    role: 'Please select admin role.',
    commission: 'Please enter commission.',
    message: 'Please enter your message',
  },
  placeHolder: {
    email: 'Enter Your Email',
    userName: 'Enter Username',
    password: 'Enter Your Password',
    confirmPassword: 'Enter your password again',
    contact: 'Enter your Contact number',
  },
  dasboardTotalUser: 'Total users registered this year: ',
  inquiryMessage: `Hello, I’m interested in your apartment. Hope to hear back from you soon.`,
  noProperty: 'Oops! No property found.',
  minMaxRequired: 'Please enter minimum and maximum*',
  propertyListing: {
    propertyType: 'Please select property type.',
    propertyName: 'Please select property name.',
    countryId: 'Please select country.',
    stateId: 'Please select state.',
    cityId: 'Please select city.',
    houseNo: 'Please enter street / house number.',
    postal: 'Please enter postal code.',
    availability: 'Please select date.',
    rentMonth: 'Please enter rent per month.',
    min: 'Please enter minimum months.',
    max: 'Please enter maximum months property available.',
    bedroom: 'Please enter number of bedrooms.',
    details: 'Please enter the description of property.',
    people: 'Please enter the number of people can accomodate.',
  },
};

export const passwordValidationRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const mobileValidationRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const propertyDocuments = [
  { value: 0, label: 'Not required' },
  { value: 1, label: 'Proof of identity' },
  { value: 2, label: 'Proof of occupation' },
  { value: 3, label: 'Both Proof of identity and Proof of occupation' },
];

export const contractType = [
  { value: 0, label: 'Monthly' },
  { value: 1, label: 'Yearly ' },
];

export const policyType = [
  { value: 0, label: 'Standard' },
  { value: 1, label: 'Flexible ' },
];

export const gender = [
  { value: 0, label: 'Male' },
  { value: 1, label: 'Female' },
  { value: 2, label: 'Other' },
];

export const tenantHistoryStatus = [
  { value: 0, label: 'Inquiry' },
  { value: 1, label: 'Pending' },
  { value: 2, label: 'Request' },
  { value: 3, label: 'Accept' },
  { value: 4, label: 'Confirm' },
  { value: 5, label: 'Reject' },
];

export const adminStatus = [
  { value: 0, label: 'Inactive' },
  { value: 1, label: 'Active' },
];

export const tenantStatus = [
  { value: 0, label: 'Inquiry' },
  { value: 1, label: 'Pending' },
  { value: 2, label: 'Request' },
  { value: 3, label: 'Accept' },
  { value: 4, label: 'Confirm' },
  { value: 5, label: 'Reject' },
];

export const adminReservationStatus=[
  {value:0,label:'Upcoming'},
  {value:1,label:'On Going'},
  {value:2,label:'Completed'},
  {value:3,label:'Cancelled'},

]

export const prefferedTenentType = [
  { value: 0, label: 'Student' },
  { value: 1, label: 'Working professional' },
  { value: 2, label: 'Students or working professionals' },
];

export const adminRole = [
  { value: 0, label: 'Viewer' },
  { value: 1, label: 'Admin' },
];

export const petRule = [
  { value: 0, label: 'Allowed' },
  { value: 1, label: 'Not allowed' },
  { value: 2, label: 'Need Permission' },
];

export const safeGuard = {
  title: '48-hour safeguard',
  body: 'If you move in and find that the property doesn’t match its listing description, let us know within 48 hours and you could get a full refund.',
};

export const propertyType = [
  { value: 'Studio Apartment', label: 'Studio Apartment' },
  {
    value: '2, 3, 4 bhk Apartment',
    label: '2, 3, 4 bhk Apartment',
  },
  { value: 'Duplex Apartments', label: 'Duplex Apartments' },
  {
    value: 'Penthouse Apartments',
    label: 'Penthouse Apartments',
  },
  { value: 'Row Houses', label: 'Row Houses' },
  { value: 'Villa Apartments', label: 'Villa Apartments' },
  { value: 'Shared Room', label: 'Shared Room' },
];

export const facilityIcon = {
  ['Basement Parking']: parkingImg,
  ['Shared Garden']: gardenImg,
  ['Private Room']: toiletImg,
  ['Balcony']: balconyImg,
  ['Kitchen']: kitchenImg,
  ['WiFi']: checkCircle,
  ['Living Room Furniture']: checkCircle,
  ['Bed']: checkCircle,
  ['TV']: checkCircle,
  ['Private Kitchenware']: checkCircle,
  ['Washing Machine']: checkCircle,
  ['Closet']: checkCircle,
  ['Gas Heating']: checkCircle,
  ['Stone Flooring']: checkCircle,
  ['Dishwasher']: checkCircle,
  ['Access Friendly']: checkCircle,
  ['Desk']: checkCircle,
  ['No bedroom lock']: checkCircle,
  ['No air conditioning']: checkCircle,
  ['No dryer']: checkCircle,
  ['document']: document,
  ['pet rule']: petAllow,
};

export const contractTypeData = [
  {
    id: 0,
    title: 'Monthly',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis posuere ante, quis condimentum augue tincidunt nec.',
  },
  {
    id: 1,
    title: 'Yearly',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis posuere ante, quis condimentum augue tincidunt nec.',
  },
];

export const cancelationPolicyData = [
  {
    id: 1,
    title: 'Standard',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis posuere ante, quis condimentum augue tincidunt nec.',
  },
  {
    id: 2,
    title: 'Flexible',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis posuere ante, quis condimentum augue tincidunt nec.',
  },
];

export const commissionFrom = [
  { value: 0, label: 'Tenant' },
  { value: 1, label: 'Landlord' },
  { value: 2, label: 'Both' },
];

export const propertyView = [
  { id: 1, label: 'Grid view' },
  { id: 2, label: 'Map view' },
];

export const sortData = [
  {
    label: 'Price',
    value: 1,
  },
  {
    label: 'Availability',
    value: 2,
  },
  {
    label: 'Newest',
    value: 3,
  },
  {
    label: 'Popurality',
    value: 4,
  },
  {
    label: 'Name ',
    value: 5,
  },
];

export const propertyStatus = [
  { value: 0, label: 'draft' },
  { value: 1, label: 'unpublished' },
  { value: 2, label: 'published' },
  { value: 3, label: 'all' },
];
