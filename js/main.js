const modal = document.getElementById("modalPj");
const btn = document.getElementById("modalProj");
const span = document.getElementsByClassName("close")[0];

const modal2 = document.getElementById("modalConts");
const btn2 = document.getElementById("modelCont");
const span2 = document.getElementsByClassName("close2")[0];

btn.onclick = function() {
	modal.style.display = "block";
};

span.onclick = function() {
	modal.style.display = "none";
};

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

btn2.onclick = function() {
	modal2.style.display = "block";
};

span2.onclick = function() {
	modal2.style.display = "none";
};

window.onclick = function(event) {
	if (event.target == modal2) {
		modal2.style.display = "none";
	}
};
