document.getElementById('pageSelect').addEventListener('change', function() {
    const selectedPage = this.value;
    if (selectedPage) {
        window.location.href = selectedPage;
    }
});
function updateOptions() {
  const languageSelect = document.getElementById('pageSelect');
  const options = languageSelect.options;

  if (window.innerWidth < 868) {
    options[0].hidden = true; 
    options[1].text = 'Eng';
    options[2].text = 'Рус';
  } else {
    options[0].hidden = false;
    options[0].text = 'Выберите язык';
    options[1].text = 'English';
    options[2].text = 'Русский';
  }
}
window.addEventListener('resize', updateOptions);
window.addEventListener('load', updateOptions);