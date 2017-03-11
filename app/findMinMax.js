var exports = module.exports={};
exports.findMinMax = function (arr)
{
var newarr=[];
arr.sort(function(a,b){return a-b})
if (arr[0]===arr[arr.length-1]){
	newarr.push(arr[0])
}
else{
	newarr.push(arr[0]);
	newarr.push(arr[arr.length-1])
}

return newarr;
};