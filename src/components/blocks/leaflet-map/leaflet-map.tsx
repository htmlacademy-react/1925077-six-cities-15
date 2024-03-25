import {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {DEFAULT_ZOOM, MARKER_CURRENT, MARKER_DEFAULT, MARKER_SIZE} from '../../../consts/leaflet-map-consts';
import {OfferProps} from '../../../types/common-types';
import {useMap} from '../../../hooks/use-leaflet-map';
import {useAppSelector} from '../../../hooks/redux-hooks';
import {offerSelectors} from '../../../redux/slices';

interface GenericOffer extends Pick<OfferProps, 'city' | 'id' | 'location'> {}

interface LeafletProps {
  offers: GenericOffer[];
  className?: string;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: MARKER_DEFAULT,
  ...MARKER_SIZE,
});

const currentCustomIcon = leaflet.icon({
  iconUrl: MARKER_CURRENT,
  ...MARKER_SIZE,
});

export function LeafletMap({offers, className}: LeafletProps) {
  const mapRef = useRef(null);
  const location = offers[0].city.location;
  const map = useMap(mapRef, location);
  const points = offers.map((offer) => offer.location);
  const activePoint = useAppSelector(offerSelectors.activeId);

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
      map.setView([location.latitude, location.longitude], DEFAULT_ZOOM);
    }
  }, [location, map, offers]);

  return (
    <section
      className={`${className}__map map`}
      ref={mapRef}
    >
    </section>
  );
}
