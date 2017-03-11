var exports = module.exports={};
exports.aritGeo = function (myarr)
{
if (myarr.length==0)
{
	return 0
}
var d = myarr[1] - myarr[0];
var r = myarr[1] / myarr[0];

var arit = true;
var geo = true;

for(var i = 0; i < myarr.length - 1; i++)
{
    if( myarr[i + 1] - myarr[i] !== d)
    {
      arit = false;
    }
    if(myarr[i + 1] /myarr[i] !== r)
    {
      geo = false;
    }
}

if(arit === true)
{
    return "Arithmetic";
}
else if(geo === true)
{
    return"Geometric";
}
else
{
    return -1;
}
}