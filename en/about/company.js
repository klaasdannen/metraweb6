import React from "react"
import { MDBContainer, MDBCard, MDBCardText } from "mdbreact"

import Breadcrumb from "../../../components/breadcrumb"
import SEO from "../../../components/seo"

const CompanyPage = () => (
  <>
    <Breadcrumb path_elements={["About", "Company"]} />

    <MDBContainer className="py-2">
      <SEO title="About metraTec" />
      <MDBCard className="col-lg-11 col-12 offset-md-1 mb-5">
        <MDBCardText className="m-4">
          <h1>About metraTec</h1>
          <div class="border-top mb-3"></div>

          <p>
            We at metraTec firmly believe in a trend we called "electronization
            of everyday life" that today would be called the "Internet of
            Things". While in the past the use of electronics was limited to a
            few selected devices like computers, telephones or calculators,
            today more and more devices feature specialized electronics.
          </p>
          <p>
            To create new features, these devices will need sense to interact
            with their environment: They have to identify other objects,
            calculate their location in a building, share data with other
            devices and all of this with mobile power supplies that are charged
            wireless without cables or connectors. To make this vision come
            true, we develop wireless electronics for identification,
            localization, communication and wireless power transmission to give
            tomorrow's devices a future or in short:
          </p>
          <p className="lead">"Making things communicate"</p>
        </MDBCardText>
      </MDBCard>
    </MDBContainer>
  </>
)

export default CompanyPage
