// ==UserScript==
// @name          Autoreplace git commit hash with url
// @namespace     http://netstream.ru/
// @description   Autoreplace git commit hash with url
// @include       http://dev-trac.netstream.ru/*
// ==/UserScript==

res = document.getElementsByTagName('a');
var len = res.length;
for(var i=0; i<len; i++) {
	if (res[i].classList[0] == 'missing' & res[i].classList[1] == 'changeset') {
		res[i].href = 'http://dev-trac.netstream.ru/changeset/' + res[i].innerHTML + '/git_da';
	}

}
