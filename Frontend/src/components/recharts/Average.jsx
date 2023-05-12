// react
import React from "react";
// Style
import "../../style/recharts.css";
// Better for responsive than Responsive Container
import AutoSizer from "react-virtualized-auto-sizer";
// recharts
import { Line, LineChart, Tooltip, XAxis, YAxis, Legend } from "recharts";
// API
import { useSportSeeApi } from "../../services/hooks/fetchApi.js";
// Prop Types
import PropTypes from "prop-types";

// ??
// import mockedData from "../mock/mockedData.js"; // mock

//
function Recharts({ userId }) {
  const { data } = useSportSeeApi(userId, "average-sessions");

  return (
    <div className="containerCharts">
      {/* Text */}
      <div className="averageLabelContainer">
        <div className="averageLabelText">
          <div>Durée moyenne des</div>
          <div>sessions</div>
        </div>
        {/* Recharts */}
        <AutoSizer>
          {({ width, height }) => (
            <LineChart
              width={width}
              height={height}
              strokeLinecap="round"
              className="averageContainer"
              data={data}
              outerRadius="75%"
              margin={{ top: 0, right: 20, bottom: 24, left: 20 }}
              // Gradient with mouse
              onMouseMove={(e) => {
                if (e.isTooltipActive === true) {
                  const averageDiv =
                    document.querySelector(".averageContainer");
                  let windowWidth = averageDiv.clientWidth;
                  let mouseXpercentage = Math.round(
                    (e.activeCoordinate.x / windowWidth) * 100
                  );
                  averageDiv.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgb(230, 0, 1) ${mouseXpercentage}%, rgb(230, 0, 1) 100%)`;
                }
              }}
            >
              <XAxis
                // padding={{ left: -20, right: -20 }}
                dataKey="day"
                stroke="rgba(255, 255, 255, 0.5)"
                axisLine={false}
                dy={10}
                tickLine={false}
                allowDataOverflow={false}
                tickFormatter={(day) => {
                  const weekdays = ["L", "M", "M", "J", "V", "S", "D"];
                  return `${weekdays[day - 1]}`;
                }}
                //
                tickMargin={20}
                height={45}
              />
              <YAxis
                dataKey="sessionLength"
                domain={[0, "dataMax + 60"]}
                hide={true}
              />
              <defs>
                <linearGradient id="colorLine" x1="0%" y1="0" x2="100%" y2="0">
                  <stop
                    offset={`${40}%`}
                    stopColor="rgba(255, 255, 255, 0.4)"
                  />
                  <stop
                    offset={`${40}%`}
                    stopColor="rgba(255, 255, 255, 0.4)"
                  />
                  <stop offset={`${100}%`} stopColor="#FFF" />
                </linearGradient>
              </defs>
              <Line
                dataKey="sessionLength"
                type="natural"
                stroke="url(#colorLine)"
                strokeWidth={2}
                dot={false}
                activeDot={{ fill: "#FFF" }}
                overflow="hidden"
                // stroke="rgba(255, 255, 255, 0.6)"
                // activeDot={{
                //   stroke: "rgba(255,255,255, 0.4)",
                //   strokeWidth: 8,
                //   r: 4,
                // }}
              />
              <Tooltip
                content={<AverageTooltip />}
                cursor={false}
                position={{ y: 61 }}
              />
            </LineChart>
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default Recharts;

function AverageTooltip({ active, payload }) {
  if (active && payload) {
    return <div className="averageTooltip">{`${payload[0].value} min`}</div>;
  }
  return null;
}

AverageTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
