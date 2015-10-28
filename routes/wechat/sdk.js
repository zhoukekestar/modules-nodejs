var express   = require('express');
var router    = express.Router();
var config    = require('../../config/wechat')
var wechat    = require('../../lib/wechat');


// Can be access by ajax
router.options('/sign', function(req, res) {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'origin, authorization, accept, content-type, x-requested-with',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS'
  });
  res.end();
})

router.get('/sign', function(req, res){

  wechat.getSign(req.query.url, function(time, random, sign) {

    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'origin, authorization, accept, content-type, x-requested-with',
      'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS'
    });

    var d = {
      url: req.query.url,
      appId: config.appID,  // 必填，公众号的唯一标识
      timestamp: time,      // 必填，生成签名的时间戳
      nonceStr: random,     // 必填，生成签名的随机串
      signature: sign       // 必填，签名，见附录1
    };

    res.json(d);
  })

});

module.exports = router;
