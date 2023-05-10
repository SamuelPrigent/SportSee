// react
import React from "react";
// Style
import "../../style/recharts.css";
// Better for responsive than Responsive Container
import AutoSizer from "react-virtualized-auto-sizer";
// performance radar
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
// API
import { useSportSeeApi } from "../../services/hooks/fetchApi.js";
// Prop Types
// import PropTypes from "prop-types";

// ??
// import mockedData from "../mock/mockedData.js"; // mock

//
function Performance({ userId }) {
  const { data } = useSportSeeApi(userId, "performance");

  // ===== Mocked Data =====
  //
  // const USER_PERFORMANCE_1 = [
  //   {
  //     userId: 1,
  //     kind: {
  //       1: "cardio",
  //       2: "energy",
  //       3: "endurance",
  //       4: "strength",
  //       5: "speed",
  //       6: "intensity",
  //     },
  //     data: [
  //       {
  //         value: 80,
  //         kind: 1,
  //       },
  //       {
  //         value: 120,
  //         kind: 2,
  //       },
  //       {
  //         value: 140,
  //         kind: 3,
  //       },
  //       {
  //         value: 50,
  //         kind: 4,
  //       },
  //       {
  //         value: 200,
  //         kind: 5,
  //       },
  //       {
  //         value: 90,
  //         kind: 6,
  //       },
  //     ],
  //   },
  // ];

  // const IdParams = 1;
  // // Get Data by Id (but here just search in the mocked data)
  // const userPerformance = USER_PERFORMANCE_1.find(
  //   (performance) => performance.userId === IdParams
  // );
  // // performanceData
  // const performanceData = userPerformance.data.map((data) => ({
  //   value: data.value,
  //   kind: userPerformance.kind[data.kind],
  // }));
  // // performanceArrayReOrder
  // const performanceArrayReOrder = [
  //   { kind: "Intensité", value: performanceData[5].value },
  //   { kind: "Vitesse", value: performanceData[4].value },
  //   { kind: "Force", value: performanceData[3].value },
  //   { kind: "Endurance", value: performanceData[2].value },
  //   { kind: "Energie", value: performanceData[1].value },
  //   { kind: "Cardio", value: performanceData[0].value },
  // ];

  return (
    <div className="containerCharts">
      <AutoSizer>
        {({ width, height }) => (
          <RadarChart
            width={width}
            height={height}
            className="radarContainer"
            data={data}
            // outerRadius={"65%"}
            outerRadius={window.innerWidth > 1300 ? "65%" : "60%"}
          >
            <PolarGrid radialLines={false} gridType="polygon" />
            <PolarAngleAxis
              dataKey="kind"
              stroke="white"
              dy={4}
              tickLine={false}
              tick={{
                fontSize: 12,
                fontWeight: 500,
              }}
            />
            <Radar
              dataKey="value"
              fill={"#ff0101"}
              fillOpacity={0.7}
              stroke="transparent"
            />
          </RadarChart>
        )}
      </AutoSizer>
    </div>
  );
}

export default Performance;

// Recharts.propTypes = {
//   userId: PropTypes.string.isRequired,
// };
