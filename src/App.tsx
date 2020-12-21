import React, { useState, useEffect } from 'react';
import { Chrono } from 'react-chrono';
import { client } from './utils/client';
import { timeLine } from './Types';
import { formatData } from './utils/util';

const App = () => {
  const [items, setItems] = useState<timeLine[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    try {
      const resp = await client.getEntries ({content_type: 'timeLine'});
      const formattedData = formatData(resp);
      const reversedData = formattedData.reverse();
      // console.log(reversedData);
      setItems(reversedData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <div style={{ width: "100%", height: "850px" }}>
        {
          items.length > 0 ?
            <Chrono
              items={items}
              mode="VERTICAL_ALTERNATING"
              slideShow
              slideItemDuration={4000}
              theme={{primary: "#000", secondary: "#fff", cardBgColor: "#000", cardForeColor: "#fff" }}
              scrollable={{ scrollbar: false }}
            />
            :
            <h3>no data</h3>
        } 
      </div>
    </div>
  );
}

export default App;