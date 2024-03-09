import {useEffect, useRef} from 'react';
// import {OfferProps} from '../../../types/common-types';
import {useMap} from './use-leaflet-map';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MARKER_CURRENT, MARKER_DEFAULT} from './const';


export interface LeafletMapProps {
  // title: string;
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface PointsProps {
  title: string;
  latitude: number;
  longitude: number;
}

type CityProps = {
  city: LeafletMapProps;
  points: PointsProps[];
}


export function LeafletMap({city, points}: CityProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  // const [selectedPoint, setSelectedPoint] = useState({});
  // const handleListItemHover = (listItemName) => {};

  const defaultCustomIcon = leaflet.icon({
    iconUrl: MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

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
