import React from "react";

function Product(props) {
  return (
    <>
      
          <div className="card text-black">
            <i className="pt-3 pb-1 px-3" />
            <img
              src={props.img}
              className="card-img-top"
              alt="Product Image"
              height={350}
            />
            <div className="card-body">
              <div className="text-center">
                <h5 className="card-title">{props.name}</h5>
              </div>
              <div>
                <p class="card-text">{props.description}</p>
              </div>
              <div className="d-flex justify-content-between total font-weight-bold mt-4">
                <span>{props.price}</span>
              </div>
            </div>
          </div>

    </>
  );
}

export default Product;
