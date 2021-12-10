import React from "react";
// columns : array
// sortColums : object
// onSort : method

class TableHeaders extends React.Component {
  raiseSort = (path) => {
    // this.setState({ sortColumn: { path: path, order: "asc" } }); just asc
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.lable}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeaders;
