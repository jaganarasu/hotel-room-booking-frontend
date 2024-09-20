import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail py-4">
      <div className="container text-center">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">
          Sign up and we'll send the best deals to you
        </span>
        <div className="mailInputContainer mt-3 d-flex justify-content-center">
          <input
            type="text"
            placeholder="Your Email"
            className="form-control w-50 me-2"
          />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default MailList;
