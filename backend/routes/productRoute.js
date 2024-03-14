const { createProduct, updateProduct, deleteProduct, getAllProduct } = require('../controllers/productController')

module.exports = (app) => {
    app.post('/v1/createProduct', createProduct)
    app.put('/v1/updateProduct', updateProduct)
    app.delete('/v1/deleteProduct', deleteProduct)
    app.get('/v1/getAllProduct', getAllProduct)

}