var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var DEFAULT_PATTERN = 'yyyy-MM-dd';
function padding(s, len) {
    var len = len - (s + '').length;
    for (var i = 0; i < len; i++) { s = '0' + s; }
    return s;
};

export default {
    formatDate: {
        /**
         * 时间按格式转换成字符串
         * @param {*} date 日期
         * @param {*} pattern  日期格式
         * @returns 时间字符串
         */
        format: function (date, pattern) {
            pattern = pattern || DEFAULT_PATTERN;
            return pattern.replace(SIGN_REGEXP, function ($0) {
                switch ($0.charAt(0)) {
                    case 'y': return padding(date.getFullYear(), $0.length);
                    case 'M': return padding(date.getMonth() + 1, $0.length);
                    case 'd': return padding(date.getDate(), $0.length);
                    case 'w': return date.getDay() + 1;
                    case 'h': return padding(date.getHours(), $0.length);
                    case 'm': return padding(date.getMinutes(), $0.length);
                    case 's': return padding(date.getSeconds(), $0.length);
                }
            });
        },
        /**
         * 时间戳转日期 过滤器
         * @param {*} dateTime 时间戳
         * @param {*} pattern  返回格式
         * @returns 时间戳
         */
        formatTime: function (dateTime, pattern) {   
          return this.format(new Date(dateTime), pattern);
        },

        /**
         * 日期格式字符串转换
         * @param {*} dateString 时间字符串
         * @param {*} pattern  返回格式
         * @returns 日期格式
         */
        parse: function (dateString, pattern) {   //
            var matchs1 = pattern.match(SIGN_REGEXP);
            var matchs2 = dateString.match(/(\d)+/g);
            if (matchs1.length == matchs2.length) {
                var _date = new Date(1970, 0, 1);
                for (var i = 0; i < matchs1.length; i++) {
                    var _int = parseInt(matchs2[i]);
                    var sign = matchs1[i];
                    switch (sign.charAt(0)) {
                        case 'y': _date.setFullYear(_int); break;
                        case 'M': _date.setMonth(_int - 1); break;
                        case 'd': _date.setDate(_int); break;
                        case 'h': _date.setHours(_int); break;
                        case 'm': _date.setMinutes(_int); break;
                        case 's': _date.setSeconds(_int); break;
                    }
                }
                return _date;
            }
            return null;
        },
        /**
         * 获取日期的0点
         * @param {*} date 时间字符串
         * @param {*} day  后天数(正为加 负为减)
         * @returns 日期格式
         */
        getZeroDate: function(date, day) {
          let y = date.getFullYear();
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? ('0' + MM) : MM;
          let d = date.getDate() + day;
          d = d < 10 ? ('0' + d) : d;
          let h = '00';
          let m = '00';
          let s = '00';
          return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
        },
        /**
         * 获取一年后的前一天23.59.59
         * @param {*} date 当前时间
         * @param {*} day  往后天数(正为加 负为减)
         * @returns 日期格式
         */
        getYearLaterDate: function(date, day) {
          let y = date.getFullYear() + 1;
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? ('0' + MM) : MM;
          let d = date.getDate() + day;
          d = d < 10 ? ('0' + d) : d;
          let h = '00';
          let m = '00';
          let s = '00';
          let yearDateStr = y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
          let yearDate = this.parse(yearDateStr, "yyyy-MM-dd hh:mm:ss");
          let yearLaterDate = yearDate.getTime() - 1000;
          return this.format(new Date(yearLaterDate), "yyyy-MM-dd hh:mm:ss")
        }
    },

};
