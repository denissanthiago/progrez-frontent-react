import React from "react";
import { IOptionsItem } from "../domain/option";

const BASE_URL = import.meta.env.VITE_API_URL

interface IUseGetData {
    data: IOptionsItem
}

const useGetData = (): IUseGetData => {

    const [data, setData] = React.useState<IOptionsItem>()


    React.useEffect(() => {
        getDataServer()
    }, [])

    const getDataServer = async () => {
        try {
            const response = await fetch(`${BASE_URL}/list`);
            const jsonData = await response.json();
            setData(jsonData[0]);
        } catch (error) {
            console.error(error);
        }
    }

    return {
        data: data as IOptionsItem
    }
}

export default useGetData