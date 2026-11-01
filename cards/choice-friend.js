window.CARDS = (window.CARDS || []).concat([
  {
    id: "choice-friend-01",
    rel: "friend",
    kind: "everyday",
    type: "choice",
    setup: "Your friend Rosa has been caring for her dad after his stroke. She calls you late one night.",
    speaker: "Rosa",
    quote: "I love him, but some days I resent having to do all of this.",
    options: [
      { tone: "green", text: "Both of those can be true. You're carrying so much right now.", note: "Validates that love and resentment can coexist, without judging her." },
      { tone: "yellow", text: "That's really tough. I hope he gets better soon.", note: "Kind, but it skips past what she just admitted feeling." },
      { tone: "red", text: "You shouldn't feel guilty. Any daughter would feel that way.", trap: "Dismissing" },
      { tone: "red", text: "Have you looked into home aides? That could take some pressure off.", trap: "Fixing" }
    ]
  },
  {
    id: "choice-friend-02",
    rel: "friend",
    kind: "everyday",
    type: "choice",
    setup: "Your friend Kenji just finished his first year sober. He mentions it casually over coffee.",
    speaker: "Kenji",
    quote: "So, it's been a year today. No drinks.",
    options: [
      { tone: "green", text: "A whole year, Kenji. That's huge. How does it feel today?", note: "Celebrates the milestone and gets curious about his experience of it." },
      { tone: "yellow", text: "Oh nice, congrats. Coffee's on me.", note: "Friendly, but it treats a big milestone like small news." },
      { tone: "red", text: "Honestly, I could never give up drinking. I'd lose my mind.", trap: "Making it about you" },
      { tone: "red", text: "Wow. So do you think you'll ever have just one again?", trap: "Changing the subject" }
    ]
  },
  {
    id: "choice-friend-03",
    rel: "friend",
    kind: "everyday",
    type: "choice",
    setup: "Your friend Hannah was laid off yesterday after eight years at the same company.",
    speaker: "Hannah",
    quote: "I keep waking up and forgetting, and then I remember all over again.",
    options: [
      { tone: "green", text: "That sounds disorienting. Eight years is a big part of who you've been.", note: "Names the feeling and recognizes what the job meant to her." },
      { tone: "yellow", text: "I'm so sorry. Let me know if you need anything.", note: "Sincere, but generic; it puts the work of asking back on her." },
      { tone: "red", text: "At least you'll get some time off before the next thing.", trap: "Silver lining" },
      { tone: "red", text: "Update your resume this week while it's fresh. The market's moving fast.", trap: "Advice" }
    ]
  },
  {
    id: "choice-friend-04",
    rel: "friend",
    kind: "everyday",
    type: "choice",
    setup: "Your friend Diego has been single for a while. He tells you about a date that ended early.",
    speaker: "Diego",
    quote: "She left before dessert. I'm starting to think it's just me.",
    options: [
      { tone: "green", text: "Ouch. That would sting. What's making it feel like it's about you?", note: "Acknowledges the hurt, then gets curious about the bigger worry underneath." },
      { tone: "yellow", text: "Her loss, man. Plenty more people out there.", note: "Supportive in spirit, but brushes past his real fear." },
      { tone: "red", text: "Dating is brutal for everyone. My last three were way worse.", trap: "One-upping" },
      { tone: "red", text: "Maybe try a different app? Or skip dinner next time and just meet for a quick drink first.", trap: "Fixing" }
    ]
  },
  {
    id: "choice-friend-05",
    rel: "friend",
    kind: "everyday",
    type: "choice",
    setup: "Your friend Aisha just found out she's pregnant after two years of trying.",
    speaker: "Aisha",
    quote: "I'm almost scared to be happy about it.",
    options: [
      { tone: "green", text: "After waiting this long, that makes sense. I'm so happy with you.", note: "Validates the fear and celebrates gently, without pushing her to feel only joy." },
      { tone: "yellow", text: "Congratulations! This is amazing news.", note: "Warm, but it doesn't touch the fear she just shared." },
      { tone: "red", text: "Don't think like that. Everything's going to be fine.", trap: "Dismissing" },
      { tone: "red", text: "My sister was so nervous with her first too, and she ended up having twins!", trap: "Making it about you" }
    ]
  },
  {
    id: "choice-friend-06",
    rel: "friend",
    kind: "everyday",
    type: "choice",
    setup: "Your friend Wes just got his citizenship after a long process. He sends you a photo from the ceremony.",
    speaker: "Wes",
    quote: "Eleven years of paperwork, and it's finally official!",
    options: [
      { tone: "green", text: "Eleven years! Wes, that's incredible. What was it like standing up there?", note: "Celebrates the long road and invites him to share the moment." },
      { tone: "yellow", text: "Congrats! Great photo.", note: "Nice, but small for something this big to him." },
      { tone: "red", text: "That's great. Bureaucracy is such a nightmare, right? The DMV took me months.", trap: "One-upping" },
      { tone: "red", text: "Nice! So now you can finally vote. Who are you voting for?", trap: "Changing the subject" }
    ]
  },
  {
    id: "choice-friend-07",
    rel: "friend",
    kind: "everyday",
    type: "choice",
    setup: "Your friend Mei just got back her first essay from a night class she started at forty.",
    speaker: "Mei",
    quote: "I got an A. I honestly didn't think I could still do this.",
    options: [
      { tone: "green", text: "You absolutely can! That must feel amazing after all that doubt.", note: "Celebrates and names the relief behind her pride." },
      { tone: "yellow", text: "Nice job. School's school, you'll be fine.", note: "Encouraging, but it shrinks what this meant to her." },
      { tone: "red", text: "Of course you got an A. Those classes are usually pretty easy.", trap: "Minimizing" },
      { tone: "red", text: "Great. Now don't let it go to your head. Keep the momentum going.", trap: "Advice" }
    ]
  },
  {
    id: "choice-friend-08",
    rel: "friend",
    kind: "everyday",
    type: "choice",
    setup: "Your friend Felix's landlord is selling the building, and Felix has to move out in sixty days.",
    speaker: "Felix",
    quote: "I just finally got that place feeling like home.",
    options: [
      { tone: "green", text: "That's a real loss. You put so much into making it yours.", note: "Validates the loss of home, not just the hassle of moving." },
      { tone: "yellow", text: "Ugh, moving is the worst. Sorry, man.", note: "Sympathetic, but it focuses on logistics instead of his attachment." },
      { tone: "red", text: "Maybe it's a sign. You could get somewhere even better.", trap: "Silver lining" },
      { tone: "red", text: "Sixty days is actually pretty generous. Some people get thirty.", trap: "Minimizing" }
    ]
  },
  {
    id: "choice-friend-09",
    rel: "friend",
    kind: "conflict",
    type: "choice",
    setup: "You told a mutual friend about your friend Talia's breakup before she was ready to share it.",
    speaker: "Talia",
    quote: "That was mine to tell. Now everyone's asking me about it.",
    options: [
      { tone: "green", text: "You're right. It wasn't my news to share, and I'm sorry I did.", note: "Owns the mistake directly, with no excuses." },
      { tone: "yellow", text: "Sorry. I'll be more careful next time.", note: "An apology, but brief and about the future, not her hurt." },
      { tone: "red", text: "I only told Jen, and I asked her to keep it quiet. I didn't think she'd tell anyone.", trap: "Explaining yourself" },
      { tone: "red", text: "I figured people would find out eventually anyway.", trap: "Getting defensive" }
    ]
  },
  {
    id: "choice-friend-10",
    rel: "friend",
    kind: "conflict",
    type: "choice",
    setup: "Your friend Andre invited you to his gallery opening. You said you'd come, then didn't show.",
    speaker: "Andre",
    quote: "I kept looking at the door all night.",
    options: [
      { tone: "green", text: "I'm so sorry. You were counting on me, and I let you down.", note: "Owns it and reflects back how the absence felt to him." },
      { tone: "yellow", text: "I feel bad. I'll definitely make the next one.", note: "Well-meant, but it moves past the hurt to a promise." },
      { tone: "red", text: "I know, I know. Work completely buried me that day and I didn't get out until nine.", trap: "Explaining yourself" },
      { tone: "red", text: "I'm sure there were tons of people there, though.", trap: "Minimizing" }
    ]
  },
  {
    id: "choice-friend-11",
    rel: "friend",
    kind: "conflict",
    type: "choice",
    setup: "In your group chat, your friend Bea's messages keep getting skipped over. She texts you privately.",
    speaker: "Bea",
    quote: "Do you guys even read what I post? Nobody ever responds to me.",
    options: [
      { tone: "green", text: "That sounds really isolating. I'm sorry I've been part of it.", note: "Names her feeling and owns your share, without debating the facts." },
      { tone: "yellow", text: "Of course we read them! The chat just moves fast.", note: "Reassuring, but it explains the problem away instead of hearing her." },
      { tone: "red", text: "I don't think anyone's doing it on purpose. You might be reading into it.", trap: "Dismissing" },
      { tone: "red", text: "Ha, nobody responds to my stuff either. That chat is chaos.", trap: "Joking it off" }
    ]
  },
  {
    id: "choice-friend-12",
    rel: "friend",
    kind: "conflict",
    type: "choice",
    setup: "Your friend Ravi lent you money three months ago. You haven't mentioned paying it back.",
    speaker: "Ravi",
    quote: "I hate bringing this up, but I could really use that money back.",
    options: [
      { tone: "green", text: "You shouldn't have had to ask. I'm sorry. I'll pay you back this week.", note: "Owns it, eases his discomfort, and commits to something concrete." },
      { tone: "yellow", text: "Oh right, totally. I'll get that to you.", note: "Agreeable, but vague, and it ignores how awkward this was for him." },
      { tone: "red", text: "Yeah, I've been meaning to, but things have been really tight with rent and the car repair.", trap: "Explaining yourself" },
      { tone: "red", text: "Okay, but you could have just reminded me sooner.", trap: "Yes, but" }
    ]
  },
  {
    id: "choice-friend-13",
    rel: "friend",
    kind: "repair",
    type: "choice",
    setup: "Your friend Gabe said he's thinking of leaving his job to start a bakery. You said, \"Most of those fail, you know.\"",
    speaker: "Gabe",
    quote: "Wow. Glad I ran it by you.",
    options: [
      { tone: "green", text: "That was my nerves talking. Sorry. What's drawing you to it?", note: "Owns the comment and gets curious about his dream instead." },
      { tone: "yellow", text: "Sorry, I didn't mean it like that.", note: "An apology, but it doesn't reopen the conversation." },
      { tone: "red", text: "I'm just being realistic, Gabe. Someone has to say it before you quit.", trap: "Getting defensive" },
      { tone: "red", text: "Okay, but have you thought about doing it on weekends first?", trap: "Advice" }
    ]
  },
  {
    id: "choice-friend-14",
    rel: "friend",
    kind: "repair",
    type: "choice",
    setup: "Your friend Ines mentioned she's been feeling down for weeks. You said, \"Have you tried getting more sleep?\"",
    speaker: "Ines",
    quote: "It's not a sleep thing.",
    options: [
      { tone: "green", text: "Sorry, I jumped to fixing it. What's it been like for you?", note: "Owns the quick fix and turns to listening with an open question." },
      { tone: "yellow", text: "Okay. Well, I hope you feel better soon.", note: "Kind, but it ends the conversation she was trying to start." },
      { tone: "red", text: "Sleep really does help with everything, though. Exercise and getting outside do too.", trap: "Yes, but" },
      { tone: "red", text: "Everyone gets the blues sometimes. It'll pass.", trap: "Minimizing" }
    ]
  },
  {
    id: "choice-friend-15",
    rel: "friend",
    kind: "repair",
    type: "choice",
    setup: "Your friend Leo showed you photos of the house he and his partner just bought. You said, \"Isn't that area kind of sketchy?\"",
    speaker: "Leo",
    quote: "We love it there.",
    options: [
      { tone: "green", text: "That was thoughtless of me. Sorry. What do you love about it?", note: "Owns the comment and shows real interest in his excitement." },
      { tone: "yellow", text: "Sorry. It looks really nice.", note: "Polite, but quick, and it doesn't share in his joy." },
      { tone: "red", text: "I just heard some stuff about it. I was only looking out for you.", trap: "Explaining yourself" },
      { tone: "red", text: "Ha, I'm sure it'll be fine. You'll just need a good lock.", trap: "Joking it off" }
    ]
  }
]);
