let text = document.getElementById("text");

!localStorage.pagecount ? localStorage.pagecount = {} : '';

let currentPage = window.location.href;
if(localStorage.pagecount[currentPage]){
    localStorage.pagecount[currentPage] = Number(localStorage.pagecount[currentPage]) + 1;
}
else{
    localStorage.pagecount[currentPage] = 1;
}

text.innerHTML = "Du har besökt denna hemsida " + localStorage.pagecount[currentPage] + " gånger";