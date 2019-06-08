var	dataSet;

var selectedValue;

var airports = [{name:"totalDutchAirports", key:"A045844"},{name:"amsterdamAirportSchiphol", key:"A043590"}, {name:"roterdamTheHagueAirport", key:"A043596"},
				{name:"eindhovenAirport", key:"A043591"}, {name:"maastrichtAachenAirport", key:"A043595"}, {name:"groningenAirportEelde", key:"A043593"}]

var airport1Passangers, airport1Flights, airport1Cargo, airport1Mail;
var airport2Passangers, airport2Flights, airport2Cargo, airport2Mail;
var airport3Passangers, airport3Flights, airport3Cargo, airport3Mail;
var airport4Passangers, airport4Flights, airport4Cargo, airport4Mail;
var airport5Passangers, airport5Flights, airport5Cargo, airport5Mail;
var airport6Passangers, airport6Flights, airport6Cargo, airport6Mail;


GetData(Execution);
/**
 * @function GetData
 * @description Collects the dataset from the source and assigns it to a global array  
 * @param {function} callback a callback function that is going to be called after this function
 * to make sure that the data is downloaded before being processed
 */
function GetData(callback)
{
	$.ajax({
		url: "https://opendata.cbs.nl/ODataApi/odata/37478eng/TypedDataSet", 
		method: "GET",
		success: function(result) 
			{
				dataSet = result.value;
				console.log(dataSet);
				callback();
			}
		});
		
}
/**
 * @function Execution
 * @description this is the main function which is going to call other functions(to make sure they are executed in the right order)
 */
function Execution()
{	
var data, totalFlights, totalPassangers;
//$("#select")


$(document).ready(function()
{
	$("#yearSelect").on('click', function()
	{	selectedValue = document.getElementById("yearSelect").value
		
		//console.log(data);
		//console.log(totalFlights);
		//console.log(totalPassangers);
		//console.log(FindBasedOnAirport(dataSet, "A045844"), FindBasedOnAirport(dataSet, "A043590"));
		DisplayData();
	})
})




}
/** 
 * @function FindBasedOnYear
 * @description Finds All the Objects in an array that contain a specidied year and returns them in an array
 * @param {array} data dataset that this function is going to check
 * @param {String} year the year this funtion is going to search for
*/
function FindBasedOnYear(data, year)
{
	var result = [];
	for (var i = 0; i< data.length; i++)
	{
		if (data[i].Periods.indexOf(year.toString()) !== -1)
		{
			result.push(data[i]);
		}
	}
//console.log(result);

return result;
}


/**
 * @function FindTotalFlights
 * @description sums up all the total flights values in the array and returns that sum
 * @param {array} data array that you want to find the sum of total flights in
 */
function FindTotalFlights(data)
{ var result= 0 ;
	for (var i = 0; i< data.length; i++)
	{
		result= result +data[i].TotalFlights_3;
	}
	return result;
}
/**
 * @function FindTotalPassangers
 * @description Finds total number of passangers in a dateset
 * @param {array} data  the dataset that this function is counting the total passangers value from
 */

function FindTotalPassangers(data)
{ 
	var result= 0 ;
	for (var i = 0; i< data.length; i++)
	{
		result= result +data[i].TotalPassengers_12;
	}
	return result;
}


/**
 * @function FindTotalCargo
 * @description Finds the total amount of cargo in the specified dataset
 * @param {array} data the dataset this function is going to process
 */
function FindTotalCargo(data)
{
	var result = 0;
	for (var i = 0; i<data.length; i++)
	{
		result = result + data[i].TotalCargo_43;
	}
	return result;
}
/**
 * @function FindTotalMail
 * @description Finds the total amount of mail in the specified dataset
 * @param {array} data The dataset this functions is going to process 
 */
function FindTotalMail(data)
{
	var result = 0;
	for (var i = 0; i < data.length; i++)
	{
		result  = result + data[i].TotalMail_74;
	}
	return result;
}
function DisplayData()
{ var airport1Data = [], airport2Data = [], airport3Data = [], airport4Data = [], airport5Data = [], airport6Data = [];
	//console.log(FindBasedOnYear(dataSet, selctedValue));
	data = FindBasedOnYear(dataSet, selectedValue);
	// totalFlights = FindTotalFlights(data);
	// totalPassangers =  FindTotalPassangers(data);
	for(var i= 0;i< data.length; i++)
	{
		if (data[i].Airports == airports[0].key)
		{
			airport1Data.push(data[i]);
		}
		if (data[i].Airports == airports[1].key)
		{
			airport2Data.push(data[i]);
		}
		if (data[i].Airports == airports[2].key)
		{
			airport3Data.push(data[i]);
		}
		if (data[i].Airports == airports[3].key)
		{
			airport4Data.push(data[i]);
		}
		if (data[i].Airports == airports[4].key)
		{
			airport5Data.push(data[i]);
		}
		if (data[i].Airports == airports[5].key)
		{
			airport6Data.push(data[i]);
		}
		
	}
	
	airport1Passangers = FindTotalPassangers(airport1Data);
	airport2Passangers = FindTotalPassangers(airport2Data);
	airport3Passangers = FindTotalPassangers(airport3Data);
	airport4Passangers = FindTotalPassangers(airport4Data);
	airport5Passangers = FindTotalPassangers(airport5Data);
	airport6Passangers = FindTotalPassangers(airport6Data);

	airport1Flights = FindTotalFlights(airport1Data);
	airport2Flights = FindTotalFlights(airport2Data);
	airport3Flights = FindTotalFlights(airport3Data);
	airport4Flights = FindTotalFlights(airport4Data);
	airport5Flights = FindTotalFlights(airport5Data);
	airport6Flights = FindTotalFlights(airport6Data);

	airport1Cargo = FindTotalCargo(airport1Data);
	airport2Cargo = FindTotalCargo(airport2Data);
	airport3Cargo = FindTotalCargo(airport3Data);
	airport4Cargo = FindTotalCargo(airport4Data);
	airport5Cargo = FindTotalCargo(airport5Data);
	airport6Cargo = FindTotalCargo(airport6Data);

	airport1Mail = FindTotalCargo(airport1Data);
	airport2Mail = FindTotalCargo(airport2Data);
	airport3Mail = FindTotalCargo(airport3Data);
	airport4Mail = FindTotalCargo(airport4Data);
	airport5Mail = FindTotalCargo(airport5Data);
	airport6Mail = FindTotalCargo(airport6Data);





	console.log(selectedValue);
	//console.log(airport1Data,airport2Data,airport3Data, airport4Data, airport5Data, airport6Data,  data);
	panel1Text1.innerHTML = "The amount of passengers using the airport in " + selectedValue;
	chartElement1.style.width = airport1Passangers / 300000 +"px";
	panel1Element1Text.innerHTML = airport1Passangers;
	chartElement2.style.width = airport2Passangers / 300000 +"px";
	panel1Element2Text.innerHTML = airport2Passangers;
	chartElement3.style.width = airport3Passangers / 300000 +"px";
	panel1Element3Text.innerHTML = airport3Passangers;
	chartElement4.style.width = airport4Passangers / 300000 +"px";
	panel1Element4Text.innerHTML = airport4Passangers;
	chartElement5.style.width = airport5Passangers / 300000 +"px";
	panel1Element5Text.innerHTML = airport5Passangers;
	chartElement6.style.width = airport6Passangers / 300000 +"px";
	panel1Element6Text.innerHTML = airport6Passangers;

	panel2Text1.innerHTML = "The amount of flights in " + selectedValue;
	chart2Element1.style.width = airport1Flights / 3000 + "px";
	panel2Element1Text.innerHTML = airport1Flights;
	chart2Element2.style.width = airport2Flights / 3000 + "px";
	panel2Element2Text.innerHTML = airport2Flights;
	chart2Element3.style.width = airport3Flights / 3000 + "px";
	panel2Element3Text.innerHTML = airport3Flights;
	chart2Element4.style.width = airport4Flights / 3000 + "px";
	panel2Element4Text.innerHTML = airport4Flights;
	chart2Element5.style.width = airport5Flights / 3000 + "px";
	panel2Element5Text.innerHTML = airport5Flights;
	chart2Element6.style.width = airport6Flights / 3000 + "px";
	panel2Element6Text.innerHTML = airport6Flights;
	
	panel3Text1.innerHTML = "The amount of cargo transported in " + selectedValue;
	chart3Element1.style.width = airport1Cargo / 30000 + "px";
	panel3Element1Text.innerHTML = airport1Cargo;
	chart3Element2.style.width = airport2Cargo / 30000 + "px";
	panel3Element2Text.innerHTML = airport2Cargo;
	chart3Element3.style.width = airport3Cargo / 30000 + "px";
	panel3Element3Text.innerHTML = airport3Cargo;
	chart3Element4.style.width = airport4Cargo / 30000 + "px";
	panel3Element4Text.innerHTML = airport4Cargo;
	chart3Element5.style.width = airport5Cargo / 30000 + "px";
	panel3Element5Text.innerHTML = airport5Cargo;
	chart3Element6.style.width = airport6Cargo / 30000 + "px";
	panel3Element6Text.innerHTML = airport6Cargo;
	
	panel4Text1.innerHTML = "The amount of mail transported in " + selectedValue;
	chart4Element1.style.width = airport1Mail / 30000 + "px";
	panel4Element1Text.innerHTML = airport1Mail;
	chart4Element2.style.width = airport2Mail / 30000 + "px";
	panel4Element2Text.innerHTML = airport2Mail;
	chart4Element3.style.width = airport3Mail / 30000 + "px";
	panel4Element3Text.innerHTML = airport3Mail;
	chart4Element4.style.width = airport4Mail / 30000 + "px";
	panel4Element4Text.innerHTML = airport4Mail;
	chart4Element5.style.width = airport5Mail / 30000 + "px";
	panel4Element5Text.innerHTML = airport5Mail;
	chart4Element6.style.width = airport6Mail / 30000 + "px";
	panel4Element6Text.innerHTML = airport6Mail;



}
function AirportSelected(airport)
{
	console.log(airport);
	if (airport == airports[0].key)
	{
		totalPassengersHTML.innerHTML = "Total Passangers in " + selectedValue +" :" + airport1Passangers;
		totalFlightsHTML.innerHTML = "Total Flights in " + selectedValue +" :"+ airport1Flights;
		totalCargoHTML.innerHTML = "Total Cargo in " + selectedValue + " :" + airport1Cargo;
		totalMailHTML.innerHTML = "Total Mail in " + selectedValue + " :" + airport1Mail;
		console.log(airport1Mail);
	}
	else if (airport == airports[1].key)
	{
		totalPassengersHTML.innerHTML = "Total Passangers in " + selectedValue +" :" + airport2Passangers;
		totalFlightsHTML.innerHTML = "Total Flights in " + selectedValue +" :"+ airport2Flights;
		totalCargoHTML.innerHTML = "Total Cargo in " + selectedValue + " :" + airport2Cargo;
		totalMailHTML.innerHTML = "Total Mail in " + selectedValue + " :" + airport2Mail;
		console.log(airport2Mail);
	}
	else if (airport == airports[2].key)
	{	
		totalPassengersHTML.innerHTML = "Total Passangers in " + selectedValue +" :" + airport3Passangers;
		totalFlightsHTML.innerHTML = "Total Flights in " + selectedValue +" :"+ airport3Flights;
		totalCargoHTML.innerHTML = "Total Cargo in " + selectedValue + " :" + airport3Cargo;
		totalMailHTML.innerHTML = "Total Mail in " + selectedValue + " :" + airport3Mail;

	}
	else if (airport == airports[3].key )
	{
		totalPassengersHTML.innerHTML = "Total Passangers in " + selectedValue +" :" + airport4Passangers;
		totalFlightsHTML.innerHTML = "Total Flights in " + selectedValue +" :"+ airport4Flights;
		totalCargoHTML.innerHTML = "Total Cargo in " + selectedValue + " :" + airport4Cargo;
		totalMailHTML.innerHTML = "Total Mail in " + selectedValue + " :" + airport4Mail;
	}
	else if (airport == airports[4].key)
	{
		totalPassengersHTML.innerHTML = "Total Passangers in " + selectedValue +" :" + airport5Passangers;
		totalFlightsHTML.innerHTML = "Total Flights in " + selectedValue +" :"+ airport5Flights;
		totalCargoHTML.innerHTML = "Total Cargo in " + selectedValue + " :" + airport5Cargo;
		totalMailHTML.innerHTML = "Total Mail in " + selectedValue + " :" + airport5Mail;
	}
	else if (airport == airports[5].key)
	{
		totalPassengersHTML.innerHTML = "Total Passangers in " + selectedValue +" :" + airport6Passangers;
		totalFlightsHTML.innerHTML = "Total Flights in " + selectedValue +" :"+ airport6Flights;
		totalCargoHTML.innerHTML = "Total Cargo in " + selectedValue + " :" + airport6Cargo;
		totalMailHTML.innerHTML = "Total Mail in " + selectedValue + " :" + airport6Mail;
	}

}

