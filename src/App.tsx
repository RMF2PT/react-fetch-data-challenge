import { useEffect, useState } from "react";
import Nav from "./Nav";
import Content from "./Content";

type DataItem = {
  id: number;
};

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [view, setView] = useState("users" as "users" | "posts" | "comments");
  const [items, setItems] = useState([] as DataItem[]);
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(null as null | string);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}${view}`);
        if (!response.ok) throw Error(`Failed to fetch ${view}`);
        const data = await response.json();
        setItems(data);
        setErrMsg(null);
      } catch (error) {
        if (error instanceof Error) setErrMsg(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [view]);

  const handleView = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.innerHTML;
    setView(value as "users" | "posts" | "comments");
  };

  return (
    <>
      <Nav handleView={handleView} view={view} />
      <main>
        {errMsg && <p className="error">{errMsg}</p>}
        {isLoading && <p className="loading">Loading...</p>}
        {!isLoading && !errMsg && <Content data={items} />}
      </main>
    </>
  );
}

export default App;
