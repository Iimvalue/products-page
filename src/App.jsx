import "./App.css";
import Product from "./components/Product";
function App() {
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center gap-3">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <Product
              name="IPhone"
              description="iPhone combines Apple’s fastest, a versatile triple-lens camera system for stunning low-light photos, and a lightweight titanium frame for exceptional durability."
              price="$999"
              img="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4">
            <Product
              name="IPhone"
              description="iPhone combines Apple’s fastest, a versatile triple-lens camera system for stunning low-light photos, and a lightweight titanium frame for exceptional durability."
              price="$799"
              img="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4">
            <Product
              name="IPhone"
              description="iPhone combines Apple’s fastest, a versatile triple-lens camera system for stunning low-light photos, and a lightweight titanium frame for exceptional durability."
              price="$1199"
              img="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4">
            <Product
              name="IPhone"
              description="Apple Computer revolutionized personal computing with its groundbreaking Macintosh line, setting new standards for intuitive design, performance, and user-friendly interfaces."
              price="$4999"
              img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
