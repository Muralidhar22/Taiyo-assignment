export const getCountryWiseDetails = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/countries`)
        const result = await response.json()
        return result;
}

export const getCaseDataByDate = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/historical/all?lastdays=all`)
        const result = await response.json()
        return result;
}

export const getWorldWideCount = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/all`)
        const result = await response.json()
        return result;
}