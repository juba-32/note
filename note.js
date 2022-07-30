const body = document.getElementById("body")
const dark = document.querySelector(".dark")
const bar = document.querySelector(".note-bar")
const continer = document.querySelector(".continer")
const btn = document.querySelector(".icon-upload")
const input = document.querySelector("input")
dark.addEventListener("click", (s) => {
	body.classList.toggle("mode")

})

btn.addEventListener("click", (s) => {
	const task =
        `
		<div class="note-bar">
		<span class="icon-star"></span>
		<p>${input.value}</p>
		<div class="icon">
			<span class="icon-trash-o"></span>
			<span class="icon-angry"></span>
			<!--<span class="icon-heart"></span>-->
		</div>
	    </div>
	    
	    `
	continer.innerHTML += task
})
continer.addEventListener("click", (s) => {
	if (s.target.className == "icon-trash-o") {

		s.target.parentElement.parentElement.
			classList.add("ds")

	}
	else if (s.target.className == "icon-star") {
		s.target.classList.add("star")
	}
	else if (s.target.className == "icon-angry") {
		s.target.classList.add("ds")
		const span = `<span class="icon-heart"></span>`
		s.target.parentElement.innerHTML += span
	}
})
