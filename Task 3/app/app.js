document.addEventListener("DOMContentLoaded", function(){
	
	var button = document.getElementById('but');

	but.addEventListener('click', function(){

	fidzi("https://jsonplaceholder.typicode.com/users1", function(data) {     
		console.log("Sukces");     
		console.log(data); 
	}, function(err) {     
			console.log("Wystąpił błąd!");     
			console.log(err); 
		});
	});
	
	function fidzi(url, onSuccess, onError) {

	  var myReq = new XMLHttpRequest();

	  myReq.open('GET', url, true);

	  myReq.onreadystatechange = function () {

	    if (myReq.readyState == 4 && myReq.status == 200){
	        onSuccess(myReq.responseText);
	    } else {
	        onError(myReq.status);
	    }
	    
	  };

	  myReq.send(null);

	}

});