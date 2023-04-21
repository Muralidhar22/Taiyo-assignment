import { useQuery } from "@tanstack/react-query"
import { getWorldWideCount } from "../api/covidApi";
import CountRect from "./CountRect";

const DashboardCount = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["cases-world"],
        queryFn: getWorldWideCount,
    })
    
    console.log({data})
    if(!data) {
        return null
    }
    
    return(
        <div className="flex flex-wrap gap-2">
          <CountRect title="Total" count={data.cases} />  
          <CountRect title="Active" count={data.active} />
          <CountRect title="Deaths" count={data.deaths} />
          <CountRect title="Recovered" count={data.recovered} />  
        </div>
    )
}

export default DashboardCount;