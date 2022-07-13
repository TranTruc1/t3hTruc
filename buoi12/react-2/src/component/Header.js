import React, { Component } from 'react'

export const Header = class Header extends Component {
  constructor(props){
    super(props);
  }
  render() {  
    return (
      <div>
        <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
          <div className='container '>
            <a href='#' className='navbar-brand'>
        <h2>{this.props.branding}</h2>
        </a>  
          </div>
        </nav>
      </div>
    )
  }
}