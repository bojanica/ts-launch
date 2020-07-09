import React from "react";
import useLaunchesByDate from "../../hooks/useLaunchesByDate";

const App: React.FC = () => {
    //2015-08-20/2015-09-20
    const res: ResponseObject = useLaunchesByDate({ dateFrom: '2020-07-20', dateTo: '2020-12-20' })



    if (res.isLoading) {
        return (<p>loading</p>);
    }
    if (res.error) {
        return (<p>{res.error.msg}</p>)
    }
    if (res.data) {
        return (
            <>
                {res.data.launches.map((launch: Launch) => {
                    return (
                    <div style={{ borderBottom: '1px solid grey'}}>
                        <h4>launch name: {launch.name}</h4>
                        <p>location name: {launch.location.name}</p>
                        <div>
                            <h5>launch pads:</h5>
                            {launch.location.pads.map((pad: Pad) => {
                                return (
                                <>
                                    <p>name: {pad.name}</p>
                                    <p>lat: {pad.latitude}</p>
                                    <p>long: {pad.longitude}</p>
                                    <p>agencies: {pad.agencies && pad.agencies.map((agency: Agency) => (<p>{agency.name}</p>))}</p>
                                </>)
                            })}
                        </div>
                    </div>)
                })}
            </>
        )

    }
}

export default App;
