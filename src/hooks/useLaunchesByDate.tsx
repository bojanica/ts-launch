import { useEffect, useState } from 'react';
import launchService from "../services/launchService";

interface FromTo {
    dateFrom: string,
    dateTo: string,
}

interface ResponseObject {
    isLoading: boolean,
    data: object,
    error: object,
}


const useLaunchesByDate: (dates: FromTo) => ResponseObject = (dates) => {
    const [response, setResponse] = useState({ isLoading: true, data: null, error: null })

    useEffect(() => {
        const fetchLaunches = (dates: FromTo) => {
            // @ts-ignore
            launchService.fetchLaunchesByDate(dates)
                .then((data: object) => {
                    setResponse({
                        isLoading: false,
                        data: data,
                        error: null
                    })
                })
                .catch((error: object) => {
                    setResponse({
                        isLoading: false,
                        data: null,
                        error: error,
                    })
                })
        }
        fetchLaunches(dates);

    }, [dates.dateFrom, dates.dateTo])

    return response;
}

export default useLaunchesByDate;
