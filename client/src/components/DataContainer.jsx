import { useState, useEffect } from "react";
import "./DataContainer.css";
import http from "../services/httpService";

const DataContainer = ({ setPoints }) => {
    const [data, setData] = useState();
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const { data } = await http.get(process.env.REACT_APP_API_ENDPOINT);
            setData(data);
            setPoints(data);
        };
        getData();
    }, [refresh]);

    return (
        <div className='mt-5 '>
            <div
                className='shadow p-3 mb-5  rounded fetcher'
                onClick={() => setRefresh(!refresh)}
            >
                <h3>Click here to fetch new coordinates</h3>
            </div>
        </div>
    );
};

export default DataContainer;
