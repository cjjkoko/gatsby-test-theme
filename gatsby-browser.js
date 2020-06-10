import React from 'react';
import "./src/styles/global.css"
import Layout from './src/components/layout'
import wrapWithProvider from "./utils/wrapWithProvider"
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const wrapRootElement = wrapWithProvider

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname)
  console.log('old pathname', prevLocation ? prevLocation.pathname : null)
}


export const onRouteUpdateDelayed = () => {
  console.log("We can show loading indicator now")
}


// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  if(props.path.match(/^\/app/)){
    return <Layout {...props}>{element}</Layout>
  }
}
