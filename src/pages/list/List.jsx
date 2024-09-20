import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, reFetch } = useFetch(
    `https://mern-hotel-app-backend.onrender.com/api/hotels?city=${destination}&min=${
      min || 0
    }&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <div className="p-3 border rounded bg-light">
              <h1 className="h4 mb-3">Search</h1>

              <div className="mb-3">
                <label className="form-label">Destination</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={destination}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Check-in Date</label>
                <span
                  className="d-block p-2 border rounded bg-white cursor-pointer"
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDates([item.selection])}
                    minDate={new Date()}
                    ranges={dates}
                    className="mt-2"
                  />
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Options</label>
                <div className="border rounded p-3">
                  <div className="mb-3">
                    <label className="form-label">Min price <small>per night</small></label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={(e) => setMin(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Max price <small>per night</small></label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={(e) => setMax(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Adults</label>
                    <input
                      type="number"
                      min={1}
                      className="form-control"
                      placeholder={options.adult}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Children</label>
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      placeholder={options.children}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Room</label>
                    <input
                      type="number"
                      min={1}
                      className="form-control"
                      placeholder={options.room}
                    />
                  </div>
                </div>
              </div>

              <button className="btn btn-primary w-100" onClick={handleClick}>
                Search
              </button>
            </div>
          </div>

          <div className="col-lg-9">
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : (
              <div className="row">
                {data.map((item) => (
                  <div className="col-lg-9 mb-4" key={item._id}>
                    <SearchItem item={item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
