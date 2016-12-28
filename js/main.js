
function calcular()
{
	var a=parseInt(document.getElementById("a").value);
	var b=parseInt(document.getElementById("b").value);
	var resultado=document.getElementById("resultado");
	

	if(a>0 && b>0){
			document.getElementById("resultado").innerHTML=0;
	}else{
	
			document.getElementById("resultado").innerHTML=1;
	}
		
}




