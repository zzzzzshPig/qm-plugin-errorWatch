import t from"querystring";var e="development",o=new(function(){function o(){this.target="",this.title="",this.env=""}return o.prototype.init=function(e){var o=void 0===e?{}:e,i=o.tokenKey,n=void 0===i?"token":i,r=o.target,l=void 0===r?"_self":r,a=o.title,s=void 0===a?"登录":a,h=o.env,p=void 0===h?"development":h;this.env=p,this.target=l,this.title=s;var v=t.parse(location.search.slice(1)).qm_token;v?(localStorage.setItem(n,v),history.pushState({},"",location.href.split("?")[0])):localStorage.getItem(n)||this.login()},o.prototype.login=function(){var t=this.env===e?"http://192.168.1.160:8001/login":"https://admin.91xiangju.com/frontend-platform/login",o="qm_from="+encodeURIComponent(location.href),i="&title="+encodeURIComponent(this.title);open(t+"?"+o+i,this.target)},o}());export default o;
//# sourceMappingURL=index.js.map
