import React from 'react'
import propTypes from 'prop-types'

const Data = ({azerty,children,age}) => {
    console.log(azerty)
    // const {FuullName,Bio,Profession}=azerty
  return ( 
      <div>
          <h1 >
            {azerty.FuullName}
            {children}
            {age}
          </h1>
      </div>
  )
    
 
}
Data.defaultProps = {
    azerty:{
        FuullName:'mounir'
    },
    age:25

}

Data.propTypes = {
    age:propTypes.number
}
export default Data