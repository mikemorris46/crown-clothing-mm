import React, { Component, PropTypes } from 'react'

import './shop.styles.scss'

import SHOP_DATA from './shop.data'

import CollectionPreview from 'components/collection-preview/collection-preview.component'

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  }

  render () {
    const { collections } = this.state

    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}

ShopPage.propTypes = {}

export default ShopPage
