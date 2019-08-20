import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import landingStyling from '../components/landing.module.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={`${landingStyling.landing} container`}>
        <div className={landingStyling.container}>
          <div className={landingStyling.display}>
            I <span>Build</span> Things
          </div>
          <div className={landingStyling.lead}>
            I’m James, a full stack web developer turning ideas into digital reality.
          </div>
          <div className={landingStyling.btn__container}>
            <Link className="btn" to="/work">Latest Work</Link>
            <Link className="btn btn__secondary" to="/contact">Lets Chat</Link>
          </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage
