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
import PropTypes from "prop-types";

//
function Performance({ userId }) {
  const { data } = useSportSeeApi(userId, "performance");

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

Performance.propTypes = {
  userId: PropTypes.number.isRequired,
};
