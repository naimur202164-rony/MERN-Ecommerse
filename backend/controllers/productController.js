const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ApiFeatures = require("../utils/apifeatures");

// Create Product --Admin

exports.createProduct = catchAsyncErrors(
    async (req, res, next) => {

        req.body.user=req.user.id

        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product
        })
    }
)


// Get All Products With
exports.getAllProduct = catchAsyncErrors(
    async (req, res, next) => {

        const resultPerPage = 8;
        const productsCount = await Product.countDocuments();
        const apiFeature = new ApiFeatures(Product.find(), req.query)
            .search()
            .filter();

        let products = await apiFeature.query;
        let filteredProductsCount = products.length;
        apiFeature.pagination(resultPerPage);
        products = await apiFeature.query;
        res.status(200).json({
            success: true,
            products,
            productsCount,
            resultPerPage,
            filteredProductsCount,
        });
    }

)

// Get Single Products

exports.getProductDetails = catchAsyncErrors(
    async (req, res, next) => {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHander("Product Not Found ", 404))
        }

        res.status(200).json({
            success: true,
            product
        })
    }
)

// Update Product ---Admin

exports.updateProduct = catchAsyncErrors(
    async (req, res, next) => {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHander("Product Not Found ", 404))
        }
        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });

        res.status(201).json({
            success: true,
            product
        })

    }
)

// Delet Product --Admin

exports.deleteProducts = catchAsyncErrors(
    async (req, res, next) => {
        let product = await Product.findById(req.params.id);

        if (!product) {
            return next(new ErrorHander("Product Not Found ", 404))
        }

        await product.remove();


        res.status(200).json({
            success: true,
            message: "Product  Deleted Successfully"
        })
    }
)