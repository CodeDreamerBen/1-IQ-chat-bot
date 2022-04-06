var username = document.getElementById("username").value
			document.addEventListener("keydown", e => {
				if(e.key == "Enter") {
					main()
				}
			})
			var dataset = [];
			function botMessage() {
				var prompts = ["hi", "ok yea?", "dude, idk", "I don't know what u talking", "huh?", "???", "I just don't get it", "I see", "… I love it!", "HAHAHAHA", "I don't know why I'm here", "I just know how to sing rickroll", "I'm a dumby bot", "I don't care", "What?", "Totally don't understand", "No way…", "Bye, nap time", "Ok?", "Ok, so?"]
				var messageToSend = prompts[Math.floor(Math.random() * prompts.length)]
				dataset.push(messageToSend)
				d3.select("messages").selectAll("p")
					.data(dataset)
					.enter()
					.append("p")
					.text((d) => "Bot: " + d)
				scrollBy(0, 100)
			}
			function main() {
				username = document.getElementById("username").value
				var target = document.getElementById("text").value
				dataset.push(target)
				document.getElementById("text").value = ""
				d3.select("messages").selectAll("p")
					.data(dataset)
					.enter()
					.append("p")
					.text((d) => username + ": " + d)
				scrollBy(0, 100)
				setTimeout(botMessage, 1500)
			}
			function generateUsername() {
				var first = ["Rich", "Big", "Bad", "Cool", "Hot", "Spicy", "Calm", "Ticking", "Annoying", "Handsome", "Amazing"];
				var second = ["Honest", "Hardworking", "Poor", "Wise", "Lazy", "Red", "Refreshing", "Fast", "Mad", "Skinny", "Speedy"];
				var third = ["Paint", "Bee", "Creature", "Penguin", "Owl", "Cow", "Boat", "Clock", "Water", "Bear", "Building"];
				var firstL = first[Math.floor(Math.random() * first.length)]
				var secondL = second[Math.floor(Math.random() * second.length)]
				var thirdL = third[Math.floor(Math.random() * third.length)]
				document.getElementById("username").value = firstL + secondL + thirdL
				username = document.getElementById("username")
			}