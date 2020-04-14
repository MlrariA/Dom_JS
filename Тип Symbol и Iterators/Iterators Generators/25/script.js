let p = document.querySelectorAll('p');
let but = document.getElementById('but');

but.addEventListener("click", function () {
let entries = p.entries();
for (let [num, value] of entries) {
value.innerHTML = value.innerHTML + num;
}
})