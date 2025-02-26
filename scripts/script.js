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
    options[1].text = 'Рус';
    options[2].text = 'Eng';
  } else {
    options[0].hidden = false;
    options[0].text = 'Choose language';
    options[1].text = 'Русский';
    options[2].text = 'English';
  }
}
window.addEventListener('resize', updateOptions);
window.addEventListener('load', updateOptions);