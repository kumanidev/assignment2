const headingSection = document.querySelector(".heading");

headingSection.style.color = "blue";

headingSection.style.setProperty('font-size', '4rem');


//const footerSection = document.querySelector('class', '.page-footer');
//footerSection.setAttribute('class', 'pageBottom');

//const newFooterSection = document.querySelector(".pageBottom");
//newFooterSection.style.color = "red";

//const aboutSection = document.querySelector(".about")
//document.getElementById("link").setAttribute("href", "https://www.geographyrealm.com/caribbean-islands-greater-antilles/")
document.querySelector(".link").setAttribute("href", "https://www.geographyrealm.com/caribbean-islands-greater-antilles/")

const newParagraph = document.querySelector(".newPara");

newParagraph.textContent +="This is a new paragraph for assignment";

const myButton = document.querySelector('.newButton');
myButton.addEventListener('click', function(){

    const clickSection = document.querySelector(".best");
    clickSection.style.background = "green";
    clickSection.classList.toggle('clicked');

});

/*
const arrayOfNationalDish = {
    Cuba: 'Ropa Vieja',
    DominicanRepublic: 'La Bandera',
    Haiti: 'Soupe joumou',
    Jamaica: 'Ackee and Saltfish',
    PuertoRico: 'Arroz con Gandules'
}
console.log(arrayOfNationalDish);
*/


var arrayOfNationalDish = new Array();
arrayOfNationalDish[0] = " Cuba: Ropa Vieja";
arrayOfNationalDish[1] = " Dominican Republic: La Bandera";
arrayOfNationalDish[2] = " Haiti: Soupe joumou";
arrayOfNationalDish[3] = " Jamaica: Ackee and Saltfish";
arrayOfNationalDish[4] = " Puerto Rico: Arroz con Gandules";

const myArray = document.querySelector(".arraySection");
myArray.innerHTML = arrayOfNationalDish;

//document.write(arrayOfNationalDish.toString())

/*
for (let i = 0; i < arrayOfNationalDish.length; i++) {
    document.writeln(items[i]);
}
*/

/* //Creating Slide Panel
const contactMenuButton = document.querySelector('.contactMenuButton');
const body = document.body;


contactMenuButton.addEventListener('click', _=> {
    body.classList.toggle('offsite-is-open');
})
*/




//jQuery content
/*
$(document).ready(function(){
    $(".jQueryPara").replaceWith("<h4>New HTML content</h4>");

});
*/
//$(".jQueryPara").replaceWith("Hello World!");



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







