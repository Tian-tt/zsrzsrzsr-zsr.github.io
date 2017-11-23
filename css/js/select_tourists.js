var arr = new Array()
//console.log(arr)
$().ready(function(){
		$(":checkbox").change(function(){
			var length = $('input[name="id"]:checked').length	
			if($(this).is(":checked")){
				arr.push($(this).attr("id"));
				if(arr.length > 2){
					var first_id = arr[0];
					$("#"+first_id).prop("checked", false)
					arr.splice(0, 1) ;
				}
			}else{
				for(var i = 0; i < arr.length; i++){
					if(arr[i] == $(this).attr("id")){
						arr.splice(i, 1) ;
					}
				}
			}

			console.info(arr)

			$(".content:eq(0) span").text(arr.length)			
		})
	})