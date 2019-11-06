import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      sizee={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        imageUrl={imageUrl}
        className='background-image'
      />
      <ContentContainer className='content'>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle className='subtitle'>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  imageUrl: PropTypes.string
}

export default withRouter(MenuItem)
