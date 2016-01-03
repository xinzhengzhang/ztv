var Observable = require('FuseJS/Observable');

var searches = Observable();

fetch('http://api.bilibili.com/search?access_key=579a163c6ec1f9f5b7b1ab0cdc89aa53&actionKey=appkey&appkey=27eb53fc9058f8c3&build=2476&device=phone&keyword=%E5%A4%AA%E5%AD%90%E5%A6%83%E5%8D%87%E8%81%8C%E8%AE%B0&main_ver=v3&order=totalrank&page=2&pagesize=30&platform=ios&search_type=all&sign=77bc5639468753f41c24f8afaff8d5e3&source_type=1&ts=1451809919')
            .then(function(response) { return response.json(); })
            .then(function(responseObject) { searches.value = responseObject; });

module.exports = {
	searches : searches
};