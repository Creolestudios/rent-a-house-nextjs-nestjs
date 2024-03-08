import React, { useEffect } from 'react';
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import { googleApiKey } from '@/config/constants';

interface MapProps {
  mapContainerStyle: React.CSSProperties;
  center: google.maps.LatLngLiteral;
  propertyData: any;
}
import { useRouter } from 'next/router';
import CommonCard from '../CommonCard/CommonCard';
const markerIcon = {
  url: '/house.svg', // Replace with the path to your image file
};

const MapView: React.FC<MapProps> = ({ mapContainerStyle, propertyData }) => {
  const router = useRouter();
  const [isInfoWindowOpen, setInfoWindowOpen] = React.useState();
  const [center, setCenter] = React.useState({
    lat: propertyData?.[0]?.latitude,
    lng: propertyData?.[0]?.longitude,
  });

  // code from the package
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleApiKey,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    // <LoadScript googleMapsApiKey={googleApiKey}>
    isLoaded && (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={11}
        onCenterChanged={() => {
          setTimeout(() => {
            setCenter(undefined);
          }, 1000);
        }}
        onZoomChanged={() => {
          setTimeout(() => {
            setCenter(undefined);
          }, 1000);
        }}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {propertyData.map((ele, key) => (
          <Marker
            position={{ lat: ele.latitude, lng: ele.longitude }}
            icon={markerIcon}
            onMouseOver={
              () => setInfoWindowOpen(ele.id)
              // setCenter({ lat: ele.latitude, lng: ele.longitude })
            }
            onMouseOut={() => setInfoWindowOpen(ele.id)}
            key={key}
            onClick={() => router.push(`/home/property-listing/${ele?.id}`)}
          >
            {isInfoWindowOpen === ele.id && (
              <InfoWindow onCloseClick={() => setInfoWindowOpen(undefined)}>
                <CommonCard
                  route={`/home/property-listing/${ele?.id}`}
                  item={ele}
                  className='map-cardview'
                />
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    )
    // </LoadScript>
  );
};

export default React.memo(MapView);
