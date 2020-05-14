class AppBar extends HTMLElement {

   constructor() {
       super();
       this.shadowDOM = this.attachShadow({mode: "open"});
   }

   connectedCallback(){
       this.render();
   }

   render() {
       this.shadowDOM.innerHTML = `
       <style>
       * {
           margin: 0;
           padding: 0;
           box-sizing: border-box;
       }
       :host {
           display: block;
           width: 100%;
           background-color: cornflowerblue;
           color: white;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
       }
       h2 {
           padding: 10px;
           text-align: center;
       }
       p{
         text-align: center;
       }
           }
       </style>
       <h2>Cek Covid-19</h2>
       <p>live data covid-19 sekala global</p>`;
   }
}

customElements.define("app-bar", AppBar);
