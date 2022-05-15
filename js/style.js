const headingSection = document.querySelector(".heading");

headingSection.style.color = "blue";

headingSection.style.setProperty('font-size', '4rem');

//Edit: add class to html tag with .setAtrribute
const editSection = document.querySelector('.htmlClassEdit');
editSection.setAttribute('class', 'pageBottom');

newEditSection = document.querySelector(".pageBottom");
newEditSection.style.color = "red";



document.getElementById("link").setAttribute("href", "https://www.geographyrealm.com/caribbean-islands-greater-antilles/"); 
document.querySelector(".link").setAttribute("href", "https://www.geographyrealm.com/caribbean-islands-greater-antilles/");

const newParagraph = document.querySelector(".newPara");

newParagraph.textContent +="This is a new paragraph for assignment";

const myButton = document.querySelector('.newButton');
myButton.addEventListener('click', function(){

    const clickSection = document.querySelector(".best");
    clickSection.style.background = "green";
    clickSection.classList.toggle('clicked');

});



var arrayOfNationalDish = new Array();
arrayOfNationalDish[0] = " Cuba: Ropa Vieja";
arrayOfNationalDish[1] = " Dominican Republic: La Bandera";
arrayOfNationalDish[2] = " Haiti: Soupe joumou";
arrayOfNationalDish[3] = " Jamaica: Ackee and Saltfish";
arrayOfNationalDish[4] = " Puerto Rico: Arroz con Gandules";

const myArray = document.querySelector(".arraySection");
myArray.innerHTML = arrayOfNationalDish;



//Edit:----RANDOM COLORS CODE ----

const buttonColor = document.querySelector('.changeColor');
const wrapper = document.querySelector('.about');
buttonColor.addEventListener('click', () => {
  wrapper.style.backgroundColor = colors();
});


function colors(){
  let colorArray = [];
  for(let i=0; i<3; i++){
    colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
  }

  let color = colorArray
    .map(x => x.toString(16))
    .join('');

    return `#${color}`;
}



$(".jQueryPara").html("Hello World!");



$(".jQueryButton").click(function(){
    $(".jQueryPara2").before("<h4>Beginning</h4>");

});



options = {
    chart: {
      type: 'bar'
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    series: [{
      data: [{
        x: 'Cuba',
        y: 15,
      }, {
        x: 'Dominican Republic',
        y: 31
      }, {
        x: 'Haiti',
        y: 10
      }, {
        x: 'Jamaica',
        y: 3
      }, {
        x: 'Puerto Rico',
        y: 6
      }]
    }]
  }

  
var chart = new ApexCharts(document.querySelector("#barChart"), options);
chart.render();




