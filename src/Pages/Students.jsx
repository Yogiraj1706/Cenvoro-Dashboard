import "./Pages.css";

export default function Students() {
  return (
    <div className="page">
      <h2>Students</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Student profile & source</th>
            <th scope="col">Course & eligibility</th>
            <th scope="col">Interview status</th>
            <th scope="col">Placement status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>College</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
             <th scope="row">2</th>
            <td>Direct</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
             <th scope="row">3</th>
            <td>Direct</td>
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
          </tr>
           <tr>
             <th scope="row">5</th>
            <td>Direct</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
