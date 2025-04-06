const story=document.getElementById('story')
        const resett=document.getElementById('resett')
        const choices=document.getElementById('butt')
        const headd=document.getElementById("let")
        function option(choice){
            if(choice === "open"){
                story.textContent="Are you going to solve the puzzle and proceed, or take the secret route?"
                document.getElementById('pic').querySelector('img').src="6.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('riddle')">Answer The Riddle</button>
                                    <button id='choice' onclick="option('way')">secret path</button>`;
                                    
            }
            else if(choice==="riddle"){
                story.textContent="How can you enter the temple without touching any doors?"
                document.getElementById('pic').querySelector('img').src="5.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('knowledge')">Say I seek knowledge</button>
                                    <button id='choice' onclick="option('door')">push the door</button>`;
            }
            else if(choice==="way"){
                story.textContent="You crawl through the narrow passage and enter a dimly lit chamber.Suddenly, you notice a shadowy figure moving in the darkness. It looks like an ancient guardian!"
                document.getElementById('pic').querySelector('img').src="9.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('gurd')">Talk to guradian</button>
                                    <button id='choice' onclick="option('hide')">Hide The Pillar</button>`;
            }
            else if(choice==="knowledge"){
                story.textContent="You step inside the majestic temple hall.Glowing golden artifacts and intricate carvings surround you.Suddenly, you must make a big decision!"
                document.getElementById('pic').querySelector('img').src="7.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('treasure')">Take the treasure and leave</button>
                                    <button id='choice' onclick="option('explore')">stay and explore the further</button>`;
            }
            else if(choice==="door"){
                story.textContent="The temple shakes violently! The entrance slams shut, trapping you inside forever.📜 Game Over!"
                document.getElementById('pic').querySelector('img').src="10.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('over')">Restart</button>`;
            }
            else if(choice==="reset"){
                story.textContent="You arrive at the temple entrance. There are two paths ahead:"
                document.getElementById('pic').querySelector('img').src="gate.jpg"
                choices.innerHTML=`<button id='choice' onclick="option('open')">Open The Main Entrance</button>`
            }
            else if(choice==="gurd"){
                story.textContent="The guardian stares at you and speaks in a deep voice:Prove your wisdom. Answer correctly, or be trapped forever!"
                document.getElementById('pic').querySelector('img').src="5.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('lost')">Temple hides a lost treasure</button>
                                    <button id='choice' onclick="option('cursed')">The temple is the  cursed</button>`;
            }
            else if(choice==="hide"){
                story.textContent="You hide behind a pillar, but the floor suddenly collapses beneath you!📜 Game Over!"
                document.getElementById('pic').querySelector('img').src="19.jpg"
                choices.innerHTML=`<button id='choice' onclick="option('over')">Restart</button>`
            }
            else if(choice==="gamere"){
                story.textContent="You arrive at the temple entrance. There are two paths ahead:"
                document.getElementById('pic').querySelector('img').src="gate.jpg"
                choices.innerHTML=`<button id='choice' onclick="option('open')">Open The Main Entrance</button>`
            }
            else if(choice==="treasure"){
                story.textContent="You grab as many golden coins as you can and rush towards the exit.But suddenly, the temple begins to collapse!"
                document.getElementById('pic').querySelector('img').src="8.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('run')"> Take treasure Run towards the exit</button>
                                    <button id='choice' onclick="option('drop')">Drop the treasure and escape</button>`;
            }
            else if(choice==="explore"){
                story.textContent="You ignore the treasure and go deeper into the temple.Strange ancient symbols glow on the walls.You sense a mystical presence watching you..."
                document.getElementById('pic').querySelector('img').src="11.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('forward')">step forward bravely</button>
                                    <button id='choice' onclick="option('leaveyou')">Leave while you can</button>`;
            }
            else if(choice==="lost"){
                story.textContent="You are Lucky there are two treasure"
                document.getElementById('pic').querySelector('img').src="5.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('one')">pick up the one treasure</button>
                                    <button id='choice' onclick="option('one')">pick up the two treasure</button>`;
            }
            else if(choice==="one"){
                story.textContent="You are Lucky there are two treasure"
                document.getElementById('pic').querySelector('img').src="12.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('over')">Restart</button>`;
            }
            else if(choice==="over"){
                story.textContent="You arrive at the temple entrance. There are two paths ahead:"
                document.getElementById('pic').querySelector('img').src="gate.jpg"
                choices.innerHTML=`<button id='choice' onclick="option('open')">Open The Main Entrance</button>`
            }
            else if(choice==="cursed"){
                story.textContent="wrong way"
                document.getElementById('pic').querySelector('img').src="13.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('over')">Restart</button>`;
            }
            else if(choice==="run"){
                story.textContent="You run toward the exit, but the ground crumbles beneath you!📜 Game Over!"
                document.getElementById('pic').querySelector('img').src="14.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('over')">Game Over</button>`;
            }
            else if(choice==="drop"){
                story.textContent="🎉 Congratulations! You escaped, but without any riches."
                document.getElementById('pic').querySelector('img').src="15.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('over')">Restart</button>`;
            }
            else if(choice==="forward"){
                story.textContent="You enter a hidden chamber and see an ancient artifact glowing with energy.The temple’s true power lies within this object."
                document.getElementById('pic').querySelector('img').src="16.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('chan')">This room is filled gold diamond and platinum</button>
                                    <button id='choice' onclick="option('silence')">This is a unique treasure in the room</button>`;
            }
            else if(choice==="leaveyou"){
                story.textContent="🎉 Congratulations! You escaped, but without any riches."
                document.getElementById('pic').querySelector('img').src="15.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('over')">Restart</button>`;
            }
            else if(choice==="chan"){
                story.textContent="Room is filled with sandal and snakes!"
                document.getElementById('pic').querySelector('img').src="17.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('over')">Game Over</button>`;
            }
            else if(choice==="silence"){
                story.textContent="You were extremely daring, took the treasure, and escaped successfully! You have won—congratulations!"
                document.getElementById('pic').querySelector('img').src="18.jpg"
                choices.innerHTML=` <button id='choice' onclick="option('over')">You win </button>`;
            }

        }
        
        