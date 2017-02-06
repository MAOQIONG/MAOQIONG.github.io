/**
 * Created by daugh on 2016/11/26.
 */
var fs = require("fs");
var data = fs.readFile("readme.txt","utf-8",function(err,data) {
    if (err) {
        console.error(err)
    } else {
        console.log(data);
    }
});
console.log(data)