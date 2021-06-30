var neilLikes=document.getElementById('Neil');
var nicholeLikes=document.getElementById('Nichole');
var jimLikes=document.getElementById('Jim');
var likeList=[9,12,9];
neilLikes.innerHTML=`${likeList[0]} like(s)`
nicholeLikes.innerHTML=`${likeList[1]} like(s)`
jimLikes.innerHTML=`${likeList[2]} like(s)`
function incrmNum(num){
    if(num==0){
        likeList[0]++
        neilLikes.innerHTML=`${likeList[0]} like(s)`
    }
    if(num==1){
        likeList[1]++
        nicholeLikes.innerHTML=`${likeList[1]} like(s)`
    }
    if(num==2){
        likeList[2]++
        jimLikes.innerHTML=`${likeList[2]} like(s)`
    }
}
