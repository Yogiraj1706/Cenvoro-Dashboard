import "./Pages.css";

export default function Jobs() {
  return (
    <div className="page">
      <h2>Jobs</h2>

       <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Company Name</th>
            <th scope="col">Job description</th>
            <th scope="col">Job category</th>
            <th scope="col">Eligibility & CTC/Stipend</th>
            <th scope="col">Application deadlines</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>ABC</td>
            <td></td>
            <td>Finance</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
             <th scope="row">2</th>
            <td>DEF</td>
            <td></td>
            <td>Sales</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
             <th scope="row">3</th>
            <td>GHI</td>
            <td></td>
            <td>IT</td>
            <td></td>
            <td></td>
          </tr>
           <tr>
             <th scope="row">4</th>
            <td>JKL</td>
            <td></td>
            <td>Finance</td>
            <td></td>
            <td></td>
          </tr>
           <tr>
             <th scope="row">5</th>
            <td>MNO</td>
            <td></td>
            <td>Sales</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
