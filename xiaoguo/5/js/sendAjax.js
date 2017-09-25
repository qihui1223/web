 /* 动态写入数据 */
 function myThing(data){
	var html = [];
	for(var i = 0; i < data.length;i++) {
		
		/*
		<tr class="user_bj_list">
			<td class="fore1">001</td>
			<td class="fore2" title="分页">分页</td>
			<td class="fore3">内容123</td>
			<td class="fore4">2017-8-5</td>
			<td class="fore5">完成</td>
			<td class="fore6"><a target="_blank" onclick=""><a href="#">查看</a></a></td>
		</tr>
		*/
		
		html += '<tr class="user_bj_list">';
		html += '<td class="fore1">'+ data[i].fore1 +'</td>';
		html += '<td class="fore2">'+ data[i].fore2 +'</td>';
		html += '<td class="fore3">'+ data[i].fore3 +'</td>';
		html += '<td class="fore4">'+ data[i].fore4 +'</td>';
		html += '<td class="fore5">'+ data[i].fore5 +'</td>';
		html += '<td class="fore6">';
		html += '<a target="_blank" onclick="" href="#">'+ data[i].fore6 + '</a>';
		html +='</td>';
		html += '</tr>';
	}
	$('.user_bj_content').html(html);
 }

  /* ajax 请求更新数据 */
 function sendAjax1(page,size){
	var url = '';
	myThing(data.data[page-1].con);
		
	/*$.ajax({  
		url:'data/'+ page +'.txt',  
		type:'GET',  
		cache:false,   
		dataType: 'json',
		success: function(data) {
			if(data){
				
			}
		}
	});*/
 }
 
