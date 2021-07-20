import React from "react";
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetUser">
            <img
              src="https://images.pexels.com/photos/5952645/pexels-photo-5952645.jpeg?cs=srgb&dl=pexels-mati-mango-5952645.jpg&fm=jpg"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Emmanuel Akuffo</span>
          </td>
          <td className="widgetDate">7 June 2021</td>
          <td className="widgetAmount">$176.09</td>
          <td className="widgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetUser">
            <img
              src="https://images.pexels.com/photos/5952645/pexels-photo-5952645.jpeg?cs=srgb&dl=pexels-mati-mango-5952645.jpg&fm=jpg"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Emmanuel Akuffo</span>
          </td>
          <td className="widgetDate">7 June 2021</td>
          <td className="widgetAmount">$176.09</td>
          <td className="widgetStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetUser">
            <img
              src="https://images.pexels.com/photos/5952645/pexels-photo-5952645.jpeg?cs=srgb&dl=pexels-mati-mango-5952645.jpg&fm=jpg"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Emmanuel Akuffo</span>
          </td>
          <td className="widgetDate">7 June 2021</td>
          <td className="widgetAmount">$176.09</td>
          <td className="widgetStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetUser">
            <img
              src="https://images.pexels.com/photos/5952645/pexels-photo-5952645.jpeg?cs=srgb&dl=pexels-mati-mango-5952645.jpg&fm=jpg"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Emmanuel Akuffo</span>
          </td>
          <td className="widgetDate">7 June 2021</td>
          <td className="widgetAmount">$176.09</td>
          <td className="widgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
