const { createCategories, getCategorieById } = require("../controllers/categoriyController")
module.exports=(app)=>{
    app.post('/v1/createCategory',createCategories),
    app.get('v1/getCategoryById',getCategorieById)
}