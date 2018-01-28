$(document).ready(function(){

var num = 0;

	$.ajax({
		method: 'GET',
		url: '/api/scrape'
	}).then((teamInfo) => {
		scrollAction(teamInfo[0]);

		$('#next').on('click', function(){
			num++;
			scrollAction(teamInfo[num])

			if(num < 1){
				$('#previous').hide();
			} else {
				$('#previous').show();
			}

			if(num == (teamInfo.length - 1)){
					$('#next').hide();
				} else {
					$('#next').show();
				}

		});

		$('#previous').on('click', function(){
			num--;
			scrollAction(teamInfo[num])

			if(num < 1){
				$('#previous').hide();
			} else {
				$('#previous').show();
			}

			if(num == (teamInfo.length - 1)){
					$('#next').hide();
				} else {
					$('#next').show();
				}
		});

	});

	let scrollAction = (index) => {

			$('#resultsDiv').remove();
			$('#YpgDiv').remove();
			var teamDiv = $('<div id="resultsDiv">');
			var teamYpgDiv = $('<div id="YpgDiv">')

			var teamName = $('<h4>', {
				text: "Team Name - " + index.team
			});

			var teamYards = $('<h4>', {
				text: "Yards Per Game - " + index.ypg
			})

			teamDiv.append(teamName)
			teamYpgDiv.append(teamYards)
			$('#teams').append(teamDiv).append(teamYpgDiv)

	}
});
