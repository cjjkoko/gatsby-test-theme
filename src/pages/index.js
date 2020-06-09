import React,{useEffect} from "react"
import { connect } from "react-redux"

const  Home=(props)=> {

  useEffect(()=>{
    const a={c:{d:"sss"}}
    console.log(a?.c?.d ,"sssss")
    props.dispatch({
      type:'test2/test'
    })
  },[])
  return(<div>Homepage in a user's site</div>)
}
export default connect()(Home)
