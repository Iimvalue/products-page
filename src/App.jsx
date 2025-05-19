import "./App.css";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
function App() {
  let productList = [
    {
      name: "iPhone",
      price: "$300",
      description:
        "iPhone combines Apple’s fastest, a versatile triple-lens camera system for stunning low-light photos, and a lightweight titanium frame for exceptional durability.",
      img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp",
    },
    {
      name: "iPhone",
      price: "$300",
      description:
        "iPhone combines Apple’s fastest, a versatile triple-lens camera system for stunning low-light photos, and a lightweight titanium frame for exceptional durability.",
      img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp",
    },
    {
      name: "iPhone",
      price: "$300",
      description:
        "iPhone combines Apple’s fastest, a versatile triple-lens camera system for stunning low-light photos, and a lightweight titanium frame for exceptional durability.",
      img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp",
    },
    {
      name: "iPhone",
      price: "$300",
      description:
        "iPhone combines Apple’s fastest, a versatile triple-lens camera system for stunning low-light photos, and a lightweight titanium frame for exceptional durability.",
      img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp",
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Product Site
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Products
              </a>
            </div>
          </div>
        </div>
      </nav>

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
          <ProductList list={productList} />
        </div>
      </div>
    </>
  );
}

export default App;
