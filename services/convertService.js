'use strict'

const xml2js = require('xml2js');
const optionsParser ={
    mergeAttrs: true,
    explicitArray: false
}
let jsonObject = {};
const callBack = (err,result)=>{
    if(err) {
        throw err;
    }
    jsonObject = result;
}

module.exports = {
    xmlToJson: function(xml){
        console.log(xml);
        xml2js.parseString(xml,optionsParser,callBack);
        return jsonObject;
    }
}