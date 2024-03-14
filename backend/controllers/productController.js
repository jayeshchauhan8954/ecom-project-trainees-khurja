const Product = require('../models/productModel')
const contants = require('../utils/contants')
exports.createProduct = async (req, res) => {
    let { productName, price, description, quantity, rating, images, productColor, productMrp, productTitle } = req.body;

    const newProduct = new Product(
        {
            productName: productName,
            price: price,
            description: description,
            quantity: quantity,
            rating: rating,
            images: images,
            productColor: productColor,
            productMrp: productMrp,
            productTitle: productTitle
        }
    )
    await newProduct.save()
    res.send({
        message: "Product find",
        status: 200,
        data: newProduct
    })

}

exports.updateProduct = async (req, res) => {
    try {
        let { id, productName, price, description, quantity, rating, images, productColor, productMrp, productTitle } = req.body;
        let record = {
            productName: productName,
            price: price,
            description: description,
            quantity: quantity,
            rating: rating,
            images: images,
            productColor: productColor,
            productMrp: productMrp,
            productTitle: productTitle
        }
        await Product.update(record, {
            where: {
                id
            }
        })

        res.send({ message: 'Product updated successfully' })
    } catch (error) {
        res.send({ message: error.message })
    }
}

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = Product.update({
            status: contants._status.INACTIVE
        },
            {
                where: {
                    id
                }
            }


        )
        res.send(product)
    } catch (error) {
        res.send(error)

    }

}


exports.getAllProducts = async (req, res) => {
    let { category } = req.query;
    try {
        let _where = {
            status: contants._status.ACTIVE
        }
        let category_id = null;
        if (category) {
            category_id = await category.findOne({ name: category })?.id
        }
        if (category_id) {
            _where.categoryId = category_id
        }

        if (productName) {
            _where.productName = productName
        }
        let product = await Product.findAndCountAll({
            where: _where
        })

        res.send({
            message: "Products find successfully",
            status: 200,
            data: product
        })
    } catch (error) {
        res.send(error)

    }
}