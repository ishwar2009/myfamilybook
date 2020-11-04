theimagesarray=[
    "https://i.ytimg.com/vi/tGqi6dR7bhA/maxresdefault.jpg",
    "https://4.bp.blogspot.com/-PdQPE5JFR2g/WS9Pi_4q8lI/AAAAAAABIHY/iJnTUDpTB34iITr-hBJZccBfxlC1jcywwCKgB/s1600/Dot_CharaImg_Dad.png",
"https://tse3.mm.bing.net/th?id=OIP.38KlvhzVk0hlaroD_2poCgHaGs&pid=Api&P=0&w=178&h=162",
"https://tse1.mm.bing.net/th?id=OIP.6g92xheYDzLhnatAQiik4QHaKe&pid=Api&P=0&w=300&h=300",
"https://thumbs.dreamstime.com/z/cute-girl-cartoon-illustration-58096623.jpg",
"https://tse3.mm.bing.net/th?id=OIP.u88jYwAalq1-MKszzL2R8gHaM6&pid=Api&P=0&w=300&h=300"];


thenamesarray=["the parameswaran's","Anand","Gayatri","Ishwar","Anagha","Raji"];
var i=1;
function imagechange() {
    document.getElementById("familyimg").src=theimagesarray[i];
    document.getElementById("empty").innerHTML=thenamesarray[i];
    i++;
    if (i===6) {
        i=0;
    };
   
    

   



    

}
