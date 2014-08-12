$(document).ready(function() {

	
	var getIndexOfOptionsList = function() {

		debugger;

		

		//gets the index o thee optoinslist
		// return the index of the options list (type = number)
		var indexOfOptionsList = $( "#myExcuseCategory" ).val();

		return indexOfOptionsList;
	};


	var getExcusesArray = function(choosenArrayType) {

		debugger;

		
		//get the excuses choosen Excuses Array given choosen Array (type = number)
		//return the choosen Array of excuses (type = Array)


		var homeWorkExcusesArray = ["THAT I COULD NOT FOCUS ON MY HOMEWORK DUE TO THE EVENTS GOING ON IN ISRAEL!", "I thought it was a letter and accidentally mailed it to my Grandma Ma overseas.", "Aliens took it as a sample of human handwriting.", "Buffalo Bill from “The Silence of the Lambs” mistook it for a piece of human flesh and stole it to add to his collection.", "I let somebody copy it and they never gave it back.", "Doctor Who needed my help to save the human race and a dalek exterminated it just before I re-entered the TARDIS.", "It spontaneously combusted and vaporized.", "The FBI confiscated it because they claimed it was vital evidence.", "I was pet-sitting Mike Tyson’s tiger and it escaped from my bathroom and ate my homework.", "Kanye West ripped it up because he thought Beyonce’s homework was better.", "Katie Holmes mistook it for one of her divorce papers and signed a hole right through it.", "My little sister wanted to prove she could shoot an arrow as well as Katniss Everdeen and decided to use my homework as the target.","My pen ran out of ink so I decided to go buy another one. I got lost on the way back and was eventually taken home by a tourist who fortunately had a map. When I tried the pen though, it was a dud and I couldn’t go buy another one or I would probably never get home.","I found the assignment to be uninspiring, so I read a book about the life of Mother Teresa instead.", "I got mugged on the way home.", "I was kidnapped by terrorists and they only just let me go, so I didn't have time to do it.", "I didn't do it because I didn't want to add to my teacher's heavy workload.", "We ran out of toilet paper at my house last night, and my Dad isn't feeling so good. He grabbed it in a big rush and I haven't seen it since.", "You said do questions 1-10. You didn't say bring them in.", "My house is being fumigated and I don't want to go in there and suffocate just to get it.",  "My Dad accidentally put it in his briefcase and took it to work.", "My brother stole it in a fit of sibling rivalry. ", "Had to bail mom out of jail again.", "The lights in our house went out, and I had to burn it to get enough light to see the fuse box.", "A man came into my house last night and threatened to commit suicide. Well, it turns out he had a split-personality, so it was considered a hostage situation. It was a big commotion. Police, ambulance, everything! I can't believe you did not hear about it! That's why I couldn't get my homework done.", "I did my homework in my head, I didn’t know I was supposed to write it down. Then I forgot. Next time should I show my work?", "Since the clocks sprung foward over the weekend, I was unable to study sufficiently for the test, and as a result I did badly on the test."];
		
		var lateForWorkExcuse = ["Im sorry." , 
			"The train was delayed." , 
			"McDonalds came out with a new McFlurry so I had to try it. And by the way, I finished on the way here if you were wondering.", 
			"A zebra running on the highway was holding up traffic", 
			"My cat was stuck in the toilet.", 
			"A hole in the roof of my house let rain fall on the alarm clock making it malfunction.", 
			"I thought that halloween was a paid holiday", 
			"My wife is ill, so I need to get the children to school first.", 
			"My cat has gone missing.", 
			"The bus broke down.", "I am running late because I spent the night in urgent care after being beaten up and stabbed.", 
			"I will be late because I fell asleep on the train home and missed my stop, only to wake up three hours further down the track and not be able to get back the same evening.", 
			"My children locked me out of the house and wouldn’t let me in. I had to call a locksmith and get him to open the door, so I could retrieve the keys, get the children to school and then come to work.", 
			"I had a small car accident on the way to work or I had a flat tire.", 
			"My car/car part was broken or my car battery died so I couldn't start my car.", 
			"There was construction on the road so I had to take an alternative long way.", 
			"There was construction on the road so I had to take an alternative long way.", 
			"Somebody double parked my car.", 
			"My left turn signal was out so I had to make all right turns to get to work."];


//Read More: What Are the Best Excuses for Being Late to Work? | http://nj1015.com/the-best-excuses-for-being-late-to-work/?trackback=tsmclip"];
		
		var lateForSchoolExcuse = ["Im sorry" , 
			"Not my fault" , 
			"My mom did not wake me up today, so I thought that meant she was allowing me to skip school today.",
			 "I had a hardcore anxiety attack.", 
			 "I was stopped at a random police checkpoint.", 
			 "I had extreme back pain and was not able to get out of bed today.", 
			 "The police mistakenly raided my home.", 
			 "I lost power and my alarm clock was reset.", 
			 "I was in the bathroom", 
			 "I tripped going up the stairs", 
			 "I fell going down the stairs and had to pick up my stuff", 
			 "I bumped into somebody else and dropped everything", 
			 "I was talking to another teacher about a grade", 
			 "I forgot my textbook so I went back and got it", 
			 "I tripped over another teacher and had to pick up all 72 sharpened pencils they were carrying"];

		var didNotDoChores = ["" , "Not my job" , ""];

		
		if (choosenArrayType == 0){
			return homeWorkExcusesArray;
		}

		if (choosenArrayType == 1){
			return lateForWorkExcuse;
		}

		if (choosenArrayType == 2){
			return lateForSchoolExcuse;
		}

		if (choosenArrayType == 3){
			return didNotDoChores;
		}


		return choosenArrayType;
	};
	

	var getRandomExcuse = function(excusesArray) {

		debugger;

		//get the random excuse from the choosen excuses Array (type = Array)
		//return the excuse (type = string)

		var theRandomExcuse = excusesArray[Math.floor(Math.random()*excusesArray.length)];
	    return theRandomExcuse;

	
	};

	var putInSearchBox = function(excuse) {

		debugger;



	    $("#excuseBox").val(excuse);
	};



	var generateRandomExcuse = function() {

		debugger;
		
		

		var i = getIndexOfOptionsList();
		var theExcusesArray = getExcusesArray(i);
		var excuse = getRandomExcuse(theExcusesArray);
		putInSearchBox(excuse);
	};

	$("#randomButton").click(generateRandomExcuse);



});