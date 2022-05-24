// ** insert a new blog post ** //
//db.posts.insertOne({
//     author: "Terrell",
//     title: "rells world",
//     text: "Hello world",
    
// })
 
// ** read the new blog post ** //
// db.posts.find({author: "Terrell"}
//     ).limit(100)


//** Update the new blog post with a new title  **//

//db.posts.updateOne({author: "Terrell"}, {$set : { author : "new Terrell"}},)


//**  Delete the new blog post **/

//db.posts.deleteOne({_id : ObjectId("628d0a2d37cbbb05ea1525d3")})//

//** **/
//** .sort  **/

// const getPosts = (limit, skip, sortField, sortOrder, filterField, filterValue) => {
//     const sortObject = {}
//     sortObject[sortField] = sortOrder
//     //Expand this functionality
//     const dbResult = db.blog50.find({}).limit(limit).skip(skip).sort({[sortField] : sortOrder }).toArray()
    
//     return dbResult;
// }

// console.log(getPosts(10, 2, "category", 1, "author", "James"))