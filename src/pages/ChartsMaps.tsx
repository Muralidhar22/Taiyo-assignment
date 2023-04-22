import Chart from "../components/Chart";
import DashboardCount from "../components/DashbardCount";
import Map from "../components/Map";

const ChartsMaps = () => {
    return(<div className="p-3">
      <h1 className="text-center text-3xl font-bold">Dashboard</h1>
         <div className="mb-5">
            <DashboardCount />
         </div>
         <div className="mb-5">
            <h1 className="text-center font-semibold text-xl mb-2">Covid history chart</h1>
            <Chart />
         </div>
         <div>
            <h1 className="text-center font-semibold text-xl mb-2">Covid tracker map</h1>
            <Map />
         </div>
    </div>)
}

export default ChartsMaps;