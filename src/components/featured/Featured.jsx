import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { loading } = useFetch(
    "https://mern-hotel-app-backend.onrender.com/api/hotels/countByCity?cities=chennai,newdelhi,mumbai"
    // "http://localhost:5000/api/hotels/countByCity?cities=chennai,newdelhi,mumbai"
  );

  return (
    <div className="container my-2">
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
            <div className="col-lg-12">
            <h2 className="text-center mb-2">Our Feature Cities</h2>
            </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card featuredItem">
              <img
                src="https://i0.wp.com/oneday.travel/wp-content/uploads/one-day-chennai-to-mahabalipuram-and-kanchipuram-trip-sightseeing-tour-package-arjunar-penance-mahabalipuram.jpg?resize=750%2C500&ssl=1"
                alt="Chennai"
                className="card-img-top featuredImg"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Chennai</h5>
                <p className="card-text">369 properties</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card featuredItem">
              <img
                src="https://content.r9cdn.net/rimg/dimg/6d/77/0cc45283-city-32821-176ddb032b7.jpg?resize=750%2C500&ssl=1"
                alt="New Delhi"
                className="card-img-top featuredImg"
              />
              <div className="card-body text-center">
                <h5 className="card-title">New Delhi</h5>
                <p className="card-text">231 properties</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card featuredItem">
              <img
                src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/India/Mumbai/gateway-of-india-mumbai-xlarge.jpg?resize=750%2C500&ssl=1s"
                alt="Mumbai"
                className="card-img-top featuredImg"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Mumbai</h5>
                <p className="card-text">60 properties</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
