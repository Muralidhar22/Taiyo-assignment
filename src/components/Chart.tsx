import { Line } from "react-chartjs-2";
import { Chart as ChartJs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from "chart.js";
import { useQuery } from "@tanstack/react-query"
import { getCaseDataByDate } from "../api/covidApi";
import { useMemo, useState } from "react";
import { ChartTimelineType } from "../types";
import handleFilterChange from "../utils/dataFilter";

ChartJs.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

const Chart = () => {
    const [chartTimeline, setChartTimeline] = useState<ChartTimelineType>("all")
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
//     const casesDates = useMemo(() => {
//         if(data) {
//             return handleFilterChange(chartTimeline, data, "label")
//     }
//     return null   
//     }, [data?.cases, chartTimeline, data]);
//     const casesCount = useMemo(() => {
//             if(data) {
//               return Object.entries(data.cases).map(el => {
//                     return el[1]
//                  }).slice(-700)
//                     // return handleFilterChange(chartTimeline, data.cases, "value")
//             }
//             return null   
//         }
//     , [data?.cases, chartTimeline, data]);
//     const deathsCount = useMemo(() => {
//         if(data) {
//                 console.log(handleFilterChange(chartTimeline, data.deaths, "value"))
//                 return handleFilterChange(chartTimeline, data.deaths, "value")
//         }
//         return null   
//     }
// , [data?.deaths, chartTimeline, data]);
//     const recoveredCount = useMemo(() => {
//         if(data) {
//                 return handleFilterChange(chartTimeline, data.recovered, "value")
//         }
//         return null   
//     }
// , [data?.recovered, chartTimeline, data]);
    
    if(!data) {
        return null
    }
    
    if(isLoading) {
        return <div className="text-3xl font-bold">Loading...</div>
    }
    
    if(error) {
        return <div>{JSON.stringify(error)}</div>
    }

    console.log(casesCount)
    
    const dataSet = {
        labels: casesDates ?? [],
        datasets: [
            {
                label: "Cases",
                data: casesCount ?? [],
                borderColor: "rgb(75,192,192)",
            },
            {
                label: "Deaths",
                data: deathsCount ?? [],
                borderColor: "rgb(116,39,116)"
            },
            {
                
                label: "Recovered",
                data: recoveredCount ?? [],
                borderColor: "rgb(34,139,34)"
            },
        ]
    }
    
    return(
        <>
            <div>
                <Line data={dataSet} />    
            </div>         
        </>
    )
}

export default Chart;