import React from "react";
import { Chart } from "react-google-charts";


const data = [
  [
    "Location",
    "Parent",
    "Market trade volume (size)",
    "Market increase/decrease (color)",
  ],
  ["Global", null, 0, 0],
  ["America", "Global", 0, 0],
  ["Europe", "Global", 0, 0],
  ["Asia", "Global", 0, 0],
  ["Australia", "Global", 0, 0],
  ["Africa", "Global", 0, 0],
  ["Brazil", "America", 11, 10],
  ["USA", "America", 52, 31],
  ["Mexico", "America", 24, 12],
  ["Canada", "America", 16, -23],
  ["France", "Europe", 42, -11],
  ["Germany", "Europe", 31, -2],
  ["Sweden", "Europe", 22, -13],
  ["Italy", "Europe", 17, 4],
  ["UK", "Europe", 21, -5],
  ["China", "Asia", 36, 4],
  ["Japan", "Asia", 20, -12],
  ["India", "Asia", 40, 63],
  ["Laos", "Asia", 4, 34],
  ["Mongolia", "Asia", 1, -5],
  ["Iran", "Asia", 18, 13],
  ["Pakistan", "Asia", 11, -52],
  ["Egypt", "Africa", 21, 0],
  ["S. Africa", "Africa", 30, 43],
  ["Sudan", "Africa", 12, 2],
  ["Congo", "Africa", 10, 12],
  ["Zaire", "Africa", 8, 10],
];

const options = {
  minColor: "#f00",
  midColor: "#ddd",
  maxColor: "#0d0",
  headerHeight: 15,
  fontColor: "black",
  showScale: true,
};

export default function App() {
  return (
    <div className="contenedor-grafico flex-wrap justify-center items-center text-center h-screen m-5 font-display">
      <div className="header-grafico justify-center items-center text-center mt-10">
        <h1 className="text-4xl font-display font-bold">REACT + GOOGLE CHARTS</h1>
        <h2 className="text-xl">@bioodev ✨</h2>
        <span className="text-sm">MARKET TRADE VOLUME EXAMPLE DATA</span>
      </div>
    <Chart
      chartType="TreeMap"
      width="100%"
      height="70vh"
      data={data}
      options={options}
    />
    </div>
  );
}


