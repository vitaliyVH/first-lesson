var needle = require('needle');
url = 'https://cs.money/';

needle.get(url, function(err,res){
if(err) throw(err);

console.log(res)
});
