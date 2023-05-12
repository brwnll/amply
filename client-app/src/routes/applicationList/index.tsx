// External modules
import { h } from "preact";
import { route } from "preact-router";
import { useMemo } from "preact/hooks";
import { useQuery } from "@tanstack/react-query";
import { useTable, useSortBy } from "react-table";
import { formatDistanceToNow } from "date-fns";

// Internal modules
import ApplicationStatus from "../../components/ApplicationStatus";
import RebateCreate from "../../components/RebateCreate";

// Internal services
import { getApplicationState, getCustomerFullName } from "../../services/util";
import { getApplications } from "../../services/api";

const ApplicationList = () => {
  const { data, error } = useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
  });

  const columns = useMemo(
    () => [
      {
        Header: "Rebate",
        accessor: (row) => row.rebate.name,
      },
      {
        Header: "Street",
        accessor: (row) => row.project.address.street,
      },
      {
        Header: "City",
        accessor: (row) => row.project.address.locality,
      },
      {
        Header: "Customer",
        accessor: (row) => getCustomerFullName(row.project.customer),
      },
      {
        Header: "Status",
        accessor: (row) => (
          <ApplicationStatus status={getApplicationState(row, true)} />
        ),
      },
      {
        Header: "Created",
        accessor: (row) =>
          formatDistanceToNow(new Date(row.createdAt), { addSuffix: true }),
      },
      {
        Header: "Last Updated",
        accessor: (row) =>
          formatDistanceToNow(new Date(row.updatedAt), { addSuffix: true }),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: data || [] }, useSortBy);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h3>Rebates</h3>
      {error && <div>Error: {error}</div>}
      <section class="col-12">
        <table
          {...getTableProps()}
          class="table table-hover"
          style={{ cursor: "pointer" }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.key}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={column.key}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={row.key}
                  onClick={() =>
                    route(`/applications/${data[row.id].id}`, true)
                  }
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} key={cell.key}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <RebateCreate />
    </main>
  );
};

export default ApplicationList;
