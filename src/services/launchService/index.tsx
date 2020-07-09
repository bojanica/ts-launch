import request from "../networking";

const BASE_URL = 'https://launchlibrary.net/1.3/';


const LaunchService: () => object = () => {

    const fetchLaunches = (dates: FromTo) => {
        const path = `launch/${dates.dateFrom}/${dates.dateTo}`;
        return request({
            apiEndpoint: `${BASE_URL}${path}`,
        })// normalisation here
    }
    return {
      fetchLaunchesByDate: (dates: FromTo) => (fetchLaunches(dates))
    }
}
const launchService = LaunchService();

export default launchService;
