// MediaDev (Pascal LLEONART, Thomas HEMON & Melvyn JEAN-PIERRE)

// cookies
function setCookie(cname, cvalue, exdays){const d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));let expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}
function deleteCookie(cname){const d=new Date();d.setTime(d.getTime()+(24*60*60*1000));let expires="expires="+d.toUTCString();document.cookie=cname+"=;"+expires+";path=/";}
function getCookie(cname){let name=cname+"=";let decodedCookie=decodeURIComponent(document.cookie);let ca=decodedCookie.split(';');for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}if (c.indexOf(name)==0){return c.substring(name.length,c.length);}}return "";}
function acceptCookieConsent(){var Id=new Date();var Random=Math.floor(Math.random()*1000);var Random2=Math.floor(Math.random()*1000);var Id2=Id.getTime()+''+Random+''+Random2;deleteCookie('user_cookie_consent');setCookie('user_cookie_consent',1,30);document.getElementById("cookie-modal").style.display="none";document.body.classList.remove("stop-scrolling");}
function acceptCookies(){var Id=new Date();var Random=Math.floor(Math.random()*1000);var Random2=Math.floor(Math.random()*1000);var Id2=Id.getTime()+''+Random+''+Random2;deleteCookie('user_cookie_consent');setCookie('user_cookie_consent',2,30);document.getElementById("cookie-modal").style.display="none";document.body.classList.remove("stop-scrolling");}

let cookie_consent=getCookie("user_cookie_consent");
if(cookie_consent!=""){
    document.getElementById("cookie-modal").style.display="none";
    document.body.classList.remove("stop-scrolling");
}else{
    document.getElementById("cookie-modal").style.display="block";
    document.body.classList.add("stop-scrolling");
}

// preloader
function preloader(){
    let cookie_load = getCookie("load");
    if(cookie_load){
        setTimeout(() => {
            document.querySelector("#preloader").style.display = "none";
        }, 740);
    }else{
        setCookie("load", true, 30);
        setTimeout(() => {
            document.querySelector("#preloader").style.display = "none";
        }, 2040);
    }
}

// chat-box

let chat_box_btn = document.querySelector("#chat-box-btn"),
    chat_box_container = document.querySelector("#chat-box-container");

chat_box_btn.addEventListener("click", () => {
    chat_box_container.classList.toggle("d-none");
})

// scroll top

let scroll_top_btn = document.querySelector("#scroll-top");

document.body.onscroll = () => {
    console.log(scrollY)
    if(scrollY>300){
        scroll_top_btn.classList.remove("d-none");
    }else if(scrollY<300){
        scroll_top_btn.classList.add("d-none");
    }
}
