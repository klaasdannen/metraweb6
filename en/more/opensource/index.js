import React from "react"
import { graphql } from "gatsby"

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdbreact"

import SEO from "../../../../components/seo"
import Breadcrumb from "../../../../components/breadcrumb"
import Sidemenu from "../../../../components/sidemenu"

const OpensourcePage = ({ data }) => (
  <>
    <Breadcrumb path_elements={["More", "Open Source"]} />
    <MDBContainer fluid>
      <SEO title="FOSS Projects" />

      <MDBRow>
        <Sidemenu title="Projects" menuItems={data.allMarkdownRemark.edges} />

        <MDBCol className="col-9">
          <MDBCard className="mb-5">
            <MDBCardBody>
              <MDBCardText>
                <h3>Overview of public research projects</h3>
                <p>
                  As an innovative company metraTec is very active in developing
                  new technologies and methods to improve our existing products
                  or develop completely new approaches. While some are internal
                  projects that are kept secret some are publicly funded
                  research projects that we do with a number of partners, like
                  universities, research institures and other innovative SMEs.
                  On the following pages we present you our past and current
                  research projects:
                </p>

         
           
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </>
)

export const pageQuery = graphql`
  query EnOSArticleIndexQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "opensource" } }
        fields: { slug: { regex: "//en//" } }
      }
      sort: { fields: frontmatter___rank}
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default OpensourcePage
