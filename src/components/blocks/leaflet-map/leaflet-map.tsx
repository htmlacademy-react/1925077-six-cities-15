import {useEffect, useRef} from 'react';
import {useMap} from './use-leaflet-map';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MARKER_CURRENT, MARKER_DEFAULT} from './const';
import {OfferProps} from '../../../types/common-types';

interface GenericOffer extends Pick<OfferProps, 'city' | 'id' | 'location'> {}

interface LeafletProps {
  offers: GenericOffer[];
  activePoint?: string;
}

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

export function LeafletMap({offers, activePoint}: LeafletProps) {
  const mapRef = useRef(null);
  const location = offers[0].city.location;
  const map = useMap(mapRef, location);
  const points = offers.map((offer) => offer.location);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      points.forEach((point, index) => {
        const icon = activePoint === offers[index].id ? currentCustomIcon : defaultCustomIcon;
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: icon,
          })
          .addTo(map);
      });
    }
  }, [map, points, activePoint, offers]);

  useEffect(() => {
    if (map && location) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [location, map, offers]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}
