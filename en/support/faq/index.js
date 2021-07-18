import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  MDBContainer,
  MDBCard,
  MDBCardText
} from "mdbreact"

import Breadcrumb from "../../../../components/breadcrumb"
import SEO from "../../../../components/seo"
import Accordion from "../../../../components/accordion"

const FaqPage = () => (
  <StaticQuery
    query={graphql`
      query FaqQuery {
        allMarkdownRemark(filter: { 
          frontmatter: { type: { eq: "faq-en" } } 
          }) {
          edges {
            node {
              html
              id
              frontmatter {
                title
                path
                type
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Breadcrumb path_elements={["Support", "FAQ"]} />
        <MDBContainer className="py-2">
          <SEO title="FAQ" />
          <MDBCard className="col-lg-10 offset-md-1 col-md-11 mb-3 pl-4 pr-5 pt-3 pb-3">
            <MDBCardText className="m-3">
              <h1>Frequently Asked Questions</h1>
              <div class="border-top mb-3"></div>

              <p>
                This area contains the questions our customer ask us most
                frequently. Maybe your question is also in this list and can be
                answered right away...
              </p>

              <Accordion>
                {data.allMarkdownRemark.edges.map(faq => (
                  <div label={faq.node.frontmatter.title}>
                    <div dangerouslySetInnerHTML={{ __html: faq.node.html }} />
                  </div>
                ))}
              </Accordion>
            </MDBCardText>
          </MDBCard>
        </MDBContainer>
      </>
    )}
  />
)

export default FaqPage
