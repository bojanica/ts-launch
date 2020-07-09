import React from "react";
import useLaunchesByDate from "../../hooks/useLaunchesByDate";

const App: React.FC = () => {
    //2015-08-20/2015-09-20
    const res: ResponseObject = useLaunchesByDate({ dateFrom: '2020-07-20', dateTo: '2020-12-20' })

    if (res.isLoading) {
        return (<p>loading</p>);
    }
    if (res.error) {
        return (<p>error</p>)
    }
    if (res.data) {
        return res.data.launches.map((launch: any) => (<p key={launch.id}>{launch.name}</p>))
    }
}

export default App;
