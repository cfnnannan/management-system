/**
 * 获取当前页面或指定页面地址的参数值
 * @param {String} name 参数名
 * @param url {String} url 页面地址，默认当前页面地址
 * @returns {string}
 */
const cookieUtil = {
  // 读取COOKIE
  getCookie (name) {
    const reg = new RegExp(`(^| )${name}(?:=([^;]*))?(;|$)`);
    const val = window.document.cookie.match(reg);
    if (val) {
      return val[2] ? window.unescape(val[2]) : '';
    }
    return null;
  },
  // 删除cookie
  delCookie (name, path = '/', domain = null, secure = false) {
    const value = this.getCookie(name);
    if (value !== null) {
      const exp = new Date();
      exp.setMinutes(exp.getMinutes() - 1000);
      const pathSelf = `;path=${path}`;
      const domainSelf = domain ? `;domain=${domain}` : '';
      const secureSelf = secure ? ';secure' : '';
      window.document.cookie = `${name}=;expires=${exp.toGMTString()}${pathSelf}${domainSelf}${secureSelf}`;
    }
  },
  // 写入COOKIES
  setCookie (name, value, expires = null, path = '/', domain = null, secure = false) {
    const exp = new Date();
    // const time = expires * 24 * 3600 * 1000;
    const time = expires * 3600 * 1000;
    let expiresSelf = expires ? exp.setTime(exp.getTime() + time) : '';
    expiresSelf = expires ? `;expires=${exp.toGMTString()}` : '';
    const pathSelf = `;path=${path}`;
    const domainSelf = domain ? `;domain=${domain}` : '';
    const secureSelf = secure ? ';secure' : '';
    window.document.cookie = `${name}=${window.escape(value)}${expiresSelf}${pathSelf}${domainSelf}${secureSelf}`;
  }
};

export default cookieUtil;
