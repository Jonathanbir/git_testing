$(window).on("load resize",function(){var e=$("#onead-news").width(),o=1.6*e,n=.9*e;$("#news").height(o),$("#news").width(n)}),$(window).on("load resize",function(){var e=.9*$("#onead-news").width();$("img#video").width(e)}),$(window).on("load resize",function(){var e=$("#onead-news").width(),o=.09045*e,n=.135*e;$("img#close-btn").height(o),$("img#close-btn").width(n)});var myMovie=document.getElementById("myMovie"),mutedButton=document.getElementById("mutedButton"),playButton=document.getElementById("playButton"),stopButton=document.getElementById("stopButton"),bar=document.querySelectorAll(".bar"),news=document.getElementById("news"),closebtn=document.getElementById("close-btn");function init(){myMovie.volume=0,document.getElementById("linkButton").onclick=linkNews,setInterval(()=>{for(let e=0;e<=3;e++){let o=Math.ceil(15*Math.random());bar[e].style.height=o+"px"}},200),closebtn.addEventListener("click",closeNews),news.addEventListener("click",linkNews),playButton.addEventListener("click",replayVideo),myMovie.addEventListener("click",playVideo),mutedButton.addEventListener("click",muted)}console.log(Boolean(myMovie.paused));var aaa=!1;function linkNews(e){aaa?(aaa=!1,myMovie.play(),console.log("NoOpen",aaa)):aaa||(console.log("open",aaa),window.open("https://www.onead.com.tw"),myMovie.pause(),aaa=!0),console.log("最後",aaa)}function playVideo(){myMovie.play()}function closeNews(){event.preventDefault(),event.stopPropagation(),document.getElementById("onead-news").style.display="none",0!=myMovie.volume?(originVolume=myMovie.volume,console.log("originVolume="+originVolume),myMovie.volume=0,console.log(myMovie.volume)):(console.log(originVolume),myMovie.volume=originVolume,console.log(myMovie.volume))}var flag=!0;function muted(){if(event.preventDefault(),event.stopPropagation(),flag=!flag,myMovie.muted=flag,flag){originVolume=myMovie.volume,console.log("originVolume="+originVolume),myMovie.volume=0,console.log(myMovie.volume);for(let e=0;e<=3;e++)bar[e].style.background="linear-gradient(rgb(189, 188, 188),rgb(57, 57, 57))"}else{myMovie.volume=1,console.log(myMovie.volume);for(let e=0;e<=3;e++)bar[e].style.background=" linear-gradient(rgb(94, 255, 0),green)"}}function replayVideo(){event.preventDefault(),event.stopPropagation(),myMovie.play(),playButton.style.display="none",linkButton.style.display="none"}playButton.style.display="none",linkButton.style.display="none",myMovie.addEventListener("ended",()=>{playButton.style.display="block",linkButton.style.display="block"}),window.addEventListener("load",init);