
        // --- DATA ---
        const THEMES = {
            whatsapp: { appBg: '#efeae2', headerBg: '#008069', headerText: '#ffffff', bubbleBg: '#dcf8c6', bubbleText: '#111b21', bubbleRecvBg: '#ffffff', bubbleRecvText: '#111b21', accent: '#00a884', fixedText: '#00a884', radius: '0.5rem', font: "'Inter', sans-serif", icon: 'ph-whatsapp-logo', pattern: 'whatsapp', footerBg: '#f0f2f5' },
            imessage: { appBg: '#ffffff', headerBg: 'rgba(245,245,245,0.9)', headerText: '#000000', bubbleBg: '#3b82f6', bubbleText: '#ffffff', bubbleRecvBg: '#e5e5ea', bubbleRecvText: '#000000', accent: '#3b82f6', fixedText: '#fbbf24', radius: '1.2rem', font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif", icon: 'ph-chat-circle-dots', pattern: 'none', footerBg: '#ffffff' },
            twitter: { appBg: '#000000', headerBg: 'rgba(0,0,0,0.8)', headerText: '#ffffff', bubbleBg: '#1d9bf0', bubbleText: '#ffffff', bubbleRecvBg: '#2f3336', bubbleRecvText: '#e7e9ea', accent: '#1d9bf0', fixedText: '#1d9bf0', radius: '1rem', font: "'Inter', sans-serif", icon: 'ph-twitter-logo', pattern: 'none', darkMode: true, footerBg: '#000000', border: '1px solid #333' },
            gmail: { appBg: '#ffffff', headerBg: '#ffffff', headerText: '#444444', bubbleBg: '#ffffff', bubbleText: '#222222', bubbleRecvBg: '#f2f2f2', bubbleRecvText: '#222222', accent: '#ea4335', fixedText: '#ea4335', radius: '4px', font: "'Roboto', sans-serif", icon: 'ph-envelope-simple', pattern: 'none', footerBg: '#ffffff', shadow: '0 1px 2px rgba(0,0,0,0.2)' },
            discord: { appBg: '#36393f', headerBg: '#2f3136', headerText: '#ffffff', bubbleBg: '#5865F2', bubbleText: '#ffffff', bubbleRecvBg: '#2f3136', bubbleRecvText: '#dcddde', accent: '#5865F2', fixedText: '#5865F2', radius: '4px', font: "'Open Sans', sans-serif", icon: 'ph-discord-logo', pattern: 'none', darkMode: true, footerBg: '#40444b' },
            tinder: { appBg: '#ffffff', headerBg: 'linear-gradient(to right, #fd267a, #ff6036)', headerText: '#ffffff', bubbleBg: '#fd267a', bubbleText: '#ffffff', bubbleRecvBg: '#f0f2f4', bubbleRecvText: '#111', accent: '#fd267a', fixedText: '#fd267a', radius: '1.5rem', font: "'Inter', sans-serif", icon: 'ph-fire-fill', pattern: 'grid', footerBg: '#ffffff' }
        };

        const CONVERSATIONS = {
            whatsapp: {
                theme: 'whatsapp', name: "Mom",
                msgs: [
                    { type: 'recv', text: "Hi honey, are you coming home for Christmas?" },
                    { type: 'sent', text: "I am trying, but work is crazi.", mistakes: [{o:"crazi",c:"crazy",l:["crazy","hazy","lazy"]}] },
                    { type: 'recv', text: "You promised last year." },
                    { type: 'sent', text: "I know, I feel terible about it.", mistakes: [{o:"terible",c:"terrible",l:["terrible","tearable","treble"]}] },
                    { type: 'recv', text: "Your father misses you." },
                    { type: 'sent', text: "I mis him too, tell him that.", mistakes: [{o:"mis",c:"miss",l:["miss","mist","mix"]}] },
                    { type: 'recv', text: "Why don't you call him?" },
                    { type: 'sent', text: "I will call tomorow, I promis.", mistakes: [{o:"tomorow",c:"tomorrow",l:["tomorrow","marrow","sorrow"]},{o:"promis",c:"promise",l:["promise","miss","premise"]}] },
                    { type: 'recv', text: "We made your favorite pie." },
                    { type: 'sent', text: "Stop, you are making me hungri.", mistakes: [{o:"hungri",c:"hungry",l:["hungry","angry","hungary"]}] },
                    { type: 'recv', text: "Just take a few days off." },
                    { type: 'sent', text: "My boss is a tyrannt, I can't.", mistakes: [{o:"tyrannt",c:"tyrant",l:["tyrant","ant","rant"]}] },
                    { type: 'recv', text: "Quit then! Come home." },
                    { type: 'sent', text: "I need the mony for rent.", mistakes: [{o:"mony",c:"money",l:["money","many","pony"]}] },
                    { type: 'recv', text: "We can help with rent." },
                    { type: 'sent', text: "I want to be independant Mom.", mistakes: [{o:"independant",c:"independent",l:["independent","pendant","depend"]}] },
                    { type: 'recv', text: "Okay, but we worry." },
                    { type: 'sent', text: "Dont wory, I am doing fine.", mistakes: [{o:"wory",c:"worry",l:["worry","wary","sorry"]}] },
                    { type: 'recv', text: "Love you, be safe." },
                    { type: 'sent', text: "Love you to. Bye for now.", mistakes: [{o:"to",c:"too",l:["too","two","toe"]}] }
                ]
            },
            imessage: {
                theme: 'imessage', name: "Landlord",
                msgs: [
                    { type: 'recv', text: "We need to talk about the noise." },
                    { type: 'sent', text: "Was the musick too loud?", mistakes: [{o:"musick",c:"music",l:["music","sick","musk"]}] },
                    { type: 'recv', text: "Yes, at 2 AM on a Tuesday." },
                    { type: 'sent', text: "Sory, I lost track of tim.", mistakes: [{o:"Sory",c:"Sorry",l:["Sorry","sore","store"]},{o:"tim",c:"time",l:["time","tim","rim"]}] },
                    { type: 'recv', text: "The neighbors called the police." },
                    { type: 'sent', text: "That seems excesive for music.", mistakes: [{o:"excesive",c:"excessive",l:["excessive","access","exit"]}] },
                    { type: 'recv', text: "This is your second warning." },
                    { type: 'sent', text: "It wont hapen again, I swear.", mistakes: [{o:"wont",c:"won't",l:["won't","want","went"]},{o:"hapen",c:"happen",l:["happen","pen","happy"]}] },
                    { type: 'recv', text: "Also, rent is going up." },
                    { type: 'sent', text: "Wait, you cant do that legaly.", mistakes: [{o:"legaly",c:"legally",l:["legally","legal","regal"]}] },
                    { type: 'recv', text: "Read your lease agreement." },
                    { type: 'sent', text: "I did, it says fixed rat.", mistakes: [{o:"rat",c:"rate",l:["rate","rat","late"]}] },
                    { type: 'recv', text: "Clause 4B allows adjustments." },
                    { type: 'sent', text: "That is very sneeky of you.", mistakes: [{o:"sneeky",c:"sneaky",l:["sneaky","snake","seek"]}] },
                    { type: 'recv', text: "Pay up or move out." },
                    { type: 'sent', text: "I will contact a lawer first.", mistakes: [{o:"lawer",c:"lawyer",l:["lawyer","lower","layer"]}] },
                    { type: 'recv', text: "Go ahead, try me." },
                    { type: 'sent', text: "You are being unresonable.", mistakes: [{o:"unresonable",c:"unreasonable",l:["unreasonable","reason","able"]}] },
                    { type: 'recv', text: "See you in court." },
                    { type: 'sent', text: "Fine, I will see you ther.", mistakes: [{o:"ther",c:"there",l:["there","their","here"]}] }
                ]
            },
            twitter: {
                theme: 'twitter', name: "CryptoBro",
                msgs: [
                    { type: 'recv', text: "Bro, did you see $SCAM coin?" },
                    { type: 'sent', text: "No, I am done with crupto.", mistakes: [{o:"crupto",c:"crypto",l:["crypto","crypt","corrupt"]}] },
                    { type: 'recv', text: "It's going to the moon! 🚀" },
                    { type: 'sent', text: "That is what you said last tim.", mistakes: [{o:"tim",c:"time",l:["time","tim","rim"]}] },
                    { type: 'recv', text: "This time is different." },
                    { type: 'sent', text: "It is always a rug pul.", mistakes: [{o:"pul",c:"pull",l:["pull","pool","pill"]}] },
                    { type: 'recv', text: "Elon tweeted about it." },
                    { type: 'sent', text: "He just wants to pump the pric.", mistakes: [{o:"pric",c:"price",l:["price","prick","rice"]}] },
                    { type: 'recv', text: "You have paper hands lol." },
                    { type: 'sent', text: "I have empty pockts because of you.", mistakes: [{o:"pockts",c:"pockets",l:["pockets","packs","rockets"]}] },
                    { type: 'recv', text: "Look, it's up 500%!" },
                    { type: 'sent', text: "It will crash in an howr.", mistakes: [{o:"howr",c:"hour",l:["hour","how","our"]}] },
                    { type: 'recv', text: "You're just jealous." },
                    { type: 'sent', text: "I am just being realistik.", mistakes: [{o:"realistik",c:"realistic",l:["realistic","real","stick"]}] },
                    { type: 'recv', text: "Wait... it's dropping." },
                    { type: 'sent', text: "I told you it was a buble.", mistakes: [{o:"buble",c:"bubble",l:["bubble","bobble","rubble"]}] },
                    { type: 'recv', text: "Omg I lost everything." },
                    { type: 'sent', text: "You should have sold erlier.", mistakes: [{o:"erlier",c:"earlier",l:["earlier","early","air"]}] },
                    { type: 'recv', text: "Can I borrow $50?" },
                    { type: 'sent', text: "Not a chanse buddy.", mistakes: [{o:"chanse",c:"chance",l:["chance","change","chase"]}] }
                ]
            },
            gmail: {
                theme: 'gmail', name: "HR Dept",
                msgs: [
                    { type: 'recv', text: "Subject: Urgent Meeting" },
                    { type: 'sent', text: "Is this about the coffe incident?", mistakes: [{o:"coffe",c:"coffee",l:["coffee","cough","coffin"]}] },
                    { type: 'recv', text: "Yes, and the fire alarm." },
                    { type: 'sent', text: "That was an acident, I swear.", mistakes: [{o:"acident",c:"accident",l:["accident","dent","acid"]}] },
                    { type: 'recv', text: "You microwaved foil." },
                    { type: 'sent', text: "I wanted a hot sandwitch fast.", mistakes: [{o:"sandwitch",c:"sandwich",l:["sandwich","sand","witch"]}] },
                    { type: 'recv', text: "The breakroom is ruined." },
                    { type: 'sent', text: "I can pay for the dammage.", mistakes: [{o:"dammage",c:"damage",l:["damage","damn","age"]}] },
                    { type: 'recv', text: "It's $5000 in damages." },
                    { type: 'sent', text: "Okay, maybe I cant aford that.", mistakes: [{o:"aford",c:"afford",l:["afford","ford","effort"]}] },
                    { type: 'recv', text: "We are reviewing your contract." },
                    { type: 'sent', text: "Please dont fire me, I need job.", mistakes: [{o:"dont",c:"don't",l:["don't","dent","dot"]}] },
                    { type: 'recv', text: "This is your third strike." },
                    { type: 'sent', text: "I promiss to be more careful.", mistakes: [{o:"promiss",c:"promise",l:["promise","miss","kiss"]}] },
                    { type: 'recv', text: "Come to my office now." },
                    { type: 'sent', text: "Can I finish my repot first?", mistakes: [{o:"repot",c:"report",l:["report","pot","port"]}] },
                    { type: 'recv', text: "No. Now." },
                    { type: 'sent', text: "Okay, I am on my wae.", mistakes: [{o:"wae",c:"way",l:["way","weigh","why"]}] },
                    { type: 'recv', text: "Bring your badge." },
                    { type: 'sent', text: "That sounds ominus.", mistakes: [{o:"ominus",c:"ominous",l:["ominous","minus","bus"]}] }
                ]
            },
            discord: {
                theme: 'discord', name: "Raid Leader",
                msgs: [
                    { type: 'recv', text: "Where are you? Raid started." },
                    { type: 'sent', text: "My internet is down agan.", mistakes: [{o:"agan",c:"again",l:["again","gain","pain"]}] },
                    { type: 'recv', text: "Use your hotspot then." },
                    { type: 'sent', text: "I dont have much data lef.", mistakes: [{o:"lef",c:"left",l:["left","leaf","life"]}] },
                    { type: 'recv', text: "We need a healer." },
                    { type: 'sent', text: "Can't you find a replaceement?", mistakes: [{o:"replaceement",c:"replacement",l:["replacement","place","cement"]}] },
                    { type: 'recv', text: "At this hour? No." },
                    { type: 'sent', text: "Okay I will try to loggin.", mistakes: [{o:"loggin",c:"login",l:["login","log","gin"]}] },
                    { type: 'recv', text: "Hurry up." },
                    { type: 'sent', text: "It is patching, so sloow.", mistakes: [{o:"sloow",c:"slow",l:["slow","low","slew"]}] },
                    { type: 'recv', text: "We wiped again." },
                    { type: 'sent', text: "That is not my falt!", mistakes: [{o:"falt",c:"fault",l:["fault","fall","felt"]}] },
                    { type: 'recv', text: "You are the main healer." },
                    { type: 'sent', text: "I am loging in right now.", mistakes: [{o:"loging",c:"logging",l:["logging","log","gin"]}] },
                    { type: 'recv', text: "Too late, we kicked you." },
                    { type: 'sent', text: "Wow that is very rood.", mistakes: [{o:"rood",c:"rude",l:["rude","road","root"]}] },
                    { type: 'recv', text: "Git gud." },
                    { type: 'sent', text: "I am blocking you, goodbi.", mistakes: [{o:"goodbi",c:"goodbye",l:["goodbye","good","bye"]}] },
                    { type: 'recv', text: "Whatever." },
                    { type: 'sent', text: "Have fun losing without m.", mistakes: [{o:"m",c:"me",l:["me","my","mu"]}] }
                ]
            },
            tinder: {
                theme: 'tinder', name: "Date",
                msgs: [
                    { type: 'recv', text: "Your photos look different." },
                    { type: 'sent', text: "I used a filter, no big deel.", mistakes: [{o:"deel",c:"deal",l:["deal","dill","dell"]}] },
                    { type: 'recv', text: "You look 10 years older." },
                    { type: 'sent', text: "It is just bad lightng here.", mistakes: [{o:"lightng",c:"lighting",l:["lighting","light","lightning"]}] },
                    { type: 'recv', text: "And you're shorter." },
                    { type: 'sent', text: "I am sitting down actualy.", mistakes: [{o:"actualy",c:"actually",l:["actually","act","ally"]}] },
                    { type: 'recv', text: "You said you were a pilot." },
                    { type: 'sent', text: "I have a drone, same thng.", mistakes: [{o:"thng",c:"thing",l:["thing","thong","tang"]}] },
                    { type: 'recv', text: "This date is over." },
                    { type: 'sent', text: "Wait dont be so hasty.", mistakes: [{o:"hasty",c:"hasty",l:["hasty","pasty","tasty"]}] },
                    { type: 'recv', text: "You lied about everything." },
                    { type: 'sent', text: "I just embelished a little.", mistakes: [{o:"embelished",c:"embellished",l:["embellished","bell","shed"]}] },
                    { type: 'recv', text: "I'm leaving." },
                    { type: 'sent', text: "But I ordered apetizers!", mistakes: [{o:"apetizers",c:"appetizers",l:["appetizers","petite","tizer"]}] },
                    { type: 'recv', text: "Eat them yourself." },
                    { type: 'sent', text: "Fine, more for me then.", mistakes: [{o:"then",c:"then",l:["then","than","ten"]}] },
                    { type: 'recv', text: "Lose my number." },
                    { type: 'sent', text: "Your los, I am a catch.", mistakes: [{o:"los",c:"loss",l:["loss","lost","less"]}] },
                    { type: 'recv', text: "Bye." },
                    { type: 'sent', text: "Have a nice lif alone.", mistakes: [{o:"lif",c:"life",l:["life","lift","if"]}] }
                ]
            }
        };

        // --- AUDIO SYSTEM ---
        const AudioSys = {
            ctx: null,
            isMuted: false,
            musicTimer: null,
            init() { if(!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)(); },
            toggleMute() {
                this.isMuted = !this.isMuted;
                const btn = document.getElementById('mute-btn');
                if (btn) btn.innerText = this.isMuted ? "UNMUTE SOUND" : "MUTE SOUND";
                if (this.isMuted) this.stopMusic();
                else if (Game.state.active && !Game.state.paused) this.playMusic();
            },
            playTone(type, f, d, vol=0.1) {
                if(!this.ctx || this.isMuted) return;
                const o = this.ctx.createOscillator();
                const g = this.ctx.createGain();
                o.type = type; o.frequency.value = f;
                g.gain.setValueAtTime(vol, this.ctx.currentTime);
                g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + d);
                o.connect(g); g.connect(this.ctx.destination);
                o.start(); o.stop(this.ctx.currentTime + d);
            },
            playClick() { this.playTone('sine', 800, 0.05, 0.1); },
            playRecv() { this.playTone('sine', 600, 0.1, 0.1); setTimeout(()=>this.playTone('sine', 800, 0.1, 0.1), 100); },
            playMusic() {
                if (this.isMuted || !this.ctx || this.musicTimer) return;
                // Simple bass groove
                const loop = () => {
                    if (!Game.state.active || Game.state.paused) return;
                    // Bass
                    this.playTone('triangle', 110, 0.2, 0.05); // A2
                    setTimeout(() => { if(Game.state.active && !Game.state.paused) this.playTone('triangle', 110, 0.2, 0.05) }, 250);
                    setTimeout(() => { if(Game.state.active && !Game.state.paused) this.playTone('triangle', 164.8, 0.2, 0.05) }, 500); // E3
                    setTimeout(() => { if(Game.state.active && !Game.state.paused) this.playTone('triangle', 130.8, 0.2, 0.05) }, 750); // C3
                    
                    this.musicTimer = setTimeout(loop, 1000);
                }
                loop();
            },
            stopMusic() {
                if (this.musicTimer) { clearTimeout(this.musicTimer); this.musicTimer = null; }
            }
        };

        // --- GAME LOGIC ---
        const Boss = {
            elem: document.getElementById('boss'),
            state(state) {
                this.elem.classList.remove('typing', 'angry', 'success');
                if (state) this.elem.classList.add(state);
            }
        }

        const UI = {
            root: document.documentElement.style,
            screens: { 
                menu: document.getElementById('screen-menu'), 
                time: document.getElementById('screen-time'),
                char: document.getElementById('screen-char'),
                game: document.getElementById('screen-game'), 
                result: document.getElementById('screen-result'),
                pause: document.getElementById('screen-pause')
            },
            layout: document.getElementById('game-layout-container'),
            elems: {
                timer: document.getElementById('timer'),
                score: document.getElementById('score'),
                msgBox: document.getElementById('message-container'),
                header: document.getElementById('app-header'),
                sendBtn: document.getElementById('send-btn'),
                popup: document.getElementById('popup'),
                feedback: document.getElementById('feedback'),
                // ctxMsg: document.getElementById('context-msg'), // REMOVED to fix error
                contact: document.getElementById('contact-name'),
                avatarIcon: document.getElementById('avatar-icon'),
                status: document.getElementById('status-indicator'),
                chatArea: document.getElementById('chat-scroll-area')
            },
            showScreen(id) { 
                const key = id.replace('screen-', ''); // Derived key
                
                // Handle Full Screen vs Game Layers
                if (['menu', 'time', 'char'].includes(key)) {
                     // Show Full Screen Layer
                     this.layout.classList.remove('visible');
                     Object.values(this.screens).forEach(s => {
                         if(s && s.classList.contains('fullscreen-pane')) s.classList.remove('active');
                     });
                     if(this.screens[key]) this.screens[key].classList.add('active');
                } else {
                    // Show Game Layer
                    this.layout.classList.add('visible');
                    // Hide all fullscreen panes
                     Object.values(this.screens).forEach(s => {
                         if(s && s.classList.contains('fullscreen-pane')) s.classList.remove('active');
                     });
                    
                    // Handle inner-phone screens
                    ['game', 'result'].forEach(k => {
                        const s = this.screens[k];
                        if(s) s.classList.remove('active');
                    });
                    
                    if(key !== 'pause') this.screens.pause.classList.add('hidden');
                    
                    if (this.screens[key] && !this.screens[key].classList.contains('fullscreen-pane')) {
                        this.screens[key].classList.add('active');
                    }
                }
            },
            togglePauseScreen(show) {
                if(show) this.screens.pause.classList.remove('hidden');
                else this.screens.pause.classList.add('hidden');
            },
            applyTheme(key) {
                const t = THEMES[key] || THEMES.imessage;
                const r = this.root;
                const g = document.getElementById('screen-game');
                r.setProperty('--app-bg', t.appBg);
                r.setProperty('--header-bg', t.headerBg);
                r.setProperty('--header-text', t.headerText);
                r.setProperty('--bubble-bg', t.bubbleBg);
                r.setProperty('--bubble-text', t.bubbleText);
                r.setProperty('--bubble-recv-bg', t.bubbleRecvBg);
                r.setProperty('--bubble-recv-text', t.bubbleRecvText);
                r.setProperty('--accent', t.accent);
                r.setProperty('--fixed-text', t.fixedText || t.accent);
                r.setProperty('--font-main', t.font);
                r.setProperty('--border-radius', t.radius);
                r.setProperty('--shadow', t.shadow || 'none');
                g.className = `screen active app-view ${t.darkMode ? 'dark-mode' : ''} ${t.pattern === 'whatsapp' ? 'pattern-whatsapp' : ''} ${t.pattern === 'grid' ? 'pattern-grid' : ''}`;
                this.elems.avatarIcon.className = `ph-fill ${t.icon}`;
                this.elems.avatarIcon.style.color = t.darkMode ? '#fff' : t.accent;
                document.getElementById('footer').style.background = t.footerBg;
                if (t.border) this.elems.msgBox.style.border = t.border; else this.elems.msgBox.style.border = 'none';
            }
        };

        const Game = {
            state: { score: 0, msgs: 0, time: 20, initialTime: 20, active: false, paused: false, conversation: [], msgIndex: 0, currentApp: null },
            loop: null, typeLoop: null, currentMsg: null, mistakeCount: 0, mistakesFixed: 0, isTyping: false,
            
            // NAVIGATION
            goToTimeSelect() {
                AudioSys.init();
                AudioSys.playClick();
                if(AudioSys.ctx.state === 'suspended') AudioSys.ctx.resume();
                UI.showScreen('screen-time');
            },

            selectTime(t) {
                AudioSys.playClick();
                this.state.initialTime = t;
                this.goToCharSelect();
            },

            goToCharSelect() {
                AudioSys.playClick();
                UI.showScreen('screen-char');
            },

            quitToMenu() {
                AudioSys.playClick();
                this.endGameLogic();
                UI.showScreen('screen-menu');
            },

            togglePause() {
                AudioSys.playClick();
                if (!this.state.active) return;
                this.state.paused = !this.state.paused;
                if (this.state.paused) {
                    UI.togglePauseScreen(true);
                    AudioSys.stopMusic();
                } else {
                    UI.togglePauseScreen(false);
                    AudioSys.playMusic();
                }
            },

            // --- PROCEDURAL ENVIRONMENT GENERATION ---
            applyRandomEnvironment() {
                const r = document.documentElement.style;
                
                // Helper for random int
                const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
                // Helper for random color component
                const randCol = () => rand(0, 255);
                
                // 1. Generate Wall/Floor Tone (Cool vs Warm)
                const hue = rand(0, 360);
                const sat = rand(10, 30); // Low saturation for walls
                
                // Walls: Light, Floor: Darker
                const wallTop = `hsl(${hue}, ${sat}%, ${rand(85, 95)}%)`;
                const wallBtm = `hsl(${hue}, ${sat}%, ${rand(70, 80)}%)`;
                const floorTop = `hsl(${hue}, ${sat + 10}%, ${rand(30, 40)}%)`;
                const floorBtm = `hsl(${hue}, ${sat + 10}%, ${rand(15, 25)}%)`;

                // 2. Desk Wood Type
                // Categories: Red (Mahogany), Yellow (Pine), Brown (Walnut), Grey (Modern)
                const woodType = rand(0, 3); 
                let deskHue, deskSat, deskLight;
                
                if(woodType === 0) { // Reddish
                    deskHue = rand(0, 20); deskSat = rand(40, 60); deskLight = rand(25, 45);
                } else if(woodType === 1) { // Yellow/Orange
                    deskHue = rand(25, 45); deskSat = rand(50, 70); deskLight = rand(40, 60);
                } else if(woodType === 2) { // Brown
                    deskHue = rand(15, 35); deskSat = rand(30, 50); deskLight = rand(20, 35);
                } else { // Modern Grey/Black
                    deskHue = 0; deskSat = 0; deskLight = rand(20, 80);
                }

                const deskMain = `hsl(${deskHue}, ${deskSat}%, ${deskLight}%)`;
                const deskDark = `hsl(${deskHue}, ${deskSat}%, ${Math.max(0, deskLight - 15)}%)`;
                const deskShadow = `hsl(${deskHue}, ${deskSat}%, ${Math.max(0, deskLight - 25)}%)`;

                // 3. Desk Mat Color (Contrasting)
                const matH = (deskHue + 180) % 360;
                const matColor = `hsl(${matH}, 40%, 20%)`;

                // 4. Sky Color (Time of day)
                const timeOfDay = rand(0, 2);
                let skyColor;
                if(timeOfDay === 0) skyColor = '#93c5fd'; // Day
                else if(timeOfDay === 1) skyColor = '#1e3a8a'; // Night
                else skyColor = '#fdba74'; // Sunset

                // Apply Variables
                r.setProperty('--wall-top', wallTop);
                r.setProperty('--wall-btm', wallBtm);
                r.setProperty('--floor-top', floorTop);
                r.setProperty('--floor-btm', floorBtm);
                r.setProperty('--desk-main', deskMain);
                r.setProperty('--desk-dark', deskDark);
                r.setProperty('--desk-shadow', deskShadow);
                r.setProperty('--mat-color', matColor);
                r.setProperty('--sky-color', skyColor);
            },

            startGame() {
                AudioSys.playClick();
                
                this.applyRandomEnvironment(); // Apply procedural background theme

                // Select random app conversation
                const apps = Object.keys(CONVERSATIONS);
                const randomAppKey = apps[Math.floor(Math.random() * apps.length)];
                const appData = CONVERSATIONS[randomAppKey];

                this.state = { 
                    score: 0, msgs: 0, 
                    time: this.state.initialTime, 
                    initialTime: this.state.initialTime, 
                    active: true, paused: false,
                    currentApp: randomAppKey,
                    conversation: appData.msgs,
                    msgIndex: 0
                };
                
                // Clear chat
                const spacer = document.createElement('div');
                spacer.className = "flex-1";
                UI.elems.chatArea.innerHTML = '';
                UI.elems.chatArea.appendChild(spacer);
                
                UI.showScreen('screen-game');
                UI.applyTheme(appData.theme);
                
                UI.elems.contact.innerText = appData.name;
                // UI.elems.ctxMsg.innerText = "Conversation Started"; // REMOVED
                UI.elems.score.innerText = 0;

                AudioSys.playMusic();
                if(this.loop) clearInterval(this.loop);
                this.loop = setInterval(() => this.tick(), 100);

                // Start conversation flow
                this.processNextMsg();
            },

            processNextMsg() {
                if (!this.state.active || this.state.paused) return;
                
                if (this.state.msgIndex >= this.state.conversation.length) {
                    // Conversation over - give bonus or end?
                    // Let's just end it as a "win" if time remains, or keep timer running?
                    // User said "1 set of 10 sent and 10 receive".
                    // If they finish early, maybe big bonus points?
                    this.state.score += Math.floor(this.state.time * 100);
                    this.end();
                    return;
                }

                const msg = this.state.conversation[this.state.msgIndex];

                if (msg.type === 'recv') {
                    // Show received message bubble
                    UI.elems.msgBox.classList.remove('active');
                    UI.elems.status.innerText = "Online";
                    UI.elems.status.classList.remove('animate-pulse');
                    UI.elems.sendBtn.style.opacity = '0.5';

                    setTimeout(() => {
                        if(!this.state.active) return;
                        this.addChatBubble(msg.text, 'recv');
                        AudioSys.playRecv();
                        this.state.msgIndex++;
                        setTimeout(() => this.processNextMsg(), 1000); // Wait before next action
                    }, 500);
                } else {
                    // 'sent' message - Player must type
                    this.startTypingLevel(msg);
                }
            },

            startTypingLevel(msg) {
                this.currentMsg = msg;
                this.mistakeCount = 0;
                this.mistakesFixed = 0;

                UI.elems.sendBtn.innerHTML = `<span>Intercept</span> <i class="ph-bold ph-shield-check"></i>`;
                UI.elems.sendBtn.style.background = 'white';
                UI.elems.sendBtn.style.color = '#94a3b8';
                UI.elems.sendBtn.style.cursor = 'not-allowed';
                UI.elems.sendBtn.style.opacity = '1';

                UI.elems.msgBox.innerHTML = '';
                UI.elems.msgBox.classList.add('active'); // Show typing box
                UI.elems.msgBox.classList.add('typing-cursor');
                UI.elems.status.innerText = "BOSS TYPING...";
                UI.elems.status.classList.add('animate-pulse');
                this.isTyping = true;
                
                const words = msg.text.split(/(\s+)/);
                let wordIndex = 0;
                const speed = 40; 
                
                if (this.typeLoop) clearInterval(this.typeLoop);
                
                this.typeLoop = setInterval(() => {
                    if (!this.state.active || this.state.paused) return;
                    
                    if (wordIndex < words.length) {
                        const w = words[wordIndex];
                        const span = document.createElement('span');
                        span.innerText = w;
                        const clean = w.trim().replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g,"");
                        const err = msg.mistakes ? msg.mistakes.find(m => m.o === clean) : null;
                        if (err && w.trim().length > 0) {
                            this.mistakeCount++;
                            span.className = 'mistake-word';
                            span.onclick = (e) => this.showPopup(e, span, err);
                        }
                        UI.elems.msgBox.appendChild(span);
                        // Auto scroll if typing fills box? 
                        // The box is fixed height, overflow visible.
                        if (w.trim().length > 0) AudioSys.playClick();
                        wordIndex++;
                    } else {
                        clearInterval(this.typeLoop);
                        this.isTyping = false;
                        UI.elems.msgBox.classList.remove('typing-cursor');
                        // Allow sending if no mistakes
                        if (this.mistakeCount === 0) {
                            // Instant completion if no mistakes generated (rare/tutorial)
                             this.completeMsg();
                        } else {
                            UI.elems.status.innerText = "Drafting paused";
                            UI.elems.status.classList.remove('animate-pulse');
                        }
                    }
                }, speed);
            },

            addChatBubble(text, type) {
                const bubble = document.createElement('div');
                bubble.className = `chat-bubble ${type}`;
                bubble.innerText = text;
                // Insert before the typing area spacer or just append to container
                // The container has a flex-1 spacer at the top. We append after it.
                UI.elems.chatArea.appendChild(bubble);
                UI.elems.chatArea.scrollTop = UI.elems.chatArea.scrollHeight;
            },

            tick() {
                if (!this.state.active || this.state.paused) return;
                
                this.state.time -= 0.1;
                UI.elems.timer.innerText = Math.max(0, this.state.time).toFixed(1);
                document.getElementById('progress-bar').style.width = (this.state.time/this.state.initialTime)*100 + "%";
                
                if (this.isTyping) Boss.state('typing');
                else if (this.state.time <= 5) {
                    Boss.state('angry');
                    UI.elems.sendBtn.classList.add('animate-shake');
                    UI.elems.sendBtn.style.color = '#ef4444';
                    UI.elems.sendBtn.innerText = "HE'S GONNA SEND IT!";
                } else {
                    Boss.state('');
                    UI.elems.sendBtn.classList.remove('animate-shake');
                }
                
                if (this.state.time <= 0) this.end();
            },

            showPopup(e, span, err) {
                if(this.state.paused) return;
                e.stopPropagation();
                if(span.classList.contains('word-fixed')) return;
                AudioSys.playTone('sine', 400, 0.1);
                const pop = UI.elems.popup;
                pop.innerHTML = '';
                [...err.l].sort(()=>Math.random()-.5).forEach(opt => {
                    const btn = document.createElement('button');
                    btn.className = "w-full text-left px-4 py-3 hover:bg-slate-100 text-slate-800 text-sm font-semibold border-b border-slate-100 last:border-0";
                    btn.innerText = opt;
                    btn.onclick = () => {
                        if(opt === err.c) {
                            AudioSys.playTone('sine', 800, 0.1);
                            const original = span.innerText;
                            const prefix = original.match(/^\W*/)[0] || '';
                            const suffix = original.match(/\W*$/)[0] || '';
                            span.innerText = prefix + opt + suffix;
                            span.className = 'word-fixed';
                            this.state.score += 100;
                            UI.elems.score.innerText = this.state.score;
                            this.mistakesFixed++;
                            if (this.mistakesFixed >= this.mistakeCount && !this.isTyping) {
                                this.completeMsg();
                            }
                        } else {
                            AudioSys.playTone('sawtooth', 150, 0.2);
                            this.state.score = Math.max(0, this.state.score - 50);
                            UI.elems.score.innerText = this.state.score;
                            span.classList.add('animate-shake');
                            setTimeout(()=>span.classList.remove('animate-shake'), 300);
                        }
                        pop.classList.add('hidden');
                    };
                    pop.appendChild(btn);
                });
                pop.classList.remove('hidden');
                const rect = span.getBoundingClientRect();
                const container = document.getElementById('screen-game').getBoundingClientRect();
                let left = rect.left - container.left;
                let top = rect.top - container.top - 120;
                if(left < 10) left = 10;
                if(left > container.width - 150) left = container.width - 150;
                if(top < 60) top = rect.bottom - container.top + 10;
                pop.style.left = left + 'px';
                pop.style.top = top + 'px';
                setTimeout(() => document.addEventListener('click', () => pop.classList.add('hidden'), {once:true}), 10);
            },

            completeMsg() {
                // Get the fixed text content
                const fixedText = UI.elems.msgBox.innerText;

                this.state.score += 500;
                this.state.msgs++;
                // Removed time bonus per user request
                // this.state.time = Math.min(this.state.initialTime, this.state.time + 5);
                AudioSys.playTone('triangle', 600, 0.1);
                Boss.state('success');
                
                // Visual feedback
                UI.elems.sendBtn.style.background = 'var(--accent)';
                UI.elems.sendBtn.style.color = 'white';
                UI.elems.sendBtn.innerHTML = `<span>SAFE!</span> <i class="ph-bold ph-check"></i>`;
                UI.elems.feedback.classList.remove('opacity-0', 'scale-50');
                UI.elems.feedback.classList.add('opacity-100', 'scale-100', 'rotate-[-6deg]');
                
                setTimeout(() => {
                    // Commit to chat history
                    this.addChatBubble(fixedText, 'sent');
                    
                    // Reset UI
                    UI.elems.msgBox.innerHTML = '';
                    UI.elems.msgBox.classList.remove('active');
                    UI.elems.feedback.classList.remove('opacity-100', 'scale-100', 'rotate-[-6deg]');
                    UI.elems.feedback.classList.add('opacity-0', 'scale-50');
                    
                    // Next
                    this.state.msgIndex++;
                    if (this.state.active && !this.state.paused) this.processNextMsg();
                }, 1000);
            },

            endGameLogic() {
                this.state.active = false;
                if(this.loop) clearInterval(this.loop);
                if(this.typeLoop) clearInterval(this.typeLoop);
                AudioSys.stopMusic();
                Boss.state('angry');
            },

            end() {
                this.endGameLogic();
                UI.showScreen('screen-result');
                const s = this.state.score;
                
                // SCORING ADJUSTMENT: Scale criteria based on duration
                // Base thresholds are calibrated for 20s.
                // Multiplier = initialTime / 20.
                const multiplier = this.state.initialTime / 20;

                let grade = 'F', title = 'Disaster', icon = '💀';
                
                if(s > 5000 * multiplier) { grade = 'S'; title = 'Godlike'; icon = '👑'; }
                else if(s > 3000 * multiplier) { grade = 'A'; title = 'Promoted'; icon = '🔥'; }
                else if(s > 1500 * multiplier) { grade = 'B'; title = 'Passable'; icon = '👍'; }
                else if(s > 500 * multiplier) { grade = 'C'; title = 'Risky'; icon = '😬'; }
                
                document.getElementById('rank-grade').innerText = grade;
                document.getElementById('rank-title').innerText = title;
                document.getElementById('rank-icon').innerText = icon;
                document.getElementById('final-score').innerText = s;
                document.getElementById('final-count').innerText = this.state.msgs;
            }
        };
