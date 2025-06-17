// POST
// gnex4bkk
// 1711805323515
const CryptoJS = require("crypto-js");
const axios = require('axios');
const sharp = require('sharp');
const Jimp = require('jimp');

// 配置信息 无状态即可获取
const parkConfig =  {
    latitude: 39.909187,
    longitude: 116.397455,
    parkCode: '100019',
}
const signParkConfig =  {
    code: 'p210434036',
    parkCode: '100019',
    oneId: 'oDJ04uCH2uyYC4PQqNXQNTEjuhRI'  //待定
}

const spaceId = '2411287'  // 预定时候才能获取

// 用户信息、绑定即可获取
const phone = 'MTU5ODY3NTkxMzU='
const carNo = '57KkQkdNNzkzMw=='


// 预定时间
const orderTime = '15:40:00'

const { createWorker } = require('tesseract.js');
  var n = {
      utf8: {
          stringToBytes: function(t) {
              return n.bin.stringToBytes(unescape(encodeURIComponent(t)))
          },
          bytesToString: function(t) {
              return decodeURIComponent(escape(n.bin.bytesToString(t)))
          }
      },
      bin: {
          stringToBytes: function(t) {
              for (var e = [], n = 0; n < t.length; n++)
                  e.push(255 & t.charCodeAt(n));
              return e
          },
          bytesToString: function(t) {
              for (var e = [], n = 0; n < t.length; n++)
                  e.push(String.fromCharCode(t[n]));
              return e.join("")
          }
      }
  };
 var r = {
    rotl: function(t, e) {
        return t << e | t >>> 32 - e
    },
    rotr: function(t, e) {
        return t << 32 - e | t >>> e
    },
    endian: function(t) {
        if (t.constructor == Number)
            return 16711935 & r.rotl(t, 8) | 4278255360 & r.rotl(t, 24);
        for (var e = 0; e < t.length; e++)
            t[e] = r.endian(t[e]);
        return t
    },
    randomBytes: function(t) {
        for (var e = []; t > 0; t--)
            e.push(Math.floor(256 * Math.random()));
        return e
    },
    bytesToWords: function(t) {
        for (var e = [], n = 0, r = 0; n < t.length; n++,
        r += 8)
            e[r >>> 5] |= t[n] << 24 - r % 32;
        return e
    },
    wordsToBytes: function(t) {
        for (var e = [], n = 0; n < 32 * t.length; n += 8)
            e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
        return e
    },
    bytesToHex: function(t) {
        for (var e = [], n = 0; n < t.length; n++)
            e.push((t[n] >>> 4).toString(16)),
            e.push((15 & t[n]).toString(16));
        return e.join("")
    },
    hexToBytes: function(t) {
        for (var e = [], n = 0; n < t.length; n += 2)
            e.push(parseInt(t.substr(n, 2), 16));
        return e
    },
    bytesToBase64: function(t) {
        for (var e = [], r = 0; r < t.length; r += 3)
            for (var o = t[r] << 16 | t[r + 1] << 8 | t[r + 2], i = 0; i < 4; i++)
                8 * r + 6 * i <= 8 * t.length ? e.push(n.charAt(o >>> 6 * (3 - i) & 63)) : e.push("=");
        return e.join("")
    },
    base64ToBytes: function(t) {
        t = t.replace(/[^A-Z0-9+\/]/gi, "");
        for (var e = [], r = 0, o = 0; r < t.length; o = ++r % 4)
            0 != o && e.push((n.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | n.indexOf(t.charAt(r)) >>> 6 - 2 * o);
        return e
    }
}
const o = n.utf8;
const c = function(t, e) {
  t.constructor == String ? t = e && "binary" === e.encoding ? a.stringToBytes(t) : o.stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString());
  for (var n = r.bytesToWords(t), u = 8 * t.length, s = 1732584193, l = -271733879, f = -1732584194, p = 271733878, d = 0; d < n.length; d++)
      n[d] = 16711935 & (n[d] << 8 | n[d] >>> 24) | 4278255360 & (n[d] << 24 | n[d] >>> 8);
  n[u >>> 5] |= 128 << u % 32,
  n[14 + (u + 64 >>> 9 << 4)] = u;
  var v =  function(t, e, n, r, o, i, a) {
    var c = t + (e & n | ~e & r) + (o >>> 0) + a;
    return (c << i | c >>> 32 - i) + e
  }
    var h = function(t, e, n, r, o, i, a) {
      var c = t + (e & r | n & ~r) + (o >>> 0) + a;
      return (c << i | c >>> 32 - i) + e
  }
   var g = function(t, e, n, r, o, i, a) {
    var c = t + (e ^ n ^ r) + (o >>> 0) + a;
    return (c << i | c >>> 32 - i) + e
 }
   var m = function(t, e, n, r, o, i, a) {
      var c = t + (n ^ (e | ~r)) + (o >>> 0) + a;
      return (c << i | c >>> 32 - i) + e
  }
  for (d = 0; d < n.length; d += 16) {
      var y = s
        , b = l
        , w = f
        , _ = p;
      s = v(s, l, f, p, n[d + 0], 7, -680876936),
      p = v(p, s, l, f, n[d + 1], 12, -389564586),
      f = v(f, p, s, l, n[d + 2], 17, 606105819),
      l = v(l, f, p, s, n[d + 3], 22, -1044525330),
      s = v(s, l, f, p, n[d + 4], 7, -176418897),
      p = v(p, s, l, f, n[d + 5], 12, 1200080426),
      f = v(f, p, s, l, n[d + 6], 17, -1473231341),
      l = v(l, f, p, s, n[d + 7], 22, -45705983),
      s = v(s, l, f, p, n[d + 8], 7, 1770035416),
      p = v(p, s, l, f, n[d + 9], 12, -1958414417),
      f = v(f, p, s, l, n[d + 10], 17, -42063),
      l = v(l, f, p, s, n[d + 11], 22, -1990404162),
      s = v(s, l, f, p, n[d + 12], 7, 1804603682),
      p = v(p, s, l, f, n[d + 13], 12, -40341101),
      f = v(f, p, s, l, n[d + 14], 17, -1502002290),
      s = h(s, l = v(l, f, p, s, n[d + 15], 22, 1236535329), f, p, n[d + 1], 5, -165796510),
      p = h(p, s, l, f, n[d + 6], 9, -1069501632),
      f = h(f, p, s, l, n[d + 11], 14, 643717713),
      l = h(l, f, p, s, n[d + 0], 20, -373897302),
      s = h(s, l, f, p, n[d + 5], 5, -701558691),
      p = h(p, s, l, f, n[d + 10], 9, 38016083),
      f = h(f, p, s, l, n[d + 15], 14, -660478335),
      l = h(l, f, p, s, n[d + 4], 20, -405537848),
      s = h(s, l, f, p, n[d + 9], 5, 568446438),
      p = h(p, s, l, f, n[d + 14], 9, -1019803690),
      f = h(f, p, s, l, n[d + 3], 14, -187363961),
      l = h(l, f, p, s, n[d + 8], 20, 1163531501),
      s = h(s, l, f, p, n[d + 13], 5, -1444681467),
      p = h(p, s, l, f, n[d + 2], 9, -51403784),
      f = h(f, p, s, l, n[d + 7], 14, 1735328473),
      s = g(s, l = h(l, f, p, s, n[d + 12], 20, -1926607734), f, p, n[d + 5], 4, -378558),
      p = g(p, s, l, f, n[d + 8], 11, -2022574463),
      f = g(f, p, s, l, n[d + 11], 16, 1839030562),
      l = g(l, f, p, s, n[d + 14], 23, -35309556),
      s = g(s, l, f, p, n[d + 1], 4, -1530992060),
      p = g(p, s, l, f, n[d + 4], 11, 1272893353),
      f = g(f, p, s, l, n[d + 7], 16, -155497632),
      l = g(l, f, p, s, n[d + 10], 23, -1094730640),
      s = g(s, l, f, p, n[d + 13], 4, 681279174),
      p = g(p, s, l, f, n[d + 0], 11, -358537222),
      f = g(f, p, s, l, n[d + 3], 16, -722521979),
      l = g(l, f, p, s, n[d + 6], 23, 76029189),
      s = g(s, l, f, p, n[d + 9], 4, -640364487),
      p = g(p, s, l, f, n[d + 12], 11, -421815835),
      f = g(f, p, s, l, n[d + 15], 16, 530742520),
      s = m(s, l = g(l, f, p, s, n[d + 2], 23, -995338651), f, p, n[d + 0], 6, -198630844),
      p = m(p, s, l, f, n[d + 7], 10, 1126891415),
      f = m(f, p, s, l, n[d + 14], 15, -1416354905),
      l = m(l, f, p, s, n[d + 5], 21, -57434055),
      s = m(s, l, f, p, n[d + 12], 6, 1700485571),
      p = m(p, s, l, f, n[d + 3], 10, -1894986606),
      f = m(f, p, s, l, n[d + 10], 15, -1051523),
      l = m(l, f, p, s, n[d + 1], 21, -2054922799),
      s = m(s, l, f, p, n[d + 8], 6, 1873313359),
      p = m(p, s, l, f, n[d + 15], 10, -30611744),
      f = m(f, p, s, l, n[d + 6], 15, -1560198380),
      l = m(l, f, p, s, n[d + 13], 21, 1309151649),
      s = m(s, l, f, p, n[d + 4], 6, -145523070),
      p = m(p, s, l, f, n[d + 11], 10, -1120210379),
      f = m(f, p, s, l, n[d + 2], 15, 718787259),
      l = m(l, f, p, s, n[d + 9], 21, -343485551),
      s = s + y >>> 0,
      l = l + b >>> 0,
      f = f + w >>> 0,
      p = p + _ >>> 0
  }
  return r.endian([s, l, f, p])
}
const wordsToBytes = function(t) {
  for (var e = [], n = 0; n < 32 * t.length; n += 8)
      e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
  return e
}
const bytesToHex = function(t) {
    for (var e = [], n = 0; n < t.length; n++)
        e.push((t[n] >>> 4).toString(16)),
        e.push((15 & t[n]).toString(16));
    return e.join("")
}

async function sendRequest(url, data={}, headers={}) {  
    // 创建axios请求配置对象  
    const requestHeaders = {
        'Content-Type': 'application/json;charset=utf-8',
        'x-appcode': 'parking',
        ...headers
      };
    
      // 创建axios请求配置对象
      const requestConfig = {
        method: 'post',
        url,
        data,
        headers: requestHeaders,
      };
    // 发送请求并返回Promise  
    try {
        // 发送请求并等待响应
        const response = await axios(requestConfig);
        return response.data; // 返回响应数据
    } catch (error) {
        // 错误处理
        throw error; // 抛出错误
    } 
} 



function generateSign (queryParam) {
    console.log('queryParam',queryParam);
    const timestamp = Date.now();
    const nonce = (Number((Math.random() + Math.random()).toString().substr(2, 13)) + Date.now()).toString(36).slice(-parseInt(8, 10))
// const timestamp = 1713339162773
// const nonce = 'sf96p0it'
const t = {
    method: 'post',
    headers: {
        nonce,
        timestamp,

    },
    Authorization: '',
    queryString: JSON.stringify({
        // code: 'p210434036',
        // parkCode: '100019',
        // oneId: 'oDJ04uCH2uyYC4PQqNXQNTEjuhRI'
        ...queryParam
    })
}
const queryString = t.queryString
let encryptedStr = ("".concat(t.method,'\n')
    .concat(t.headers.nonce,'\n')
    .concat(t.headers.timestamp,'\n')
    .concat("parking", '\n')
    .concat(t.queryString));
    const signlist = wordsToBytes(c(encryptedStr))
    let sign = bytesToHex(signlist)
    return {sign, timestamp, nonce, queryString}
}
// 实时查询时间
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// 时间转成时间戳
function timeToTimestamp(hours, minutes, seconds) {
    // 获取当前日期
    const now = new Date();
    // 设置小时、分钟和秒
    now.setHours(hours, minutes, seconds, 0); // 毫秒设置为0
    // 返回时间戳
    return now.getTime();
}

// console.log('isWorkdays()',isWorkdays());
// console.log('isWeekend()',isWeekend());
// console.log('isholidays()',isholidays());
const hours = new Set(['00:00:00','01:00:00',
    '02:00:00','03:00:00','04:00:00','05:00:00',
    '06:00:00','07:00:00','08:00:00','09:00:00',
    '10:00:00','11:00:00','12:00:00','13:00:00',
    '14:00:00','15:00:00','16:00:00','17:00:00',
    '18:00:00','19:00:00','20:00:00','21:00:00',
    '22:00:00','23:00:00'
])
// 使用setInterval设置一个定时器，每秒钟更新一次时间
var flag = false;
setInterval(() => { 
    const currentTime = getCurrentTime()
    const orderTimeList = orderTime.split(':')
        if(!flag && new Date().getTime() >= timeToTimestamp(orderTimeList[0], orderTimeList[1], orderTimeList[2] )) {
            parkDeil()  
            console.log('flag',flag, currentTime);             
           
        }
    
    if(hours.has(currentTime)) {
        console.log('已到查询时间' + currentTime);
        if(currentTime === '00:00:00') {
            flag = false;
        }
    }
}, 1000);

async function parkDeil() {
    const {sign,timestamp,nonce,queryString} = generateSign ( 
        parkConfig
    )  
    const dynamicHeaders = {  
        'sign': sign,  
        'timestamp': timestamp,
        'nonce':  nonce,
         queryString
    }; 
    try {
        const response = await sendRequest('https://smartum.sz.gov.cn/tcyy/parking/lot-mobile/service-parking-mobile/webapi/parkInfo/parkDetail',parkConfig , dynamicHeaders)
          if(response && response.code === 0) {
            const leftNum = response.data.fuelOilResidueNum
            console.log('leftNum',leftNum);
            console.log('currentTime',getCurrentTime());
            if(leftNum > 0) {
                checkReservation()
            }
        }
    } catch (error) {
        throw('parkDeilError',error)
    }


}

async function checkReservation() {
   const {sign,timestamp,nonce,queryString} = generateSign (
                signParkConfig
        )  
        const dynamicHeaders = {  
            'sign': sign,  
            'timestamp': timestamp,
            'nonce':  nonce,
             queryString
        };      
    try {
        const response = await sendRequest('https://smartum.sz.gov.cn/tcyy/parking/lot-mobile/service-parking-mobile/webapi/app/userReservationApp/checkReservation',signParkConfig, dynamicHeaders)
          console.log('response',response)
          if(response && response.code === 0) {
              console.log('success');
              flag = true
              console.log('flagCheck',flag, getCurrentTime());
              getCode()
          } 
    } catch (error) {
        throw('checkReservationError',error);
    }


}
// getCode()
// 获取验证码
async function getCode() {

    const {sign,timestamp,nonce,queryString} = generateSign (
        {
            oneId: signParkConfig.oneId
        }
    )
    const dynamicHeaders = {  
        'sign': sign,  
        'timestamp': timestamp,
        'nonce':  nonce,
         queryString
    };
    try {
        const response =  await sendRequest('https://smartum.sz.gov.cn/tcyy/parking/lot-mobile/service-parking-mobile/webapi/parkInfo/getCode',{
            oneId:  signParkConfig.oneId,
        },dynamicHeaders)
        if(response && response.code ===0) {
            const base64 = response.data;
            console.log('base64', base64);
          processBase64Image(base64, 2.38);
          async function processBase64Image(base64, threshold) {  
            try {  
                // 模糊图片  
                    const blurredBase64 = await blurBase64Image(base64, threshold);  
                    // console.log(blurredBase64); // 输出降噪后的Base64图片  
            
                    // 创建OCR工作线程  
                    const worker = await createWorker('eng');  
                    // 设置OCR参数  
                    await worker.setParameters({  
                        tessedit_char_whitelist: '0123456789',  
                    });  
            
                    // 使用OCR识别图片  
                    const result = await worker.recognize(blurredBase64);  
                    const text = result.data.text;  
                    console.log('getCode',text);  
                    // 清理OCR工作线程  
                    await worker.terminate();  
            
                    // 验证验证码  
                    const verificationCode = text.trim();  
                  //  验证码有效，执行后续操作  
                       if(String(verificationCode).replace(/\s*/g,'').length !== 4) {
                          getCode()
                      } else {
                          reservation(String(verificationCode).trim(),0)
                      }                  
                } catch (error) {  
                    console.error('处理图片时发生错误:', error);  
                    getCode()
                }  
            } 
        }
    } catch (error) {
        console.error('getCode发生错误:', error);  
        getCode()
    }
}


// base64转成数字
function blurBase64Image(base64, blurSigma) {
    // 将Base64字符串转换为缓冲区
    const buffer = Buffer.from(base64, 'base64');
   
    // 使用sharp对图片进行降噪处理
    return sharp(buffer)
      .resize(150, 70)
      .blur(blurSigma) // blurSigma是降噪算法的sigma值
      .toBuffer({ resolveWithObject: true })
      .then(({ data, info }) => {
        // 将缓冲区数据转换回Base64字符串
        const base64Image = data.toString('base64');
        return `data:image/jpeg;base64,${base64Image}`;
      });
  }
function getBookTime () {    
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1; // 月份从0开始，所以要加1
    var day = now.getDate();
    var hour = now.getHours() + 3;
    var minute = now.getMinutes();
    // var second = now.getSeconds();
    // console.log(year, month, day, hour, minute, second);
    if(month < 10) {
        month = '0' + month;
    }
    if(day < 10) {
        day = '0' + day;
    }
    if(hour < 10) {
        hour = '0' + hour;
    }
    if(minute < 10) {
        minute = '0' + minute;
    }
   return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + '00';
}
// getBookTime()
async function reservation(code,lineUpType) {
    const bookTime = getBookTime()
    const params = {bookTime,carNo,code: signParkConfig.code,lineUpType,oneId: signParkConfig.oneId,parkCode: signParkConfig.parkCode,phone,spaceId,spaceType: 0,'verificationCode':code}
    const {sign,timestamp,nonce,queryString} = generateSign(params)
    const dynamicHeaders = {  
        'sign': sign,  
        'timestamp': timestamp,
        'nonce':  nonce,
         queryString
    };
    const response = await sendRequest('https://smartum.sz.gov.cn/tcyy/parking/lot-mobile/service-parking-mobile/webapi/app/userReservationApp/reservation',params,dynamicHeaders)
    console.log('reservation.response',response);
    if(response.code === 0) {
        console.log('预约成功');
    }
    if(response.code !== 0 && response.code !== -10002) {
        if(response.msg.indexOf('当前车辆已预约') >= 0) {
            console.log('已预约成功');
        } else {
            checkReservation()
        }                
    } else if(response.code == -10002) {
        console.log('进入候补');
        reservation(code,1)
    }

}