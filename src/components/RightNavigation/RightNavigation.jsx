import React from 'react'
import "./RightNavigation.css"
import {RightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'
const RightNavigation = () => {
  return (
    <div className='right-nav-main'>
        <p>Navigation</p>
        <Link to="/BhagwanSwaminarayan">
        <div>
        <RightOutlined /> Bhagwan Swaminarayan <br />
        </div>
        </Link>
        <Link to=''>
        <div>
        <RightOutlined /> Contact Us <br />
        </div>
        </Link>
        <Link to="FAQ">
        <div>
        <RightOutlined /> Frequently Asked Questions <br />
        </div>
        </Link>
        <Link>
        <div>
        <RightOutlined /> Testimonials <br />
        </div>
        </Link>
        <Link to="topusers">
        <div>
        <RightOutlined /> Top Users <br />
        </div>
        </Link>
    </div>
  )
}

export default RightNavigation