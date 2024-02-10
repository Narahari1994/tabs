import { useEffect } from "react";
import { useState } from "react";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [tabs, setTabs] = useState([]);

  const fetchTabs = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setTabs(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTabs();
  });

  return <div>Tabs Starter</div>;
};
export default App;
