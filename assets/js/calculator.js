$(document).ready( function() {
    var switcher = function() {
	    let price = document.getElementById('field_price_stanok_value'),
		prod = document.getElementById('proizvoditelnost'),
		people = document.getElementById('field_name_stanok_value'),
		cbm = "Производительность (м<sup>3</sup>): ";
		function appendX(num, money, m) {
            $(people).empty().append('Количество человек: до ' + num);
    		$(price).empty().append('Стоимость: ' + money + ' &#8364; (евро)');
    		$(prod).empty().append(cbm + m);
        }
        
	    $('#model-range').on('change', function() {
		let a = this.value;
		if (a == "0")
			{appendX(4, 1700, 0.6)}
	    if (a == "1")
	    	{appendX(5, 2700, "1-1.2")}
	    if (a == "2")
	    	{appendX(10, 3000, "1.5-1.7")}
	    if (a == "3")
	    	{appendX(15, 3400, "2.25-2.5")}
	    if (a == "4")
	    	{appendX(20, 4000, "3-3.3")}
	    if (a == "5")
	    	{appendX(25, 4700, "3.75-4")}
	    if (a == "6")
	    	{appendX(30, 5400, "4.5-5")}
	    if (a == "7")
	    	{appendX(40, 6500, "6-7")}
	    });
	    
	}
	switcher();
});