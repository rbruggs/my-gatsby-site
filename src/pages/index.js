import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Hank the Tank, a 500-pound bear that has broken into 28 homes in Lake Tahoe"
        src="https://www.wane.com/wp-content/uploads/sites/21/2022/02/HankTank.jpg"
      />
    </Layout>
  )
}

export default IndexPage