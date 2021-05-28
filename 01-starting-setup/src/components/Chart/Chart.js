import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const values = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...values);
  // Spread Operator creates
  // list(1, 2, 3) from array[1,2,3]

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />)
      )}
    </div>
  );
};

export default Chart;
