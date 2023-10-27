import { useLoaderData } from "react-router-dom";
import Coffee_Card from "./Coffee_Card";
import { useState } from "react";

const Home = () => {
    let data = useLoaderData()
    let [coffees,setCoffees] = useState(data)
    return (
        <div>
            <h1 className="text-5xl text-green-600 text-center">Coffee </h1>
            <div className="m-32 grid md:grid-cols-2 gap-5">
                {
                    coffees.map(data => <Coffee_Card key={data._id} coffees={coffees} setCoffees={setCoffees} data={data}></Coffee_Card>)
                }
            </div>
        </div>
    );
};

export default Home;