import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OrderList.css";
import { MdPendingActions } from "react-icons/md";

const OrderList = () => {
  const [ordersList, setOrdersList] = useState([]);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/getUser");
      setOrdersList(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <table className="admin-dashboard-table">
        <tbody>
          <tr>
            <th>User ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Date</th>
            <th>Purchased</th>
            <th>Revenue</th>
          </tr>
          {ordersList.map((item, i) => (
            <tr key={i}>
              <td>{item._id}</td>
              {/* <td>{item.createdAt.toLocaleString()}</td> */}
              <td>{item.first_name}</td>
              {item.orders.map((order, j) => {
                const createdDate = new Date(order.created_date);
                const formattedDate = createdDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                });

                return (
                  <React.Fragment key={j}>
                    <td>
                      {
                        <>
                          <MdPendingActions color="red"  /> {order.status}
                        </>
                      }
                    </td>
                    <td>{formattedDate}</td>
                    {/* <td>{order.productname}</td> */}
                    <td>{order.productId.Product_name}</td>
                    <td>{order.productId.price+" INR"}</td>
                  </React.Fragment>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
