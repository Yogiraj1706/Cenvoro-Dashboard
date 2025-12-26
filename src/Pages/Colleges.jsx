import "./Pages.css";

export default function Colleges() {
  return (
    <div className="page">
      <h2>Colleges</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">College Name</th>
            <th scope="col">Contact No.</th>
            <th scope="col">Batch Size</th>
            <th scope="col">Courses</th>
            <th scope="col">MoU Status</th>
            <th scope="col">Follow-ups & Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>ABC</td>
            <td>1234567890</td>
            <td>5</td>
            <td>FSD</td>
            <td>Not Started</td>
            <td></td>
          </tr>
          <tr>
             <th scope="row">2</th>
            <td>DEF</td>
            <td>1234567890</td>
            <td>2</td>
            <td>SQL</td>
            <td>Signed</td>
            <td></td>
          </tr>
          <tr>
             <th scope="row">3</th>
            <td>GHI</td>
            <td>1234567890</td>
            <td>3</td>
            <td>JAVA</td>
            <td>Sent</td>
            <td></td>
          </tr>
           <tr>
             <th scope="row">4</th>
            <td>JKL</td>
            <td>1234567890</td>
            <td>1</td>
            <td>Python</td>
            <td>Signed</td>
            <td></td>
          </tr>
           <tr>
             <th scope="row">5</th>
            <td>MNO</td>
            <td>1234567890</td>
            <td>4</td>
            <td>DSA</td>
            <td>Sent</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
