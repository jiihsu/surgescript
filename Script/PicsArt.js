/*
PicsArt/美易 app unlocks pro

[MITM]
hostname = api.picsart.com, api.meiease.cn

[Script]
http-response https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/PicsArt.js
*/

let obj = JSON.parse($response.body);
obj.subscription.granted = "true";
$done({body: JSON.stringify(obj)});
