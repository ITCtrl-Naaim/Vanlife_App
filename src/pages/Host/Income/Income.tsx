import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./Income.scss";

export default function Income() {
  const chartData: { name: string; value: number }[] = [
    { name: "Ju", value: 4000 },
    { name: "Au", value: 1500 },
    { name: "Se", value: 3000 },
    { name: "Oc", value: 2700 },
    { name: "No", value: 1600 },
    { name: "De", value: 500 },
  ];
  const transactionsData: { profit: number; date: string }[] = [
    { profit: 720, date: "1/12/22" },
    { profit: 560, date: "23/11/22" },
    { profit: 980, date: "10/11/22" },
  ];

  const transactionsElements = transactionsData.map((element) => (
    <article className="transaction-item">
      <span className="profit">${element.profit}</span>
      <span className="date">{element.date}</span>
    </article>
  ));

  function IncomeBarChart() {
    return (
      <div className="income-charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3" />
            <XAxis dataKey="name" />
            <YAxis
              tickFormatter={(val) => `$${val / 1000}k`}
              domain={[0, 5000]}
              ticks={[0, 1000, 2000, 3000, 4000, 5000]}
            />
            <Tooltip formatter={(value) => `$${value}`} />

            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {chartData.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index >= 4 ? "#ff8c38" : "#ffead0"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <section className="host-income">
      <div className="intro">
        <h1>Income</h1>
        <p>
          Income last <span>30 days</span>
        </p>
        <span className="total">$2,260</span>
      </div>
      {<IncomeBarChart />}
      <div className="transactions">
        <div className="header">
          <h2>Your listed vans ({transactionsElements.length})</h2>
          <span>last 30 days</span>
        </div>
        <div className="transactions-list">{transactionsElements}</div>
      </div>
    </section>
  );
}
