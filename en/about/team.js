import React from "react"
import { MDBContainer, MDBCard, MDBCardText } from "mdbreact"

import Breadcrumb from "../../../components/breadcrumb"
import SEO from "../../../components/seo"

const TeamPage = () => (
  <>
    <Breadcrumb path_elements={["About", "Team"]} />
    <MDBContainer className="py-2">
      <SEO title="Team" />
      <MDBCard className="col-lg-11 col-12 offset-lg-1 mb-5">
        <MDBCardText className="m-4">
          <h1>Our Team</h1>
          <div class="border-top mb-3"></div>

          <p>
            The metraTec team currently consists of about 25 people, who
            together all tasks from the areas of hardware and software
            development, production and distribution.
          </p>
        </MDBCardText>
      </MDBCard>
    </MDBContainer>
  </>
)

export default TeamPage
