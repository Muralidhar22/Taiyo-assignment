import { Line,  } from "react-chartjs-2";
import { Chart as ChartJs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from "chart.js";
import { useQuery } from "@tanstack/react-query"
import { getCaseDataByDate } from "../api/covidApi";
import { useMemo, useState } from "react";

ChartJs.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

const Chart = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["cases-date"],
        queryFn: getCaseDataByDate,
    })
    const casesDates = useMemo(() => {
        if(data) {
            return Object.entries(data?.cases).map(el => el[0]).slice(-700)
    }
    return null   
    }, [data?.cases]);
    const casesCount = useMemo(() => {
            if(data) {
                    return Object.entries(data?.cases).map(el => el[1]).slice(-700)
            }
            return null   
        }
    , [data?.cases]);
    const deathsCount = useMemo(() => {
        if(data) {
                return Object.entries(data?.deaths).map(el => el[1]).slice(-700)
        }
        return null   
    }
, [data?.deaths]);
    const recoveredCount = useMemo(() => {
        if(data) {
                return Object.entries(data?.recovered).map(el => el[1]).slice(-700)
        }
        return null   
    }
, [data?.recovered]);
    
    if(!data) {
        return null
    }
    
    if(isLoading) {
        return <div className="text-3xl font-bold">Loading...</div>
    }
    
    if(error) {
        return <div>{JSON.stringify(error)}</div>
    }
    
    const dataSet = {
        labels: casesDates ?? [],
        datasets: [
            {
                label: "Cases",
                data: casesCount ?? [],
                borderColor: "rgb(75,192,192)",
                borderWidth: 1
            },
            {
                label: "Deaths",
                data: deathsCount ?? [],
                borderColor: "rgb(116,39,116)",
                borderWidth: 1
            },
            {
                
                label: "Recovered",
                data: recoveredCount ?? [],
                borderColor: "rgb(34,139,34)",
                borderWidth: 1
            },
        ]
    }
    
    return(
        <>
            <div className="relative w-full md:h-3/4">
                <Line data={dataSet} options={{
                    aspectRatio: 1
                }} />    
            </div>         
        </>
    )
}

export default Chart;