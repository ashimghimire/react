var mongoose=require('mongoose');
mongoose.promise=global.promise;
const serverConnectionString='mongodb+srv://aseem:mTbIXNzRY7h3S9IW@cluster0-brwpy.gcp.mongodb.net/rccpl';
const localConnectionString='mongodb://localhost:27017/todos';
mongoose.connect(localConnectionString, {useNewUrlParser: true}).then(function(response){
	// console.log(response);
},function(err){
	// console.log(err);
});
module.exports={mongoose};