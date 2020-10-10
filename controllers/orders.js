// const xml = require('xml2js');
const http = require('http');
const config = require('../config');
const convertXMl = require('../services/convertService');

const buf = Buffer.from(config.prestaShopToken,'utf8');
const bufBase64 = buf.toString('base64');
let authString = `Basic ${bufBase64}`;
const options = {
    hostname: config.prestaShopURlAPI,
    path:'/api/orders',
    method:'GET',
    headers:{
        'Authorization': authString
    }
};

let data = "";

module.exports ={
    showAll: (req,res) =>{
        http.get(options,(httpRes)=>{
            // this event fires many times, each time collecting another piece of the response
            httpRes.on("data",chunk=>data += chunk);

            // this event fires *one* time, after all the `data` events/chunks have been gathered
            httpRes.on("end", function () {
                let json = convertXMl.xmlToJson(data);
                res.send(json.prestashop.orders.order);
            });
        });

    }
}