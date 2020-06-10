/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import Layout from './src/components/layout'
import wrapWithProvider from "./utils/wrapWithProvider"
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Wraps every page in a component

export const wrapRootElement = wrapWithProvider


export const wrapPageElement = ({ element, props }) => {
  if(props.path.match(/^\/app/)){
    return <Layout {...props}>{element}</Layout>
  }
}
export const onPreRenderHTML = (
  { pathname, replaceHeadComponents, getHeadComponents, setBodyAttributes },
  pluginOptions
) => {
  console.log(" onPreRenderHTML pathname", pathname)
  const head =  getHeadComponents()
  head.push(<script src="/test1.js"/>)
  head.push(<script src="/test2.js"/>)
  head.push(<script src="/test3.js"/>)
  replaceHeadComponents(head)

}
export const replaceRenderer = ({ pathname, bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  console.log(pathname)

}

export const onRenderBody = (
  { pathname, setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {
  console.log("onRenderBody", pathname)

}
