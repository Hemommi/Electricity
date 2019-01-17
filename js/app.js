var icons = [
	"fa fa-car",
	"fa fa-tree",
	"fas fa-cloud"
];

var itemList = $("#itemList");
var carButton = $("#carButton");
var treeButton = $("#treeButton");
var carbonButton = $("#carbonButton");
var kwhLastMonth = $("#kwhLastMonth");
var kwhLastMonthLastYear = $("#kwhLastMonthLastYear");
var itemSavingText1 = $("#itemSavingText1");
var itemSavingText2 = $("#itemSavingText2");

//default settings
var kwhLastMonthDefault = 573;
var lastMonthName = "January 2019";
var kwhLastMonthLastYearDefault = 719;
var lastMonthNameLastYear = "January 2018";
var numberOfCars = 20;
var numberOfCarsSaved = 4;
var numberOfTrees = 20;
var numberOfTreesSaved = 10;
var numberOfCarbon = 20;
var numberOfCarbonSaved = 0.38;

//button events
carButton.click(showCars);
treeButton.click(showTrees);
carbonButton.click(showCarbon);

//set initial screen
initialScreen();

function showCars() {
	showItems(numberOfCars, numberOfCarsSaved, icons[0]);
	itemSavingText1.text(" save " + numberOfCarsSaved + " cars!");
	itemSavingText2.text("The resulting saving is enough to offset the energy consumption of " + numberOfCarsSaved + " average-size cars for one month.");
}

function showTrees() {
	showItems(numberOfTrees, numberOfTreesSaved, icons[1]);
	itemSavingText1.text(" save " + numberOfTreesSaved + " trees!");
	itemSavingText2.text("The resulting saving is enough to allocate money for planting new " + numberOfTreesSaved + " trees for one month!'");
}

function showCarbon() {
	var cloudsSaved = Math.round(numberOfCarbon / (numberOfCarbonSaved * 10));
	showItems(numberOfCarbon, cloudsSaved, icons[2]);
	itemSavingText1.text(" save " + cloudsSaved + " clouds!");
	itemSavingText2.text("The consumption of the released dioxane to the atmosphere has decreased by " + numberOfCarbonSaved + " ton!");
}

function initialScreen() {
	showCars();
	kwhLastMonth.text(kwhLastMonthDefault);
	kwhLastMonthLastYear.text(kwhLastMonthLastYearDefault);
}

function showItems(totalCars, savedCars, itemName) {
	itemList.empty();
	for (var i = 0; i < totalCars; i++) {
		if (i < savedCars) {
			itemList.append("<li class='" + itemName + " savedItem magictime puffIn'> </li>");
		} else {
			itemList.append("<li class='" + itemName + " item'> </li>");
		}
	}
}

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: [lastMonthNameLastYear, lastMonthName ],
		datasets: [{
			label: '# of kWH',
			data: [kwhLastMonthLastYearDefault, kwhLastMonthDefault],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)'
			],
			borderColor: [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)'
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
});

