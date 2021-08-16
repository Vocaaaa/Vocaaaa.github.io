let text = document.getElementById("text");

if (localStorage.pagecount)
{
localStorage.pagecount=Number(localStorage.pagecount) +1;
}
else
{
localStorage.pagecount=1;
}
text.innerHTML = ("Du har besökt denna hemsida "+ localStorage.pagecount + " gånger.");