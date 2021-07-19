import React from "react"
import {
  MDBContainer,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdbreact"
import { StaticQuery, graphql, Link } from "gatsby"

import Breadcrumb from "../../../components/breadcrumb"
import SEO from "../../../components/seo"

const NewsPageEn = () => (
  <StaticQuery
    query={graphql`
      query EnNewsQuery {
        allMarkdownRemark(
          filter: { 
            frontmatter: { type: { eq: "news" } } 
            fields: { slug: { regex: "//en//" } }
            }
          sort: { order: DESC, fields: frontmatter___date}
        ) {
          edges {
            node {
              html
              excerpt
              fields {
                slug
              }
              id
              frontmatter {
                title
                path
                date
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Breadcrumb path_elements={["About", "News"]} />

        <MDBContainer className="py-2">
          <SEO title="Über metraTec" lang="de" />
          <MDBCard className="col-lg-11 col-12 offset-lg-1 mb-4">
            <MDBCardText className="m-4">
              <h1>Press Releases and more</h1>
              <div class="border-top mb-3"></div>

              <p>
                Here you find all previous press releases from metraTec in a single spot...
              </p>
            </MDBCardText>
          </MDBCard>

          {data.allMarkdownRemark.edges.map(news_article => {
            // let featuredImgFluid

            // if (news_article.node.frontmatter.featuredImage.childImageSharp) {
            //   featuredImgFluid =
            //     news_article.node.frontmatter.featuredImage.childImageSharp.fluid
            // } else {
            //   featuredImgFluid = Placeholder
            // }

            return (
              <MDBCard className="col-lg-11 col-12 offset-lg-1 mb-3">
              <MDBCardBody>
                  <MDBCardText>
                    <MDBRow>
                      {/* <MDBCol className="col-4 col-lg-2 col-sm-3 mb-4">
                        <Img fluid={featuredImgFluid} />
                      </MDBCol> */}
                      <MDBCol className="col-12 col-sm-8">
                        <div>
                          <h4>{news_article.node.frontmatter.title}</h4>
                        </div>
                        <div>
                          <i>{news_article.node.frontmatter.date}</i>
                        </div>
                        <div>{news_article.node.excerpt}</div>
                        <Link to={news_article.node.fields.slug}>
                          <MDBBtn color="primary" outline className="mt-3">
                            <MDBIcon icon="caret-right" className="mr-2" />
                            Read more...
                          </MDBBtn>
                        </Link>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            )
          })}
        </MDBContainer>
      </>
    )}
  />
)

export default NewsPageEn
