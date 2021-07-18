import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

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
import Placeholder from "../../../../images/logo.png"

const PartnerPage = ({ data }) => (
  <>
    <Breadcrumb path_elements={["More", "Partner"]} />
    <MDBContainer className="py-2" fluid>
      <SEO title="Sales Partner" />

      <MDBRow>

        <MDBCol className="col-md-10 col-xl-9">
        <MDBCard className="col-lg-11 col-xl-10 offset-md-1 mb-5 pl-4 pr-md-5 pt-3 pb-3">
            <MDBCardBody>
              <MDBCardText>
                <h1>Overview of sales partners</h1>
                <div class="border-top mb-3"></div>

                <p>
                  Besides from metraTec you can also purchase our products from
                  different distribution partners. These companies not only
                  supply our products but also offer valuable local support as
                  well as integration services. Here is a list of our official
                  distribution partners.
                </p>

                {data.allMarkdownRemark.edges.map(partner => {
                  let featuredImgFluid

                  if (partner.node.frontmatter.featuredImage.childImageSharp) {
                    featuredImgFluid =
                      partner.node.frontmatter.featuredImage.childImageSharp
                        .fluid
                  } else {
                    featuredImgFluid = Placeholder
                  }

                  return (
                    <MDBCard className="mb-2 col-md-10 ml-md-4 mb-3">
                      <MDBCardBody>
                        <MDBCardText>
                          <MDBRow>
                            <MDBCol className="col-5 col-sm-3">
                              <Img fluid={featuredImgFluid} />
                            </MDBCol>
                            <MDBCol className="col-8">
                              <div>
                                <div className="lead">
                                  {partner.node.frontmatter.country}:{" "}
                                  {partner.node.frontmatter.title}{" "}
                                </div>
                              </div>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: partner.node.html,
                                }}
                              />
                              <div>
                                <a
                                  href={partner.node.frontmatter.homepage}
                                  target="_blank" rel="noopener noreferrer"
                                >
                                  Open Partner Website
                                </a>
                              </div>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  )
                })}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </>
)

export const pageQuery = graphql`
  query EnPartnerIndexQuery {
    allMarkdownRemark(filter: {
       frontmatter: { type: { eq: "partner" } } 
       fields: {slug: {regex: "//en//"}}
       }) {
      edges {
        node {
          fields {
            slug
          }
          id
          html
          frontmatter {
            title
            path
            country
            homepage
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PartnerPage
