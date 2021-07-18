import React from "react"
import { MDBContainer, MDBCard, MDBCardText } from "mdbreact"

import Breadcrumb from "../../components/breadcrumb"
import SEO from "../../components/seo"

const ImpressPage = () => (
  <>
    <Breadcrumb path_elements={["Impress"]} />
    <MDBContainer className="py-2">
      <SEO title="Impress" />
      <MDBCard className="col-lg-9 col-md-11 col-12 offset-lg-1 mb-5">
        <MDBCardText className="m-4">
          <h1>Impress</h1>
          <div class="border-top mb-3"></div>


          <div className="mb-3">
            <i>Responsible for the content on this page:</i>
            <br />
            <br />
            <b>metraTec GmbH</b>
            <br />
            Niels-Bohr-Str. 5<br />
            39106 Magdeburg
          </div>
          <div className="mb-3">
            Tel: 0391 25 19 06 - 00 <br />
            Fax: 0391 25 19 06 - 01
          </div>
          <div className="mb-3">
            <i>Managing Directors: </i>
            <br />
            Dipl.-Kfm. Klaas
            <br />
            Dannen Dr.-Ing. Frank Steyer
            <br />
          </div>
          <div className="mb-3">
            <i>Registered: </i>
            <br />
            HRB 114 987 at the commercial court Stendal
            <br />
            VAT-ID: DE 814 527 239 <br />
          </div>
          <div className="mb-3">info@metratec.com</div>
          <br />

          <h2>Copyright/Disclaimer</h2>
          <div className="mb-3">
            <p>
              The contents and works on these pages are subject to German
              copyright law. The reproduction, editing, distribution and any
              kind of exploitation outside the limits of copyright law require
              the written consent of metraTec GmbH. Downloads and copies of
              these pages are only permitted for private, non-commercial use.
            </p>
            <p>"metraTec" is a registered trademark of metraTec GmbH.</p>
            <p>
              This website has been created with the utmost care and is
              regularly checked for its content. Nevertheless, it cannot be
              guaranteed that the information on this site is always up to date.
              In particular, technical details that can be found on this site
              may change without the corresponding information being updated.
              All product brochures, data sheets, etc. therefore do not
              constitute a binding guarantee for the actual functionality of the
              products. All data, the use of this site as well as activities
              connected with it are subject to German law, the place of
              jurisdiction is Magdeburg.
            </p>
          </div>
        </MDBCardText>
      </MDBCard>
    </MDBContainer>
  </>
)

export default ImpressPage
