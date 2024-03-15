import {useEffect, useRef} from 'react';
import {useMap} from './use-leaflet-map';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MARKER_DEFAULT} from './const';
import {City} from '../../../types/common-types';


export interface PointsProps {
  latitude: number;
  longitude: number;
}

type CityProps = {
  city: City;
  points: PointsProps[];
  activeId: string;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// const currentCustomIcon = leaflet.icon({
//   iconUrl: MARKER_CURRENT,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40],
// });


export function LeafletMap({city, points, activeId}: CityProps) {
  const mapRef = useRef<HTMLElement>(null);
  const map = useMap(mapRef, city.location);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}
