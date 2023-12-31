import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
   name: { type: String, required: true },
   rating: { type: Number, required: true },
   comment: { type: String, required: true },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User'
   },
}, {
   timestamps: true
})

const productSchema = mongoose.Schema(
   {
      user: {  //To track which admin created which product
         type: mongoose.Schema.Types.ObjectId, //User id of that admin
         require: true,
         ref: 'User' // Add Relationship between user and product
      },
      name: {
         type: String,
         required: true,
      },
      image: {
         type: String,
         required: true
      },
      brand: {
         type: String,
         required: true,
      },
      category: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      reviews: [reviewSchema],
      rating: {
         type: Number,
         required: true,
         default: 0
      },
      numReviews: {
         type: Number,
         required: true,
         default: 0
      },
      price: {
         type: Number,
         required: true,
         default: 0
      },
      countInStock: {
         type: Number,
         required: true,
         default: 0
      },

   }, {
   timestamps: true  //created and updated 
})

const Product = mongoose.model('Product', productSchema)


export default Product
