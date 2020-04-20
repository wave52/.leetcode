/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let n = 0;
    let str = s;
    while(str.length > 0) {
        if (/CM/.test(str)) {
            n = n + 900
            str = str.replace(/CM/, '')
        } else if (/M/.test(str)) {
            n = n + 1000
            str = str.replace(/M/, '')
        } else if (/CD/.test(str)) {
            n = n + 400
            str = str.replace(/CD/, '')
        } else if (/D/.test(str)) {
            n = n + 500
            str = str.replace(/D/, '')
        } else if (/XC/.test(str)) {
            n = n + 90
            str = str.replace(/XC/, '')
        } else if (/C/.test(str)) {
            n = n + 100
            str = str.replace(/C/, '')
        } else if (/XL/.test(str)) {
            n = n + 40
            str = str.replace(/XL/, '')
        } else if (/L/.test(str)) {
            n = n + 50
            str = str.replace(/L/, '')
        } else if (/IX/.test(str)) {
            n = n + 9
            str = str.replace(/IX/, '')
        } else if (/X/.test(str)) {
            n = n + 10
            str = str.replace(/X/, '')
        } else if (/IV/.test(str)) {
            n = n + 4
            str = str.replace(/IV/, '')
        } else if (/V/.test(str)) {
            n = n + 5
            str = str.replace(/V/, '')
        } else {
            n = n + 1
            str = str.replace(/I/, '')
        }
    }
    return n
};

