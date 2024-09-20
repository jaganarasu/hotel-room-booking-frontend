import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "https://mern-hotel-app-backend.onrender.com/api/hotels?featured=true&limit=6"
    // "http://localhost:5000/api/hotels?featured=true&limit=4"
  );

  return (
    <div className="container my-2 ">
        <div className="col-lg-12  mb-4">
            <h2 className="text-center mb-4">Browse by property view
            </h2>
            </div>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row col-lg-10 offset-lg-1 ">
          
          {data.map((item) => (
            <div className="col-lg-4 col-md-6 mb-4" key={item._id}>
              <div className="card h-100">
                <img
                  src={item.photos[0]}
                  alt={item.name}
                  className="card-img-top fpImg"
                />
                <div className="card-body">
                  <h5 className="card-title fpName">{item.name}</h5>
                  <p className="card-text fpCity">{item.city}</p>
                  <p className="card-text text-primary">
                    Starting from ${item.cheapestPrice}
                  </p>
                  {item.rating && (
                    <div className="d-flex justify-content-between align-items-center">
                      <button className="btn btn-success">{item.rating}</button>
                      <span>Excellent</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedProperties;
