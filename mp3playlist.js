$.getJSON("js/playlist.JSON", function(results){
	
	for (var i = 0; i < results#songs.length; i++) {
		$("#song").append('<div data-menu-open="false" class="song"><h1>Song Name</h1>' + result.song[i].songName + '<span class="duration">'+result.song[i].duration+'</span><li>' + result.song[i].artistName +'</li>'+result.song[i].album+'<li></li>'++'<ul></div>'
	}
	$('songs').click(function(){
		if ($(this).attr('data-menu-open') == 'true' ) {
			$(this).attr('data-menu-open','false');
		} else {
			$(this).css('height','100px');
		}

		}
		$(this).attr('data-menu-open', 'true');
		$(this).css('height', '100px');
	}
};

