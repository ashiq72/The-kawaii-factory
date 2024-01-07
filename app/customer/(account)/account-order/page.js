"use client";
import React from "react";
import { Card, Typography } from "@material-tailwind/react";
const TABLE_ROWS = [
  {
    no: 1800,
    totalPrice: 1290,
    status: "Active",
    date: "23/04/18",
  },
  {
    no: 1801,
    totalPrice: 1590,
    status: "Processing",
    date: "23/04/18",
  },
  {
    no: 1802,
    totalPrice: 3230,
    status: "Active",
    date: "19/09/17",
  },
  {
    no: 1803,
    totalPrice: 3300,
    status: "Cancelled",
    date: "24/12/08",
  },
  {
    no: 1804,
    totalPrice: 5660,
    status: "Cancelled",
    date: "04/10/21",
  },
];
const TABLE_HEAD = ["Order #", "Date", "Total", "Status", "Action"];
function AccountOrder() {
  return (
    <div>
      <div>
        <h1 className=" font-bold text-lg">Order History</h1>
      </div>
      <div>
        <Card className="h-full w-full mt-3">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-extrabold leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ no, totalPrice, status, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={no}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {no}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        TK {totalPrice}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {status}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="font-normal text-blue-600"
                      >
                        Details
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}

export default AccountOrder;
