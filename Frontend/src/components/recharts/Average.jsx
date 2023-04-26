// react
import React from "react";
// Style
import "./recharts.css";
// PropTypes
import PropTypes from "prop-types";
// Better for responsive than Responsive Container
import AutoSizer from "react-virtualized-auto-sizer";

// mock
// import mockedData from "../mock/mockedData.js";
// console.log(mockedData);

// average sessions
import { Line, LineChart, Tooltip, XAxis, YAxis, Legend } from "recharts";

//
function Recharts() {
  // var
  // const color = {
  //   primary500: "#ff0101",
  //   neutral100: "#fbfbfb",
  //   neutral200: "#dedede",
  //   neutral400: "#9b9eac",
  //   neutral500: "#74798c",
  //   neutral800: "#2b2d30",
  //   neutral900: "#020203",
  // };

  //   average sessions
  const sessions = [
    {
      day: "1",
      sessionLength: 30,
    },
    {
      day: "2",
      sessionLength: 23,
    },
    {
      day: "3",
      sessionLength: 45,
    },
    {
      day: "4",
      sessionLength: 50,
    },
    {
      day: "5",
      sessionLength: 0,
    },
    {
      day: "6",
      sessionLength: 0,
    },
    {
      day: "7",
      sessionLength: 60,
    },
  ];

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
              data={sessions}
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
                // position={{ y: 61 }}
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
