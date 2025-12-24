        // --- CONSTANTS ---
        const THEMES = {
            whatsapp: { appBg: '#efeae2', headerBg: '#008069', headerText: '#ffffff', bubbleBg: '#dcf8c6', bubbleText: '#111b21', bubbleRecvBg: '#ffffff', bubbleRecvText: '#111b21', accent: '#00a884', fixedText: '#008069', radius: '0.5rem', font: "'Inter', sans-serif", icon: 'ph-whatsapp-logo', pattern: 'whatsapp', footerBg: '#f0f2f5' },
            imessage: { appBg: '#ffffff', headerBg: 'rgba(245,245,245,0.9)', headerText: '#000000', bubbleBg: '#3b82f6', bubbleText: '#ffffff', bubbleRecvBg: '#e5e5ea', bubbleRecvText: '#000000', accent: '#3b82f6', fixedText: '#fbbf24', radius: '1.2rem', font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif", icon: 'ph-chat-circle-dots', pattern: 'none', footerBg: '#ffffff' },
            twitter: { appBg: '#000000', headerBg: 'rgba(0,0,0,0.8)', headerText: '#ffffff', bubbleBg: '#1d9bf0', bubbleText: '#ffffff', bubbleRecvBg: '#2f3336', bubbleRecvText: '#e7e9ea', accent: '#1d9bf0', fixedText: '#ffffff', radius: '1rem', font: "'Inter', sans-serif", icon: 'ph-twitter-logo', pattern: 'none', darkMode: true, footerBg: '#000000', border: '1px solid #333' },
            discord: { appBg: '#36393f', headerBg: '#2f3136', headerText: '#ffffff', bubbleBg: '#5865F2', bubbleText: '#ffffff', bubbleRecvBg: '#2f3136', bubbleRecvText: '#dcddde', accent: '#5865F2', fixedText: '#ffffff', radius: '4px', font: "'Open Sans', sans-serif", icon: 'ph-discord-logo', pattern: 'none', darkMode: true, footerBg: '#40444b' },
            tinder: { appBg: '#ffffff', headerBg: 'linear-gradient(to right, #fd267a, #ff6036)', headerText: '#ffffff', bubbleBg: '#fd267a', bubbleText: '#ffffff', bubbleRecvBg: '#f0f2f4', bubbleRecvText: '#111', accent: '#fd267a', fixedText: '#ffffff', radius: '1.5rem', font: "'Inter', sans-serif", icon: 'ph-fire-fill', pattern: 'grid', footerBg: '#ffffff' }
        };

        // --- HISTORY MANAGER ---
        const HistoryManager = {
            key: 'saveMeRunHistory_v2',
            get() {
                try { return JSON.parse(localStorage.getItem(this.key)) || []; } 
                catch(e) { return []; }
            },
            add(runData) {
                const history = this.get();
                history.push(runData);
                // Keep last 3 runs
                if (history.length > 3) history.shift();
                localStorage.setItem(this.key, JSON.stringify(history));
            },
            getLast() {
                const h = this.get();
                return h.length > 0 ? h[h.length - 1] : null;
            }
        };

const CONVERSATIONS_DATA = {
    boss: {
        whatsapp: [
            { id: 'wife1', title: 'Late Dinner', msgs: [
                {type:'recv',text:"When are you finally coming home?"},
                {type:'sent',text:"I am curently stuk at the office dealing with a crisis.",mistakes:[{o:"curently",c:"currently",l:["currently","current"]},{o:"stuk",c:"stuck",l:["stuck","struck"]}]},
                {type:'recv',text:"Again? You promised to be early."},
                {type:'sent',text:"The bord meetng ran way over time and everyone is argueing.",mistakes:[{o:"bord",c:"board",l:["board","bored"]},{o:"meetng",c:"meeting",l:["meeting","meat"]},{o:"argueing",c:"arguing",l:["arguing","argue"]}]},
                {type:'recv',text:"Well, your dinner is cold now."}, 
                {type:'sent',text:"I am so sory honey, please save me a smal plat in the fridge.",mistakes:[{o:"sory",c:"sorry",l:["sorry","sore"]},{o:"smal",c:"small",l:["small","smell"]},{o:"plat",c:"plate",l:["plate","plot"]}]},
                {type:'recv',text:"I made your favorite lasagna."},
                {type:'sent',text:"Is it the spiccy one? I am absolutly starvng right now.",mistakes:[{o:"spiccy",c:"spicy",l:["spicy","spice"]},{o:"absolutly",c:"absolutely",l:["absolutely","absolute"]},{o:"starvng",c:"starving",l:["starving","staring"]}]},
                {type:'recv',text:"Yes. Hurry up before I eat it all."},
                {type:'sent',text:"I am leavng the building in five minits, see you son.",mistakes:[{o:"leavng",c:"leaving",l:["leaving","living"]},{o:"minits",c:"minutes",l:["minutes","mints"]},{o:"son",c:"soon",l:["soon","sun"]}]},
                {type:'recv',text:"Traffic looks bad on the GPS."},
                {type:'sent',text:"I know, I will tak the shortcut through the tunel.",mistakes:[{o:"tak",c:"take",l:["take","talk"]},{o:"tunel",c:"tunnel",l:["tunnel","tune"]}]},
                {type:'recv',text:"The kids miss you a lot."},
                {type:'sent',text:"Tell them I luv them and I will read a story tonite.",mistakes:[{o:"luv",c:"love",l:["love","live"]},{o:"tonite",c:"tonight",l:["tonight","nite"]}]},
                {type:'recv',text:"Don't wake them up when you enter."},
                {type:'sent',text:"I promise I will be quiet as a litlle mous.",mistakes:[{o:"litlle",c:"little",l:["little","litter"]},{o:"mous",c:"mouse",l:["mouse","moss"]}]},
                {type:'recv',text:"Did you call your mom back?"},
                {type:'sent',text:"No, I totaly forgot again, my memry is terrible.",mistakes:[{o:"totaly",c:"totally",l:["totally","total"]},{o:"memry",c:"memory",l:["memory","merry"]}]},
                {type:'recv',text:"She called twice today."},
                {type:'sent',text:"I will call her tomorow morning befor work.",mistakes:[{o:"tomorow",c:"tomorrow",l:["tomorrow","marrow"]},{o:"befor",c:"before",l:["before","fore"]}]},
                {type:'recv',text:"Bring milk on your way."},
                {type:'sent',text:"Okey, I am stopping at the corner stor.",mistakes:[{o:"okeh",c:"okay",l:["okay","key"]},{o:"stor",c:"store",l:["store","star"]}]},
                {type:'recv',text:"Drive safe please."},
                {type:'sent',text:"I will be carefull. See you in a bitt.",mistakes:[{o:"carefull",c:"careful",l:["careful","care"]},{o:"bitt",c:"bit",l:["bit","bat"]}]}
            ]},
            { id: 'contractor', title: 'Renovation', msgs: [
                {type:'recv',text:"The floor tiles have arrived."},
                {type:'sent',text:"Are they the dark gray ones I selectd last week?",mistakes:[{o:"selectd",c:"selected",l:["selected","elect"]}]},
                {type:'recv',text:"Actually they look a bit lighter."},
                {type:'sent',text:"That is a big probem, I need things to be exact.",mistakes:[{o:"probem",c:"problem",l:["problem","probe"]}]},
                {type:'recv',text:"I can call the supplier."},
                {type:'sent',text:"Please do it now, I wont tolerate any more delays.",mistakes:[{o:"wont",c:"won't",l:["won't","want"]}]},
                {type:'recv',text:"He says he is out of office."},
                {type:'sent',text:"Then call his manager, this is extremly unprofeshional.",mistakes:[{o:"extremly",c:"extremely",l:["extremely","entry"]},{o:"unprofeshional",c:"unprofessional",l:["unprofessional","professor"]}]},
                {type:'recv',text:"I'll try his mobile."},
                {type:'sent',text:"Let me know the outcom by the end of the day.",mistakes:[{o:"outcom",c:"outcome",l:["outcome","come"]}]},
                {type:'recv',text:"I will send an update shortly."},
                {type:'sent',text:"Good, the budget is already over the limit.",mistakes:[{o:"already",c:"already",l:["already","ready"]}]},
                {type:'recv',text:"I'm doing my best."},
                {type:'sent',text:"I need results, not excuses for the bord members.",mistakes:[{o:"bord",c:"board",l:["board","bird"]}]},
                {type:'recv',text:"I'll get it sorted."},
                {type:'sent',text:"Make sur the grout matchS the tile color.",mistakes:[{o:"sur",c:"sure",l:["sure","sir"]},{o:"matchS",c:"matches",l:["matches","maths"]}]},
                {type:'recv',text:"Will do."},
                {type:'sent',text:"I expect a ful report tomorow morning.",mistakes:[{o:"ful",c:"full",l:["full","fuel"]},{o:"tomorow",c:"tomorrow",l:["tomorrow","row"]}]},
                {type:'recv',text:"Talk then."},
                {type:'sent',text:"Goodbye, I am headng into another meetng.",mistakes:[{o:"headng",c:"heading",l:["heading","head"]},{o:"meetng",c:"meeting",l:["meeting","meet"]}]}
            ]}
        ],
        imessage: [
            { id: 'hr_manager', title: 'Hiring', msgs: [
                {type:'recv',text:"The candidate is waiting in the lobby."},
                {type:'sent',text:"I am runing late, offer them some water please.",mistakes:[{o:"runing",c:"running",l:["running","ruin"]}]},
                {type:'recv',text:"They seem very nervous."},
                {type:'sent',text:"Good, I want to see how they handl pressure.",mistakes:[{o:"handl",c:"handle",l:["handle","hand"]}]},
                {type:'recv',text:"Should I start the screening?"},
                {type:'sent',text:"No, wait for me, I have the specific questons.",mistakes:[{o:"questons",c:"questions",l:["questions","quest"]}]},
                {type:'recv',text:"I have their resume here."},
                {type:'sent',text:"Does the experince match the job descripton?",mistakes:[{o:"experince",c:"experience",l:["experience","price"]},{o:"descripton",c:"description",l:["description","script"]}]},
                {type:'recv',text:"Mostly, but their tech stack is old."},
                {type:'sent',text:"We need someone flexibl who can learn fast.",mistakes:[{o:"flexibl",c:"flexible",l:["flexible","flex"]}]},
                {type:'recv',text:"I'll tell them 5 more minutes."},
                {type:'sent',text:"Make it ten, I need to finish this emale.",mistakes:[{o:"emale",c:"email",l:["email","male"]}]},
                {type:'recv',text:"Understood."},
                {type:'sent',text:"Is the conferance room free for the interview?",mistakes:[{o:"conferance",c:"conference",l:["conference","france"]}]},
                {type:'recv',text:"Room B is open."},
                {type:'sent',text:"Perfect, bring the files and a pen for me.",mistakes:[{o:"Perfect",c:"Perfect",l:["Perfect","fect"]}]},
                {type:'recv',text:"On it."},
                {type:'sent',text:"I am walkng down the hallway right now.",mistakes:[{o:"walkng",c:"walking",l:["walking","walk"]}]},
                {type:'recv',text:"See you in B."},
                {type:'sent',text:"Tell them I apologize for the inconvenince.",mistakes:[{o:"inconvenince",c:"inconvenience",l:["inconvenience","convince"]}]}
            ]},
            { id: 'it_dept', title: 'Laptop Issue', msgs: [
                {type:'recv',text:"Your new laptop is ready for pickup."},
                {type:'sent',text:"Finally, my old one keeps crashing constantlly.",mistakes:[{o:"constantlly",c:"constantly",l:["constantly","constant"]}]},
                {type:'recv',text:"Did you back up your data?"},
                {type:'sent',text:"I think the cloud sync is workng fine.",mistakes:[{o:"workng",c:"working",l:["working","work"]}]},
                {type:'recv',text:"We need to verify that first."},
                {type:'sent',text:"Just do it quickly, I have no patience today.",mistakes:[{o:"patience",c:"patience",l:["patience","patients"]}]},
                {type:'recv',text:"I need your login password."},
                {type:'sent',text:"I will provide it when I arive at the desk.",mistakes:[{o:"arive",c:"arrive",l:["arrive","drive"]}]},
                {type:'recv',text:"Is it the 14 inch or 16 inch model?"},
                {type:'sent',text:"I ordered the bigest screen avalable.",mistakes:[{o:"bigest",c:"biggest",l:["biggest","best"]},{o:"avalable",c:"available",l:["available","able"]}]},
                {type:'recv',text:"The 16 inch is heavy."},
                {type:'sent',text:"Weight is not a consern, only speed matters.",mistakes:[{o:"consern",c:"concern",l:["concern","discern"]}]},
                {type:'recv',text:"Understood. It has 32GB RAM."},
                {type:'sent',text:"That should be suffishient for my tasks.",mistakes:[{o:"suffishient",c:"sufficient",l:["sufficient","fish"]}]},
                {type:'recv',text:"I'll set up the admin rights."},
                {type:'sent',text:"Don't forget the VPN for remote workng.",mistakes:[{o:"workng",c:"working",l:["working","work"]}]},
                {type:'recv',text:"Already installed."},
                {type:'sent',text:"I will be there in five minuts, stay there.",mistakes:[{o:"minuts",c:"minutes",l:["minutes","nuts"]}]},
                {type:'recv',text:"I'm here."},
                {type:'sent',text:"Good, I expect a seamles transition.",mistakes:[{o:"seamles",c:"seamless",l:["seamless","less"]}]}
            ]}
        ],
        twitter: [
            { id: 'pr1', title: 'Company Vision', msgs: [
                {type:'recv',text:"Tweet about our new vision."},
                {type:'sent',text:"We are inovating the future of tech today.",mistakes:[{o:"Inovating",c:"Innovating",l:["Innovating","in"]}]},
                {type:'recv',text:"Add some trending hashtags."},
                {type:'sent',text:"#Tech #Futur #Global #Growth",mistakes:[{o:"Futur",c:"Future",l:["Future","fur"]}]},
                {type:'recv',text:"Tag the CEO in it."}, 
                {type:'sent',text:"Hope he retwets this to his folowers.",mistakes:[{o:"retwets",c:"retweets",l:["retweets","tweets"]},{o:"folowers",c:"followers",l:["followers","follow"]}]},
                {type:'recv',text:"Keep it short and punchy."}, 
                {type:'sent',text:"Brevity is the key to max engagment.",mistakes:[{o:"engagment",c:"engagement",l:["engagement","agent"]}]},
                {type:'recv',text:"Post it now."}, 
                {type:'sent',text:"It is liv now on the main feed.",mistakes:[{o:"liv",c:"live",l:["live","life"]}]},
                {type:'recv',text:"Check the analytics."}, 
                {type:'sent',text:"Views are climbng fast, going viral.",mistakes:[{o:"climbng",c:"climbing",l:["climbing","climb"]}]},
                {type:'recv',text:"Any replies yet?"}, 
                {type:'sent',text:"Mostly bots so far, nothing real.",mistakes:[{o:"real",c:"real",l:["real","reel"]}]},
                {type:'recv',text:"Ignore the haters."}, 
                {type:'sent',text:"I am blockng the trolls immediatly.",mistakes:[{o:"Blockng",c:"Blocking",l:["Blocking","block"]},{o:"immediatly",c:"immediately",l:["immediately","media"]}]},
                {type:'recv',text:"Pin the tweet."}, 
                {type:'sent',text:"Done, it is at the top of our profil.",mistakes:[{o:"profil",c:"profile",l:["profile","file"]}]},
                {type:'recv',text:"Let's hope it works."}, 
                {type:'sent',text:"Fingers crossd for a stock bump.",mistakes:[{o:"crossd",c:"crossed",l:["crossed","cross"]}]}
            ]},
            { id: 'stock_update', title: 'Q4 Outlook', msgs: [
                {type:'recv',text:"The market is reacting to the news."},
                {type:'sent',text:"Our stock price is finaly moving up again.",mistakes:[{o:"finaly",c:"finally",l:["finally","final"]}]},
                {type:'recv',text:"Investors are asking about dividends."},
                {type:'sent',text:"Tell them we are reinvesting for groth.",mistakes:[{o:"groth",c:"growth",l:["growth","goth"]}]},
                {type:'recv',text:"The thread is getting a lot of traction."},
                {type:'sent',text:"I need to moniter the sentiment closeley.",mistakes:[{o:"moniter",c:"monitor",l:["monitor","nite"]},{o:"closeley",c:"closely",l:["closely","close"]}]},
                {type:'recv',text:"Sentiment is mostly positive."},
                {type:'sent',text:"Draft a follow up about our sustainabl goals.",mistakes:[{o:"sustainabl",c:"sustainable",l:["sustainable","able"]}]},
                {type:'recv',text:"Should I mention the new factory?"},
                {type:'sent',text:"Yes, it shows we are expandng our footprint.",mistakes:[{o:"expandng",c:"expanding",l:["expanding","expand"]}]},
                {type:'recv',text:"I'll post it at noon."},
                {type:'sent',text:"Timing is everyting with these announcments.",mistakes:[{o:"everyting",c:"everything",l:["everything","thing"]},{o:"announcments",c:"announcements",l:["announcements","cement"]}]},
                {type:'recv',text:"Engagement is peaking."},
                {type:'sent',text:"I am very satisfid with this campain.",mistakes:[{o:"satisfid",c:"satisfied",l:["satisfied","die"]},{o:"campain",c:"campaign",l:["campaign","pain"]}]},
                {type:'recv',text:"We hit 10k likes."},
                {type:'sent',text:"Exellent, the brand is looking strongger.",mistakes:[{o:"Exellent",c:"Excellent",l:["Excellent","cell"]},{o:"strongger",c:"stronger",l:["stronger","strong"]}]},
                {type:'recv',text:"Retweeted by the news."},
                {type:'sent',text:"The visability is exactly what we needed.",mistakes:[{o:"visability",c:"visibility",l:["visibility","ability"]}]},
                {type:'recv',text:"Good day for the company."},
                {type:'sent',text:"Indeed, let's keep the momentum tomorow.",mistakes:[{o:"tomorow",c:"tomorrow",l:["tomorrow","row"]}]}
            ]}
        ],
        discord: [
            { id: 'dev_chat', title: 'Sprint Review', msgs: [
                {type:'recv',text:"The build is failing on staging."},
                {type:'sent',text:"This is a major setbak for our timeline.",mistakes:[{o:"setbak",c:"setback",l:["setback","back"]}]},
                {type:'recv',text:"It looks like a database migration error."},
                {type:'sent',text:"Fix it befor the morning standup please.",mistakes:[{o:"befor",c:"before",l:["before","fore"]}]},
                {type:'recv',text:"The team is working overtime already."},
                {type:'sent',text:"I apreciate the effort, we must deliver.",mistakes:[{o:"apreciate",c:"appreciate",l:["appreciate","ate"]}]},
                {type:'recv',text:"Can we push the launch back?"},
                {type:'sent',text:"Absolutly not, the client expects it Monday.",mistakes:[{o:"Absolutly",c:"Absolutely",l:["absolutely","absolute"]}]},
                {type:'recv',text:"We might have to cut some features."},
                {type:'sent',text:"Only if they are non-esential for the demo.",mistakes:[{o:"non-esential",c:"non-essential",l:["non-essential","sent"]}]},
                {type:'recv',text:"The UI is still buggy."},
                {type:'sent',text:"Focus on the core functionalty first.",mistakes:[{o:"functionalty",c:"functionality",l:["functionality","alty"]}]},
                {type:'recv',text:"I'll update the ticket now."},
                {type:'sent',text:"I will check the progress in two hours.",mistakes:[{o:"check",c:"check",l:["check","cheek"]}]},
                {type:'recv',text:"We'll be here."},
                {type:'sent',text:"Stay focused and avoid unecessary distractons.",mistakes:[{o:"unecessary",c:"unnecessary",l:["unnecessary","ness"]},{o:"distractons",c:"distractions",l:["distractions","action"]}]},
                {type:'recv',text:"Ordering coffee now."},
                {type:'sent',text:"Send the bill to the office account.",mistakes:[{o:"office",c:"office",l:["office","ice"]}]},
                {type:'recv',text:"Thanks."},
                {type:'sent',text:"You guys are the backbon of this project.",mistakes:[{o:"backbon",c:"backbone",l:["backbone","bone"]}]}
            ]},
            { id: 'marketing_hub', title: 'Ad Spend', msgs: [
                {type:'recv',text:"Ad spend is up 20% this week."},
                {type:'sent',text:"Is the convershion rate also increasing?",mistakes:[{o:"convershion",c:"conversion",l:["conversion","vision"]}]},
                {type:'recv',text:"It's stable, but cost per click is higher."},
                {type:'sent',text:"We need to optimize the targetting better.",mistakes:[{o:"targetting",c:"targeting",l:["targeting","getting"]}]},
                {type:'recv',text:"Which demographic should we focus on?"},
                {type:'sent',text:"The young profeshionals with high income.",mistakes:[{o:"profeshionals",c:"professionals",l:["professionals","prof"]}]},
                {type:'recv',text:"I'll adjust the filters."},
                {type:'sent',text:"Check the creative assetts for any errors.",mistakes:[{o:"assetts",c:"assets",l:["assets","sets"]}]},
                {type:'recv',text:"The video ad is performing best."},
                {type:'sent',text:"More video content is the futur of marketing.",mistakes:[{o:"futur",c:"future",l:["future","fur"]}]},
                {type:'recv',text:"I'll allocate more budget there."},
                {type:'sent',text:"Dont overspend without my express aproval.",mistakes:[{o:"aproval",c:"approval",l:["approval","prove"]}]},
                {type:'recv',text:"I'll send a spreadsheet tonight."},
                {type:'sent',text:"I will review it tomorow over breakfast.",mistakes:[{o:"tomorow",c:"tomorrow",l:["tomorrow","row"]}]},
                {type:'recv',text:"Should we try a new platform?"},
                {type:'sent',text:"Stick to what works for now, avoid risk.",mistakes:[{o:"avaid",c:"avoid",l:["avoid","void"]}]},
                {type:'recv',text:"Understood boss."},
                {type:'sent',text:"I want a summary of the ROI by Friday.",mistakes:[{o:"sumnary",c:"summary",l:["summary","marry"]}]},
                {type:'recv',text:"On my calendar."},
                {type:'sent',text:"Good, efficency is our priority this month.",mistakes:[{o:"efficency",c:"efficiency",l:["efficiency","ency"]}]}
            ]}
        ],
        tinder: [
            { id: 'date_match', title: 'Coffee?', msgs: [
                {type:'recv',text:"You look very serious in your photos."},
                {type:'sent',text:"I am a very busy person with many responisbilities.",mistakes:[{o:"respoisbilites",c:"responsibilities",l:["responsibilities","ability"]}]},
                {type:'recv',text:"Do you ever relax?"},
                {type:'sent',text:"Relaxing is a luxery I rarely can afford.",mistakes:[{o:"luxery",c:"luxury",l:["luxury","jury"]}]},
                {type:'recv',text:"That sounds kind of stressful."},
                {type:'sent',text:"Success requires a lot of sacrifise.",mistakes:[{o:"sacrifise",c:"sacrifice",l:["sacrifice","fire"]}]},
                {type:'recv',text:"What do you do for fun?"},
                {type:'sent',text:"I enjoy fine dining and strategik planning.",mistakes:[{o:"strategik",c:"strategic",l:["strategic","magic"]}]},
                {type:'recv',text:"Strategic planning for fun? Wow."},
                {type:'sent',text:"I am always looking for the next oportunity.",mistakes:[{o:"oportunity",c:"opportunity",l:["opportunity","unity"]}]},
                {type:'recv',text:"How about a drink this weekend?"},
                {type:'sent',text:"I must check my calender for any gaps.",mistakes:[{o:"calander",c:"calendar",l:["calendar","end"]}]},
                {type:'recv',text:"You're like a real-life CEO."},
                {type:'sent',text:"I strive for excelence in every aspect.",mistakes:[{o:"excelence",c:"excellence",l:["excellence","cell"]}]},
                {type:'recv',text:"Saturday at 8?"},
                {type:'sent',text:"I can do 8:30, I have a previuos engaggment.",mistakes:[{o:"previuos",c:"previous",l:["previous","us"]},{o:"engaggment",c:"engagement",l:["engagement","ment"]}]},
                {type:'recv',text:"It's a date then."},
                {type:'sent',text:"I will confirm the locaton on Friday.",mistakes:[{o:"locaton",c:"location",l:["location","cat"]}]},
                {type:'recv',text:"See ya."},
                {type:'sent',text:"Goodbey, have a productiv evening.",mistakes:[{o:"Goodbey",c:"Goodbye",l:["Goodbye","bey"]},{o:"productiv",c:"productive",l:["productive","active"]}]}
            ]},
            { id: 'new_match', title: 'Interests', msgs: [
                {type:'recv',text:"What kind of music do you like?"},
                {type:'sent',text:"I usualy listen to clasical music to focus.",mistakes:[{o:"usualy",c:"usually",l:["usually","usual"]},{o:"clasical",c:"classical",l:["classical","class"]}]},
                {type:'recv',text:"No rock or pop?"},
                {type:'sent',text:"Too much noise, it distubs my thoughts.",mistakes:[{o:"distubs",c:"disturbs",l:["disturbs","tubs"]}]},
                {type:'recv',text:"You seem very refined."},
                {type:'sent',text:"I valyue quality over quantity in all things.",mistakes:[{o:"valyue",c:"value",l:["value","blue"]}]},
                {type:'recv',text:"Do you travel much?"},
                {type:'sent',text:"Yes, mostly for buisness but some pleasure.",mistakes:[{o:"buisness",c:"business",l:["business","ness"]}]},
                {type:'recv',text:"What was your favorite trip?"},
                {type:'sent',text:"Tokyo was very impresive and organized.",mistakes:[{o:"impresive",c:"impressive",l:["impressive","press"]}]},
                {type:'recv',text:"I've always wanted to go there."},
                {type:'sent',text:"You should, it is an incredibl experence.",mistakes:[{o:"incredibl",c:"incredible",l:["incredible","able"]},{o:"experence",c:"experience",l:["experience","price"]}]},
                {type:'recv',text:"Maybe you can show me around?"},
                {type:'sent',text:"I am quite a capabl guide for the city.",mistakes:[{o:"capabl",c:"capable",l:["capable","able"]}]},
                {type:'recv',text:"Is that an invitation?"},
                {type:'sent',text:"Perhaps, if our schedules aling correctly.",mistakes:[{o:"aling",c:"align",l:["align","line"]}]},
                {type:'recv',text:"You're mysterious."},
                {type:'sent',text:"I prefer to be discrit until I know someone.",mistakes:[{o:"discrit",c:"discreet",l:["discreet","crit"]}]},
                {type:'recv',text:"Fair enough."},
                {type:'sent',text:"I must go now, my battey is dying.",mistakes:[{o:"battey",c:"battery",l:["battery","bat"]}]}
            ]}
        ]
    },
    sportsman: {
        whatsapp: [
            { id: 'gym_buddy', title: 'Early Session', msgs: [
                {type:'recv',text:"You coming at 5am?"},
                {type:'sent',text:"Yeah bro, I am geting my pre-workout ready.",mistakes:[{o:"geting",c:"getting",l:["getting","get"]}]},
                {type:'recv',text:"Don't be late again."},
                {type:'sent',text:"I will be there befor the sun comes up.",mistakes:[{o:"befor",c:"before",l:["before","for"]}]},
                {type:'recv',text:"We're doing heavy legs."},
                {type:'sent',text:"I am ready to crush my squat reccord today.",mistakes:[{o:"reccord",c:"record",l:["record","cord"]}]},
                {type:'recv',text:"I hope your knee is okay."},
                {type:'sent',text:"It feels strongger than ever after that rest.",mistakes:[{o:"strongger",c:"stronger",l:["stronger","strong"]}]},
                {type:'recv',text:"Did you buy that new belt?"},
                {type:'sent',text:"Yes, it gives grate suport for heavy lifting.",mistakes:[{o:"grate",c:"great",l:["great","grate"]},{o:"suport",c:"support",l:["support","port"]}]},
                {type:'recv',text:"I need to get one too."},
                {type:'sent',text:"I can lend you my old one if it fitts.",mistakes:[{o:"fitts",c:"fits",l:["fits","fist"]}]},
                {type:'recv',text:"Thanks man."},
                {type:'sent',text:"No probem, we are a team in the gym.",mistakes:[{o:"probem",c:"problem",l:["problem","probe"]}]},
                {type:'recv',text:"See you in 20."},
                {type:'sent',text:"I am drivng now, see you in a bitt.",mistakes:[{o:"drivng",c:"driving",l:["driving","drive"]},{o:"bitt",c:"bit",l:["bit","bat"]}]},
                {type:'recv',text:"Bring water."},
                {type:'sent',text:"Got my gallon jugg right here in the car.",mistakes:[{o:"jugg",c:"jug",l:["jug","mug"]}]},
                {type:'recv',text:"Let's go."},
                {type:'sent',text:"Beast mode activatd, lets get it.",mistakes:[{o:"activatd",c:"activated",l:["activated","act"]}]}
            ]},
            { id: 'coach', title: 'Diet Plan', msgs: [
                {type:'recv',text:"How is the meal prep going?"},
                {type:'sent',text:"It is hard but I am stickng to the plan.",mistakes:[{o:"stickng",c:"sticking",l:["sticking","stick"]}]},
                {type:'recv',text:"No cheat meals this week."},
                {type:'sent',text:"I havent touched a single piece of candy.",mistakes:[{o:"havent",c:"haven't",l:["haven't","have"]}]},
                {type:'recv',text:"How is your energy level?"},
                {type:'sent',text:"A bit low but my focusss is still high.",mistakes:[{o:"focusss",c:"focus",l:["focus","fuss"]}]},
                {type:'recv',text:"Eat more spinach."},
                {type:'sent',text:"I will add it to my shake tomorow morning.",mistakes:[{o:"tomorow",c:"tomorrow",l:["tomorrow","row"]}]},
                {type:'recv',text:"And drink 5 liters of water."},
                {type:'sent',text:"That is a lot of water but I will tryy.",mistakes:[{o:"tryy",c:"try",l:["try","tray"]}]},
                {type:'recv',text:"Weight check tomorrow."},
                {type:'sent',text:"I hope I am in the right weight classs now.",mistakes:[{o:"classs",c:"class",l:["class","glass"]}]},
                {type:'recv',text:"You look leaner."},
                {type:'sent',text:"Thanks coach, my abs are finaly showing.",mistakes:[{o:"finaly",c:"finally",l:["finally","final"]}]},
                {type:'recv',text:"Keep it up."},
                {type:'sent',text:"I am givng 100 percent every single day.",mistakes:[{o:"givng",c:"giving",l:["giving","give"]}]},
                {type:'recv',text:"Good. See you at the track."},
                {type:'sent',text:"I will be ready for the sprint trainng.",mistakes:[{o:"trainng",c:"training",l:["training","train"]}]},
                {type:'recv',text:"No excuses."},
                {type:'sent',text:"Never, I have the heart of a championn.",mistakes:[{o:"championn",c:"champion",l:["champion","camp"]}]}
            ]}
        ],
        imessage: [
            { id: 'mom_sport', title: 'Coming Home', msgs: [
                {type:'recv',text:"Will you be home for dinner?"},
                {type:'sent',text:"Yes, but I need a lot of protien mom.",mistakes:[{o:"prtien",c:"protein",l:["protein","teen"]}]},
                {type:'recv',text:"I'm making chicken and rice."},
                {type:'sent',text:"That is perfec, can you make extra?",mistakes:[{o:"prefect",c:"perfect",l:["perfect","per"]}]},
                {type:'recv',text:"Of course. How was the gym?"},
                {type:'sent',text:"It was hevy today, I am very tired.",mistakes:[{o:"hevy",c:"heavy",l:["heavy","have"]}]},
                {type:'recv',text:"Don't overdo it."},
                {type:'sent',text:"I have to push myself to be the bestt.",mistakes:[{o:"bestt",c:"best",l:["best","bet"]}]},
                {type:'recv',text:"You are already the best to me."},
                {type:'sent',text:"Thanks mom, you are the gratest.",mistakes:[{o:"gratest",c:"greatest",l:["greatest","grate"]}]},
                {type:'recv',text:"See you at 7."},
                {type:'sent',text:"I will be there, just need a quick showr.",mistakes:[{o:"showr",c:"shower",l:["shower","show"]}]},
                {type:'recv',text:"Don't forget your laundry."},
                {type:'sent',text:"I will bring my gym clothes down tonite.",mistakes:[{o:"tonite",c:"tonight",l:["tonight","nite"]}]},
                {type:'recv',text:"They smell terrible."},
                {type:'sent',text:"That is the smell of hard workk mom.",mistakes:[{o:"workk",c:"work",l:["work","word"]}]},
                {type:'recv',text:"It's the smell of sweat!"},
                {type:'sent',text:"Haha, I will wash them immediatly.",mistakes:[{o:"immediatly",c:"immediately",l:["immediately","media"]}]},
                {type:'recv',text:"Love you."},
                {type:'sent',text:"Luv you too, see you son.",mistakes:[{o:"Lov",c:"Love",l:["Love","Live"]},{o:"son",c:"soon",l:["soon","sun"]}]}
            ]},
            { id: 'teammate', title: 'Game Day', msgs: [
                {type:'recv',text:"Ready for the match?"},
                {type:'sent',text:"I am beyond ready, I am lockd in.",mistakes:[{o:"lockd",c:"locked",l:["locked","lock"]}]},
                {type:'recv',text:"The other team looks big."},
                {type:'sent',text:"Size doesnt matter when you have speed.",mistakes:[{o:"doesnt",c:"doesn't",l:["doesn't","does"]}]},
                {type:'recv',text:"I'm nervous about the scouts."},
                {type:'sent',text:"Just play your game and dont think too much.",mistakes:[{o:"dont",c:"don't",l:["don't","dent"]}]},
                {type:'recv',text:"What if I mess up?"},
                {type:'sent',text:"I will have your back, we are brotherss.",mistakes:[{o:"brotherss",c:"brothers",l:["brothers","other"]}]},
                {type:'recv',text:"Let's do the warmup together."},
                {type:'sent',text:"Good idea, I need to stretch my hamstngs.",mistakes:[{o:"hamstngs",c:"hamstrings",l:["hamstrings","string"]}]},
                {type:'recv',text:"Did you bring the extra tape?"},
                {type:'sent',text:"Yes, I have a whole rol in my bag.",mistakes:[{o:"rol",c:"roll",l:["roll","role"]}]},
                {type:'recv',text:"Coach is calling us."},
                {type:'sent',text:"I am coming, let's show them our powr.",mistakes:[{o:"powr",c:"power",l:["power","pore"]}]},
                {type:'recv',text:"Win on three."},
                {type:'sent',text:"One, two, three, victry!",mistakes:[{o:"victry",c:"victory",l:["victory","try"]}]},
                {type:'recv',text:"Let's go!"},
                {type:'sent',text:"My heart is pounding, I am so excitd.",mistakes:[{o:"excitd",c:"excited",l:["excited","exit"]}]},
                {type:'recv',text:"Focus."},
                {type:'sent',text:"I am a beast on the field, lets winn.",mistakes:[{o:"winn",c:"win",l:["win","wine"]}]}
            ]}
        ],
        twitter: [
            { id: 'gym_beef', title: 'Call Out', msgs: [
                {type:'recv',text:"I heard you skipped the 405lb squat today."},
                {type:'sent',text:"Who told you that? I was deep in the zone today.",mistakes:[{o:"tokd",c:"told",l:["told","toll"]}]},
                {type:'recv',text:"The guys at the desk said you only did cardio."},
                {type:'sent',text:"They are haterz, my legs are litrally tree trunks.",mistakes:[{o:"hatrz",c:"haters",l:["haters","hates"]},{o:"litrally",c:"literally",l:["literally","liter"]}]},
                {type:'recv',text:"Post the video or it didn't happen."},
                {type:'sent',text:"The lightng was bad, I will film a hevy set tomorow.",mistakes:[{o:"lightng",c:"lighting",l:["lighting","light"]},{o:"hevy",c:"heavy",l:["heavy","have"]},{o:"tomorow",c:"tomorrow",l:["tomorrow","row"]}]},
                {type:'recv',text:"Always an excuse with you."},
                {type:'sent',text:"Keep that energy when I smash the world reccord.",mistakes:[{o:"reccord",c:"record",l:["record","cord"]}]},
                {type:'recv',text:"You're not even top 10 in the state."},
                {type:'sent',text:"The rankings are rigged, I am a natural mashine.",mistakes:[{o:"mashine",c:"machine",l:["machine","mesh"]}]},
                {type:'recv',text:"Sure you are. Go eat some chicken."},
                {type:'sent',text:"I am eating ten eggs and a steak as we speek.",mistakes:[{o:"speek",c:"speak",l:["speak","peek"]}]},
                {type:'recv',text:"Don't choke on it."},
                {type:'sent',text:"My mental strength is more powerfull than your lift.",mistakes:[{o:"powerfull",c:"powerful",l:["powerful","power"]}]},
                {type:'recv',text:"Post the PR or stay quiet."},
                {type:'sent',text:"Watch my story tonite, I am gona break the internet.",mistakes:[{o:"tonite",c:"tonight",l:["tonight","nite"]},{o:"gona",c:"gonna",l:["gonna","gone"]}]},
                {type:'recv',text:"I'll be waiting."},
                {type:'sent',text:"Stay humble while I reach the sumit of greatness.",mistakes:[{o:"sumit",c:"summit",l:["summit","suit"]}]},
                {type:'recv',text:"Good luck, 'champ'."},
                {type:'sent',text:"Luck is for the weak, I have disipline.",mistakes:[{o:"disipline",c:"discipline",l:["discipline","disc"]}]}
            ]},
            { id: 'shoutout', title: 'Brand Deal', msgs: [
                {type:'recv',text:"We love your energy, want a sponsorship?"},
                {type:'sent',text:"I am always open to new oportunities to grow.",mistakes:[{o:"oportunities",c:"opportunities",l:["opportunities","port"]}]},
                {type:'recv',text:"We'll send you our new pre-workout."},
                {type:'sent',text:"Does it have any baned substances in it?",mistakes:[{o:"baned",c:"banned",l:["banned","bane"]}]},
                {type:'recv',text:"It is 100% clean and natural."},
                {type:'sent',text:"Grate, I only put the best in my bodyy.",mistakes:[{o:"Grate",c:"Great",l:["Great","grate"]},{o:"bodyy",c:"body",l:["body","buddy"]}]},
                {type:'recv',text:"We need 3 posts a week."},
                {type:'sent',text:"I can do that, my engagment is very high.",mistakes:[{o:"engagment",c:"engagement",l:["engagement","agent"]}]},
                {type:'recv',text:"Check your DM for the contract."},
                {type:'sent',text:"I will look at it after my trainng session.",mistakes:[{o:"trainng",c:"training",l:["training","train"]}]},
                {type:'recv',text:"Don't wait too long."},
                {type:'sent',text:"I wont, I am very organized with my buisness.",mistakes:[{o:"wont",c:"won't",l:["won't","want"]},{o:"buisness",c:"business",l:["business","ness"]}]},
                {type:'recv',text:"Welcome to the team."},
                {type:'sent',text:"Thanks, I am excitd to represent the brand.",mistakes:[{o:"excitd",c:"excited",l:["excited","exit"]}]},
                {type:'recv',text:"Tag us in your next story."},
                {type:'sent',text:"I am filming a video right now, will tagg you.",mistakes:[{o:"tagg",c:"tag",l:["tag","egg"]}]},
                {type:'recv',text:"Perfect."},
                {type:'sent',text:"Lets make some massiv gains together.",mistakes:[{o:"massiv",c:"massive",l:["massive","mass"]}]}
            ]}
        ],
        discord: [
            { id: 'supps_talk', title: 'The Stack', msgs: [
                {type:'recv',text:"Which pre-workout is hitting best right now?"},
                {type:'sent',text:"I mixed three today, my skin is itchy as hell.",mistakes:[{o:"mixed",c:"mixed",l:["mixed","mix"]}]},
                {type:'recv',text:"Bro that’s dangerous for your heart."},
                {type:'sent',text:"The pump is worth it, I feel like a godd.",mistakes:[{o:"godd",c:"god",l:["god","good"]}]},
                {type:'recv',text:"Are you still on that keto diet?"},
                {type:'sent',text:"Nah, I need carbs for the explosiv power.",mistakes:[{o:"explosiv",c:"explosive",l:["explosive","plus"]}]},
                {type:'recv',text:"Did you try that new creatine brand?"},
                {type:'sent',text:"Yeah, the flavor is terible but results are good.",mistakes:[{o:"terible",c:"terrible",l:["terrible","rib"]}]},
                {type:'recv',text:"I'm struggling with my bench press."},
                {type:'sent',text:"You need to fix your grip and arche your back.",mistakes:[{o:"arche",c:"arch",l:["arch","arche"]}]},
                {type:'recv',text:"I'm afraid of hurting my shoulders."},
                {type:'sent',text:"Just use a spotter and dont be a quiter.",mistakes:[{o:"quiter",c:"quitter",l:["quitter","quite"]}]},
                {type:'recv',text:"What's your current weight?"},
                {type:'sent',text:"Woke up at 220lbs, feeling massiv today.",mistakes:[{o:"massiv",c:"massive",l:["massive","mass"]}]},
                {type:'recv',text:"Teach me your ways."},
                {type:'sent',text:"Eat big, lift big, and never skip Mondy.",mistakes:[{o:"Mondy",c:"Monday",l:["Monday","money"]}]},
                {type:'recv',text:"Even on holidays?"},
                {type:'sent',text:"The gym never closes for the truly motivatd.",mistakes:[{o:"motivatd",c:"motivated",l:["motivated","date"]}]},
                {type:'recv',text:"See you at 5am?"},
                {type:'sent',text:"I will be there befor the sun comes up.",mistakes:[{o:"befor",c:"before",l:["before","for"]}]}
            ]},
            { id: 'training_vids', title: 'Form Check', msgs: [
                {type:'recv',text:"Can you check my deadlift form?"},
                {type:'sent',text:"Post the video in the chanel and I will look.",mistakes:[{o:"chanel",c:"channel",l:["channel","panel"]}]},
                {type:'recv',text:"It's a bit blurry."},
                {type:'sent',text:"I can still see if your back is roundingg.",mistakes:[{o:"roundingg",c:"rounding",l:["rounding","round"]}]},
                {type:'recv',text:"I think my hips are too high."},
                {type:'sent',text:"Yes, drop them down and engage your coore.",mistakes:[{o:"coore",c:"core",l:["core","score"]}]},
                {type:'recv',text:"Is the belt too tight?"},
                {type:'sent',text:"It should be tight but let you breath still.",mistakes:[{o:"breath",c:"breathe",l:["breathe","death"]}]},
                {type:'recv',text:"Should I use straps?"},
                {type:'sent',text:"Only for the heavyest sets to save your grip.",mistakes:[{o:"heavyest",c:"heaviest",l:["heaviest","heavy"]}]},
                {type:'recv',text:"Thanks for the advice."},
                {type:'sent',text:"No probem, we all want to be strongger.",mistakes:[{o:"probem",c:"problem",l:["problem","probe"]},{o:"strongger",c:"stronger",l:["stronger","strong"]}]},
                {type:'recv',text:"I'll try it again tomorrow."},
                {type:'sent',text:"Make sure you warm up properly befor starting.",mistakes:[{o:"befor",c:"before",l:["before","for"]}]},
                {type:'recv',text:"I always do."},
                {type:'sent',text:"Good, injuries are the bigest enemy of gains.",mistakes:[{o:"bigest",c:"biggest",l:["biggest","best"]}]},
                {type:'recv',text:"True that."},
                {type:'sent',text:"Stay consistent and results will come soon.",mistakes:[{o:"consistent",c:"consistent",l:["consistent","tent"]}]}
            ]}
        ],
        tinder: [
            { id: 'gym_match', title: 'Fit Match', msgs: [
                {type:'recv',text:"Is your whole personality just lifting?"},
                {type:'sent',text:"Basically yes, the gym is my true homee.",mistakes:[{o:"homee",c:"home",l:["home","homie"]}]},
                {type:'recv',text:"Do you ever go out for real food?"},
                {type:'sent',text:"I only eat clean, no junk in this bodyy.",mistakes:[{o:"bodyy",c:"body",l:["body","buddy"]}]},
                {type:'recv',text:"How about a pizza date?"},
                {type:'sent',text:"Maybe on a cheat day, but I prefer protien.",mistakes:[{o:"orotien",c:"protein",l:["protein","teen"]}]},
                {type:'recv',text:"You sound high maintenance."},
                {type:'sent',text:"I am just dedicatd to the iron game, you know?",mistakes:[{o:"dedicatd",c:"dedicated",l:["dedicated","cat"]}]},
                {type:'recv',text:"Do you have any hobbies?"},
                {type:'sent',text:"I like flexing in the miror and meal prep.",mistakes:[{o:"miror",c:"mirror",l:["mirror","more"]}]},
                {type:'recv',text:"That's... intense."},
                {type:'sent',text:"Serious gains require serious sacrifise.",mistakes:[{o:"sacrifise",c:"sacrifice",l:["sacrifice","fire"]}]},
                {type:'recv',text:"Can you talk about anything else?"},
                {type:'sent',text:"We could talk about your cardio routinee.",mistakes:[{o:"routinee",c:"routine",l:["routine","route"]}]},
                {type:'recv',text:"I don't have one lol."},
                {type:'sent',text:"That is unaceptable, we need to train together.",mistakes:[{o:"unaceptable",c:"unacceptable",l:["unacceptable","able"]}]},
                {type:'recv',text:"Is that a date invite?"},
                {type:'sent',text:"Yes, bring your runing shoes and a shaker.",mistakes:[{o:"runing",c:"running",l:["running","ruin"]}]},
                {type:'recv',text:"I'll think about it."},
                {type:'sent',text:"Don't wait too long, I am in high demandd.",mistakes:[{o:"demandd",c:"demand",l:["demand","dead"]}]}
            ]},
            { id: 'active_date', title: 'Hike?', msgs: [
                {type:'recv',text:"I see you like hiking in your bio."},
                {type:'sent',text:"Yes, it is grate cardio and a nice view.",mistakes:[{o:"grate",c:"great",l:["great","grate"]}]},
                {type:'recv',text:"Do you go often?"},
                {type:'sent',text:"Every Sunday morning to clear my head.",mistakes:[{o:"Sonday",c:"Sunday",l:["Sunday","day"]}]},
                {type:'recv',text:"I prefer the beach."},
                {type:'sent',text:"The beach is okay but the mountain is bettr.",mistakes:[{o:"bettr",c:"better",l:["better","bitter"]}]},
                {type:'recv',text:"Is it a hard trail?"},
                {type:'sent',text:"It is steep but I have a lot of staminna.",mistakes:[{o:"staminna",c:"stamina",l:["stamina","min"]}]},
                {type:'recv',text:"I'm not as fit as you."},
                {type:'sent',text:"I can go slow if you want to join me.",mistakes:[{o:"went",c:"want",l:["want","went"]}]},
                {type:'recv',text:"Are there bears?"},
                {type:'sent',text:"I am not afraid of bears, I am a beast.",mistakes:[{o:"afeaid",c:"afraid",l:["afraid","raid"]}]},
                {type:'recv',text:"Haha okay."},
                {type:'sent',text:"Let's go this weekend, it will be funn.",mistakes:[{o:"funn",c:"fun",l:["fun","funny"]}]},
                {type:'recv',text:"Maybe coffee first?"},
                {type:'sent',text:"I dont drink coffee, only black tea for me.",mistakes:[{o:"dnt",c:"don't",l:["don't","dent"]}]},
                {type:'recv',text:"Tea is fine."},
                {type:'sent',text:"Grate, I will pick you up at eight.",mistakes:[{o:"Grate",c:"Great",l:["Great","grate"]}]},
                {type:'recv',text:"Eight is early!"},
                {type:'sent',text:"The early bird gets the worm, trust me.",mistakes:[{o:"trst",c:"trust",l:["trust","rust"]}]}
            ]}
        ]
    },
    kid: {
        whatsapp: [
            { id: 'mom_chat', title: 'Mom', msgs: [
                {type:'recv',text:"Where are you? School ended an hour ago."},
                {type:'sent',text:"im at the park with friends sry mom",mistakes:[{o:"sry",c:"sorry",l:["sorry","sky"]}]},
                {type:'recv',text:"You didn't ask for permission."},
                {type:'sent',text:"i forgot i was busy playing football",mistakes:[{o:"forrgot",c:"forgot",l:["forgot","got"]}]},
                {type:'recv',text:"Come home now, you have homework."},
                {type:'sent',text:"just 10 more minuts please its so fun",mistakes:[{o:"minuts",c:"minutes",l:["minutes","nuts"]}]},
                {type:'recv',text:"No, now. I'm making dinner."},
                {type:'sent',text:"is it pizza tonight? i hope it is",mistakes:[{o:"piza",c:"pizza",l:["pizza","piza"]}]},
                {type:'recv',text:"It's vegetables and fish."},
                {type:'sent',text:"eww i hate fish so much can i eat later",mistakes:[{o:"latar",c:"later",l:["later","late"]}]},
                {type:'recv',text:"No. Home. Now."},
                {type:'sent',text:"ok im coming now dont be angri",mistakes:[{o:"angri",c:"angry",l:["angry","hungry"]}]},
                {type:'recv',text:"Hurry up."},
                {type:'sent',text:"i am runing home as fast as i can",mistakes:[{o:"runing",c:"running",l:["running","ruin"]}]},
                {type:'recv',text:"Did you lose your jacket?"},
                {type:'sent',text:"no i have it in my bag dont worry",mistakes:[{o:"worri",c:"worry",l:["worry","sorry"]}]},
                {type:'recv',text:"See you in 5."},
                {type:'sent',text:"see ya soon bye bye mom",mistakes:[{o:"baye",c:"bye",l:["bye","by"]}]},
                {type:'recv',text:"Bye."},
                {type:'sent',text:"wait can i buy a soda on the way",mistakes:[{o:"weit",c:"wait",l:["wait","weight"]}]}
            ]},
            { id: 'best_friend', title: 'Kyle', msgs: [
                {type:'recv',text:"did u see the new trailer?"},
                {type:'sent',text:"omg yes it looks so cool i want it",mistakes:[{o:"omG",c:"omg",l:["omg","dog"]}]},
                {type:'recv',text:"It's coming out next month."},
                {type:'sent',text:"i need to save money for it fast",mistakes:[{o:"mney",c:"money",l:["money","monkey"]}]},
                {type:'recv',text:"Ask your dad for it."},
                {type:'sent',text:"he said no cuz i got a bad grade",mistakes:[{o:"cuz",c:"because",l:["because","cousin"]}]},
                {type:'recv',text:"What subject?"},
                {type:'sent',text:"math is so hard i hate algebra so much",mistakes:[{o:"meth",c:"math",l:["math","maths"]}]},
                {type:'recv',text:"I can help you study."},
                {type:'sent',text:"ur the best bro thanks a lot",mistakes:[{o:"ur",c:"you're",l:["you're","your"]}]},
                {type:'recv',text:"Want to play Roblox later?"},
                {type:'sent',text:"yeah i will hop on at seven oclock",mistakes:[{o:"oclock",c:"o'clock",l:["o'clock","clock"]}]},
                {type:'recv',text:"Don't be late."},
                {type:'sent',text:"i wont i will finish my hw quickly",mistakes:[{o:"wont",c:"won't",l:["won't","want"]},{o:"quickly",c:"quickly",l:["quickly","quick"]}]},
                {type:'recv',text:"I'm building a new base."},
                {type:'sent',text:"cool i want to see it right now",mistakes:[{o:"eight",c:"right",l:["right","write"]}]},
                {type:'recv',text:"Talk later."},
                {type:'sent',text:"bye see you in the loby bro",mistakes:[{o:"loby",c:"lobby",l:["lobby","lob"]}]}
            ]}
        ],
        imessage: [
            { id: 'sister_kid', title: 'Sis', msgs: [
                {type:'recv',text:"Did you eat my chocolate?"},
                {type:'sent',text:"no i didnt touch it i swear",mistakes:[{o:"didnt",c:"didn't",l:["didn't","did"]}]},
                {type:'recv',text:"Then why is the wrapper in your room?"},
                {type:'sent',text:"maybe the dog put it there i dont know",mistakes:[{o:"dont",c:"don't",l:["don't","dent"]}]},
                {type:'recv',text:"The dog can't open drawers."},
                {type:'sent',text:"ur just trying to get me in trouble",mistakes:[{o:"ur",c:"you're",l:["you're","your"]}]},
                {type:'recv',text:"I'm telling Mom."},
                {type:'sent',text:"no please dont i will buy u a new one",mistakes:[{o:"dont",c:"don't",l:["don't","dent"]}]},
                {type:'recv',text:"With what money?"},
                {type:'sent',text:"i have some coins in my pigy bank",mistakes:[{o:"pigy",c:"piggy",l:["piggy","pig"]}]},
                {type:'recv',text:"It was a big bar."},
                {type:'sent',text:"it wasnt even that good anyway sry",mistakes:[{o:"wasnt",c:"wasn't",l:["wasn't","want"]}]},
                {type:'recv',text:"You admit it!"},
                {type:'sent',text:"fine yes i ate it it was tasty",mistakes:[{o:"testy",c:"tasty",l:["tasty","taste"]}]},
                {type:'recv',text:"I'm so mad."},
                {type:'sent',text:"i will give u my dessert tonight ok",mistakes:[{o:"desert",c:"dessert",l:["dessert","desert"]}]},
                {type:'recv',text:"Deal."},
                {type:'sent',text:"u are so mean to me sometimes",mistakes:[{o:"meen",c:"mean",l:["mean","main"]}]},
                {type:'recv',text:"Stop stealing my stuff then."},
                {type:'sent',text:"ok ok i promiss i wont do it again",mistakes:[{o:"promiss",c:"promise",l:["promise","miss"]}]}
            ]},
            { id: 'dad_kid', title: 'Dad', msgs: [
                {type:'recv',text:"Did you finish your chores?"},
                {type:'sent',text:"im doing them right now dad i swear",mistakes:[{o:"dooing",c:"doing",l:["doing","dong"]}]},
                {type:'recv',text:"I checked the bin, it's still full."},
                {type:'sent',text:"i was just about to take it out",mistakes:[{o:"abut",c:"about",l:["about","out"]}]},
                {type:'recv',text:"And the dishes?"},
                {type:'sent',text:"i will do them after this game",mistakes:[{o:"gaMe",c:"game",l:["game","came"]}]},
                {type:'recv',text:"The game should be off by now."},
                {type:'sent',text:"but im almost at the nexxt level",mistakes:[{o:"nexxt",c:"next",l:["next","net"]}]},
                {type:'recv',text:"Chores first, then games."},
                {type:'sent',text:"fine i am turning it off now sry",mistakes:[{o:"turining",c:"turning",l:["turning","turn"]}]},
                {type:'recv',text:"Thank you. We're going to the park later."},
                {type:'sent',text:"can i bring my skateboard please",mistakes:[{o:"skatebaoard",c:"skateboard",l:["skateboard","board"]}]},
                {type:'recv',text:"Yes, but wear your helmet."},
                {type:'sent',text:"helmet is for babys its not cool",mistakes:[{o:"babyes",c:"babies",l:["babies","baby"]}]},
                {type:'recv',text:"No helmet, no park."},
                {type:'sent',text:"ok ok i will wear the helmet dad",mistakes:[{o:"weaar",c:"wear",l:["wear","war"]}]},
                {type:'recv',text:"Good choice."},
                {type:'sent',text:"i will be ready in ten minuts",mistakes:[{o:"minuts",c:"minutes",l:["minutes","nuts"]}]},
                {type:'recv',text:"See you downstairs."},
                {type:'sent',text:"bye bye see u son dad",mistakes:[{o:"son",c:"soon",l:["soon","sun"]}]}
            ]}
        ],
        twitter: [
            { id: 'game_fan', title: 'Fan Talk', msgs: [
                {type:'recv',text:"Who is the best player in the world?"},
                {type:'sent',text:"im the best player obviouslly lol",mistakes:[{o:"obviouslly",c:"obviously",l:["obviously","sly"]}]},
                {type:'recv',text:"I mean professional players."},
                {type:'sent',text:"oh then it must be the guy from team A",mistakes:[{o:"mst",c:"must",l:["must","mist"]}]},
                {type:'recv',text:"He lost his last match though."},
                {type:'sent',text:"the server was laggy he culdnt move",mistakes:[{o:"culdnt",c:"couldn't",l:["couldn't","cold"]}]},
                {type:'recv',text:"That's a bad excuse."},
                {type:'sent',text:"ur just a hater he is still a king",mistakes:[{o:"ur",c:"you're",l:["you're","your"]}]},
                {type:'recv',text:"What's your rank?"},
                {type:'sent',text:"im in diamond level right now bro",mistakes:[{o:"diemond",c:"diamond",l:["diamond","mind"]}]},
                {type:'recv',text:"Prove it with a screenshot."},
                {type:'sent',text:"i will post it later today i promiss",mistakes:[{o:"promiss",c:"promise",l:["promise","miss"]}]},
                {type:'recv',text:"I bet you're lying."},
                {type:'sent',text:"no im serius i play every single day",mistakes:[{o:"serius",c:"serious",l:["serious","series"]}]},
                {type:'recv',text:"Show me the stats."},
                {type:'sent',text:"my stats are litrally the highest in school",mistakes:[{o:"litrally",c:"literally",l:["literally","liter"]}]},
                {type:'recv',text:"School doesn't count."},
                {type:'sent',text:"it counts to me cuz i win every time",mistakes:[{o:"cuz",c:"because",l:["because","cousin"]}]},
                {type:'recv',text:"Whatever kid."},
                {type:'sent',text:"dont call me kid im almost a teen",mistakes:[{o:"teen",c:"teen",l:["teen","ten"]}]}
            ]},
            { id: 'meme_lord', title: 'Funny Post', msgs: [
                {type:'recv',text:"Did you see that funny meme?"},
                {type:'sent',text:"omg yes i was laughing so hard",mistakes:[{o:"om",c:"omg",l:["omg","dog"]}]},
                {type:'recv',text:"I shared it on my wall."},
                {type:'sent',text:"i will go and like it right now",mistakes:[{o:"reight",c:"right",l:["right","write"]}]},
                {type:'recv',text:"We should make our own."},
                {type:'sent',text:"that wuld be so cool and fun",mistakes:[{o:"wuld",c:"would",l:["would","wild"]}]},
                {type:'recv',text:"What should it be about?"},
                {type:'sent',text:"about how hard school math is lol",mistakes:[{o:"msth",c:"math",l:["math","maths"]}]},
                {type:'recv',text:"Everyone would relate to that."},
                {type:'sent',text:"yeah cuz evryone hates algebra",mistakes:[{o:"evryone",c:"everyone",l:["everyone","every"]}]},
                {type:'recv',text:"I'll find a good template."},
                {type:'sent',text:"ok find one with a crying face",mistakes:[{o:"cryieng",c:"crying",l:["crying","ring"]}]},
                {type:'recv',text:"Perfect choice."},
                {type:'sent',text:"we are gona go viral for sure",mistakes:[{o:"gona",c:"gonna",l:["gonna","gone"]}]},
                {type:'recv',text:"Let's hope so."},
                {type:'sent',text:"i will share it to all my friends",mistakes:[{o:"freinds",c:"friends",l:["friends","ends"]}]},
                {type:'recv',text:"Don't forget to tag me."},
                {type:'sent',text:"i wont i will give u credit bro",mistakes:[{o:"wont",c:"won't",l:["won't","want"]}]},
                {type:'recv',text:"Let's go."},
                {type:'sent',text:"it is gona be a masterpeice",mistakes:[{o:"masterpleice",c:"masterpiece",l:["masterpiece","piece"]}]}
            ]}
        ],
        discord: [
            { id: 'gaming_rage', title: 'Ranked Match', msgs: [
                {type:'recv',text:"Why did you throw that round?"},
                {type:'sent',text:"my lag was so bad i culdnt even move",mistakes:[{o:"culdnt",c:"couldn't",l:["couldn't","cold"]}]},
                {type:'recv',text:"You had 20 ping, stop lying."},
                {type:'sent',text:"the server is trash i swear i hit him",mistakes:[{o:"hitt",c:"hit",l:["hit","hat"]}]},
                {type:'recv',text:"We’re going to lose our rank because of you."},
                {type:'sent',text:"dont be so salty its just a game bro",mistakes:[{o:"salti",c:"salty",l:["salty","salt"]}]},
                {type:'recv',text:"I spent 4 hours grinding for this."},
                {type:'sent',text:"i will carry the nexxt round i promiss",mistakes:[{o:"nexxt",c:"next",l:["next","net"]},{o:"promiss",c:"promise",l:["promise","miss"]}]},
                {type:'recv',text:"You said that 3 rounds ago."},
                {type:'sent',text:"my controler is broken i need a new one",mistakes:[{o:"controler",c:"controller",l:["controller","control"]}]},
                {type:'recv',text:"Just admit you're playing bad today."},
                {type:'sent',text:"im litrally playing with one hand right now",mistakes:[{o:"litrally",c:"literally",l:["literally","liter"]}]},
                {type:'recv',text:"Wait, why?"},
                {type:'sent',text:"eating pizza and gaming is hard okay",mistakes:[{o:"piza",c:"pizza",l:["pizza","piza"]}]},
                {type:'recv',text:"Focus! They are at A site."},
                {type:'sent',text:"i see them im gona use my ulti now",mistakes:[{o:"gona",c:"gonna",l:["gonna","gone"]}]},
                {type:'recv',text:"You missed! You hit the wall!"},
                {type:'sent',text:"this game is riged i hate this so much",mistakes:[{o:"riged",c:"rigged",l:["rigged","ride"]}]},
                {type:'recv',text:"I'm leaving the party."},
                {type:'sent',text:"wait sry dont go i will be serius now",mistakes:[{o:"serius",c:"serious",l:["serious","series"]}]}
            ]},
            { id: 'trade_scam', title: 'Item Trade', msgs: [
                {type:'recv',text:"I want your golden skin."},
                {type:'sent',text:"what will u give me for it bro",mistakes:[{o:"gove",c:"give",l:["give","gave"]}]},
                {type:'recv',text:"I have a rare knife and some cases."},
                {type:'sent',text:"that sounds like a good trade for m",mistakes:[{o:"m",c:"me",l:["me","my"]}]},
                {type:'recv',text:"Send me the trade link."},
                {type:'sent',text:"wait i need to check the prices first",mistakes:[{o:"frist",c:"first",l:["first","fist"]}]},
                {type:'recv',text:"Trust me, it's a fair deal."},
                {type:'sent',text:"i dont trust anyone on this server sry",mistakes:[{o:"dont",c:"don't",l:["don't","dent"]}]},
                {type:'recv',text:"I've been here for 2 years."},
                {type:'sent',text:"i saw someone get scamed yesterday",mistakes:[{o:"scamed",c:"scammed",l:["scammed","same"]}]},
                {type:'recv',text:"I'm not like them."},
                {type:'sent',text:"if u add one more skin i will do it",mistakes:[{o:"mroe",c:"more",l:["more","sore"]}]},
                {type:'recv',text:"Fine, I'll add the blue gloves."},
                {type:'sent',text:"ok now we have a deal send it",mistakes:[{o:"deal",c:"deal",l:["deal","dual"]}]},
                {type:'recv',text:"Sending now."},
                {type:'sent',text:"i am waiting for the notificaton",mistakes:[{o:"notificton",c:"notification",l:["notification","cat"]}]},
                {type:'recv',text:"Check your inventory."},
                {type:'sent',text:"omg it worked thanks for the trade",mistakes:[{o:"workd",c:"worked",l:["worked","word"]}]},
                {type:'recv',text:"Enjoy."},
                {type:'sent',text:"im gona show this to my friends now",mistakes:[{o:"gona",c:"gonna",l:["gonna","gone"]}]}
            ]}
        ],
        tinder: [
            { id: 'crush_kid', title: 'School Crush', msgs: [
                {type:'recv',text:"I didn't know you were on here."},
                {type:'sent',text:"hi i was just bored so i made one",mistakes:[{o:"hyi",c:"hi",l:["hi","hie"]}]},
                {type:'recv',text:"Do you go to the same school?"},
                {type:'sent',text:"yeah i see u in the hallway sometimes",mistakes:[{o:"hellway",c:"hallway",l:["hallway","way"]}]},
                {type:'recv',text:"Really? I haven't seen you."},
                {type:'sent',text:"im the guy with the blue backpak",mistakes:[{o:"backpak",c:"backpack",l:["backpack","pack"]}]},
                {type:'recv',text:"Oh! The one who plays football?"},
                {type:'sent',text:"yeah that is me i love football",mistakes:[{o:"lve",c:"love",l:["love","live"]}]},
                {type:'recv',text:"You're actually pretty good."},
                {type:'sent',text:"thanks i train every single day after school",mistakes:[{o:"thnaks",c:"thanks",l:["thanks","tanks"]}]},
                {type:'recv',text:"Do you have any other hobbies?"},
                {type:'sent',text:"i like playing video games and skateing",mistakes:[{o:"skateing",c:"skating",l:["skating","eating"]}]},
                {type:'recv',text:"I like skating too."},
                {type:'sent',text:"we shuld go to the park together sometime",mistakes:[{o:"shuld",c:"should",l:["should","sold"]}]},
                {type:'recv',text:"Maybe. If you're nice."},
                {type:'sent',text:"i am the nicest guy in school i promiss",mistakes:[{o:"promiss",c:"promise",l:["promise","miss"]}]},
                {type:'recv',text:"We'll see about that."},
                {type:'sent',text:"want to hang out this saturday",mistakes:[{o:"hung",c:"hang",l:["hang","hangs"]}]},
                {type:'recv',text:"Ask me on Friday."},
                {type:'sent',text:"ok i will wait until then bye",mistakes:[{o:"b",c:"bye",l:["bye","by"]}]}
            ]},
            { id: 'mystery_match', title: 'New Friend', msgs: [
                {type:'recv',text:"Hi! Your dog is so cute."},
                {type:'sent',text:"thanks his name is bubly and he is fun",mistakes:[{o:"bubly",c:"bubbly",l:["bubbly","bubble"]}]},
                {type:'recv',text:"What breed is he?"},
                {type:'sent',text:"he is a golden retrever i think",mistakes:[{o:"retrever",c:"retriever",l:["retriever","ever"]}]},
                {type:'recv',text:"I have a cat."},
                {type:'sent',text:"cats are cool but dogs are bettr",mistakes:[{o:"bettr",c:"better",l:["better","bitter"]}]},
                {type:'recv',text:"That's a bold claim."},
                {type:'sent',text:"dogs can play catch and go for walks",mistakes:[{o:"cetch",c:"catch",l:["catch","cash"]}]},
                {type:'recv',text:"Cats are more independent."},
                {type:'sent',text:"true but they dont give u luv like dogs",mistakes:[{o:"luv",c:"love",l:["love","live"]}]},
                {type:'recv',text:"My cat is very affectionate."},
                {type:'sent',text:"i wuld like to meet him someday",mistakes:[{o:"wuld",c:"would",l:["would","wild"]}]},
                {type:'recv',text:"Are you free on Sunday?"},
                {type:'sent',text:"i have to do my hw on sunday sry",mistakes:[{o:"sonday",c:"sunday",l:["sunday","day"]}]},
                {type:'recv',text:"How about Saturday?"},
                {type:'sent',text:"saturday is perfec i can go to the park",mistakes:[{o:"perfec",c:"perfect",l:["perfect","per"]}]},
                {type:'recv',text:"Let's meet at 2."},
                {type:'sent',text:"ok i will bring my dog with me",mistakes:[{o:"dpg",c:"dog",l:["dog","log"]}]},
                {type:'recv',text:"See you then."},
                {type:'sent',text:"bye see u son i am excitd",mistakes:[{o:"son",c:"soon",l:["soon","sun"]},{o:"excitd",c:"excited",l:["excited","exit"]}]}
            ]}
        ]
    },
    girl: {
        whatsapp: [
            { id: 'tea_time', title: 'Group Chat', msgs: [
                {type:'recv',text:"Did you see what she posted?"},
                {type:'sent',text:"Omg yes it was so embarasing for her.",mistakes:[{o:"embarasing",c:"embarrassing",l:["embarrassing","bars"]}]},
                {type:'recv',text:"She thinks nobody knows about the breakup."},
                {type:'sent',text:"Everyone knows, she is so delusional lol.",mistakes:[{o:"dellusinal",c:"delusional",l:["delusional","fusion"]}]},
                {type:'recv',text:"Should we tell her?"},
                {type:'sent',text:"No way, let her stay in her buble.",mistakes:[{o:"buble",c:"bubble",l:["bubble","bull"]}]},
                {type:'recv',text:"You are so mean haha."},
                {type:'sent',text:"I am just being real, she is a snakee.",mistakes:[{o:"snakee",c:"snake",l:["snake","snack"]}]},
                {type:'recv',text:"What about the party tonight?"},
                {type:'sent',text:"I need a new outfit, mine is so uglyy.",mistakes:[{o:"uglyy",c:"ugly",l:["ugly","glue"]}]},
                {type:'recv',text:"We went shopping yesterday!"},
                {type:'sent',text:"That was yesterday, I need somthing fresh.",mistakes:[{o:"somthing",c:"something",l:["something","some"]}]},
                {type:'recv',text:"You spend too much money."},
                {type:'sent',text:"Money is meant to be spent bestie.",mistakes:[{o:"bestei",c:"bestie",l:["bestie","best"]}]},
                {type:'recv',text:"Zara has a sale."},
                {type:'sent',text:"Let's go right now, I am redy to slay.",mistakes:[{o:"redy",c:"ready",l:["ready","red"]}]},
                {type:'recv',text:"I have class in 10 minutes."},
                {type:'sent',text:"Skip it, shopping is way more importent.",mistakes:[{o:"importent",c:"important",l:["important","tent"]}]},
                {type:'recv',text:"My mom will kill me."},
                {type:'sent',text:"Just tell her you were at the libary.",mistakes:[{o:"libary",c:"library",l:["library","berry"]}]}
            ]},
            { id: 'vacay_plans', title: 'Summer Trip', msgs: [
                {type:'recv',text:"Where should we go for summer?"},
                {type:'sent',text:"I want to go somewhere with a big beeach.",mistakes:[{o:"beeach",c:"beach",l:["beach","each"]}]},
                {type:'recv',text:"How about Bali?"},
                {type:'sent',text:"Bali is so aesthetic, I love it!",mistakes:[{o:"aestetic",c:"aesthetic",l:["aesthetic","static"]}]},
                {type:'recv',text:"It's a bit expensive though."},
                {type:'sent',text:"We can find a cheap airbnb if we look now.",mistakes:[{o:"airnnb",c:"airbnb",l:["airbnb","air"]}]},
                {type:'recv',text:"Who else is coming?"},
                {type:'sent',text:"Just the core group, no drama alowed.",mistakes:[{o:"alowed",c:"allowed",l:["allowed","low"]}]},
                {type:'recv',text:"I'll invite Sarah."},
                {type:'sent',text:"Ugh no, she is always complainng about the heat.",mistakes:[{o:"complainng",c:"complaining",l:["complaining","plain"]}]},
                {type:'recv',text:"She's not that bad."},
                {type:'sent',text:"Fine, but she has to pay her share on timee.",mistakes:[{o:"timee",c:"time",l:["time","me"]}]},
                {type:'recv',text:"I'll check the flights."},
                {type:'sent',text:"Make sure there is a gym near the hotell.",mistakes:[{o:"hotell",c:"hotel",l:["hotel","tell"]}]},
                {type:'recv',text:"You're going to the gym on vacay?"},
                {type:'sent',text:"Of course, I need to stay in shapee.",mistakes:[{o:"shapee",c:"shape",l:["shape","she"]}]},
                {type:'recv',text:"You're crazy lol."},
                {type:'sent',text:"I am just dedicatd to my goals bestie.",mistakes:[{o:"dedicatd",c:"dedicated",l:["dedicated","cat"]}]},
                {type:'recv',text:"I'll book it tonight."},
                {type:'sent',text:"Yay! I am so excitd for this trip.",mistakes:[{o:"excitd",c:"excited",l:["excited","exit"]}]}
            ]}
        ],
        imessage: [
            { id: 'mom_girl', title: 'Home late', msgs: [
                {type:'recv',text:"It's past 11, where are you?"},
                {type:'sent',text:"im at julias house we are just watching a movye",mistakes:[{o:"movye",c:"movie",l:["movie","move"]}]},
                {type:'recv',text:"You have school tomorrow."},
                {type:'sent',text:"i know i will be home in twentty minutes",mistakes:[{o:"twentty",c:"twenty",l:["twenty","tweet"]}]},
                {type:'recv',text:"I'm coming to pick you up."},
                {type:'sent',text:"no please dont i can drive myself home",mistakes:[{o:"dont",c:"don't",l:["don't","dent"]}]},
                {type:'recv',text:"Your car is in the driveway."},
                {type:'sent',text:"oh right i forgot i took an uber here",mistakes:[{o:"forgit",c:"forgot",l:["forgot","got"]}]},
                {type:'recv',text:"Why did you take an Uber?"},
                {type:'sent',text:"my car was acting weirdly so i was scared",mistakes:[{o:"weirdy",c:"weirdly",l:["weirdly","word"]}]},
                {type:'recv',text:"You should have told me."},
                {type:'sent',text:"i didnt want to bother u while u were busy",mistakes:[{o:"didnt",c:"didn't",l:["didn't","did"]}]},
                {type:'recv',text:"I'm leaving now. Be outside."},
                {type:'sent',text:"ok i am puting on my shoes right now",mistakes:[{o:"puting",c:"putting",l:["putting","put"]}]},
                {type:'recv',text:"Is Julia coming too?"},
                {type:'sent',text:"no she is staying here she is tired",mistakes:[{o:"steying",c:"staying",l:["staying","stay"]}]},
                {type:'recv',text:"I'm around the corner."},
                {type:'sent',text:"i see ur car im coming out now bye",mistakes:[{o:"ur",c:"your",l:["your","ur"]}]},
                {type:'recv',text:"Hurry up."},
                {type:'sent',text:"i am runing as fast as i can mom",mistakes:[{o:"runing",c:"running",l:["running","ruin"]}]}
            ]},
            { id: 'crush_girl', title: 'Friday Night', msgs: [
                {type:'recv',text:"What are you doing tonight?"},
                {type:'sent',text:"nothing much just hanging out with friends",mistakes:[{o:"noting",c:"nothing",l:["nothing","thing"]}]},
                {type:'recv',text:"Want to go to the movies?"},
                {type:'sent',text:"i wuld love to what are we watching",mistakes:[{o:"wuld",c:"would",l:["would","wild"]}]},
                {type:'recv',text:"That new horror flick."},
                {type:'sent',text:"oh i hate horror movies they are so scary",mistakes:[{o:"scairy",c:"scary",l:["scary","scar"]}]},
                {type:'recv',text:"I'll protect you lol."},
                {type:'sent',text:"haha ur so funny ok i will go",mistakes:[{o:"ur",c:"you're",l:["you're","your"]}]},
                {type:'recv',text:"I'll pick you up at 7."},
                {type:'sent',text:"ok i need to find a cute outfit now",mistakes:[{o:"outfut",c:"outfit",l:["outfit","fit"]}]},
                {type:'recv',text:"You always look great."},
                {type:'sent',text:"thanks u are so sweet to me",mistakes:[{o:"swit",c:"sweet",l:["sweet","sweat"]}]},
                {type:'recv',text:"Should I get popcorn?"},
                {type:'sent',text:"yes and some candy too please",mistakes:[{o:"candi",c:"candy",l:["candy","can"]}]},
                {type:'recv',text:"Done. See you soon."},
                {type:'sent',text:"i am so excitd for tonight",mistakes:[{o:"excitd",c:"excited",l:["excited","exit"]}]},
                {type:'recv',text:"Me too."},
                {type:'sent',text:"dont be late i hate waiting",mistakes:[{o:"dont",c:"don't",l:["don't","dent"]}]},
                {type:'recv',text:"I'm never late."},
                {type:'sent',text:"we will see about that bye bye",mistakes:[{o:"bey",c:"bye",l:["bye","by"]}]}
            ]}
        ],
        twitter: [
            { id: 'fashion_tweet', title: 'New Look', msgs: [
                {type:'recv',text:"That dress is amazing! Where is it from?"},
                {type:'sent',text:"thanks i got it from a small boutiqe",mistakes:[{o:"boutiqe",c:"boutique",l:["boutique","out"]}]},
                {type:'recv',text:"Is it expensive?"},
                {type:'sent',text:"it was a bit pricey but worth it",mistakes:[{o:"prilcey",c:"pricey",l:["pricey","price"]}]},
                {type:'recv',text:"I need one for the wedding."},
                {type:'sent',text:"u wuld look so good in this color",mistakes:[{o:"wuld",c:"would",l:["would","wild"]}]},
                {type:'recv',text:"What shoes are you wearing?"},
                {type:'sent',text:"just some simple heels i found online",mistakes:[{o:"heal",c:"heels",l:["heels","hell"]}]},
                {type:'recv',text:"Can you send me the link?"},
                {type:'sent',text:"i will find it and dm it to u later",mistakes:[{o:"latr",c:"later",l:["later","late"]}]},
                {type:'recv',text:"You're a lifesaver."},
                {type:'sent',text:"anything for my favorite folower",mistakes:[{o:"folower",c:"follower",l:["follower","follow"]}]},
                {type:'recv',text:"Are you going to the gala?"},
                {type:'sent',text:"yes i am so excitd for the party",mistakes:[{o:"excitd",c:"excited",l:["excited","exit"]}]},
                {type:'recv',text:"I'll see you there then."},
                {type:'sent',text:"make sur to say hi when u see me",mistakes:[{o:"sur",c:"sure",l:["sure","sir"]}]},
                {type:'recv',text:"I will!"},
                {type:'sent',text:"i am gona start geting ready now",mistakes:[{o:"gona",c:"gonna",l:["gonna","gone"]},{o:"geting",c:"getting",l:["getting","get"]}]},
                {type:'recv',text:"Have fun."},
                {type:'sent',text:"thanks bye for now bestie",mistakes:[{o:"bestei",c:"bestie",l:["bestie","best"]}]}
            ]},
            { id: 'drama_tweet', title: 'The Tea', msgs: [
                {type:'recv',text:"Did you hear what happened at the party?"},
                {type:'sent',text:"omg no tell me everything right now",mistakes:[{o:"o",c:"omg",l:["omg","dog"]}]},
                {type:'recv',text:"Sarah and Jake had a huge fight."},
                {type:'sent',text:"i knew it they are so toxic together",mistakes:[{o:"toxuc",c:"toxic",l:["toxic","tick"]}]},
                {type:'recv',text:"She threw a drink at him."},
                {type:'sent',text:"no way she is so dramatik i love it",mistakes:[{o:"dramatik",c:"dramatic",l:["dramatic","magic"]}]},
                {type:'recv',text:"Everyone was staring."},
                {type:'sent',text:"i wish i was there to see it myself",mistakes:[{o:"meself",c:"myself",l:["myself","self"]}]},
                {type:'recv',text:"It's all over TikTok now."},
                {type:'sent',text:"i need to go and find the video fast",mistakes:[{o:"vido",c:"video",l:["video","void"]}]},
                {type:'recv',text:"I'll tag you in it."},
                {type:'sent',text:"ur the best thanks for the tea",mistakes:[{o:"ur",c:"you're",l:["you're","your"]}]},
                {type:'recv',text:"There's more..."},
                {type:'sent',text:"what else hapened dont leave me hanging",mistakes:[{o:"hapened",c:"happened",l:["happened","pen"]}]},
                {type:'recv',text:"They broke up for good this time."},
                {type:'sent',text:"finaly she deserves so much bettr",mistakes:[{o:"finaly",c:"finally",l:["finally","final"]},{o:"bettr",c:"better",l:["better","bitter"]}]},
                {type:'recv',text:"I agree."},
                {type:'sent',text:"let's go out and celebrate tonite",mistakes:[{o:"tonite",c:"tonight",l:["tonight","nite"]}]},
                {type:'recv',text:"I'm down."},
                {type:'sent',text:"i will text u the details later bye",mistakes:[{o:"bey",c:"bye",l:["bye","by"]}]}
            ]}
        ],
        discord: [
            { id: 'study_group', title: 'Exam Prep', msgs: [
                {type:'recv',text:"Do you understand the psych notes?"},
                {type:'sent',text:"not at all i am so confusd right now",mistakes:[{o:"confusd",c:"confused",l:["confused","fuse"]}]},
                {type:'recv',text:"Chapter 4 is the hardest."},
                {type:'sent',text:"i hate this class so much its boring",mistakes:[{o:"booring",c:"boring",l:["boring","born"]}]},
                {type:'recv',text:"We have the test on Friday."},
                {type:'sent',text:"i need to start studyng or i will fail",mistakes:[{o:"studyng",c:"studying",l:["studying","study"]}]},
                {type:'recv',text:"Let's call and go over it."},
                {type:'sent',text:"ok i will join the voice chanel now",mistakes:[{o:"chanel",c:"channel",l:["channel","panel"]}]},
                {type:'recv',text:"I have some practice questions."},
                {type:'sent',text:"ur a lifesaver i was so stressed",mistakes:[{o:"ur",c:"you're",l:["you're","your"]}]},
                {type:'recv',text:"Don't worry, we'll pass."},
                {type:'sent',text:"i hope so i need a good grade mom",mistakes:[{o:"gradde",c:"grade",l:["grade","grad"]}]},
                {type:'recv',text:"Did you read the textbook?"},
                {type:'sent',text:"only the first two pages i got sleepy",mistakes:[{o:"slepy",c:"sleepy",l:["sleepy","sleep"]}]},
                {type:'recv',text:"Wake up! We need to focus."},
                {type:'sent',text:"i am drinkng coffee right now im ready",mistakes:[{o:"drinkng",c:"drinking",l:["drinking","drink"]}]},
                {type:'recv',text:"Let's start with Freud."},
                {type:'sent',text:"ugh he is so weird but ok lets go",mistakes:[{o:"wird",c:"weird",l:["weird","word"]}]},
                {type:'recv',text:"Ready?"},
                {type:'sent',text:"yes lets do this masterpeice of study",mistakes:[{o:"masterpeice",c:"masterpiece",l:["masterpiece","piece"]}]}
            ]},
            { id: 'music_bot', title: 'Party Vibes', msgs: [
                {type:'recv',text:"Add some songs to the queue."},
                {type:'sent',text:"i am adding some pop hits right now",mistakes:[{o:"ading",c:"adding",l:["adding","ding"]}]},
                {type:'recv',text:"No heavy metal please."},
                {type:'sent',text:"i hate metal music its too loud sry",mistakes:[{o:"mussic",c:"music",l:["music","sick"]}]},
                {type:'recv',text:"This song is a banger."},
                {type:'sent',text:"i know right i love this artist so much",mistakes:[{o:"lve",c:"love",l:["love","live"]}]},
                {type:'recv',text:"She's going on tour next year."},
                {type:'sent',text:"i need to buy tickets befor they sell out",mistakes:[{o:"befor",c:"before",l:["before","fore"]}]},
                {type:'recv',text:"They are very expensive."},
                {type:'sent',text:"i dont care i will save all my money",mistakes:[{o:"moneyy",c:"money",l:["money","monkey"]}]},
                {type:'recv',text:"Can I come with you?"},
                {type:'sent',text:"of course we will have so much funn",mistakes:[{o:"funn",c:"fun",l:["fun","funny"]}]},
                {type:'recv',text:"I'll drive."},
                {type:'sent',text:"grate i hate driving in the cityy",mistakes:[{o:"grate",c:"great",l:["great","grate"]},{o:"cityy",c:"city",l:["city","pity"]}]},
                {type:'recv',text:"The bot is skipping songs."},
                {type:'sent',text:"fix it i want to hear the next on",mistakes:[{o:"on",c:"one",l:["one","on"]}]},
                {type:'recv',text:"I'm trying."},
                {type:'sent',text:"thanks ur the best dj ever",mistakes:[{o:"ur",c:"you're",l:["you're","your"]}]},
                {type:'recv',text:"I know."},
                {type:'sent',text:"lets dance in the voice room lol",mistakes:[{o:"dance",c:"dance",l:["dance","dace"]}]}
            ]}
        ],
        tinder: [
            { id: 'date_match_girl', title: 'First Chat', msgs: [
                {type:'recv',text:"Your eyes are beautiful."},
                {type:'sent',text:"thanks i get that a lot haha",mistakes:[{o:"thnaks",c:"thanks",l:["thanks","tanks"]}]},
                {type:'recv',text:"What are you looking for here?"},
                {type:'sent',text:"just meeting new people and having fun",mistakes:[{o:"havng",c:"having",l:["having","hang"]}]},
                {type:'recv',text:"I'm looking for something serious."},
                {type:'sent',text:"that is nice i like honesty in a guy",mistakes:[{o:"honeesty",c:"honesty",l:["honesty","nest"]}]},
                {type:'recv',text:"What's your favorite food?"},
                {type:'sent',text:"i love sushi and italian food so much",mistakes:[{o:"love",c:"love",l:["love","live"]}]},
                {type:'recv',text:"I know a great sushi place."},
                {type:'sent',text:"really we shuld go there sometime",mistakes:[{o:"shuld",c:"should",l:["should","sold"]}]},
                {type:'recv',text:"How about tomorrow night?"},
                {type:'sent',text:"i have a girls night tomorow sry",mistakes:[{o:"tomorow",c:"tomorrow",l:["tomorrow","row"]}]},
                {type:'recv',text:"Saturday then?"},
                {type:'sent',text:"saturday is perfec what time shuld i be redy",mistakes:[{o:"perfec",c:"perfect",l:["perfect","per"]},{o:"redy",c:"ready",l:["ready","red"]}]},
                {type:'recv',text:"I'll pick you up at 8."},
                {type:'sent',text:"ok i will find a cute dress for us",mistakes:[{o:"drrss",c:"dress",l:["dress","press"]}]},
                {type:'recv',text:"I can't wait."},
                {type:'sent',text:"me too i am so excitd to meet u",mistakes:[{o:"excitd",c:"excited",l:["excited","exit"]}]},
                {type:'recv',text:"See you then."},
                {type:'sent',text:"bye for now have a grate evening",mistakes:[{o:"grate",c:"great",l:["great","grate"]}]}
            ]},
            { id: 'casual_match', title: 'Hey!', msgs: [
                {type:'recv',text:"Hey! You look familiar."},
                {type:'sent',text:"really maybe we have mutual friends",mistakes:[{o:"mutal",c:"mutual",l:["mutual","dual"]}]},
                {type:'recv',text:"I think I saw you at the gym."},
                {type:'sent',text:"i go to the gym every morning early",mistakes:[{o:"mornig",c:"morning",l:["morning","ring"]}]},
                {type:'recv',text:"I go in the evenings."},
                {type:'sent',text:"evenings are too busy for me i hate it",mistakes:[{o:"bussy",c:"busy",l:["busy","bus"]}]},
                {type:'recv',text:"What's your routine?"},
                {type:'sent',text:"i do a lot of cardio and some weights",mistakes:[{o:"weigts",c:"weights",l:["weights","eight"]}]},
                {type:'recv',text:"You have great form."},
                {type:'sent',text:"thanks i work hard on my bodyy",mistakes:[{o:"bodyy",c:"body",l:["body","buddy"]}]},
                {type:'recv',text:"It shows."},
                {type:'sent',text:"u are very sweet to say that thanks",mistakes:[{o:"sweat",c:"sweet",l:["sweet","sweat"]}]},
                {type:'recv',text:"Want to grab a smoothie?"},
                {type:'sent',text:"i wuld love to but i am busy today",mistakes:[{o:"wuld",c:"would",l:["would","wild"]}]},
                {type:'recv',text:"How about Monday after the gym?"},
                {type:'sent',text:"monday is perfec lets meet at ten",mistakes:[{o:"perfec",c:"perfect",l:["perfect","per"]}]},
                {type:'recv',text:"It's a date."},
                {type:'sent',text:"i will see u then dont be late",mistakes:[{o:"dont",c:"don't",l:["don't","dent"]}]},
                {type:'recv',text:"I'll be there."},
                {type:'sent',text:"bye for now i am gona go sleep",mistakes:[{o:"gona",c:"gonna",l:["gonna","gone"]}]}
            ]}
        ]
    }
};

        

        const CHARACTERS = {
            boss: {
                id: 'boss', name: 'The Boss', 
                apps: ['whatsapp', 'gmail', 'twitter','imessage', 'discord','tinder'], 
                theme: 'office',
                colors: { skin: '#fca5a5', shirt: '#fff', tie: '#dc2626', suit: '#1e293b' },
                props: ['glasses', 'tie', 'prop-nameplate', 'prop-mug', 'prop-slab', 'prop-window', 'prop-shelf', 'prop-painting', 'prop-mat']
            },
            sportsman: {
                id: 'sportsman', name: 'Gym Bro', 
                apps: ['whatsapp', 'gmail', 'twitter','imessage', 'discord','tinder'],
                theme: 'gym',
                colors: { skin: '#eab308', shirt: '#eab308', tie: 'transparent', suit: '#3b82f6' }, /* Updated shirt/suit for tank top look */
                props: ['headband', 'prop-shaker', 'prop-lockers', 'prop-poster-gym']
            },
            kid: {
                id: 'kid', name: 'Timmy', 
                apps: ['whatsapp', 'gmail', 'twitter','imessage', 'discord','tinder'], 
                theme: 'bedroom',
                colors: { skin: '#fdba74', shirt: '#22c55e', tie: 'transparent', suit: '#1e1b4b' },
                props: ['cap', 'prop-controller', 'prop-window-night', 'prop-poster-kid', 'prop-leds', 'prop-skateboard', 'prop-mess']
            },
            girl: {
                id: 'girl', name: 'Sophie', 
                apps:['whatsapp', 'gmail', 'twitter','imessage', 'discord','tinder'], 
                theme: 'cafe',
                colors: { skin: '#fecaca', shirt: '#f472b6', tie: 'transparent', suit: '#fff1f2' },
                props: ['char-hair', 'char-necklace', 'prop-latte', 'prop-brick', 'char-bangs', 'prop-plant', 'prop-neon', 'prop-menu']
            }
        };

        // --- GAME LOGIC ---
        //showWorldScene();
        const AudioSys = {
            ctx: null, isMuted: false, musicTimer: null,
            init() { if(!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)(); },
            toggleMute() { this.isMuted = !this.isMuted; const btn = document.getElementById('mute-btn'); if(btn) btn.innerText = this.isMuted ? "UNMUTE SOUND" : "MUTE SOUND"; if(this.isMuted) this.stopMusic(); else if(Game.state.active && !Game.state.paused) this.playMusic(); },
            playTone(type, f, d, vol=0.1) { if(!this.ctx || this.isMuted) return; const o = this.ctx.createOscillator(); const g = this.ctx.createGain(); o.type = type; o.frequency.value = f; g.gain.setValueAtTime(vol, this.ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + d); o.connect(g); g.connect(this.ctx.destination); o.start(); o.stop(this.ctx.currentTime + d); },
            playClick() { this.playTone('sine', 800, 0.05, 0.1); },
            playRecv() { this.playTone('sine', 600, 0.1, 0.1); setTimeout(()=>this.playTone('sine', 800, 0.1, 0.1), 100); },
            playMusic() { if(this.isMuted || !this.ctx || this.musicTimer) return; const loop = () => { if(!Game.state.active || Game.state.paused) return; this.playTone('triangle', 110, 0.2, 0.05); setTimeout(() => { if(Game.state.active && !Game.state.paused) this.playTone('triangle', 164.8, 0.2, 0.05) }, 500); this.musicTimer = setTimeout(loop, 1000); }; loop(); },
            stopMusic() { if(this.musicTimer) { clearTimeout(this.musicTimer); this.musicTimer = null; } }
        };

        const Boss = {
            elem: document.getElementById('boss'),
            state(state) { this.elem.classList.remove('typing', 'angry', 'success'); if(state) this.elem.classList.add(state); },
            setColors(c) {
                const r = document.documentElement.style;
                r.setProperty('--boss-skin', c.skin); r.setProperty('--boss-shirt', c.shirt); r.setProperty('--boss-tie', c.tie); r.setProperty('--boss-suit', c.suit);
                if(c.hair) r.setProperty('--hair-color', c.hair);
            },
            setProps(propList) {
                ['glasses','cap','headband','hair-long','char-bangs','tie','necklace','prop-nameplate','prop-mug','prop-slab','prop-shaker','prop-controller','prop-latte','prop-window','prop-lockers','prop-shelf','prop-brick','prop-poster','prop-mat','prop-leds','prop-skateboard','prop-mess','prop-plant','prop-neon','prop-menu'].forEach(id => {
                    const el = document.getElementById(id.startsWith('prop') ? id : 'char-'+id.replace('hair-long','hair').replace('char-',''));
                    if(el) el.style.display = 'none';
                });
                propList.forEach(p => {
                    let elId = p;
                    if(p === 'prop-window-night') { document.getElementById('prop-window').style.display='block'; return; }
                    if(p === 'prop-poster-gym') { const el=document.getElementById('prop-poster'); el.style.display='flex'; el.className='bg-prop prop-poster gym'; return; }
                    if(p === 'prop-poster-kid') { const el=document.getElementById('prop-poster'); el.style.display='block'; el.className='bg-prop prop-poster kid'; return; }
                    
                    if(!p.startsWith('prop') && !p.startsWith('char')) elId = 'char-'+p; 
                    else if (p.startsWith('prop') && !document.getElementById(p)) elId = p; 
                    
                    if(p=='glasses') elId='char-glasses'; if(p=='tie') elId='char-tie'; if(p=='cap') elId='char-cap'; if(p=='headband') elId='char-headband'; if(p=='necklace') elId='char-necklace'; if(p=='char-hair') elId='char-hair'; if(p=='char-bangs') elId='char-bangs';
                    
                    const el = document.getElementById(elId);
                    if(el) el.style.display = (el.classList.contains('flex') ? 'flex' : (el.tagName==='DIV' && el.classList.contains('desk-upper-slab') ? 'flex' : 'block'));
                    
                    const container = document.getElementById('boss');
                    container.classList.remove('char-girl', 'char-sportsman', 'char-kid');
                    if (propList.includes('char-hair')) container.classList.add('char-girl');
                    if (propList.includes('prop-shaker')) container.classList.add('char-sportsman');
                    if (propList.includes('prop-controller')) container.classList.add('char-kid');
                });
            }
        };

        const UI = {
            screens: { menu: document.getElementById('screen-menu'), time: document.getElementById('screen-time'), char: document.getElementById('screen-char'), game: document.getElementById('screen-game'), result: document.getElementById('screen-result'), pause: document.getElementById('screen-pause') },
            layout: document.getElementById('game-layout-container'),
            elems: { 
                timer: document.getElementById('timer'), 
                score: document.getElementById('score'), 
                msgBox: document.getElementById('message-container'), 
                header: document.getElementById('app-header'), 
                sendBtn: document.getElementById('send-btn'), 
                feedback: document.getElementById('feedback'), 
                contact: document.getElementById('contact-name'), 
                avatarIcon: document.getElementById('avatar-icon'), 
                status: document.getElementById('status-indicator'), 
                chatArea: document.getElementById('chat-scroll-area'),
                popup: document.getElementById('popup')
            },
            showScreen(id) { 
                const key = id.replace('screen-', '');
                if (['menu', 'time', 'char'].includes(key)) {
                     this.layout.classList.remove('visible');
                     Object.values(this.screens).forEach(s => { if(s && s.classList.contains('fullscreen-pane')) s.classList.remove('active'); });
                     if(this.screens[key]) this.screens[key].classList.add('active');
                } else {
                    this.layout.classList.add('visible');
                    Object.values(this.screens).forEach(s => { if(s && s.classList.contains('fullscreen-pane')) s.classList.remove('active'); });
                    ['game', 'result'].forEach(k => { if(this.screens[k]) this.screens[k].classList.remove('active'); });
                    //hideWorldScene();
                    if(key !== 'pause') this.screens.pause.classList.add('hidden');
                    if (this.screens[key]) this.screens[key].classList.add('active');
                }
            },
            togglePauseScreen(show) { if(show) this.screens.pause.classList.remove('hidden'); else this.screens.pause.classList.add('hidden'); },
            applyTheme(key) {
                const t = THEMES[key] || THEMES.imessage;
                const r = document.documentElement.style;
                const g = document.getElementById('screen-game');
                r.setProperty('--app-bg', t.appBg); r.setProperty('--header-bg', t.headerBg); r.setProperty('--header-text', t.headerText); r.setProperty('--bubble-bg', t.bubbleBg); r.setProperty('--bubble-text', t.bubbleText); r.setProperty('--bubble-recv-bg', t.bubbleRecvBg); r.setProperty('--bubble-recv-text', t.bubbleRecvText); r.setProperty('--accent', t.accent); r.setProperty('--fixed-text', t.fixedText || t.accent); r.setProperty('--font-main', t.font); r.setProperty('--border-radius', t.radius);
                g.className = `screen active app-view ${t.darkMode ? 'dark-mode' : ''} ${t.pattern === 'whatsapp' ? 'pattern-whatsapp' : ''} ${t.pattern === 'grid' ? 'pattern-grid' : ''}`;
                this.elems.avatarIcon.className = `ph-fill ${t.icon}`; this.elems.avatarIcon.style.color = t.darkMode ? '#fff' : t.accent;
                document.getElementById('footer').style.background = t.footerBg;
                if (t.border) this.elems.msgBox.style.border = t.border; else this.elems.msgBox.style.border = 'none';
            }
        };

        // --- HISTORY MANAGER ---


        const Game = {
            state: { 
                score: 0, msgs: 0, time: 20, initialTime: 20, active: false, paused: false, 
                conversation: [], msgIndex: 0, currentCharId: 'boss', playedConvos: [],
                // New Metric Props
                correctClicks: 0, wrongClicks: 0, startTime: 0, clickHistory: [], pressureClicks: 0, pressureCorrect: 0
            },
            loop: null, typeLoop: null, currentMsg: null, mistakeCount: 0, mistakesFixed: 0, isTyping: false,
            
            goToTimeSelect() { AudioSys.init(); AudioSys.playClick(); if(AudioSys.ctx.state === 'suspended') AudioSys.ctx.resume(); UI.showScreen('screen-time'); },
            selectTime(t) { AudioSys.playClick(); this.state.initialTime = t; this.goToCharSelect(); },
            goToCharSelect() { AudioSys.playClick(); UI.showScreen('screen-char'); },
            selectChar(id) { 
                AudioSys.playClick();
                this.state.currentCharId = id;
                document.querySelectorAll('.char-select-card').forEach(c => c.classList.remove('selected'));
                document.getElementById(`char-card-${id}`).classList.add('selected');
            },
            quitToMenu() { AudioSys.playClick(); this.endGameLogic(); UI.showScreen('screen-menu'); },
            togglePause() { AudioSys.playClick(); if (!this.state.active) return; this.state.paused = !this.state.paused; if (this.state.paused) { UI.togglePauseScreen(true); AudioSys.stopMusic(); } else { UI.togglePauseScreen(false); AudioSys.playMusic(); } },

            generateEnvironment(theme) {
                const r = document.documentElement.style;
                const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
                
                if (theme === 'office') {
                    const palettes = [
                        { h: 210, name: 'Blue Corp' }, { h: 120, name: 'Eco Corp' }, { h: 0, name: 'Modern Red' }, { h: 45, name: 'Beige Law' }
                    ];
                    const p = palettes[Math.floor(Math.random() * palettes.length)];
                    const h = p.h; 
                    r.setProperty('--wall-grad-top', `hsl(${h}, ${rand(10,30)}%, ${rand(85,95)}%)`);
                    r.setProperty('--wall-grad-btm', `hsl(${h}, ${rand(20,40)}%, ${rand(75,85)}%)`);
                    r.setProperty('--floor-grad-top', `hsl(${h}, ${rand(20,40)}%, ${rand(30,40)}%)`);
                    r.setProperty('--floor-grad-btm', `hsl(${h}, ${rand(30,50)}%, ${rand(15,25)}%)`);
                    const dh = rand(15, 45); 
                    r.setProperty('--desk-top', `hsl(${dh}, 40%, 35%)`);
                    r.setProperty('--desk-side', `hsl(${dh}, 40%, 25%)`);
                    r.setProperty('--desk-front-top', `hsl(${dh}, 40%, 25%)`);
                    r.setProperty('--desk-front-btm', `hsl(${dh}, 40%, 15%)`);
                    r.setProperty('--sky-color', '#93c5fd');
                } else if (theme === 'gym') {
                    const styles = [ { wall: [0, 0, 60], floor: [0, 0, 30] }, { wall: [20, 80, 60], floor: [20, 60, 20] }, { wall: [200, 60, 60], floor: [200, 60, 20] } ];
                    const s = styles[Math.floor(Math.random() * styles.length)];
                    r.setProperty('--wall-grad-top', `hsl(${s.wall[0]}, ${s.wall[1]}%, ${s.wall[2]}%)`);
                    r.setProperty('--wall-grad-btm', `hsl(${s.wall[0]}, ${s.wall[1]}%, ${s.wall[2]-10}%)`);
                    r.setProperty('--floor-grad-top', `hsl(${s.floor[0]}, ${s.floor[1]}%, ${s.floor[2]}%)`);
                    r.setProperty('--floor-grad-btm', `hsl(${s.floor[0]}, ${s.floor[1]}%, ${s.floor[2]-10}%)`);
                    r.setProperty('--desk-top', '#475569'); r.setProperty('--desk-side', '#334155'); r.setProperty('--desk-front-top', '#334155'); r.setProperty('--desk-front-btm', '#1e293b');
                    r.setProperty('--mat-color', '#3b82f6'); r.setProperty('--sky-color', '#fff');
                } else if (theme === 'bedroom') {
                    const styles = [ { h: 240 }, { h: 270 }, { h: 150 } ];
                    const s = styles[Math.floor(Math.random() * styles.length)];
                    const h = s.h;
                    r.setProperty('--wall-grad-top', `hsl(${h}, 40%, 20%)`);
                    r.setProperty('--wall-grad-btm', `hsl(${h}, 40%, 10%)`);
                    r.setProperty('--floor-grad-top', `hsl(${h}, 50%, 15%)`);
                    r.setProperty('--floor-grad-btm', `hsl(${h}, 50%, 5%)`);
                    r.setProperty('--desk-top', '#1e1b4b'); r.setProperty('--desk-side', '#312e81'); r.setProperty('--desk-front-top', '#312e81'); r.setProperty('--desk-front-btm', '#0f172a');
                    r.setProperty('--mat-color', '#22c55e'); r.setProperty('--sky-color', '#0f172a');
                } else if (theme === 'cafe') {
                    const styles = [ { w: [20, 60, 80], f: [30, 40, 60] }, { w: [0, 0, 95], f: [0, 0, 80] }, { w: [340, 80, 90], f: [340, 40, 80] } ];
                    const s = styles[Math.floor(Math.random() * styles.length)];
                    r.setProperty('--wall-grad-top', `hsl(${s.w[0]}, ${s.w[1]}%, ${s.w[2]}%)`);
                    r.setProperty('--wall-grad-btm', `hsl(${s.w[0]}, ${s.w[1]}%, ${s.w[2]-10}%)`);
                    r.setProperty('--floor-grad-top', `hsl(${s.f[0]}, ${s.f[1]}%, ${s.f[2]}%)`);
                    r.setProperty('--floor-grad-btm', `hsl(${s.f[0]}, ${s.f[1]}%, ${s.f[2]-10}%)`);
                    r.setProperty('--desk-top', '#f3f4f6'); r.setProperty('--desk-side', '#d1d5db'); r.setProperty('--desk-front-top', '#d1d5db'); r.setProperty('--desk-front-btm', '#9ca3af');
                    r.setProperty('--mat-color', '#fbcfe8'); r.setProperty('--sky-color', '#fef3c7');
                }
            },

            startGame() {
                showWorldScene();
                AudioSys.playClick();
                
                const char = CHARACTERS[this.state.currentCharId];
                this.generateEnvironment(char.theme);
                Boss.setColors(char.colors);
                Boss.setProps(char.props);

                // --- NEW SELECTION LOGIC ---
                const charConvoData = CONVERSATIONS_DATA[char.id];
                const availableApps = char.apps.filter(app => charConvoData[app]);
                const selectedApp = availableApps[Math.floor(Math.random() * availableApps.length)];
                const appConvos = charConvoData[selectedApp];
                
                let selectedConvo;
                const availableConvos = appConvos.filter(c => !this.state.playedConvos.includes(c.id));
                
                if (availableConvos.length === 0) {
                    selectedConvo = appConvos[Math.floor(Math.random() * appConvos.length)];
                } else {
                    selectedConvo = availableConvos[Math.floor(Math.random() * availableConvos.length)];
                }

                if(selectedConvo && !this.state.playedConvos.includes(selectedConvo.id)) {
                    this.state.playedConvos.push(selectedConvo.id);
                }

                this.state = { 
                    ...this.state,
                    score: 0, msgs: 0, 
                    time: this.state.initialTime, 
                    active: true, paused: false,
                    currentCharId: this.state.currentCharId,
                    conversation: selectedConvo.msgs,
                    msgIndex: 0,
                    // Reset Metrics
                    correctClicks: 0, wrongClicks: 0, startTime: Date.now(), 
                    clickHistory: [], pressureClicks: 0, pressureCorrect: 0,
                    totalMsgsInConvo: selectedConvo.msgs.length
                };
                
                const spacer = document.createElement('div'); spacer.className = "flex-1";
                UI.elems.chatArea.innerHTML = ''; UI.elems.chatArea.appendChild(spacer);
                
                UI.showScreen('screen-game');
                UI.applyTheme(THEMES[selectedApp] ? selectedApp : 'imessage');
                
                UI.elems.contact.innerText = selectedConvo.title || "Unknown";
                UI.elems.score.innerText = 0;

                AudioSys.playMusic();
                if(this.loop) clearInterval(this.loop);
                this.loop = setInterval(() => this.tick(), 100);
                this.processNextMsg();
            },

            processNextMsg() {
                if (!this.state.active || this.state.paused) return;
                if (this.state.msgIndex >= this.state.conversation.length) { this.state.score += Math.floor(this.state.time * 100); this.end(); return; }
                const msg = this.state.conversation[this.state.msgIndex];
                if (msg.type === 'recv') {
                    UI.elems.msgBox.classList.remove('active'); UI.elems.status.innerText = "Online"; UI.elems.status.classList.remove('animate-pulse'); UI.elems.sendBtn.style.opacity = '0.5';
                    setTimeout(() => { if(!this.state.active) return; this.addChatBubble(msg.text, 'recv'); AudioSys.playRecv(); this.state.msgIndex++; setTimeout(() => this.processNextMsg(), 1000); }, 500);
                } else { this.startTypingLevel(msg); }
            },

            startTypingLevel(msg) {
                this.currentMsg = msg; this.mistakeCount = 0; this.mistakesFixed = 0;
                UI.elems.sendBtn.innerHTML = `<span>Intercept</span> <i class="ph-bold ph-shield-check"></i>`; UI.elems.sendBtn.style.background = 'white'; UI.elems.sendBtn.style.color = '#94a3b8'; UI.elems.sendBtn.style.cursor = 'not-allowed'; UI.elems.sendBtn.style.opacity = '1';
                UI.elems.msgBox.innerHTML = ''; UI.elems.msgBox.classList.add('active'); UI.elems.msgBox.classList.add('typing-cursor'); UI.elems.status.innerText = "BOSS TYPING..."; UI.elems.status.classList.add('animate-pulse'); this.isTyping = true;
                const words = msg.text.split(/(\s+)/); let wordIndex = 0; const speed = 40; 
                if (this.typeLoop) clearInterval(this.typeLoop);
                this.typeLoop = setInterval(() => {
                    if (!this.state.active || this.state.paused) return;
                    if (wordIndex < words.length) {
                        const w = words[wordIndex]; const span = document.createElement('span'); span.innerText = w;
                        const clean = w.trim().replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g,"");
                        const err = msg.mistakes ? msg.mistakes.find(m => m.o === clean) : null;
                        if (err && w.trim().length > 0) { this.mistakeCount++; span.className = 'mistake-word'; span.onclick = (e) => this.showPopup(e, span, err); }
                        UI.elems.msgBox.appendChild(span); if (w.trim().length > 0) AudioSys.playClick(); wordIndex++;
                    } else { clearInterval(this.typeLoop); this.isTyping = false; UI.elems.msgBox.classList.remove('typing-cursor'); if (this.mistakeCount === 0) { this.completeMsg(); } else { UI.elems.status.innerText = "Drafting paused"; UI.elems.status.classList.remove('animate-pulse'); } }
                }, speed);
            },

            addChatBubble(text, type) { const bubble = document.createElement('div'); bubble.className = `chat-bubble ${type}`; bubble.innerText = text; UI.elems.chatArea.appendChild(bubble); UI.elems.chatArea.scrollTop = UI.elems.chatArea.scrollHeight; },
            
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
                    const pronoun = this.state.currentCharId === 'girl' ? "SHE'S" : "HE'S";
                    UI.elems.sendBtn.innerText = `${pronoun} GONNA SEND IT!`; 
                } else { 
                    Boss.state(''); 
                    UI.elems.sendBtn.classList.remove('animate-shake'); 
                } 
                if (this.state.time <= 0) this.end(); 
            },

            showPopup(e, span, err) { 
                if(this.state.paused) return; e.stopPropagation(); 
                if(span.classList.contains('word-fixed')) return; 
                AudioSys.playTone('sine', 400, 0.1); 
                const pop = UI.elems.popup; pop.innerHTML = ''; 
                
                [...err.l].sort(()=>Math.random()-.5).forEach(opt => { 
                    const btn = document.createElement('button'); 
                    btn.className = "w-full text-left px-4 py-3 hover:bg-slate-100 text-slate-800 text-sm font-semibold border-b border-slate-100 last:border-0"; 
                    btn.innerText = opt; 
                    btn.onclick = () => { 
                        // Metric Recording
                        const now = Date.now();
                        const isLowTime = this.state.time <= 5; 
                        this.state.clickHistory.push({ time: now, correct: opt === err.c });
                        if(isLowTime) this.state.pressureClicks++;

                        if(opt === err.c) { 
                            this.state.correctClicks++;
                            if(isLowTime) this.state.pressureCorrect++;
                            AudioSys.playTone('sine', 800, 0.1); 
                            const original = span.innerText; const prefix = original.match(/^\W*/)[0] || ''; const suffix = original.match(/\W*$/)[0] || ''; span.innerText = prefix + opt + suffix; span.className = 'word-fixed'; this.state.score += 100; UI.elems.score.innerText = this.state.score; this.mistakesFixed++; if (this.mistakesFixed >= this.mistakeCount && !this.isTyping) { this.completeMsg(); } 
                        } else { 
                            this.state.wrongClicks++;
                            AudioSys.playTone('sawtooth', 150, 0.2); 
                            this.state.score = Math.max(0, this.state.score - 50); UI.elems.score.innerText = this.state.score; span.classList.add('animate-shake'); setTimeout(()=>span.classList.remove('animate-shake'), 300); 
                        } 
                        pop.classList.add('hidden'); 
                    }; 
                    pop.appendChild(btn); 
                }); 
                pop.classList.remove('hidden'); 
                const rect = span.getBoundingClientRect(); const container = document.getElementById('screen-game').getBoundingClientRect(); let left = rect.left - container.left; let top = rect.top - container.top - 120; if(left < 10) left = 10; if(left > container.width - 150) left = container.width - 150; if(top < 60) top = rect.bottom - container.top + 10; pop.style.left = left + 'px'; pop.style.top = top + 'px'; setTimeout(() => document.addEventListener('click', () => pop.classList.add('hidden'), {once:true}), 10); 
            },
            
            completeMsg() { const fixedText = UI.elems.msgBox.innerText; this.state.score += 500; this.state.msgs++; AudioSys.playTone('triangle', 600, 0.1); Boss.state('success'); UI.elems.sendBtn.style.background = 'var(--accent)'; UI.elems.sendBtn.style.color = 'white'; UI.elems.sendBtn.innerHTML = `<span>SAFE!</span> <i class="ph-bold ph-check"></i>`; UI.elems.feedback.classList.remove('opacity-0', 'scale-50'); UI.elems.feedback.classList.add('opacity-100', 'scale-100', 'rotate-[-6deg]'); setTimeout(() => { this.addChatBubble(fixedText, 'sent'); UI.elems.msgBox.innerHTML = ''; UI.elems.msgBox.classList.remove('active'); UI.elems.feedback.classList.remove('opacity-100', 'scale-100', 'rotate-[-6deg]'); UI.elems.feedback.classList.add('opacity-0', 'scale-50'); this.state.msgIndex++; if (this.state.active && !this.state.paused) this.processNextMsg(); }, 1000); },
            endGameLogic() { this.state.active = false; if(this.loop) clearInterval(this.loop); if(this.typeLoop) clearInterval(this.typeLoop); AudioSys.stopMusic(); Boss.state('angry'); },
            
            end() { 
                this.endGameLogic(); 
                UI.showScreen('screen-result');
                hideWorldScene(); 
                const s = this.state.score; 
                const multiplier = this.state.initialTime / 20; 
                let grade = 'F', title = 'Disaster', icon = '💀'; 
                // Adjusted Scoring:
                if(s >= 2800 * multiplier) { grade = 'S'; title = 'Godlike'; icon = '👑'; } 
                else if(s >= 2300 * multiplier) { grade = 'A'; title = 'Promoted'; icon = '🔥'; } 
                else if(s >= 1400 * multiplier) { grade = 'B'; title = 'Passable'; icon = '👍'; } 
                else if(s >= 400 * multiplier) { grade = 'C'; title = 'Risky'; icon = '😬'; } 
                
                document.getElementById('rank-grade').innerText = grade; 
                document.getElementById('rank-title').innerText = title; 
                document.getElementById('rank-icon').innerText = icon; 
                document.getElementById('final-score').innerText = s; 
                document.getElementById('final-count').innerText = this.state.msgs; 

                // --- RADAR GRAPH CALCULATIONS ---
                const totalClicks = this.state.correctClicks + this.state.wrongClicks;
                const timeElapsed = (Date.now() - this.state.startTime) / 1000;

                // 1. Precision (0-100)
                const precision = totalClicks > 0 ? (this.state.correctClicks / totalClicks) * 100 : 0;

                // 2. Velocity (Clicks per second normalized to 100, target 0.8 clicks/sec to account for read delays)
                const speedRaw = totalClicks / (timeElapsed || 1);
                const velocity = Math.min(100, (speedRaw / 0.8) * 100);

                // 3. Efficiency (Score per second, normalized to target 150 score/sec)
                const efficiencyRaw = s / (timeElapsed || 1);
                const efficiency = Math.min(100, (efficiencyRaw / 150) * 100);

                // 4. Consistency (Streak Ratio)
                // Need max streak for this. Let's calculate from clickHistory
                let currentStreak = 0;
                let maxStreak = 0;
                this.state.clickHistory.forEach(click => {
                    if (click.correct) currentStreak++;
                    else {
                        if (currentStreak > maxStreak) maxStreak = currentStreak;
                        currentStreak = 0;
                    }
                });
                if (currentStreak > maxStreak) maxStreak = currentStreak; // Final check

                const consistency = totalClicks > 0 ? (maxStreak / totalClicks) * 100 : 0; 
                
                // 5. Pressure Handling (Accuracy under <5s)
                const pressure = this.state.pressureClicks > 0 ? (this.state.pressureCorrect / this.state.pressureClicks) * 100 : Math.max(0, precision - 10); 

                // Draw Radar
                this.drawRadarGraph(precision, velocity, efficiency, consistency, pressure); // Note: using efficiency instead of focus for 3rd axis label match

                // --- HISTORY & COMPARISON ---
                const currentMetrics = { precision, velocity, efficiency, consistency, pressure, score: s };
                const lastRun = HistoryManager.getLast();
                
                const historyEl = document.getElementById('history-section');
                const historyContent = document.getElementById('history-content');
                
                if (lastRun) {
                    historyEl.classList.remove('hidden');
                    // Compare Score
                    const scoreDiff = s - lastRun.score;
                    const scoreIcon = scoreDiff >= 0 ? '<span class="text-green-500">▲</span>' : '<span class="text-red-500">▼</span>';
                    
                    // Compare Best Metric
                    const getBest = (m) => Object.keys(m).reduce((a, b) => m[a] > m[b] ? a : b);
                    const bestMetric = getBest({Precision: precision, Velocity: velocity, Efficiency: efficiency, Consistency: consistency, Pressure: pressure});
                    
                    // Smart Insight Logic
                    const velDiff = velocity - (lastRun.velocity || 0);
                    let insight = "";

                    if (scoreDiff >= 0) {
                        // Score Improved or Same
                        if (velDiff > 5) insight = "Faster & Better score! 🚀";
                        else if (velDiff < -5) insight = "Slower, but more precise! 🎯";
                        else insight = "Consistent speed, higher score! ✅";
                    } else {
                        // Score Dropped
                        if (velDiff > 5) insight = "Faster, but accuracy dropped. 📉";
                        else if (velDiff < -5) insight = "Slower run this time. 🐢";
                        else insight = "Score dropped slightly. 📉";
                    }

                    historyContent.innerHTML = `
                        <div class="flex justify-between font-bold">
                            <span>Score: ${s}</span>
                            <span>${scoreIcon} ${Math.abs(scoreDiff)} vs last</span>
                        </div>
                        <div class="mt-1 text-xs">
                            <p>• Strength: <span class="text-blue-500">${bestMetric}</span></p>
                            <p>• ${insight}</p>
                        </div>
                    `;
                } else {
                    historyEl.classList.add('hidden');
                }

                // Save current run
                HistoryManager.add(currentMetrics);
            },

            drawRadarGraph(acc, spd, eff, con, pre) {
                const canvas = document.getElementById('radar-chart');
                const ctx = canvas.getContext('2d');
                const w = canvas.width;
                const h = canvas.height;
                const cx = w / 2;
                const cy = h / 2;
                const radius = (Math.min(w, h) / 2) - 40; // Padding
                const stats = [acc, spd, eff, con, pre];
                const labels = ["Precision", "Velocity", "Efficiency", "Consistency", "Pressure"];

                // Clear
                ctx.clearRect(0, 0, w, h);

                // Draw Web
                ctx.strokeStyle = '#e2e8f0';
                ctx.lineWidth = 1;
                for (let i = 1; i <= 5; i++) {
                    ctx.beginPath();
                    for (let j = 0; j < 5; j++) {
                        const angle = (Math.PI * 2 * j) / 5 - Math.PI / 2;
                        const r = (radius / 5) * i;
                        const x = cx + Math.cos(angle) * r;
                        const y = cy + Math.sin(angle) * r;
                        if (j === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
                    }
                    ctx.closePath();
                    ctx.stroke();
                }

                // Draw Axes & Labels
                ctx.fillStyle = '#64748b';
                ctx.font = 'bold 11px Inter';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                for (let j = 0; j < 5; j++) {
                    const angle = (Math.PI * 2 * j) / 5 - Math.PI / 2;
                    const x = cx + Math.cos(angle) * radius;
                    const y = cy + Math.sin(angle) * radius;
                    ctx.beginPath();
                    ctx.moveTo(cx, cy);
                    ctx.lineTo(x, y);
                    ctx.strokeStyle = '#94a3b8';
                    ctx.stroke();

                    // Text position
                    const tx = cx + Math.cos(angle) * (radius + 20);
                    const ty = cy + Math.sin(angle) * (radius + 20);
                    ctx.fillText(labels[j], tx, ty);
                }

                // Draw Data Shape
                ctx.beginPath();
                for (let j = 0; j < 5; j++) {
                    const angle = (Math.PI * 2 * j) / 5 - Math.PI / 2;
                    const r = (radius * (stats[j] / 100)); 
                    const x = cx + Math.cos(angle) * r;
                    const y = cy + Math.sin(angle) * r;
                    if (j === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.fillStyle = 'rgba(59, 130, 246, 0.4)';
                ctx.fill();
                ctx.strokeStyle = '#2563eb';
                ctx.lineWidth = 3;
                ctx.stroke();

                // Contextual Feedback Text
                let feedback = "Balanced performance.";
                if (acc > 90 && spd > 80) feedback = "Surgical precision at high speed!";
                else if (spd > 90 && acc < 60) feedback = "Fast, but sloppy. Focus more.";
                else if (con < 50) feedback = "You panicked at the end!";
                else if (eff > 90) feedback = "Flawless focus. Zen master.";
                
                document.getElementById('radar-feedback').innerText = feedback;
            }
        };
function hideWorldScene() {
    const scene = document.getElementById("game-scene");
    if (scene) scene.classList.add("world-hidden");
}

function showWorldScene() {
    const scene = document.getElementById("game-scene");
    if (scene) scene.classList.remove("world-hidden");
}