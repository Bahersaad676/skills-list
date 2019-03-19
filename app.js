var input = document.getElementById("input");
var btn = document.getElementById("btn");
var skills = document.getElementById("skills");

btn.onclick = function() {
	var arr = [];
	arr.push(...input.value.split(","));
	for (let i = 0; i < arr.length;i++) {
		var elem = document.createElement("li");
		elem.innerHTML = arr[i];
		skills.append(elem);
	}
	input.value = "";
}

/*
var btn1 = document.getElementById("btn");

function Elems(inpt, skills) {
	this.input = document.getElementById(inpt);
	this.skills = document.getElementById(skills);
}

var elems1 = new Elems("input", "skills");

Elems.prototype.Skills = function() {
	var arr = [];
	arr.push(...this.input.value.split(","));
	for (var i = 0; i < arr.length; i++) {
		var list = document.createElement("li");
		list.innerHTML = arr[i];
		this.skills.append(list);
	}
	this.input.value = "";
};

btn1.onclick = function() {
	elems1.Skills();
}
*/