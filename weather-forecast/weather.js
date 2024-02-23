const submit = document.getElementById('submit');

submit.preventDefault =(event) => {
  console.log('preventDefault');
  return false;
};

const weatherDiv = document.getElementById('weather-div');

const url = `https://wttr.in/${location}?format=%C+%t+%w`;
const loader = document.getElementById('loader-container');
const errorDiv = document.getElementById('error');
const loaderAnim = document.getElementById('loader');

submit.addEventListener('click', () => {
  const location = document.getElementById('location').value || 'accra';
  const url = `https://wttr.in/${location}`;
  weatherDiv.innerHTML = '';
  loader.style.display = 'contents';
  try {
     fetch(url)
    .then((response) => response.text())
    .then((data) => {
      loader.style.display = 'none';
      weatherDiv.innerHTML = data;
      console.log(data);
    });
  } catch (error) {
    loaderAnim.style.display = 'none';
    console.log(error);
    errorDiv.innerHTML = 'An error occured when fetching the weather data. Please try again.';
  }
});
