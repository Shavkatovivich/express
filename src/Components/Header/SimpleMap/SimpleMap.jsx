import React, { useState } from "react";
import {
    GoogleMap,
    useJsApiLoader,
    DrawingManager,
} from "@react-google-maps/api";

export default function SimpleMap() {
    const [draw, setDraw] = useState(false);
    const key = "AIzaSyDYp1te-bQEhWE9P9yehRE3biB7LpSEh4U";
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: key,
        libraries: ["drawing"],
    });
    const center = {
        lat: -28,
        lng: 153.39,
    };
    const containerStyle = {
        width: "710px",
        height: "40vh",
        borderRadius: "10px",
    };
    const drawingOnLoad = (drawingManager) => {
        console.log(drawingManager);
    };
    const onPolygonComplete = (polygon) => {
        console.log(polygon);
    };
    setTimeout(() => {
        if (isLoaded === true) {
            setDraw(true);
        }
    }, 1000);

    return (
        <div>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                    onClick={(e) => console.log(e)}
                >
                    {draw && (
                        <DrawingManager
                            onLoad={drawingOnLoad}
                            onPolygonComplete={onPolygonComplete}
                            options={{
                                drawingControl: true,
                                drawingControlOptions: {
                                    drawingModes: [
                                        // window.google.maps.drawing.OverlayType.CIRCLE,
                                        window.google.maps.drawing.OverlayType.POLYGON,
                                        window.google.maps.drawing.OverlayType.POLYLINE,
                                        window.google.maps.drawing.OverlayType.RECTANGLE,
                                    ],
                                },
                            }}
                        />
                    )}
                </GoogleMap>
            )}
        </div>
    );
}
