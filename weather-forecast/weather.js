const submit = document.getElementById('submit');

submit.preventDefault =(event) => {
  console.log('preventDefault');
  return false;
};

const weatherDiv = document.getElementById('weather-div');

const url = `https://wttr.in/${location}?format=%C+%t+%w`;
const loader = document.getElementById('loader-container');


submit.addEventListener('click', () => {
  const location = document.getElementById('location').value || 'accra';
  const url = `https://wttr.in/${location}`;
  weatherDiv.innerHTML = '';
  loader.style.display = 'contents';
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      loader.style.display = 'none';
      weatherDiv.innerHTML = data;
      console.log(data);
    });

});
