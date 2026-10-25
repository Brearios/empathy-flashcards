window.CARDS = (window.CARDS || []).concat([
  {
    id: "friend-01",
    rel: "friend",
    kind: "everyday",
    setup: "Your friend Tom has trained for a marathon for four months. He just hurt his knee.",
    speaker: "Tom",
    quote: "Four months of training and now I can't even run the race.",
    responses: [
      { move: "Name the feeling", text: "Oh man, that's gutting. You must be so disappointed." },
      { move: "Validate", text: "Of course this hurts. You put months of early mornings into this." },
      { move: "Get curious", text: "What was the race going to mean for you?" }
    ],
    trap: { type: "Silver lining", text: "At least there's always next year's race." }
  },
  {
    id: "friend-02",
    rel: "friend",
    kind: "everyday",
    setup: "Your friend Alex moved to a new city a month ago. You're catching up on the phone.",
    speaker: "Alex",
    quote: "I don't really know anyone here yet.",
    responses: [
      { move: "Name the feeling", text: "That sounds lonely, especially with everything else being new too." },
      { move: "Get curious", text: "How have the evenings and weekends been?" },
      { move: "Be present", text: "I'm glad you called. Call me anytime it feels too quiet." }
    ],
    trap: { type: "Advice", text: "You should join a running club or something. That's how you meet people." }
  },
  {
    id: "friend-03",
    rel: "friend",
    kind: "everyday",
    setup: "Your friend Omar opens up over lunch about something he hasn't told many people.",
    speaker: "Omar",
    quote: "We've been trying for a baby for two years, and it's just not happening.",
    responses: [
      { move: "Thank them", text: "Thank you for telling me, Omar. I know that's not easy to say." },
      { move: "Name the feeling", text: "That sounds really painful, hoping and being let down month after month." },
      { move: "Be present", text: "I'm so sorry. You don't have to explain anything else. I'm here." }
    ],
    trap: { type: "Advice", text: "Have you thought about just relaxing? My cousin got pregnant the second she stopped trying." }
  },
  {
    id: "friend-04",
    rel: "friend",
    kind: "everyday",
    setup: "Your friend Nadia is quiet at dinner. When you ask, she shrugs.",
    speaker: "Nadia",
    quote: "I've been feeling really behind compared to everyone my age.",
    responses: [
      { move: "Validate", text: "That comparison feeling is so heavy. A lot of people feel it, even if no one says it." },
      { move: "Get curious", text: "What's been bringing it up lately?" },
      { move: "Reflect back", text: "So it's like everyone got a schedule and you didn't?" }
    ],
    trap: { type: "Dismissing", text: "You're fine! Honestly, you're doing better than most people." }
  },
  {
    id: "friend-05",
    rel: "friend",
    kind: "everyday",
    setup: "Your friend Ben's dad had heart surgery this morning. Ben texts you an update.",
    speaker: "Ben",
    quote: "It went fine, but I'm still kind of shaky.",
    responses: [
      { move: "Validate", text: "That makes total sense. You've been bracing for days, and your body hasn't caught up yet." },
      { move: "Offer help", text: "Want me to bring food by tonight so you don't have to think about dinner?" },
      { move: "Be present", text: "I'm so glad it went well. I'm around all day if you want to talk." }
    ],
    trap: { type: "Minimizing", text: "Well, it went fine, so you can relax now!" }
  },
  {
    id: "friend-06",
    rel: "friend",
    kind: "everyday",
    setup: "Your friend Mike calls you, practically shouting.",
    speaker: "Mike",
    quote: "I sold my first painting! A stranger bought it!",
    responses: [
      { move: "Celebrate", text: "Mike! That's amazing! Someone wanted your work on their wall!" },
      { move: "Get curious", text: "How did it feel when you found out?" },
      { move: "Name the feeling", text: "You must be so proud. You've been at this for years." }
    ],
    trap: { type: "Changing the subject", text: "Nice! How much did you get for it?" }
  },
  {
    id: "friend-07",
    rel: "friend",
    kind: "everyday",
    setup: "Your friend Jess texts you a photo of a handmade quilt.",
    speaker: "Jess",
    quote: "I finally finished the quilt I've been working on for a year.",
    responses: [
      { move: "Celebrate", text: "A whole year! It's beautiful. Look at those colors!" },
      { move: "Name the feeling", text: "You must feel so good seeing it done." },
      { move: "Get curious", text: "What was the hardest part to get right?" }
    ],
    trap: { type: "Making it about you", text: "Love it! You should make me one next." }
  },
  {
    id: "friend-08",
    rel: "friend",
    kind: "everyday",
    setup: "Your friend Derek calls to tell you he got the job offer he really wanted.",
    speaker: "Derek",
    quote: "I still can't believe they picked me.",
    responses: [
      { move: "Celebrate", text: "I can! Congratulations, Derek. This is huge." },
      { move: "Reflect back", text: "It sounds like part of you still can't quite take it in." },
      { move: "Get curious", text: "What are you most excited about?" }
    ],
    trap: { type: "One-upping", text: "Nice! When I got my job they made me an offer the same day." }
  },
  {
    id: "friend-09",
    rel: "friend",
    kind: "conflict",
    setup: "You canceled on helping your friend Paul move, the morning of.",
    speaker: "Paul",
    quote: "You said you'd help me and then you bailed.",
    responses: [
      { move: "Own it", text: "You're right. I said I'd be there and I wasn't. I'm sorry." },
      { move: "Name the feeling", text: "That must have left you scrambling and pretty let down." },
      { move: "Offer help", text: "Can I come help unpack this weekend? I want to make it up to you." }
    ],
    trap: { type: "Explaining yourself", text: "I know, but something came up and I really couldn't get out of it." }
  },
  {
    id: "friend-10",
    rel: "friend",
    kind: "conflict",
    setup: "Your friend Priya has seemed distant. You finally ask her if something's wrong.",
    speaker: "Priya",
    quote: "You haven't asked me a single question about my life in months.",
    responses: [
      { move: "Own it", text: "That stings, and I think you're right. I'm sorry." },
      { move: "Name the feeling", text: "That must have felt really one-sided. Like you were showing up and I wasn't." },
      { move: "Get curious", text: "I want to know. What's been going on with you?" }
    ],
    trap: { type: "Getting defensive", text: "That's not fair. I've had a lot going on lately." }
  },
  {
    id: "friend-11",
    rel: "friend",
    kind: "conflict",
    setup: "At a party, you made a joke about your friend Carlos's new haircut. Everyone laughed.",
    speaker: "Carlos",
    quote: "You made fun of me in front of everyone.",
    responses: [
      { move: "Own it", text: "I did, and I'm sorry. That wasn't okay." },
      { move: "Name the feeling", text: "That must have been embarrassing, with everyone laughing." },
      { move: "Thank them", text: "Thanks for telling me instead of just letting it go. It won't happen again." }
    ],
    trap: { type: "Joking it off", text: "Come on, it was just a joke. You know I love the haircut." }
  },
  {
    id: "friend-12",
    rel: "friend",
    kind: "conflict",
    setup: "You and your friend Sam always split planning trips, but this year you left it all to him.",
    speaker: "Sam",
    quote: "I'm tired of being the one who organizes everything.",
    responses: [
      { move: "Own it", text: "That's fair. I've been leaning on you and not pulling my weight." },
      { move: "Validate", text: "It makes sense you're tired. It's a lot of invisible work." },
      { move: "Offer help", text: "I'll take the next one, start to finish. Does that sound fair?" }
    ],
    trap: { type: "Yes, but", text: "Yeah, but you're so much better at planning than I am." }
  },
  {
    id: "friend-13",
    rel: "friend",
    kind: "repair",
    setup: "Your friend Grace told you she got engaged. You said, \"Already? You've only been dating a year.\"",
    speaker: "Grace",
    quote: "I thought you'd be happy for me.",
    responses: [
      { move: "Own it", text: "I am, and I'm sorry that wasn't the first thing out of my mouth." },
      { move: "Celebrate", text: "Congratulations, Grace! I'm really happy for you." },
      { move: "Get curious", text: "Tell me how it happened. I want to hear everything." }
    ],
    trap: { type: "Explaining yourself", text: "I am happy! I was just surprised, that's all." }
  },
  {
    id: "friend-14",
    rel: "friend",
    kind: "repair",
    setup: "Your friend Lena told you her dog died. You asked, \"Are you going to get another one?\"",
    speaker: "Lena",
    quote: "It's been two days.",
    responses: [
      { move: "Own it", text: "I'm sorry, that was way too soon to ask." },
      { move: "Validate", text: "Of course. You're still grieving him. He was family." },
      { move: "Get curious", text: "Will you tell me about him?" }
    ],
    trap: { type: "Explaining yourself", text: "I just meant it might help to have another dog around eventually." }
  },
  {
    id: "friend-15",
    rel: "friend",
    kind: "repair",
    setup: "Your friend Jamal told you he was diagnosed with an anxiety disorder. You said, \"Everyone gets anxious sometimes.\"",
    speaker: "Jamal",
    quote: "That's not what I meant.",
    responses: [
      { move: "Own it", text: "You're right, I'm sorry. I made it sound small." },
      { move: "Validate", text: "This is something real you're dealing with, not just a bad day." },
      { move: "Get curious", text: "What's it actually like for you day to day?" }
    ],
    trap: { type: "Minimizing", text: "I know, I just mean you're not alone. Lots of people deal with it." }
  }
]);
