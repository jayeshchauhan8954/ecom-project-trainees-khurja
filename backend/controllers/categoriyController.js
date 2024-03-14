const categories=require('../models/categoriy')

//createCategories
exports.createCategories=async(req,res)=>{
try {
  let{categoriName,type}=req.body;
  const newcategori=new categories(
      {
          categoriName:categoriName,
          type:type
      }
  )
  await newcategori.save()
  res.send(newcategori)
} catch (error) {
  res.send({message:error.message})
}
}


exports.getAllCategories = async (req, res) => {
    let categories=await categories.findAndCountAll({
      where:{
        status:'active',
        id
      }
    })
    res.send(categories)
  }