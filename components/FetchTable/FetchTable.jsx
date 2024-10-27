import Fetcher from "@/components/Fetcher";
import { useState } from "react";
import Error from "@/components/Error";
import ObjTable from "@/components/FetchTable/ObjTable";
import Spinner from "@/components/Spinner";
import { config } from "@/components/configs/jsph";

export default function FetchTable() {
  const
    [data, setData] = useState(null),
    [error, setError] = useState(null);

  return (
    <>
      <Fetcher url="https://jsonplaceholder.typicode.com/users" setData={setData} setError={setError} />
      {error && <Error error={error} />}
      {data && <ObjTable data={data} config={config} />}
      {!error && !data && <Spinner />}
    </>
  );
}