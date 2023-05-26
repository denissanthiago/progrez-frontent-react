import React from "react";

const BASE_URL = import.meta.env.VITE_API_URL

const useGetData = () => {

    const [data, setData] = React.useState({})


    React.useEffect(() => {
        getDataServer()
    }, [])

    const getDataServer = async () => {
        try {
            const response = await fetch(`${BASE_URL}/list`);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error(error);
        }
    }

    return {
        data  
    }
}

export default useGetData