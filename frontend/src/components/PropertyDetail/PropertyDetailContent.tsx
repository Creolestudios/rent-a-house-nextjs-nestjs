import { facilityData, amenityData, houseRuleData } from "@/config/data";
import React from "react";
import CancelationPolicy from "./CancelationPolicy";
import CheckAvailability from "./CheckAvailability";
import Documents from "./Documents";
import InfoList from "./InfoList";
import PrefferedTenant from "./PrefferedTenant";
import { PropertyDetailContentWrapper } from "./PropertyDetail.styles";
import PropertyFaq from "./PropertyFaq";
import PropertyMember from "./PropertyMember";
import RentSummery from "./RentSummery";
import SafeGuard from "./SafeGuard";
import Spacification from "./Spacification";
import { useSelector } from "react-redux";
import RuleList from "./RuleList";

const PropertyDetailContent = () => {
  const propertyData = useSelector(
    (state: any) => state.propertyListingReducer.singleProperty
  );
  return (
    <PropertyDetailContentWrapper>
      <div className="left">
        <Spacification
          furnished={propertyData?.space_overview?.is_furnished}
          type={propertyData?.type}
          size={propertyData?.space_overview?.size}
          noOfPeople={propertyData?.space_overview?.peoples}
        />
        <InfoList
          data={propertyData?.facility}
          title="Facilities"
          link={true}
        />
        <InfoList data={propertyData?.amenity} title="Amenities" link={true} />
        <RuleList
          rules={propertyData?.rules_and_preference}
          title="House Rules"
          className="single-line"
          link={false}
        />
        <PrefferedTenant prefferedTenent={propertyData?.rules_and_preference} />
        <Documents />
        <RentSummery
          rent={propertyData?.rent}
          additional={propertyData?.additional_required_cost}
          minMonth={propertyData?.min_rental_period}
        />
        <CancelationPolicy />
        <PropertyFaq />
        <PropertyMember landlord={propertyData?.host_details} />
      </div>
      <div className="right">
        <CheckAvailability
          landlord={propertyData?.host_details}
          availableFrom={propertyData?.available_from}
          propertyData={propertyData}
        />
        <SafeGuard />
      </div>
    </PropertyDetailContentWrapper>
  );
};

export default PropertyDetailContent;
