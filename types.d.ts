interface RequestProps {
    apiEndpoint: string
}

interface FromTo {
    dateFrom: string,
    dateTo: string,
}

interface Error {
    msg: string,
    status: string
}

interface ResponseObject {
    isLoading: boolean,
    data: Launches,
    error: Error,
}

interface Agency {
    id: number,
    name: string,
}

interface Pad {
    latitude: number,
    longitude: number,
    name: string,
    agencies: Agency[],
}

interface Location {
    name: string,
    pads: Pad[]
}

interface Launch {
    id: number,
    name: string,
    location: Location
}

interface Launches {
    offset: number,
    count: number,
    total: number,
    launches: Launch[],
}


