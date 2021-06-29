const config = require('../prod-config.json');

function checkEntries(panel){
	
	let vReturnArray = []

	for(var i = 0; i < panel.length; i++){

    	var catogory = panel[i];
    	var label = catogory.label;
    	for(var j = 0; j < catogory.url.length; j++){

    		let value = [catogory.label, catogory.url[j]];
        	vReturnArray = vReturnArray.concat([value]);
    	}
	}
	return vReturnArray;
}

module.exports = {checkEntries, config};