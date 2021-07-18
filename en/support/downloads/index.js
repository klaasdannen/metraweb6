import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MDBContainer, MDBCard, MDBCardText, MDBCol } from "mdbreact"

import Breadcrumb from "../../../../components/breadcrumb"
import SEO from "../../../../components/seo"
import FileTable from "../../../../components/file_table.js"

const DownloadPage = () => (
  <StaticQuery
    query={graphql`
      query DownloadFileQuery {
        documents: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "//en//" }
            frontmatter: { type: { eq: "file" }, category: { eq: "document" } }
          }
          sort: { order: ASC, fields: frontmatter___filename }
        ) {
          edges {
            node {
              frontmatter {
                attachments {
                  publicURL
                  prettySize
                }
                filename
                version
              }
            }
          }
        }
        firmware: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "//en//" }
            frontmatter: { type: { eq: "file" }, category: { eq: "firmware" } }
          }
          sort: { order: ASC, fields: frontmatter___filename }
        ) {
          edges {
            node {
              frontmatter {
                attachments {
                  publicURL
                  prettySize
                }
                filename
                version
              }
            }
          }
        }
        software: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "//en//" }
            frontmatter: { type: { eq: "file" }, category: { eq: "software" } }
          }
          sort: { order: ASC, fields: frontmatter___filename }
        ) {
          edges {
            node {
              frontmatter {
                attachments {
                  publicURL
                  prettySize
                }
                filename
                version
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Breadcrumb path_elements={["Support", "Downloads"]} />
        <MDBContainer className="py-2">
          <SEO title="Downloads" />
          <MDBCard className="col-lg-11 col-xl-10 mb-3 offset-md-1 pl-4 pr-5 pt-3 pb-3">
            <MDBCardText className="m-4">
              <h1>Downloads</h1>
              <div class="border-top mb-3"></div>

              <p>
                On this page you find all our files like datasheets,
                documentation or software that are necessary to use our
                products.
              </p>
              <div className="mb-5">
                <h4>Documents</h4>
                <MDBCol className="col-md-9 mt-3">
                  <FileTable tableContent={data.documents.edges} />
                </MDBCol>
              </div>

              <div className="mb-5">
                <h4>Firmware</h4>
                <MDBCol className="col-md-9 mt-3">
                  <FileTable tableContent={data.firmware.edges} />
                </MDBCol>
              </div>

              <div className="mb-5">
                <h4>Software</h4>
                <MDBCol className="col-md-9 mt-3">
                  <FileTable tableContent={data.software.edges} />
                </MDBCol>
              </div>
            </MDBCardText>
          </MDBCard>
        </MDBContainer>
      </>
    )}
  />
)

export default DownloadPage
