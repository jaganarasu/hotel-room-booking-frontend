import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className="header  py-5">
      <div className={`container ${type === "list" ? "" : "text-center"}`}>
        <div className="row justify-content-center mb-4">
          <div className="col-lg-2 col-sm-4">
            <div className="headerListItem active text-center">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="headerListItem active text-center">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="headerListItem active text-center">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="headerListItem active text-center">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="headerListItem  active text-center">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
            Find your next stay,<br/> Search low prices on hotels, homes and much more...


            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10%
            </p>
            {!user && (
              <button className="btn btn-primary my-4"   onClick={() => navigate('/login')}>Sign in / Register</button>
            )}

            <div className="row  align-items-center justify-content-center bg-dark mt-3 mb-3">
              <div className="col-md-3 col-12 mt-3 mb-3">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="form-control"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcon"
                  />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="form-control"
                  >
                    {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                      dates[0].endDate,
                      "MM/dd/yyyy"
                    )}`}
                  </span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="form-control"
                  >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                  {openOptions && (
                    <div className="options mt-2 p-3 border rounded bg-light">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            disabled={options.adult <= 1}
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="mx-2">{options.adult}</span>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            disabled={options.children <= 0}
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="mx-2">{options.children}</span>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            disabled={options.room <= 1}
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="mx-2">{options.room}</span>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-2 col-12">
                <button
                  className="btn btn-primary w-100"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
