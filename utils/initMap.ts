import { Map } from 'mapbox-gl';


export const initMap = (container: HTMLDivElement, coords: [number, number]) => {
    
    const map = new Map({
        container,
        style: 'mapbox://styles/mapbox/streets-v12',
        pitchWithRotate: false,
        center: coords,
        zoom: 14,
        accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
        doubleClickZoom: false
    });
    return map
}