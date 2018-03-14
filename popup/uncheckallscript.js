var getInputs = document.getElementsByTagName("input");
for (var i = 0; i< getInputs.length; i++) {
  if (getInputs[i].type === 'checkbox') getInputs[i].checked = false;
}
