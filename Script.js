

function ArticleLoad(clickedID) {
    Title = document.getElementById(clickedID).innerHTML;
    Photo = document.getElementById("Photo" + clickedID);
    Info = document.getElementById("Text" + clickedID).innerHTML;
    
    
    document.getElementById("LoadArtTitle").innerHTML = Title;
    document.getElementById("LoadArtPhoto").innerHTML = '<img src="/Image/Photo' + clickedID + '.jpg">';
    document.getElementById("LoadArtText").innerHTML = Info;
}