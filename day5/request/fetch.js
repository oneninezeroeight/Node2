var request = require('request');
const {
    insert
} = require('./db')
request('https://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1F52DFAF16800C&cp=5DA1A850805CDE1&min_behot_time=0&_signature=oRZCRAAA.MZJzGA5rf5lb6EWQl&i=', function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log(JSON.parse(body)); // Print the HTML for the Google homepage.
    const news = JSON.parse(body).data;
    // console.log(news);
    news.forEach(element => {
        console.log(element.title)
        console.log(element.abstract)
        console.log(element.image_list)
        insert('news', [{
            title: element.title,
            abstract: element.abstract,
            image_list: element.image_list
        }])
    });
});