import React from "react"
import { MDBContainer, MDBCard, MDBCardText } from "mdbreact"

import Breadcrumb from "../../../components/breadcrumb"
import SEO from "../../../components/seo"

const JobsPageEn = () => (
  <>
    <Breadcrumb path_elements={["About", "Jobs"]} />

    <MDBContainer className="py-2">
      <SEO title="Jobs" />
      <MDBCard className="col-lg-11 col-12 offset-md-1 mb-5">
        <MDBCardText className="m-4">
          <h1>Jobs at metraTec</h1>
          <div class="border-top mb-3"></div>

          <p>
            We are primarily looking for support in the areas of electronics
            development and information technology. In particular,
            we are looking for motivated students who would like to work on
            future technologies such as RFID, positioning technology or general
            radio technology in a dynamic working environment. Possible
            activities include board design (circuit design, routing, etc.),
            firmware programming (primarily on modern ARM controllers) as well
            as programming in high-level languages, especially Python, Java and
            JS/React. Due to our contacts to the University Magdeburg or FH Magdeburg,
            internships can also be recognized as company internships.
          </p>
          <p>
            We offer extensive experience in the field and good equipment with
            both tools and materials. As a young company, we also offer a
            relaxed working environment, exciting and highly topical work
            topics. Our company is located directly on the river Elbe in the
            Science Harbour in walking distance to the University of Magdeburg
            and not far from the University of Applied Sciences Magdeburg. And
            of course we serve the best espresso in town...
          </p>
          <p>
            If you are interested, please send a detailed application (i.e.
            including an overview of your grades) to recruiting@metratec.com. All
            applications will be treated confidentially. Contact person: Mr.
            Klaas Dannen
          </p>
        </MDBCardText>
      </MDBCard>
    </MDBContainer>
  </>
)

export default JobsPageEn
