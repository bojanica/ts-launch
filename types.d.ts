interface RequestProps {
    apiEndpoint: string
}

interface FromTo {
    dateFrom: string,
    dateTo: string,
}

interface ResponseObject {
    isLoading: boolean,
    data: any,
    error: object,
}


