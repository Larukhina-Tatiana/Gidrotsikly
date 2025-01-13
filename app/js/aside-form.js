// const form = document.forms.asideForm;
const form = document.querySelector("#asideForm");
const refs = {
  btnSubmit: form.choose,
  resetFilter: form.resetFilter,
  btnsShowMore: form.showMore,
};

console.log(form);
console.log(form.elements);
console.log(refs.btnSubmit);
console.log(refs.btnsShowMore);
//  Нахождение родителя
window.addEventListener("click", function (event) {
  if (event.target.name === "showMore") {
    const parentCurrentBtn = event.target.closest(".aside__form-item-drop");
    // const parentCurrentBtn = event.target.closest(".aside__form-item-drop");
    console.log(parentCurrentBtn);
  }
});

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  console.log(Object.fromEntries(formData));
  // Очистка LS
  // e.currentTarget.reset();
  // localStorage.removeItem(STORAGE_KEY);
}
