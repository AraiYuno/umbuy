const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const app = express();
const request = require('request'); 

/* Advertisement table */
var getAllAds = (callback) => {
    connection.query("SELECT * FROM advertisements", (err, res, fields)=> {
        if( err ) throw err;
        callback(err, res, fields);
    });
};

var getAdById = (advertisementId, callback) => {
    let sql = 'SELECT * FROM advertisements WHERE advertisementId = ' + advertisementId;
    connection.query(sql, (err, res, fields)=> {
        if( err ) throw err;
        callback(err, res, fields);
    });
};

var getAdsByUserId = (userId, callback) => {
    let sql = 'SELECT * FROM advertisements WHERE userId = ' + '"' + userId + '"';
    connection.query(sql, (err, res, fields)=> {
        if( err ) throw err;
        callback(err, res, fields);
    });
};

/* search all advertisements and returns the data back to the advertisement.service.ts */
var getAdsByTitle = (title, callback) => {
    let sql = 'SELECT * FROM advertisements WHERE title LIKE "%' + title +'%"';
    connection.query(sql, (err, res, fields)=> {
        if( err ) throw err;
        callback(err, res, fields);
    });
};

var createAd = (body, callback) => {
    let advertisementId = 0;
    console.log(JSON.stringify(body));
    let title = body.title;
    let userId = body.userId;
    let description = body.description;
    let price = body.price;
    let imageUrl = body.imageUrl;
    let category = body.category;
    
    connection.query("INSERT INTO advertisements (advertisementId, title, userId, description, price, imageUrl, category) VALUES (?, ?, ?, ?, ?, ?, ?)", [advertisementId, title, userId, description, price, imageUrl, category], (err, res, fields)=> {
        if( err ) throw err;
        callback(err, res, fields);
    });
};

var editAd = (body, callback) => {
    var adId = body.advertisementId;
    var ad_title = body.title;
    var desc = body.description;
    var price = body.price;
    var url = body.imageUrl;
    var cate = body.category;
    var sql = "UPDATE advertisements SET title = " + "'" + ad_title + "', description = " +
                "'" + desc + "', price = " + price + ", imageUrl = " + "'" + url + 
                "', category = " + "'" + cate + "'" + "WHERE advertisementId = " +adId;
    
    connection.query(sql, (err, res, fields)=> {
        if( err ) throw err;
        callback(err, res, fields);
    });
};

/* Auth0 table */
var getUserById = (userId, callback) => {
    var options = { method: 'GET',
    url: 'https://team6.auth0.com/api/v2/users/'+ userId,
    headers: { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJERXlSVFEyUmpreE16WTBOMFkwUVRsR1JEUkZNRFV3UXpZNVFUQkNNRU0wUXpSRE5VSTROZyJ9.eyJpc3MiOiJodHRwczovL3RlYW02LmF1dGgwLmNvbS8iLCJzdWIiOiJkaWRPSlgxb3Z0cDdQMjc4M0daYTBETFJTNDFCR0hLMUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly90ZWFtNi5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTUxOTE5NjMzNiwiZXhwIjoxNTI5MTk2MzM2LCJhenAiOiJkaWRPSlgxb3Z0cDdQMjc4M0daYTBETFJTNDFCR0hLMSIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgcmVhZDplbWFpbF90ZW1wbGF0ZXMgY3JlYXRlOmVtYWlsX3RlbXBsYXRlcyB1cGRhdGU6ZW1haWxfdGVtcGxhdGVzIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.ZBpFfXNnS6J799A2nKDnU1nhCDs5CJUWr6W0Yq-nNtGBiaBWB1_hqOkABcCxK__iktMEGyivInGTtjNFVrAOP8S4CaqQIM-C0pbnV8fl2PeZKKKIX5m6u4T99V1BpIcrwVxozISh06ayKY1baSrWJT7inkmxWVIg14AvWW5rVfp6JoeYRyed2VlWbrljKTeQeC20D1jRC7JPHhRNOOD0uMV9p4xTEISHG2I7mKP2SXhbLMllKm5j07v90MAsZbCgDM07Xd9PrM9tASmPsOQA1LKn_kTERDbFBgZznoe0GDiRJwQvgjMkq3tQNszKKfQrruFulWwLHDWqkhqtodVKYg' } };
  
    request(options, function (err, res, fields) {
    if (err) throw new Error(err);
    callback(err, res, fields)
    });
};

module.exports = {
    getAllAds: getAllAds,
    getAdById: getAdById,
    getAdsByUserId: getAdsByUserId,
    getAdsByTitle: getAdsByTitle,
    getUserById: getUserById,
    createAd: createAd,
    editAd: editAd
}