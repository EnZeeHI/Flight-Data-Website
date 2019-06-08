function FindBasedOnPeriod(period)
{
	$.get({
		url: "https://opendata.cbs.nl/ODataApi/odata/37478eng/TypedDataSet", 
		
		success: function(result) {
					dataSet = result.value;
					console.log(dataSet);
			}
		});
	

		var dataSet = [];

	var result = [];
	for (var i = 0; i< dataSet.length; i++)
	{
		if (dataSet[i].Periods === period)
		{
			result.push(dataSet[i]);
		}

	}
	return result;
}
export {FindBasedOnPeriod};