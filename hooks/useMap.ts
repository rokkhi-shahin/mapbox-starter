import { useEffect, useRef } from 'react';
import { Map } from 'mapbox-gl';
import { initMap } from '../utils/initMap';
import { generateNewMarker } from '../utils/generateNewMarker';
import MapMarkerData from '../dummy-data/MapMarkerData';

export const useMap = (container: React.RefObject<HTMLDivElement>) => {

    const mapInitRef = useRef<Map | null>(null);

    useEffect(() => {
        if (container.current) {

            mapInitRef.current = initMap(
                container.current,
                [90.405327, 23.792638]
            );

        }
    }, []);


    // useEffect(() => {
    //     mapInitRef.current && mapInitRef.current.on('dblclick', ({ lngLat }) => generateNewMarker({ map: mapInitRef.current!, ...lngLat }))

    //     return () => { mapInitRef.current?.off('dblclick', generateNewMarker) }
    // }, [])


    useEffect(() => {
        mapInitRef.current && mapInitRef.current.on('load',
            () => MapMarkerData.map(geo_location =>
                generateNewMarker({ map: mapInitRef.current!, lat: geo_location.lat, lng: geo_location.lng })
            )
        )
        return () => { mapInitRef.current?.off('load', generateNewMarker) }
    }, [])
}