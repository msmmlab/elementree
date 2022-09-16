import React, { useState } from "react";

import Layout from "./components/Layout";
import DataContainer from "./components/DataContainer";
import MapContainer from "./components/MapContainer";

function App() {
    const [points, setPoints] = useState([{}]);
    return (
        <Layout>
            <DataContainer setPoints={setPoints} />
            <MapContainer points={points} />
        </Layout>
    );
}

export default App;
