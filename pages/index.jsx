import Head from "next/head";
import FetchTable from "@/components/FetchTable/FetchTable";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <FetchTable />
    </>
  );
}
