import Product from "./Product";

export default function ProductList(props) {
  return (
    <>
      {props.list.map((product) => {
        return (
          <div className="col-md-8 col-lg-6 col-xl-4">
            <Product
              name={product.name}
              description={product.description}
              price={product.price}
              img={product.img}
            />
          </div>
        );
      })}
    </>
  );
}
