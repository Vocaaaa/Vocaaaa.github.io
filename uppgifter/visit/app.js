const text = document.getElementById("text")

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/vocaaaa.github.io/uppgifter/visit/?amount=1')
	.then(res => res.json())
	.then(res => {
		text.innerHTML = res.value;
	})
}
