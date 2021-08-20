import React from 'react'
import SHOP_DATA from './shop-data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor () {
        super()
        this.state = {
            collection: SHOP_DATA
        }
    }

    render() {
        const {collection} = this.state
        return (
            collection.map(({id, ...otherCollectionProps}) => {
                return <CollectionPreview key={id} {...otherCollectionProps} />
            })
        )
    }
}

export default ShopPage