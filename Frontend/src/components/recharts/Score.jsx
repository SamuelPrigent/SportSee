// react
import React from "react";
// Better for responsive than Responsive Container
import AutoSizer from "react-virtualized-auto-sizer";
// recharts
import { Cell, Pie, PieChart } from "recharts";
// API
import { useSportSeeApi } from "../../services/hooks/fetchApi.js";
// Prop Types
// import PropTypes from "prop-types";

// ??
// import mockedData from "../mock/mockedData.js"; // mock

//
function Score({ userId }) {
  const { data } = useSportSeeApi(userId, "today-score");
  // const { data, isLoading, error } = useSportSeeApi(userId, "today-score");

  let score = data;

  // if (error || isLoading) {
  //   score = 0;
  // }

  const pieData = [
    { name: "completed", value: score, fillColor: "#ff0101" },
    { name: "not-completed", value: 1 - score, fillColor: "transparent" },
  ];

  return (
    <div className="containerCharts">
      <div className="scoreTitle">Score</div>
      <AutoSizer>
        {({ width, height }) => (
          <PieChart
            outerRadius={"65%"}
            className="scoreContainer"
            width={width}
            height={height}
          >
            {/* Circle Bars Zone */}
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={70}
              outerRadius={80}
              startAngle={90}
              endAngle={450}
            >
              {/* Bars Portion */}
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fillColor}
                  cornerRadius="50%"
                />
              ))}
            </Pie>
            {/* White circle */}
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={0}
              outerRadius={70}
              startAngle={0}
              endAngle={360}
              fill="white"
            ></Pie>
          </PieChart>
        )}
      </AutoSizer>
      <div className="scoreText">
        <div className="scoreValue">{`${100 * score}%`}</div>
        de votre
        <br />
        objectif
      </div>
    </div>
  );
}

export default Score;
