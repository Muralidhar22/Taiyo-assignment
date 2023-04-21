type MapPopupProps = {
    countryName: string;
    activeCases: number;
    recoveredCases: number;
    deaths: number
}

const MapPopup = ({
    countryName,
    activeCases,
    recoveredCases,
    deaths
 }: MapPopupProps) => {
    return (
        <>
            <ul>
                <li>Country:&nbsp;<span className="font-bold">{countryName}</span> </li>
                <li>Active:&nbsp;<span className="font-bold">{activeCases}</span> </li>
                <li>Recovered:&nbsp;<span className="font-bold">{recoveredCases}</span> </li>
                <li>Deaths:&nbsp;<span className="font-bold">{deaths}</span> </li>
            </ul>
        </>
    )    
}

export default MapPopup;