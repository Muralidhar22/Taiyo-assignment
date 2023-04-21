import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { useQuery } from "@tanstack/react-query";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { getCountryWiseDetails } from "../api/covidApi";
import { CountryCaseType } from "../types";
import MapPopup from "./MapPopup";

const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/7976/7976202.png",
    iconSize: [38, 38]
})

const Map = () => {
    const { data: markers, isLoading, error } = useQuery({
        queryKey: ['cases-country'],
        queryFn: getCountryWiseDetails,
    })
    
    if(!markers) {
        return null
    }
    
    if(isLoading) {
        return <div>Loading...</div>
    }
    
    if(error) {
        return <div>{JSON.stringify(error)}</div>
    }

    return(
        <div className="w-full h-full">
            <MapContainer center={[20, 77]} zoom={5} style={{ height: "90vh", width: "w-4/5" }} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup
                    chunkedLoading
                >
                    {markers?.map((marker: CountryCaseType) => {
                        return <Marker key={marker?.country} position={[marker.countryInfo.lat, marker.countryInfo.long]} icon={customIcon}>
                            <Popup className="font-inherit">
                                <MapPopup 
                                    activeCases={marker.active}
                                    countryName={marker.country}
                                    deaths={marker.deaths}
                                    recoveredCases={marker.recovered}
                                    />
                            </Popup>
                        </Marker>
                    })
                    }
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    )
}

export default Map;