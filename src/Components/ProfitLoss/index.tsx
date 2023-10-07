import React, { useState } from "react";
import "./index.css"; // Create a CSS file for styling

const StripedTable = () => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (index: number) => {
    const updatedRows = [...expandedRows];
    if (updatedRows.includes(index)) {
      updatedRows.splice(updatedRows.indexOf(index), 1);
    } else {
      updatedRows.push(index);
    }
    setExpandedRows(updatedRows);
  };

  const isRowExpanded = (index: number) => expandedRows.includes(index);

  return (
    <div className="table-container">
      <table className="striped-table">
        <thead>
          <tr>
            <th></th> {/* Empty cell for spacing */}
            <th>Mar 2012</th>
            <th>Mar 2013</th>
            <th>Mar 2014</th>
            <th>Mar 2015</th>
            <th>Mar 2016</th>
            <th>Mar 2017</th>
            <th>Mar 2018</th>
            <th>Mar 2019</th>
            <th>Mar 2020</th>
            <th>Mar 2021</th>
            <th>Mar 2022</th>
            <th>Mar 2023</th>
            <th>TTM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className={`left-cell ${isRowExpanded(0) ? "expanded" : ""}`}
              onClick={() => toggleRow(0)}
            >
              Sales
              <span className={`expand-icon`}>
                {" "}
                {isRowExpanded(0) ? "-" : "+"}
              </span>
            </td>
            <td>181</td>
            <td>161</td>
            <td>300</td>
            <td>295</td>
            <td>222</td>
            <td>434</td>
            <td>608</td>
            <td>702</td>
            <td>592</td>
            <td>747</td>
            <td>2,249</td>
            <td>2,126</td>
            <td>1,837</td>
          </tr>
          {isRowExpanded(0) && (
            <tr className="sub-row">
              <td className="left-cell">Sales Growth %</td>
              {Array(13)
                .fill("")
                .map((_, idx) => (
                  <td>{((idx + 20) * Math.random()).toFixed(0) + 20}</td>
                ))}
            </tr>
          )}
          <tr>
            <td
              className={`left-cell ${isRowExpanded(1) ? "expanded" : ""}`}
              onClick={() => toggleRow(1)}
            >
              Expenses
              <span className={`expand-icon`}>
                {" "}
                {isRowExpanded(1) ? "-" : "+"}
              </span>
            </td>
            <td>156</td>
            <td>134</td>
            <td>248</td>
            <td>269</td>
            <td>222</td>
            <td>343</td>
            <td>442</td>
            <td>477</td>
            <td>396</td>
            <td>470</td>
            <td>1,275</td>
            <td>1,733</td>
            <td>1,442</td>
          </tr>
          {isRowExpanded(1) && (
            <>
              <tr className="sub-row">
                <td className="left-cell">Material Cost %</td>
                {Array(13)
                  .fill("")
                  .map((_, idx) => (
                    <td>{((idx + 20) * Math.random()).toFixed(0)}</td>
                  ))}
              </tr>
              <tr className="sub-row">
                <td className="left-cell">Manufacturing Cost %</td>
                {Array(13)
                  .fill("")
                  .map((_, idx) => (
                    <td>{((idx + 20) * Math.random()).toFixed(0)}</td>
                  ))}
              </tr>
              <tr className="sub-row">
                <td className="left-cell">Employee Cost %</td>
                {Array(13)
                  .fill("")
                  .map((_, idx) => (
                    <td>{((idx + 20) * Math.random()).toFixed(0)}</td>
                  ))}
              </tr>
              <tr className="sub-row">
                <td className="left-cell">Other Cost %</td>
                {Array(13)
                  .fill("")
                  .map((_, idx) => (
                    <td>{((idx + 20) * Math.random()).toFixed(0)}</td>
                  ))}
              </tr>
            </>
          )}
          <tr>
            <td className="left-cell">Operating Profit</td>
            <td>25</td>
            <td>27</td>
            <td>52</td>
            <td>25</td>
            <td>0</td>
            <td>91</td>
            <td>166</td>
            <td>225</td>
            <td>195</td>
            <td>276</td>
            <td>974</td>
            <td>393</td>
            <td>395</td>
          </tr>
          <tr>
            <td className="left-cell">OPM %</td>
            <td>14%</td>
            <td>17%</td>
            <td>17%</td>
            <td>9%</td>
            <td>0%</td>
            <td>21%</td>
            <td>27%</td>
            <td>32%</td>
            <td>33%</td>
            <td>37%</td>
            <td>43%</td>
            <td>18%</td>
            <td>21%</td>
          </tr>
          <tr>
            <td className="left-cell">Other Income +</td>
            <td>13</td>
            <td>23</td>
            <td>15</td>
            <td>3</td>
            <td>-1</td>
            <td>9</td>
            <td>11</td>
            <td>18</td>
            <td>6</td>
            <td>13</td>
            <td>35</td>
            <td>59</td>
            <td>65</td>
          </tr>
          <tr>
            <td className="left-cell">Interest</td>
            <td>0</td>
            <td>2</td>
            <td>0</td>
            <td>2</td>
            <td>0</td>
            <td>7</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>13</td>
            <td>38</td>
            <td>28</td>
            <td>27</td>
          </tr>
          <tr>
            <td className="left-cell">Depreciation</td>
            <td>11</td>
            <td>11</td>
            <td>9</td>
            <td>5</td>
            <td>4</td>
            <td>7</td>
            <td>7</td>
            <td>13</td>
            <td>19</td>
            <td>27</td>
            <td>56</td>
            <td>64</td>
            <td>62</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StripedTable;
