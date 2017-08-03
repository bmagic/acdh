import React from 'react'
import Layout from '../components/Layout'

export default class extends React.Component {
  static getInitialProps({query: {id}}) {
    return {id}
  }

  render() {
    return <Layout title={"Emission" +this.props.id}>
      <h1>My {this.props.id} program</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    </Layout>
  }
}