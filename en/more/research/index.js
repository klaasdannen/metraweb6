import React from "react"
import { Link, graphql } from "gatsby"

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

const ResearchPage = ({ data }) => (
  <>
    <Breadcrumb path_elements={["More", "Research"]} />
    <MDBContainer className="py-2" fluid>
      <SEO title="Research Projects" />

      <MDBRow>
        <MDBCol className="col-md-2 d-none d-md-block">
          <Sidemenu title="Projects" menuItems={data.allMarkdownRemark.edges} />
        </MDBCol>

        <MDBCol className="col-md-10 col-xl-9">
          <MDBCard className="mb-5 pl-4 pr-5 pt-3 pb-3">
            <MDBCardBody>
              <MDBCardText>
                <h1>Overview of public research projects</h1>
                <div class="border-top mb-3"></div>

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

                <div>
                  <i>Research Projects:</i>
                </div>
                <div className="mt-2">
                  <ul>
                    {data.allMarkdownRemark.edges.map(project => (
                      <li>
                        <Link to={project.node.fields.slug}>
                          <div key={project.node.id}>
                            {project.node.frontmatter.title} (Project Period:{" "}
                            {project.node.frontmatter.project_period}, funded
                            by: {project.node.frontmatter.funding})
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </>
)

export const pageQuery = graphql`
  query EnResearchArticleIndexQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "research" } }
        fields: { slug: { regex: "//en//" } }
      }
      sort: { fields: frontmatter___rank }
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
            project_period
            funding
          }
        }
      }
    }
  }
`

export default ResearchPage
