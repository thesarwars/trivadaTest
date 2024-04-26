import React from "react";

export default function Product() {
  return (
    <div className="flex justify-center items-center m-5">
      <table class="table-fixed">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Tag</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jeans Pant</td>
            <td>1792 Jeans Pant</td>
            <td>$ 2022</td>
            <td>Sailor</td>
            <td>Jeans, Pant, Fashion</td>
            <td>Edit | Remove</td>
          </tr>
          <tr>
            <td>Shirt Full-Sleeve</td>
            <td>Red Origin Full Sleeve Shirt</td>
            <td>$ 2022</td>
            <td>Sailor</td>
            <td>Shirt, Style, Fashion</td>
            <td>Edit | Remove</td>
          </tr>
          <tr>
            <td>Panjabi</td>
            <td>Eid collection Navy Blue Panjabi</td>
            <td>$ 4000</td>
            <td>Tanjim</td>
            <td>Panjabi, Pant, Fashion</td>
            <td>Edit | Remove</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
