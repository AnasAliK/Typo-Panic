# **GAME DESIGN DOCUMENT (GDD)**

## **Game Title (Working Title): *Save Me From Myself***

**Genre:** Fast-paced Text Puzzle / Humor
**Platform:** Web (HTML5, itch.io)
**Playtime:** 20 seconds per run
**Dev:** —––

---

## **1. High Concept**

A frantic, humorous micro-game where the player is the virtual assistant of a dyslexic character.
You must quickly spot and correct spelling mistakes in emails, messages, and texts before the character accidentally presses **SEND**.
The entire game lasts **20 seconds**, creating instant tension, comedy, and replayability.

---

## **2. Core Pillars**

1. **Instant Readability** — player understands gameplay within 1 second.
2. **Fast, Snappy Interactions** — Click → Fix → Next → Repeat.
3. **Humor & Personality** — silly, embarrassing, or important messages.
4. **High Pressure, Low Friction** — clicking only; no typing.

---

## **3. Gameplay Overview**

The player sees a message containing:

* Several correct words
* 2–4 misspelled words
* A ticking 20-second countdown

Each mistake is **clickable**.
Click → Pop-up shows 2–3 correction options.
Fix all mistakes → auto-advance to next message.

**Goal:** Fix as many messages as possible before time expires.

---

## **4. Player Goals**

### **Primary Goal**

* Correct maximum mistakes in 20 seconds.

### **Secondary Goals**

* Avoid embarrassing the character
* Climb score categories
* Discover funny endings

---

## **5. Game Loop**

1. Timer starts at 20 seconds
2. Display Message #1
3. Player clicks misspelled words
4. Chooses correction
5. When message is fixed → auto-advance
6. Repeat
7. Time ends → Results + Final Message

---

## **6. Controls**

**Mouse Only (Web Friendly)**

* **Left Click:**

  * Select word
  * Choose correction
  * Press UI buttons

*No keyboard typing required.*

---

## **7. Difficulty Curve**

### **Message #1**

* 2 mistakes
* Simple errors (“liek”, “teh”)

### **Message #2**

* 2–3 mistakes
* Slightly tricky (homophones, swapped letters)

### **Message #3+**

* 3+ mistakes
* Longer words
* Misleading correction options

**As timer decreases:**

* UI shakes
* Character “tries to press SEND”
* Stress increases

---

## **8. Messages & Mistakes (Examples)**

### **Message 1 (To Boss)**

> “I wil be late for werk becase of trafiic.”

Mistakes:

* wil → will
* werk → work
* becase → because
* trafiic → traffic

---

### **Message 2 (To Crush)**

> “U look amazeng taday, wanna hung out?”

Mistakes:

* amazeng → amazing
* taday → today
* hung → hang

---

### **Message 3 (To Professor)**

> “Respeccted Sir, plese accept my asignment late submision.”

Mistakes:

* Respeccted → Respected
* plese → please
* asignment → assignment
* submision → submission

---

## **9. Scoring System**

**Per Corrected Mistake:** +100
**Per Completed Message:** +200

**Accuracy Penalty:**

* Wrong option: −50
* No retry on that word

**Final Breakdown:**

* Mistakes fixed
* Messages completed
* Accuracy %
* Time efficiency

---

## **10. Endings (Score-Based)**

**S Rank — Perfect Assistant:**

> “You saved my entire reputation. I owe you cookies.”

**A Rank — Great Assistant:**

> “Only one embarrassing slip-up today. Nice work!”

**B Rank — Average Assistant:**

> “You did okay… I guess? My boss laughed a bit though.”

**C Rank — Bad Assistant:**

> “Bro… I just texted my crush: ‘I liek ur face hole’.”

**F Rank — Disaster:**

> “I’ve been banned from emailing. You are fired.”

---

## **11. Game Flow**

### **1. Title Screen**

* Logo
* Start Button
* Credits

### **2. Main Game (20 seconds)**

* Message displayed
* Clickable mistakes
* Pop-up corrections
* Timer ticking
* Auto progress

### **3. Results Screen**

* Score
* Rank
* Funny message

### **4. Replay**

* Instant restart
* Unlimited attempts

---

## **12. UI Design**

### **Layout**

Web-optimized, clean, minimalist.

### **Pop-up Correction Example**

Incorrect Word: **“amazeng”**

Options:

* amazing
* amusing
* Amazon

---

## **13. Art Style**

**Style:**

* Flat UI
* Minimalist
* Light humor emojis
* Soft shadows
* No textures > 256px

**Palette:**

* Light backgrounds
* Incorrect words highlighted pastel red
* Blue/green button accents

**Theme:**
“Modern virtual assistant interface” — Gmail + ChatGPT + OS UI fusion.

---

## **14. Audio Style**

**Sound Effects:**

* Click → pop
* Correct → ding
* Wrong → error beep
* Timer low → ticking
* Final score → soft jingle

**Music:**

* Light office-style
* Small file size (<1MB)
* Starts only after Start button

---

## **15. Technical Requirements**

**Engine:** 2D only
**Web Optimized:**

* Avoid large fonts
* PNG compression
* Disable HDR
* No heavy particles
* Keep ZIP < 20 MB

---

## **16. Scenes (Godot)**

```
/scenes
  TitleScreen.tscn
  Game.tscn
  ResultScreen.tscn
  WordPopup.tscn

/scripts
  GameManager.gd
  MessageManager.gd
  WordButton.gd
  TimerManager.gd
```

### **Game.tscn Structure**

```
Game
├── MessagePanel
├── TimerLabel
├── PopupLayer
├── SendButtonFake
└── MessageManager
```

---

## **17. Gameplay Systems**

### **1. Message System**

* Stores text
* Stores mistakes + correct answers
* Turns mistakes into buttons
* Loads next message instantly

### **2. Word Interaction System**

* Misspelled words → clickable nodes
* Click → spawn correction pop-up
* Selection → replace text

### **3. Timer System**

* Global 20-sec countdown
* Ends game at 0

### **4. Score System**

* Track fixes
* Track completed messages
* Calculate rank

---

## **18. Performance (Web)**

* No fonts > 256px
* No particles > 20
* Throttled UI updates
* Preloaded scenes
* One theme for whole UI

---

## **19. Polish Additions**

* SEND button shake every 3s
* Character tries to send early
* Screen flash at last 3s
* Mistakes glow briefly on click
* Random mini pop-ups:

  * “Typing…”
  * “Thinking…”

---

## **20. Monetization**

**None — jam game.**
Possible future:

* Expanded version
* 100+ messages
* Daily challenges
* Steam release

---


✅ add images / UI mockups
Just tell me!
