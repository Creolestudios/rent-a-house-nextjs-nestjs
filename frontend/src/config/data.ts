import { color } from "@/styles/variable";
// import Icon from '@ant-design/icons';
import livingRoom from "@/assets/images/living-room.svg";
import gardenImg from "@/assets/images/garden.svg";
import toiletImg from "@/assets/images/toilet.svg";
import kitchenImg from "@/assets/images/kitchen.svg";
import sinkImg from "@/assets/images/bathroom.svg";
import balconyImg from "@/assets/images/balcony.svg";
import parkingImg from "@/assets/images/parking.svg";
import basementImg from "@/assets/images/basement.svg";
import checkCircle from "@/assets/images/icons/check-circle.svg";

export const data = [
  {
    id: 1,
    title: "Total Users",
    user: "2,000",
    high: "20%",
    icon: true,
    color: color.secondaryColor,
  },
  {
    id: 2,
    title: "Total Property Listed",
    property: "2,000",
    high: "20%",
    icon: true,
    color: color.secondaryColor,
  },
  {
    id: 3,
    title: "Total Revenue Generated",
    revenue: "$ 1,54,985.00",
    high: "50%",
    icon: true,
    color: color.secondaryColor,
  },
  {
    id: 4,
    title: "Last 30 days User Registration",
    userRegistration: "15",
    high: "",
    color: color.primaryColor,
  },
  {
    id: 5,
    title: "Last 30 days listings",
    listing: "0",
    high: "",
    color: color.primaryColor,
  },
  {
    id: 6,
    title: "Last 30 days earning",
    earning: "100",
    high: "",
    color: color.primaryColor,
  },
];

export const userData = [
  {
    id: 1,
    year: 2016,
    month: "Jan",
    userGain: 0,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    month: "Feb",
    userGain: 800,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    month: "Mar",
    userGain: 900,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    month: "Apr",
    userGain: 2000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    month: "May",
    userGain: 3200,
    userLost: 234,
  },
  {
    id: 6,
    year: 2020,
    month: "Jun",
    userGain: 2500,
    userLost: 234,
  },
  {
    id: 7,
    year: 2020,
    month: "Jul",
    userGain: 1800,
    userLost: 234,
  },
  {
    id: 8,
    year: 2020,
    month: "Aug",
    userGain: 1200,
    userLost: 234,
  },
  {
    id: 9,
    year: 2020,
    month: "Sep",
    userGain: 2200,
    userLost: 234,
  },
  {
    id: 10,
    year: 2020,
    month: "Oct",
    userGain: 3800,
    userLost: 234,
  },
  {
    id: 11,
    year: 2020,
    month: "Nov",
    userGain: 4700,
    userLost: 234,
  },
  {
    id: 12,
    year: 2020,
    month: "Dec",
    userGain: 2800,
    userLost: 234,
  },
];

export const facilityData = [
  {
    id: 1,
    label: "Private Living Room",
    icon: livingRoom,
  },
  {
    id: 2,
    label: "Shared Garden",
    icon: gardenImg,
  },
  {
    id: 3,
    label: "Private Toilet",
    icon: toiletImg,
  },
  {
    id: 4,
    label: "Private Kitchen",
    icon: kitchenImg,
  },
  {
    id: 5,
    label: "Private Bathroom",
    icon: sinkImg,
  },
  {
    id: 6,
    label: "Private Balcony",
    icon: balconyImg,
  },
  {
    id: 7,
    label: "Private Parking",
    icon: parkingImg,
  },
  {
    id: 8,
    label: "No Private Basement",
    icon: basementImg,
  },
];

export const amenityData = [
  {
    id: 1,
    label: "WiFi",
    icon: checkCircle,
  },
  {
    id: 2,
    label: "Living room furniture",
    icon: checkCircle,
  },
  {
    id: 3,
    label: "Bed",
    icon: checkCircle,
  },
  {
    id: 4,
    label: "TV",
    icon: checkCircle,
  },
  {
    id: 5,
    label: "Private kitchenware",
    icon: checkCircle,
  },
  {
    id: 6,
    label: "Washing machine",
    icon: checkCircle,
  },
  {
    id: 7,
    label: "Closet",
    icon: checkCircle,
  },
  {
    id: 8,
    label: "Gas heating",
    icon: checkCircle,
  },
  {
    id: 9,
    label: "Stone flooring",
    icon: checkCircle,
  },
  {
    id: 10,
    label: "Dishwasher",
    icon: checkCircle,
  },
  {
    id: 11,
    label: "Access friendly",
    icon: checkCircle,
  },
  {
    id: 12,
    label: "Desk",
    icon: checkCircle,
  },
  {
    id: 13,
    label: "No bedroom lock",
    icon: checkCircle,
  },
  {
    id: 14,
    label: "No air conditioning",
    icon: checkCircle,
  },
  {
    id: 15,
    label: "No dryer",
    icon: checkCircle,
  },
];

export const houseRuleData = [
  {
    id: 1,
    label: "Playing musical instruments negotiable",
    icon: balconyImg,
  },
  {
    id: 2,
    label: "Pets allowed",
    icon: parkingImg,
  },
  {
    id: 3,
    label: "Smoking allowed only outside",
    icon: basementImg,
  },
];
