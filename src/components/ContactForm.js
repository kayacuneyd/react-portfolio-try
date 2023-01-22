import React from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <>
      <form className="py-3">
        <div className="mb-4" bis_skin_checked="1">
          <label htmlFor="name" className="form-label text-uppercase">
            Name <span className="text-primary">*</span>
          </label>
          <input type="text" id="name" className="form-control" required="" />
        </div>
        <div className="mb-4" bis_skin_checked="1">
          <label htmlFor="email" className="form-label text-uppercase">
            Email <span className="text-primary">*</span>
          </label>
          <input type="email" id="email" className="form-control" required="" />
        </div>
        <div className="mb-4" bis_skin_checked="1">
          <label htmlFor="message" className="form-label text-uppercase">
            Message <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            className="form-control rounded"
            rows="9"
            required=""
            spellCheck="false"
          ></textarea>
        </div>
        <div className="form-check mb-4" bis_skin_checked="1">
          <input type="checkbox" id="terms" className="form-check-input" />
          <label htmlFor="terms" className="form-check-label small">
            I agree with the <Link to="#">terms and conditions</Link>
          </label>
        </div>
        <button type="submit" className="btn btn-primary rounded-pill mb-4">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
