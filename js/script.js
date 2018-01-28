// JavaScript Document
function answer(){
	var arr = []
	var name = document.getElementById('name').value;
	var radio = document.getElementById('radio');
	var boys = document.getElementById('boys').value.split(" ");
	console.log(`boys are ${boys}`);
	var boysLength = boys.length;
	var girls = document.getElementById('girls').value.split(" ");
	console.log(`girls are ${girls}`);
	var girlsLength = girls.length;
	var name = document.getElementById('name').value;
	var wedding = document.getElementById('g11');
	var ghazwat = document.getElementById('f28');
	var allTrue = 0;
	if (name == "محمد بن عبدالله بن عبدالمطلب")
	{
		allTrue++;
		clearError("name")
	}else{
		setError("name")
		arr.push("خطاء في اسماء النبي ﷺ ")
	}
	if (radio.checked){
		allTrue++;
		clearError("radios")
	}else{
		setError("radios")
		arr.push("خطاء في تاريخ ميلاد الحبيب ﷺ ")
	}
	if (boysLength >= 3){
		var boys_count=0;
		for(var i = 0; i < boysLength; i++){
			if( boys[i] == "القاسم" ){
		 		delete boys[i];
				boys_count++;
			}
			else if( boys[i] == "عبدالله" ){
				delete boys[i];
				boys_count++;
			}
			else if( boys[i] == "ابراهيم" ){
				delete boys[i]
				 boys_count++;
			}
			else if( boys[i] == "إبراهيم" ){
				delete boys[i];
				boys_count++;
				}
			else {
				console.log(`${boys[i]} not defineds`);
			}
		}
		if (boys_count >= 3){
			allTrue++;
			clearError("boys");
		}else{
			setError("boys");
			arr.push("خطاء في اسماء ابناء الحبيب ﷺ");
		}
	}
	else if(boysLength < 3){
		setError('boys')
		arr.push("خطاء في اسماء ابناء الحبيب ﷺ")
	}
	if (girlsLength >= 3){
		var count=0;
		for(var i = 0; i < girlsLength; i++){
			if( girls[i] == "فاطمة" ){
		 		delete girls[i];
				count++;
			}
			else if( girls[i] == "كلثوم" ){
				delete girls[i];
				count++;
			}
			else if( girls[i] == "رقية" ){
				delete girls[i]
				 count++;
			}
			else if( girls[i] == "زينب" ){
				delete girls[i];
				count++;
				}
			else {
				if(girls[i].length >= 1){
				console.log(`${girls[i]} not defined`)
				}
			}
		}
		if (count > 3){
			allTrue++;
			clearError("girls");
		}else{
			setError("girls")
			arr.push("خطاء في اسماء بنات الحبيب ﷺ");
		}
	}
	else if(girlsLength < 3){
		setError('girls')
		arr.push("خطاء في اسماء بنات الحبيب ﷺ");
	}
	
	if (wedding.selected){
		allTrue++;
		clearError("wedding")
	}else {
		setError("wedding")
		arr.push("خطاء في عدد زوجات الحبيب ﷺ");
	}
	if (ghazwat.selected){
		allTrue++;
		clearError('ghazwat')
	}else{
		setError("ghazwat")
		arr.push("خطاء في عدد غزوات الحبيب ﷺ");
	}
	if (allTrue == 6){
		$(".errors").addClass("hidden")
		alert("إجاباتك كلها صائبة شكراً لك")
	}
	else if(allTrue < 6){
		$(".errors").removeClass("hidden");
		$(".errors ul").append("<li></li>").text(`${arr.join(" + ")}`); 
	}
	function setError(id){
		$(`#${id}`).addClass("error")
	}
	function clearError(id){
		$(`#${id}`).removeClass("error")
	}
}