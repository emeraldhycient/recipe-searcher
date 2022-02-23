import React from "react";

function Digest() {
  return (
    <section>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th className="content_header" scope="col">
                Label
              </th>
              <th className="content_header" scope="col">
                Tag
              </th>
              <th className="content_header" scope="col">
                schemaOrgTag
              </th>
              <th className="content_header" scope="col">
                Total
              </th>
              <th className="content_header" scope="col">
                Unit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="content_body">Fat</td>
              <td className="content_body">Fat</td>
              <td className="content_body">fatContent</td>
              <td className="content_body">274.4489059026023</td>
              <td className="content_body">g</td>
            </tr>
            <tr>
              <td className="content_body">Fat</td>
              <td className="content_body">Fat</td>
              <td className="content_body">fatContent</td>
              <td className="content_body">274.4489059026023</td>
              <td className="content_body">g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Digest;
