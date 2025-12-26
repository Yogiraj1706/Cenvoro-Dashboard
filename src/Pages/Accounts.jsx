import "./Pages.css";

export default function Accounts() {
  return (
    <div className="page">
      <h2>Accounts</h2>

  <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Deal source</th>
            <th scope="col">Invoice amount</th>
            <th scope="col">Amount received</th>
            <th scope="col">Balance pending</th>
            <th scope="col">Payment status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>College</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
             <th scope="row">2</th>
            <td>Corporate</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
         </tr>
          <tr>
             <th scope="row">3</th>
            <td>Corporate</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
           <tr>
             <th scope="row">4</th>
            <td>College</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
           <tr>
             <th scope="row">5</th>
            <td>Corporate</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
