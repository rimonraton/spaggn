import api from './api'
export default {
    createSession() {
        return api.get('/sanctum/csrf-cookie')
    },
    login(params) {
        // console.log('params',params)
        return api.post('/api/login', params)
    },
    registration(params) {
        return api.post('/api/register', params)
    },
    createArtistProfile(params) {
        return api.post('/api/create-artist-profile', params)
    },
    createArtistAsset(params) {
        return api.post('/api/create-artist-asset', params)
    },
    getArtistProfile() {
        return api.get('/api/get-artist-profile')
    },
    getArtistAssets(page) {
        return api.get(`/api/get-artist-assets?page=${page}`)
    },
    imageRemove(params) {
        return api.post('/api/image-remove', params)
    },
    getOrganizations() {
        return api.get('/api/get-organizations')
    },
    createCharityProfile(param) {
        return api.post('/api/create-charity-profile', param)
    },
    getCharityProfile() {
        return api.get('/api/get-charity-profile')
    },
    getArtists(page) {
        return api.get(`/api/get-artists?page=${page}`)
    },
    getCharity(page) {
        return api.get(`/api/get-charity?page=${page}`)
    },
    getArtistDetails(id) {
        return api.get(`/api/get-artist-profile-by-id/${id}`)
    },
    getCharityDetails(id) {
        return api.get(`/api/get-charity-profile-by-id/${id}`)
    },
    removeArtistAssets(id) {
        return api.post('/api/remove-artist-assets', id)
    },
    updateArtistAssets(param) {
        return api.post('/api/update-artist-assets', param)
    },
    getAllArtists() {
        return api.get('/api/get-all-artists')
    },
    getAllCharities() {
        return api.get('/api/get-all-charities')
    },
    getDataForDashboard() {
        return api.get('/api/get-data-for-dashboard')
    },
    approvedArtist(param) {
        return api.post('/api/approved-artist', param)
    },
    approvedCharity(param) {
        return api.post('/api/approved-charity', param)
    },
    // getCurrentLocation(param) {
    //     return api.post('/api/getCurrentLocation', param)
    // },
    // getAutocompleteAddress(address) {
    //     return api.get(`/api/getAutocompleteAddress/${address}`)
    // },
    // setSelectedAddress(placeId) {
    //     return api.get(`/api/getPlaceDetails/${placeId}`)
    // },
    // getUserAddress(param) {
    //     return api.get(`/api/address/${param}`)
    // },
    // addAddress(param) {
    //     return api.post('/api/store-address', param)
    // },
    // removeAddress(param) {
    //     return api.post('/api/delete-address', param)
    // },
    // getRestaurant(param) {
    //     return api.get(`/api/getRestaurant?${param}`)
    // },
    // getProduct(param) {
    //     return api.get(`/api/getProduct/${param}`)
    // },
    // getShopProducts(param) {
    //     return api.get(`/api/shopProducts/${param}`)
    // },
    // getShopCategory(param) {
    //     return api.get(`/api/shopCategory/${param}`)
    // },
    // getShopProductsCategory(param1, param2) {
    //     return api.get(`/api/shopProductsCategory/${param1}/${param2}`)
    // },
    // searchShopProducts(param1, param2) {
    //     return api.get(`/api/searchShopProducts/${param1}/${param2}`)
    // },
    // saveCarts(param) {
    //     return api.post('/api/save-cart', param)
    // },
    // removeCartItem(param) {
    //     return api.post('/api/delete-cart', param)
    // },
    // getCartItems(param) {
    //     return api.get(`/api/getCart/${param}`)
    // },
    // incrementCartItem(param) {
    //     return api.post('/api/incrementCart', param)
    // },
    // decrementCartItem(param) {
    //     return api.post('/api/decrementCart', param)
    // },
    // shopProduct(param) {
    //     return api.get(`/api/shopProduct/${param}`)
    // },
    // saveReview(param) {
    //     return api.post('/api/save-review', param)
    // },
    // getProductReview(param) {
    //     console.log(['obj', param])
    //     return api.get(`/api/get-product-review/${param.product}?page=${param.pagenumber}`)
    // },
    // saveDeliveryReview(param) {
    //     return api.post('/api/save-delivery-review', param)
    // },
    // getDeliveryReview(param) {
    //     return api.get(`/api/get-delivery-review/${param}`)
    // },
    // getDistance(param) {
    //     return api.get(`/api/get-distance/${param.origins}/${param.destinations}`)
    // },
    // getMenus(role) {
    //     return api.get(`/api/get-menus/${role}`)
    // },
    // allMenu() {
    //     return api.get('/api/all-menus')
    // },
    // storeMenuRole(param) {
    //     return api.post('/api/store-role-menu', param)
    // },
    // sellerRegistration(param) {
    //     return api.post('/api/seller-registration', param)
    // },
    // riderRegistration(param) {
    //     return api.post('/api/rider-registration', param)
    // },
    // storeOrder(param) {
    //     // console.log('param.....', typeof param, param)
    //     return api.post('/api/store-orders', param)
    // },
    // getOrders(param) {
    //     return api.get(`/api/get-orders?page=${param.page}`)
    // },
    // searchOrders(param) {
    //     return api.get(`/api/search-orders/${param}`)
    // },
    // allSearchable(keyword) {
    //     return api.get(`/api/all-searchable/${keyword}`)
    // },
    // allSearchRestaurent(keyword) {
    //     return api.post('/api/search-by-item-category-restaurent', keyword)
    // },
    // getPolicy() {
    //     return api.get('/api/get-policy')
    // },
    // getOrdersHistoryByUser(user) {
    //     return api.get(`/api/get-orders-history/${user}`)
    // },
    // getCurrentOrdersByUser(user) {
    //     return api.get(`/api/get-current-orders/${user}`)
    // },
    // trackingOrders(orderNo) {
    //     return api.post('/api/tracking-orders', orderNo)
    // },
    // storeWiselist(param) {
    //     return api.post('/api/store-wiselist', param)
    // },
    // storeFavourite(param) {
    //     return api.post('/api/store-favourite', param)
    // },
    // getFavourites(user) {
    //     return api.get(`/api/get-favourites/${user}`)
    // },
    // removeFavourite(favourite) {
    //     return api.delete(`/api/remove-favourite/${favourite}`)
    // },
    // userProductReviews(user) {
    //     return api.get(`/api/user-product-reviews/${user}`)
    // },
    // userTobeReviewed(user) {
    //     return api.get(`/api/user-tobe-reviewed/${user}`)
    // },
    // productOptions(product) {
    //     return api.get(`/api/get-product-details/${product}`)
    // }
}