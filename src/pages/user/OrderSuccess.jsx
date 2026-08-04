import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light py-5">
      <div
        className="bg-white rounded-4 shadow-lg text-center position-relative px-5 py-5"
        style={{ maxWidth: "720px", width: "100%" }}
      >
        {/* Decorative Dots */}
        <div className="position-absolute top-0 start-50 translate-middle-x mt-3">
          <div className="d-flex flex-wrap justify-content-center gap-2" style={{ width: "220px" }}>
            {/* {Array.from({ length: 28 }).map((_, index) => (
              <span
                key={index}
                className="rounded-circle bg-primary opacity-75"
                style={{
                  width: index % 5 === 0 ? "10px" : "5px",
                  height: index % 5 === 0 ? "10px" : "5px",
                }}
              ></span>
            ))} */}
          </div>
        </div>

        {/* Success Icon */}
        <div
          className="mx-auto rounded-circle bg-primary d-flex justify-content-center align-items-center shadow"
          style={{
            width: "120px",
            height: "120px",
            marginTop: "40px",
          }}
        >
          <Check size={60} color="white" strokeWidth={3} />
        </div>

        {/* Title */}
        <h2 className="fw-bold mt-5">
          Thank You For Ordering!
        </h2>

        {/* Subtitle */}
        <p className="text-secondary mt-3 mb-5">
          Your order has been placed successfully.
          <br />
          You can track your order from your account anytime.
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3 flex-wrap">

          <button
            className="btn btn-outline-secondary px-5 py-2"
            onClick={() => navigate("/user/myorders")}
          >
            VIEW ORDER
          </button>

          <button
            className="btn btn-primary px-5 py-2"
            onClick={() => navigate("/")}
          >
            CONTINUE SHOPPING
          </button>

        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;