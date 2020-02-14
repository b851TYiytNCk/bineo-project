function Res() {
            var a = document.getElementById('first').value;
			//alert(a);
            if (a < 0) {
                document.getElementById('first').value = 0;
                a = 0;
            }
            if (a > 250) {
                document.getElementById('first').value = 250;
                a = 250;
            }
            var b = 200;
			//alert(b);
            var c = a * b/1000;
			//alert(c);
            for (var i = 1; i <= ustanovki.totalstanki.value; i++) {  
                if ((c >= document.getElementById("field_start_stanok_value" + i).value) && (c <= document.getElementById("field_end_stanok_value" + i).value)) {
                    document.getElementById('proizvoditelnost').innerHTML = "Продуктивність (куб.м.): " + c;
                    document.getElementById('field_name_stanok_value').innerHTML = "Необхідна установка: " + document.getElementById("field_name_stanok_value" + i).value;
                    document.getElementById('field_price_stanok_value').innerHTML = "Вартість (євро): " + document.getElementById("field_price_stanok_value" + i).value;
                }
            }
                       
}
function Resrus() {
            var a = document.getElementById('first').value;
			//alert(a);
            if (a < 0) {
                document.getElementById('first').value = 0;
                a = 0;
            }
            if (a > 250) {
                document.getElementById('first').value = 250;
                a = 250;
            }
            var b = 200;
			//alert(b);
            var c = a * b/1000;
			//alert(c);
			
            for (var i = 1; i <= ustanovki.totalstanki.value; i++) {
                if ((c >= document.getElementById("field_start_stanok_value" + i).value) && (c <= document.getElementById("field_end_stanok_value" + i).value)) {
                    document.getElementById('proizvoditelnost').innerHTML = "Производительность (куб.м.): " + c;
                    document.getElementById('field_name_stanok_value').innerHTML = "Требуемая установка: " + document.getElementById("field_name_stanok_value" + i).value;
                    document.getElementById('field_price_stanok_value').innerHTML = "Стоимость (евро): " + document.getElementById("field_price_stanok_value" + i).value;
                }
            }
                       
}