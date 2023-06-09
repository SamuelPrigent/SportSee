// react
import React from "react";
// Style
import "../../style/recharts.css";
// Better for responsive than Responsive Container
import AutoSizer from "react-virtualized-auto-sizer";
// recharts
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
// API
import { useSportSeeApi } from "../../services/hooks/fetchApi.js";
// PropTypes
import PropTypes from "prop-types";

//
function Recharts({ userId }) {
  const { data } = useSportSeeApi(userId, "activity");

  return (
    <div className="containerCharts">
      {/* Text on the Top */}
      <div className="infoTextContainer">
        <div className="infoTextTitle">Activité quotidienne</div>
        <div className="infoTextLegend">
          <div className="infoTextLegendDetail">
            <div className="ColorCircle1"></div>
            Poids (kg)
          </div>
          <div className="infoTextLegendDetail">
            <div className="ColorCircle2"></div>
            Activité physique (Kcal)
          </div>
        </div>
      </div>
      {/* Activity of the week TEST */}
      <AutoSizer>
        {({ width, height }) => (
          <BarChart
            width={width}
            height={height}
            barGap={8}
            barCategoryGap="35%"
            data={data}
            margin={{ top: 85, right: 48, bottom: 30, left: 48 }}
          >
            <CartesianGrid
              strokeDasharray="2 2"
              vertical={false}
              stroke={"#dedede"}
            />
            <XAxis
              dataKey="day"
              dy={16}
              tick={{ fontSize: 14, fontWeight: 500 }}
              padding={{ left: -36, right: -36 }}
              tickLine={false}
              stroke={"#9b9eac"}
            />
            <YAxis
              orientation="right"
              dx={48}
              yAxisId="kg"
              dataKey="kilogram"
              axisLine={false}
              tickLine={false}
              domain={["dataMin - 1", "dataMax + 2"]}
            />
            <YAxis
              yAxisId="cal"
              dataKey="calories"
              domain={[0, "dataMax + 50"]}
              hide={true}
            />
            <Tooltip
              offset={47}
              content={<ActivityTooltip />}
              cursor={{
                fill: "rgba(0, 0, 0, 0.1)",
              }}
            />
            <Bar
              yAxisId="kg"
              dataKey="kilogram"
              radius={[50, 50, 0, 0]}
              fill="#282D30"
            />
            <Bar
              yAxisId="cal"
              dataKey="calories"
              radius={[50, 50, 0, 0]}
              fill="#E60000"
            />
          </BarChart>
        )}
      </AutoSizer>
    </div>
  );
}
export default Recharts;

function ActivityTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <div className="customTooltip">
        <div className="tooltipLine" background={"#2b2d30"}>
          {`${payload[0].value} kg`}
        </div>
        <div className="tooltipLine" background={"#ff0101"}>
          {`${payload[1].value} kCal`}
        </div>
      </div>
    );
  }

  return null;
}

ActivityTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

Recharts.propTypes = {
  userId: PropTypes.number.isRequired,
};
