import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // GoogleスプレッドシートをJSONとして取得
    fetch("https://opensheet.elk.sh/1-0xfYNMI30ScdYCKPZccvjEvCJpNju4TLL1Zd4NZ7ws/ami")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("データ取得エラー:", error));
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
        backgroundColor: "#111",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#FFD700" }}>
        🎰 マルハン阿見店 スロットデータビューアー
      </h1>
      <p style={{ textAlign: "center", color: "#ccc" }}>
        Googleスプレッドシートと自動連携中 ✅
      </p>

      <div style={{ overflowX: "auto", marginTop: "20px" }}>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            backgroundColor: "#222",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#333" }}>
              <th style={{ border: "1px solid #555", padding: "10px" }}>台番号</th>
              <th style={{ border: "1px solid #555", padding: "10px" }}>機種名</th>
            </tr>
          </thead>
          <tbody>
            {data.map((slot, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #444", padding: "10px", textAlign: "center" }}>
                  {slot.台番号}
                </td>
                <td style={{ border: "1px solid #444", padding: "10px" }}>
                  {slot.機種名}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ textAlign: "center", marginTop: "40px", fontSize: "0.9em", color: "#777" }}>
        データ元: Google Sheets（{new Date().toLocaleDateString()} 更新）
      </p>
    </div>
  );
}

export default App;
