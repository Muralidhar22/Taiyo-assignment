import Chart from "../components/Chart";
import DashboardCount from "../components/DashbardCount";
import Map from "../components/Map";

const ChartsMaps = () => {
    return(<div className="p-3">
         <div className="count">
            <DashboardCount />
         </div>
         <div className="mb-3">
            <Chart />
         </div>
         <div>
            <Map />
         </div>
    </div>)
}

export default ChartsMaps;