var i = 0; 			
var images = [];	
var time = 3000;	
	 
// Image List
images[0] = "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
images[1] = "https://images.pexels.com/photos/7095/people-coffee-notes-tea.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
images[2] = "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
images[3] = "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	
	if(i < images.length - 1){
	
	  i++; 
	} else { 
		
		i = 0;
	}

	
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;