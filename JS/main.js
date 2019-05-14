function pressed(){
    let change = document.getElementById("changed");
    if (change.style.fontSize != "3em"){
        change.innerHTML = "World Hello!";
        change.style.fontSize = "3em";
        change.style.color = "blue";
    }
    else{
        change.innerHTML = "Hello World!";
        change.style.fontSize = "1em";
        change.style.color = "black";
    }
}

function news(name, date, description){
    let change = document.getElementById("mynews");
    change.innerHTML += "<div class='newsArticle'><h3>" + 
        name + "</h3><p class='date'>" + 
        date + "</p><p>" + description + 
        "</p></div>";
}

news("News testing", "7/7/1007", "This news piece is intended to test the " +
     "sites news features!");
news("Site creation", "5/14/2019", "Created this website!");