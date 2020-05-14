function main() {
  const numeral = require('numeral');
  const url = "https://api.covid19api.com/summary";

  const getSummary = () => {
    fetch(`${url}`, {
      method: 'GET',
      redirect: 'follow'
    })
    .then(response =>{
      return response.json();
    })
    .then(responseJson =>{
      renderTotal(responseJson.Global);
      renderSummary(responseJson.Countries);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  const renderTotal = (total) =>{
    const positifElement = document.querySelector("#positif");
    const sembuhElement = document.querySelector("#sembuh");
    const meninggalElement = document.querySelector("#meninggal");

    const tConf = numeral(`${total.TotalConfirmed}`).format('0,0,000');
    const tReco = numeral(`${total.TotalRecovered}`).format('0,0,000');
    const tDeat = numeral(`${total.TotalDeaths}`).format('0,0,000');
    positifElement.innerHTML=`${tConf}`;
    sembuhElement.innerHTML=`${tReco}`;
    meninggalElement.innerHTML=`${tDeat}`;
  }

  const renderSummary = (countries) =>{
    const listCaseElement = document.querySelector("tbody");
    listCaseElement.innerHTML ="";

    countries.forEach(covid => {
      listCaseElement.innerHTML +=`
        <tr>
          <td>${covid.Country}</td>
          <td>${covid.TotalConfirmed}</td>
          <td>${covid.TotalRecovered}</td>
          <td>${covid.TotalDeaths}</td>
        </tr>
      `;
    });

  }
  const showResponseMessage = (message = "Check your internet connection") => {
      alert(message);
  };
  document.addEventListener("DOMContentLoaded", ()=>{
    getSummary();
  })
}

export default main;
