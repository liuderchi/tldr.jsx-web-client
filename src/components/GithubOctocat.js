import React from 'react'

export default React.createClass({

  render: function () {
    let id = this.props.id || ""
    let href = "https://github.com/"+this.props.path
    let title = this.props.title || this.props.path+" on Github"
    let width = this.props.width || "2em"
    let height = this.props.height || "2em"
    let viewbox = this.props.viewbox || "0 0 512 512"
    let className = this.props.className || "github-corner"
    return (
      <div>
        <a
          className={className}
          id={id}
          href={href}
          title={title}
          target="blank">
          <svg className="github-corner"
            width={width}
            height={height}
            viewBox={viewbox}>
           <path xmlns="http://www.w3.org/2000/svg" d="M255.987,0C114.615,0,0,114.622,0,256.013c0,113.103,73.333,209.064,175.07,242.892   c12.814,2.371,17.475-5.514,17.475-12.321c0-6.063-0.225-22.153-0.333-43.538c-71.215,15.48-86.241-34.327-86.241-34.327   c-11.644-29.563-28.429-37.436-28.429-37.436c-23.244-15.872,1.766-15.558,1.766-15.558c25.692,1.813,39.215,26.371,39.215,26.371   c22.83,39.122,59.923,27.802,74.5,21.289c2.317-16.577,8.948-27.833,16.253-34.244C152.439,362.68,92.68,340.718,92.68,242.622   c0-27.955,9.971-50.812,26.34-68.712c-2.619-6.445-11.42-32.475,2.516-67.733c0,0,21.49-6.882,70.407,26.263   c20.407-5.705,42.311-8.555,64.083-8.638c21.744,0.089,43.654,2.933,64.09,8.638c48.878-33.145,70.334-26.263,70.334-26.263   c13.974,35.259,5.179,61.288,2.551,67.733c16.41,17.9,26.308,40.757,26.308,68.712c0,98.327-59.846,119.987-116.872,126.301   c9.18,7.91,17.372,23.564,17.372,47.449c0,34.205-0.314,61.808-0.314,70.205c0,6.858,4.603,14.833,17.597,12.295   C438.718,464.968,512,369.09,512,256.013C512,114.622,397.385,0,255.987,0z"/> 
          </svg>
        </a>
      </div>
    )
  },

})
