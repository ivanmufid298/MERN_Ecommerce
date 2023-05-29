import React from "react";
import Layout from "../components/layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

export const Contact = () => {
  return (
    <Layout title={"Contact"}>
      <div className="container-fluid">
        <div className="row contact">
          <div className="col-md-6">
            <img
              src="/images/contact.png"
              alt="contact"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-6 mt-5">
            <div className="card card-contact">
              <h1
                className="bg-dark p-2 text-white text-center"
                style={{ borderRadius: 10 }}
              >
                Contact Us
              </h1>
              <p className="text-justify mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="mt-3">
                <BiMailSend /> : www.help@ivan-ecommerce.com
              </p>
              <p className="mt-3">
                <BiPhoneCall /> : +62 822-1327-3168
              </p>
              <p className="mt-3">
                <BiSupport /> : 1800-0000-0000 (Free)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
