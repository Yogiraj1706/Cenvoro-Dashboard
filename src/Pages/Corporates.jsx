 import "./Pages.css";
 
 export default function Corporates() {
  return (
    <div className="page">
      <h2>Corporates</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Corporate Name</th>
            <th scope="col">Contact No.</th>
            <th scope="col">Contact Person Name</th>
            <th scope="col">Hire Requirements</th>
            <th scope="col">Deal Stage & Status</th>
            <th scope="col">Coporate MoUs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>ABC</td>
            <td>1234567890</td>
            <td>abcd</td>
            <td>FSD</td>
            <td></td>
            <td>Unsigned</td>
          </tr>
          <tr>
             <th scope="row">2</th>
            <td>DEF</td>
            <td>1234567890</td>
            <td>efgh</td>
            <td>SQL</td>
            <td></td>
            <td>Signed</td>
          </tr>
          <tr>
             <th scope="row">3</th>
            <td>GHI</td>
            <td>1234567890</td>
            <td>ijkl</td>
            <td>JAVA</td>
            <td></td>
            <td>Signed</td>
          </tr>
           <tr>
             <th scope="row">4</th>
            <td>JKL</td>
            <td>1234567890</td>
            <td>mnop</td>
            <td>Python</td>
            <td></td>
            <td>Unsigned</td>
          </tr>
           <tr>
             <th scope="row">5</th>
            <td>MNO</td>
            <td>1234567890</td>
            <td>qrst</td>
            <td>DSA</td>
            <td></td>
            <td>Signed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
