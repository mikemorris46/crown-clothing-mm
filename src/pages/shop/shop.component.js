import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from 'components/collections-overview/collections-overview.componrnt'

import CollectionPage from 'pages/collection/collection.component'

import './shop.styles.scss'

const ShopPage = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage
