import React, { useState } from "react";
import { computerData } from "../data/computers";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const ComputersPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const companyHandler = (e) => {
    if (selectedProduct.includes(e)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== e));
    } else {
      setSelectedProduct([...selectedProduct, e]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? computerData
      : computerData.filter((k) => selectedProduct.includes(k.company));
  const uniqueCompanies = [
    ...new Set(computerData.map((item) => item.company)),
  ];

  console.log(uniqueCompanies);
  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="pro-selected">
          {uniqueCompanies.map((phone) => {
            return (
              <div className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(phone)}
                    onChange={(e) => companyHandler(phone)}
                  />
                  {phone}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div>
                <Link to={`/computers/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt=" " />
                  </div>
                </Link>
                <div className="proModel">
                  {item.company},{item.model}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ComputersPage;
