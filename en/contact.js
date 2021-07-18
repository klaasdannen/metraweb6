import React from "react"
import { MDBContainer, MDBBtn, MDBIcon, MDBCard, MDBCardText } from "mdbreact"

import MetratecMap from "../../components/map"
import Breadcrumb from "../../components/breadcrumb"
import SEO from "../../components/seo"

const ContactPage = () => (
  <>
    <MetratecMap fluid />

    <Breadcrumb path_elements={["Contact"]} />
    <MDBContainer>
      <SEO title="Contact" />

      <MDBCard className="col-lg-8 offset-md-1 col-md-10 mb-5">
        <MDBCardText className="m-4">

          <form method="post" action="https://formspree.io/info@metratec.com">
            <p className="h4 mb-4">Write us a message</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
              name="name"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
              name="_replyto"
            />
            <br />
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Subject
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
              name="subject"
            />
            <br />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Your message
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
              name="message"
            />
            <div className="mt-4">
              <MDBBtn color="primary" outline type="submit">
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
            <input type="text" name="_gotcha" style={{display:"none"}} />
          </form>

        </MDBCardText>
        </MDBCard>
        
     
    </MDBContainer>
  </>
)

export default ContactPage
