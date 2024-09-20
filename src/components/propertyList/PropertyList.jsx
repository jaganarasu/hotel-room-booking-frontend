import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading } = useFetch(
    "https://mern-hotel-app-backend.onrender.com/api/hotels/countByType"
    // "http://localhost:5000/api/hotels/countByType"
  );

  const images = [
    "https://cdn0.weddingwire.in/vendor/8684/3_2/960/jpg/hotels-lemon-tree-premier-ahmedabad-hotel-space-3_15_298684-159497949283782.jpeg",
    "https://c4.wallpaperflare.com/wallpaper/22/205/283/apartment-condo-design-home-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/438/466/493/huvafen-fushi-spa-resort-hd-with-high-resolution-wallpaper-preview.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowHoGGaPWUT1QyhBgX6fBCqnpnrccsVGv9Q&usqp=CAU",
    "https://www.pixelstalk.net/wp-content/uploads/2016/08/Log-Cabin-HD-Image.jpg",
  ];

  return (
    <div className="container my-2">
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className=" row justify-content-center">
             <h2 className="text-center mb-4">Browse by property type
             </h2>
          {data &&
            images.map((img, i) => (
              <div className="col-lg-2 col-md-6 mb-4" key={i}>
                <div className="card pListItem">
                  <img src={img} alt="" className="card-img-top pListImg" />
                  <div className="card-body text-center">
                    <h5 className="card-title">{data[i]?.type}</h5>
                    <p className="card-text">
                      {data[i]?.count} {data[i]?.type}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PropertyList;
