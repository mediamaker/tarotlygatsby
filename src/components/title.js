import React from 'react'
import styled from 'styled-components'

 const Title = ({ title, className }) => {
    return (
      <div className={className}>
        <h4>
          <span className="title">{title}</span>
        </h4>
        </div>
    )
  }

  export default styled(Title)`
    .h4 {
      text-align: center;
    }
    .title
      text-transform: uppercase;
      color: rebeccapurple;
    }
  `

