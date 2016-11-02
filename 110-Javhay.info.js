
function ancMedia() {
  url = window.location.href,
  home = ancplayer.load.site, 
  server_i = [0];
    part = new Array; 
  sv = ancplayer.sv.list_sv.split(",");
  tensv = ancplayer.sv.ten_sv.split(",");
  width = ancplayer.load.width;
  height = ancplayer.load.height;
  player = ancplayer.load.player;
  proxy = ancplayer.load.proxy;
  skin = ancplayer.load.skin;
  imgload = ancplayer.load.imgload; 
  tmget = ancplayer.load.getlink; 
  auto = ancplayer.load.autoplay;
  eauto = ancplayer.load.embedplay;

	var $_  = function(x){return document.getElementById(x);}
    this.fu  = function (x, y, z) {
		if (y == null && z == null) {
			return document.getElementById(x).innerHTML;
		} else { if (y != null && z == null) 
		       { document.getElementById(x).innerHTML = y }
		  else { document.getElementById(x).style[z] = y }
		}
	};

	this.read = function () {
		b = this.fu("anc_data"),
		c = '<div id="b_data" style="display:none !important;">',
		d = '</div>',
		b = b.replace(/\<id\>/gi, c),
		b = b.replace(/\<\/id\>/gi, d);
		b = b.replace(/\[id\]/gi, c),
		b = b.replace(/\[\/id\]/gi, d),
		this.fu("anc_data", b);
		if(b.indexOf("anc*") != -1){
		b = this.fu("b_data");
		b = b.replace("anc*","");
		b = b.substring(0,b.length);
	    b = decodeanc(b);
		if(b.indexOf("|") <= 0) {b = ";" + b + "|" };
	}	else{b = this.fu("b_data"); if(b.indexOf("|") <= 0) {b = ";" + b + "|" };}
		return  b
	};
	
data = this.read();
  
l_spi = data.split("|").length; 
l_spk = function(x) {return data.split("|")[x].split(";").length;};
d_spi = function(x) {return data.split("|")[x];};
d_spk = function(x, y) {return data.split("|")[x].split(";")[y];};
pc = ["0","a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s"];

  svt = "";
  svx = 0;


this.setCookie = function(c_name,value,exdays) {
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
};
this.getCookie = function(c_name) {
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++){
x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
x=x.replace(/^\s+|\s+$/g,"");
if (x==c_name){return unescape(y);}}
};
  
this.Play = function() {
for(var s = 0;s < tensv.length ;s++) {var svr = tensv[s].split(".")[0];if(svr == ""){svr = home;}part[s] = '<li id="sev_'+s+'" class="sev" style="font-size: 20px;margin-bottom: 10px;">'+svr+' <li><li class="clear"></li>' }
for (var i = 0; i < l_spi -1; i++) {
for (var j = 0; j < l_spk(i); j++) 
{ name = d_spk(i, 0); link = d_spk(i, j);
name = 2 == l_spk(i) ? d_spk(i, 0) : name == d_spk(i + 1, 0) || !Number(name) ? name + pc[j] : name + pc[j];

for(var s = 0;s < sv.length; s++) {
//if(d_spk(0, 1).indexOf(sv[s]) != -1) { this.setCookie("ancplayer", s , 365); }
if (d_spk(0, 1).indexOf(sv[s]) != -1) {this.setCookie("_ancServer", s, 365); }
if(link.indexOf(sv[s]) != -1) { 
if(sv[s]) {data_out = '<li class="ep"><a class="a_tap" id="ep_'+i+'" href="?xem='+s+'-'+i+'-'+j+'" title="'+name+' - '+home+'" >'+name+'</a></li>' } 
part[s] += data_out } } } }

for(var s = 0;s < sv.length; s++) {
if(part[s].indexOf(home) != -1) {
svt += '<ul id="server_'+svx+'" > '+part[s]+' <div class="clear"></div></ul>';		
server_i[s] = svx.toString();
svx++
}}

svt = '<div id="list_tap"> '+svt+' <div class="clear"></div></div><div class="clear"></div>';

this.fu("anc_tp", svt);
this.getUrl()
};


this.getUrl = function() {
  String.prototype.GetPart = function(dcmm) {
    var vltn = new RegExp("(^|&)" + dcmm + "=([^&]*)(&|$)");
    var clgt = this.substr(this.indexOf("?") + 1).match(vltn);
    if (clgt != null) {
      return unescape(clgt[2]);
    }
    return null;
  };
  


	//if(part_Url == null) { part_Url = ""+laylinksv+"-0-1" }
    part_Url = url.GetPart("xem");
    if(part_Url == null) { part_Url = this.getCookie("_ancServer") + "-0-1" }	
    part_Url = part_Url.split("-");
    pserver = part_Url[0];
    pepisode = part_Url[1];
    pelink = part_Url[2];
	
    var bh = this.fu("server_0");
    var bj = this.fu("server_" + server_i[pserver]);
    this.fu("server_" + server_i[pserver], bh);
    this.fu("server_0", bj);
	document.getElementById("ep_" + pepisode).className = "tap_active";
	document.getElementById("sev_" + pserver).className = "sv_active";

	if (!d_spk(pepisode, pelink)) {window.location.href = url.split("?")[0];} 
	else {this.load(d_spk(pepisode, pelink));}
		
  };
  
this.load = function(x) {	
if(x.indexOf(sv[0]) != -1){ x = x.replace(/\feature\=player\_embedded/gi,""); x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[2];} // youtube

if(x.indexOf(sv[1]) != -1){x = x.replace(/anc\.you\/watch\?v=/gi,"http://youtube.com/embed/");x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[2];}	 // youtube
if(x.indexOf(sv[2]) != -1){x = x.replace(/anc\.yl/gi,"http://www.youtube.com/p");obj = DBOj(x)[2];}  // Gdata youtube
if(x.indexOf(sv[3]) != -1){x = x.replace(/anc\.mp4\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[0];} //mp4
if(x.indexOf(sv[4]) != -1){x = x.replace(/anc\.flv\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[0];}  // FLV
if(x.indexOf(sv[5]) != -1){x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&"); x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[1];}  // Picasa
if(x.indexOf(sv[6]) != -1){x= x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[2]}  // Photos

if(x.indexOf(sv[7]) != -1){x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[1];}  //{v = x.match(/[\d\w]+/gi); obj = DBOj(v)[5]}    /*plus*/ 
if(x.indexOf(sv[8]) != -1){x = x.replace(/edit\?pli\=1/gi,"preview?pli=1"); x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[2];}  // Docs Google
if(x.indexOf(sv[9]) != -1){x = x.replace(/edit/gi,"preview"); x= x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[2];}  // Driver Google
if(x.indexOf(sv[10]) != -1){obj = DBOj(x)[2]}  //{v = x.match(/[\d\w]+/gi); c = v.length - 2; obj = DBOj(v[c])[3];} // Zing
if(x.indexOf(sv[11]) != -1){obj = DBOj(x)[2]}  //{v = x.match(/[\d\w]+/gi); c = v.length - 1; obj = DBOj(v[c])[3];} // Zing
if(x.indexOf(sv[12]) != -1){obj = DBOj(x)[2]}  // Zing mobile
if(x.indexOf(sv[13]) != -1){obj = DBOj(x)[2]}  // Zing PS
if(x.indexOf(sv[14]) != -1){obj = DBOj(x)[0]} //{v = x.match(/[\d\w]+/gi); c = v.length - 2; obj = DBOj(v[c])[0];} // nct
if(x.indexOf(sv[15]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[1]} // dailymotion
if(x.indexOf(sv[16]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[0]}   /*xvideos*/ 
if(x.indexOf(sv[17]) != -1){obj = DBOj(x)[0]}   /*Goo.gl*/ 
if(x.indexOf(sv[18]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[0]}   //Clipvn
if(x.indexOf(sv[19]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[0]}   //MEME.VN
if(x.indexOf(sv[20]) != -1) {x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&");x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[4];}  // googlevideo.com
if(x.indexOf(sv[21]) != -1){obj = DBOj(x)[4]}  // youtu.be
if(x.indexOf(sv[22]) != -1){x = x.replace(/driver\.knm\//gi,""); x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[2];}  // driver mã hóa driver.knm
for(var k = 23; k < sv.length; k++){if(x.indexOf(sv[k]) != -1){x = x.replace(/\#sub=/gi,"&sub=");obj = DBOj(x)[1]};}
this.fu("anc_pl", obj)
}; 
 
  
var DBOj = function(x){
rut = '<iframe width="100%" height="'+height+'" src="';
qua = '<div id="logoplayer"></div><';
	return obj = [
	// 0 -.load. 
	'<video id="playerayer" class="video-js vjs-default-skin soha" controls autoplay width="100%" height="420" poster="" data-setup="{}"><source src="'+x+'" type="video/mp4" /> </video>',
	// 1 - youtube - Docs - Diver - Daily
	''+qua+'iframe src="'+x+'?autoplay='+eauto+'" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="playerayer" frameborder="0"></iframe>',
	// 2 - Driver ma hoa
	''+rut+'http://megavn.net/player/iframe.php?film_url=https://drive.google.com/file/'+x+'/preview?autoplay='+eauto+'" frameborder="0" allowfullscreen="true" id="playerayer"> </iframe>',
	];	
}
}
var M = new ancMedia; M.Play();



