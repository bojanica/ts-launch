import React, { useState, useEffect } from "react";
import moment from "moment";
import useLaunchesByDate from "../../hooks/useLaunchesByDate";


const App: React.FC = () => {
    const [dates, setDates] = useState({
        dateFrom: moment().format('YYYY-MM-DD'),
        dateTo: moment().add(3, 'month').format('YYYY-MM-DD'),
    })

    const [datesToFetch, setDatesToFetch] = useState({...dates})

    // anytime datesToFetch changes, we will invoke the hook
    const res: ResponseObject = useLaunchesByDate(datesToFetch);

    const updateDate = (value: string, prop: string) => {
        setDates({
            ...dates,
            [prop]: value,
        })
    }

    const getResults = () => {
        setDatesToFetch(dates);
    }
    if (res.isLoading) {
        return (<p>loading</p>);
    }
    if (res.error) {
        return (<p>{res.error.msg}</p>)
    }
    if (res.data) {
        return (
            <>
                <div style={{marginBottom: '10px'}}>
                    <div style={{marginBottom: '10px'}}>
                        <label>Enter from date: </label>
                        <input type="text" value={dates.dateFrom} placeholder="YYYY-MM-DD" onChange={(e) => updateDate(e.target.value, 'dateFrom')} />
                    </div>
                    <div style={{marginBottom: '10px'}}>
                        <label>Enter to date: </label>
                        <input type="text" value={dates.dateTo} placeholder="YYYY-MM-DD" onChange={(e) => updateDate(e.target.value, 'dateTo')} />
                    </div>
                    <button onClick={getResults}>fetch Results</button>
                </div>
                <h3>Launches from {dates.dateFrom} to {dates.dateTo}</h3>
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
                                    <p>agencies: {pad.agencies && pad.agencies.map((agency: Agency) => (<span>{agency.name}</span>))}</p>
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
