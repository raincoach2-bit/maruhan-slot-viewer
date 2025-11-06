import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Googleスプレッドシート → JSON化サービス（opensheet）
    fetch("https://opensheet.elk.sh/【ここにあなたのスプレッドシートID】/ami")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("データ取得エラー:", error));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>マルハン阿見店 スロットデータビューアー</h1>
      <p>Googleスプレッドシートと連携中 ✅</p>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>台番号</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>機種名</th>
          </tr>
        </thead>
        <tbody>
          {data.map((slot, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{slot.台番号}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{slot.機種名}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
