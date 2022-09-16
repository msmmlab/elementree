import { useState, useEffect } from "react";
import "./DataContainer.css";
import http from "../services/httpService";

/**
 * FOR THE PURPOSE OF THIS DEMO API ENDPOINT IS A CONSTANT BELOW
 * NORMALLY IT WOULD BE UNDER .ENV AS process.env.REACT_APP_API_ENDPOINT
 */

const apiEndpoint = "http://localhost:3030/api/coordinates/random";

const DataContainer = ({ setPoints }) => {
    const [data, setData] = useState();
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const { data } = await http.get(apiEndpoint);
            setData(data);
            setPoints(data);
        };
        getData();
    }, [refresh]);

    return (
        <div className='mt-5 '>
            <div
                className='shadow p-3 mb-5 rounded fetcher'
                onClick={() => setRefresh(!refresh)}
            >
                <h3>Click here to fetch new coordinates from API</h3>
            </div>
        </div>
    );
};

export default DataContainer;
