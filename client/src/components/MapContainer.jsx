import { useState, useEffect, useRef } from "react";
import Map, { Marker } from "react-map-gl";
import "./MapContainer.css";
import Pin from "../images/pin.png";
import "mapbox-gl/dist/mapbox-gl.css";

const MapContainer = ({ points }) => {
    const [renderPoints, setRenderPoints] = useState([]);

    useEffect(() => {
        setRenderPoints(points);
    }, [points]);
    return (
        <div className='shadow'>
            <Map
                initialViewState={{
                    longitude: 151.26244,
                    latitude: -33.87854,
                    zoom: 11,
                    bearing: 0,
                    pitch: 0,
                }}
                style={{ width: "100%", height: "80vh" }}
                mapStyle='mapbox://styles/mapbox/dark-v10'
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
            >
                {" "}
                {renderPoints.map((point) => (
                    <Marker
                        key={point.long}
                        latitude={point.lat}
                        longitude={point.long}
                    >
                        <img src={Pin} alt='pin' height='40px' />
                    </Marker>
                ))}
            </Map>
        </div>
    );
};

export default MapContainer;
