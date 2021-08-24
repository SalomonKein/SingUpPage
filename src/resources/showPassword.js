function showPass(event) {
  let iconPass = event.currentTarget;
  let pass = iconPass.previousSibling.previousSibling;
  if (pass.getAttribute("type") === "password") {
    pass.classList.add("view");
    pass.setAttribute("type", "text");
    iconPass.className = "fa fa-eye-slash icon-password";
  } else {
    pass.classList.remove("view");
    pass.setAttribute("type", "password");
    iconPass.className = "fa fa-eye icon-password";
  }
}

export default showPass;
