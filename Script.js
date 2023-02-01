

function ArticleLoad(clickedID) {
    
    let Title = document.getElementById(clickedID).innerHTML;
    let Info = document.getElementById("Text" + clickedID).innerHTML;
    
    document.getElementById("LoadArtTitle").innerHTML = Title;
    document.getElementById("LoadArtPhoto").innerHTML = '<img src="/Image/Photo' + clickedID + '.jpg">';
    document.getElementById("LoadArtText").innerHTML = Info;

}

function LessonPlan(clickedID) {
    clean();
    document.getElementById("LoadArtPhoto").innerHTML = '<img src="/Image/Plan' + clickedID + '.jpg">';

}

function clean() {
    const empty ="";
    document.getElementById("LoadArtTitle").innerHTML = empty;
    document.getElementById("LoadArtPhoto").innerHTML = empty;
    document.getElementById("LoadArtText").innerHTML = empty;

}
function start() {
    let Title = document.getElementById("Art1").innerHTML;
    let Photo = '<img src="/Image/PhotoArt1.jpg">';
    let Text = document.getElementById("TextArt1").innerHTML;

    document.getElementById("LoadArtTitle").innerHTML = Title;
    document.getElementById("LoadArtPhoto").innerHTML = Photo;
    document.getElementById("LoadArtText").innerHTML = Text;
}

function books() {
    clean()
    let Title = "Wypełnij formularz aby otrzymać listę podręczników"
    let option = '<form action="/action_page.php"><select><option value="Klasa 1A">Klasa 1A</option><option value="Klasa 1B">Klasa 1B</option><option value="Klasa 2A">Klasa 2A</option><option value="Klasa 3A">Klasa 3A</option><option value="Klasa 4A">Klasa 4A</option><br></select>';
    let name = '<form><br>Imię: <input type="text" name="firstname"><br>Nazwisko: <input type="text" name="lastname"></form>';
    let email = '<label for="email">Podaj email:</label><input type="email" id="email" name="email"><input type="submit"></form>'
    let Text = option+name+email;
    document.getElementById("LoadArtTitle").innerHTML = Title;
    document.getElementById("LoadArtText").innerHTML = Text;
}