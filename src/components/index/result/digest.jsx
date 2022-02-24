import React from "react";

function Digest({ data }) {
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
            {data.map((item) => (
              <tr>
                <td className="content_body">{item.label}</td>
                <td className="content_body">{item.tag}</td>
                <td className="content_body">{item.schemaOrgTag}</td>
                <td className="content_body">{item.total}</td>
                <td className="content_body">{item.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Digest;
