import { ChartTimelineType } from "../types"

const handleFilterChange = (filterOption: ChartTimelineType, data: {
    date: number
}[], type: "label" | "value") => {
        let filteredData;
      
        switch (filterOption) {
          case "month":
            filteredData = Object.entries(data).map(el => {
               if(type === "label") return el[0]
               return el[1]
            }).slice(-30)
            return filteredData
          case "sixMonths":
            filteredData = Object.entries(data).map(el => {
                if(type === "label") return el[0]
                return el[1]
             }).slice(-190)
            return filteredData
          case "year":
            filteredData = filteredData = Object.entries(data).map(el => {
                if(type === "label") return el[0]
                return el[1]
             }).slice(-365)
            return filteredData
          case "twoYears":
            filteredData = filteredData = Object.entries(data).map(el => {
              if(type === "label") return el[0]
              return el[1]
           }).slice(-730)
          return filteredData
          case "all":
            filteredData = filteredData = filteredData = Object.entries(data).map(el => {
              if(type === "label") return el[0]
              return el[1]
           })
            return filteredData
          default:
            throw new Error("Invalid filter")
        }
}

export default handleFilterChange;