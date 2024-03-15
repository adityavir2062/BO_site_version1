function poll_prompt(){
    
    if (count == 0){
    window.alert("Click on the movie to poll");
    count++;
    
}
}

let count=0;
let login= false;
let params = `scrollbars=no,resizable=yes,status=no,location=no,toolbar=no,menubar=no,
width=500,height=500,left=500,top=500`;

function poll_your_view(){
    window.alert("You have not logged in, we are allowing GUEST MODE only in ths trial version!");
    window.open("poll_movie.html","poll",params);
}