window.CARDS = (window.CARDS || []).concat([
  {
    id: "coworker-01",
    rel: "coworker",
    kind: "everyday",
    setup: "Your coworker Priya just finished presenting to leadership.",
    speaker: "Priya",
    quote: "I think I rambled the whole time.",
    responses: [
      { move: "Validate", text: "That after-presentation replay is the worst. Everyone gets it, especially in front of leadership." },
      { move: "Name the feeling", text: "Sounds like you're feeling pretty exposed right now." },
      { move: "Get curious", text: "Which part are you replaying most?" }
    ],
    trap: { type: "Dismissing", text: "Nah, you were fine. Don't worry about it." }
  },
  {
    id: "coworker-02",
    rel: "coworker",
    kind: "everyday",
    setup: "Your coworker Ana just came back from bereavement leave after her father died.",
    speaker: "Ana",
    quote: "Everyone keeps asking if I'm okay, and I don't know what to say.",
    responses: [
      { move: "Validate", text: "That sounds exhausting. You don't owe anyone an answer." },
      { move: "Be present", text: "I'm just glad you're here. No questions from me unless you want to talk." },
      { move: "Offer help", text: "If you want a buffer in meetings this week, just give me a look and I'll jump in." }
    ],
    trap: { type: "Silver lining", text: "Well, at least you got some time off to be with family." }
  },
  {
    id: "coworker-03",
    rel: "coworker",
    kind: "everyday",
    setup: "Your coworker Kim looks frazzled at her desk.",
    speaker: "Kim",
    quote: "My kid's been sick all week and I'm behind on everything.",
    responses: [
      { move: "Name the feeling", text: "You must feel pulled in two directions all week." },
      { move: "Validate", text: "That's a hard week from both sides. No wonder you're behind." },
      { move: "Offer help", text: "Is there anything I can take off your plate?" }
    ],
    trap: { type: "One-upping", text: "Oh, when my kids had the flu last winter, I didn't sleep for ten days." }
  },
  {
    id: "coworker-04",
    rel: "coworker",
    kind: "everyday",
    setup: "Your coworker Dev looks wiped out on Friday afternoon.",
    speaker: "Dev",
    quote: "I've been working until midnight all week and nobody seems to notice.",
    responses: [
      { move: "Name the feeling", text: "Exhausted and invisible at the same time. That's a rough combination." },
      { move: "Validate", text: "I noticed, for what it's worth. That's a lot of late nights." },
      { move: "Get curious", text: "What's been driving the late nights?" }
    ],
    trap: { type: "Advice", text: "You should really set some boundaries and log off at six." }
  },
  {
    id: "coworker-05",
    rel: "coworker",
    kind: "everyday",
    setup: "Your coworker Ellie just got out of a meeting with her manager.",
    speaker: "Ellie",
    quote: "I didn't get the promotion.",
    responses: [
      { move: "Name the feeling", text: "Oh, Ellie. That's so disappointing. I know how much you wanted it." },
      { move: "Be present", text: "I'm sorry. Want to grab a coffee and get out of here for a bit?" },
      { move: "Get curious", text: "Do you want to vent, or would a distraction help more right now?" }
    ],
    trap: { type: "Silver lining", text: "Maybe it's for the best. Now you won't have all that extra stress." }
  },
  {
    id: "coworker-06",
    rel: "coworker",
    kind: "everyday",
    setup: "Your coworker Marcus came back from parental leave two weeks ago.",
    speaker: "Marcus",
    quote: "I haven't slept more than three hours straight since the baby came.",
    responses: [
      { move: "Validate", text: "That's brutal. Anyone would be running on fumes." },
      { move: "Get curious", text: "How are you and your partner holding up?" },
      { move: "Offer help", text: "If there's a meeting I can cover for you this week, just say the word." }
    ],
    trap: { type: "Joking it off", text: "Welcome to the next eighteen years, buddy!" }
  },
  {
    id: "coworker-07",
    rel: "coworker",
    kind: "everyday",
    setup: "Your coworker Jordan stops by your desk grinning.",
    speaker: "Jordan",
    quote: "The project I've been on for a year finally launches next week!",
    responses: [
      { move: "Celebrate", text: "That's huge! A whole year of work, and it's finally out there." },
      { move: "Name the feeling", text: "You must be thrilled and a little terrified at the same time." },
      { move: "Get curious", text: "What part are you proudest of?" }
    ],
    trap: { type: "Yes, but", text: "Nice. Just hope nothing breaks on launch day." }
  },
  {
    id: "coworker-08",
    rel: "coworker",
    kind: "everyday",
    setup: "Your coworker Tomás just walked out of his manager's office looking stunned.",
    speaker: "Tomás",
    quote: "I got promoted. I honestly didn't think they'd pick me.",
    responses: [
      { move: "Celebrate", text: "Tomás, congratulations! That's so well deserved." },
      { move: "Reflect back", text: "Sounds like you're still catching up to the news. Let it sink in." },
      { move: "Get curious", text: "What are you most excited to take on?" }
    ],
    trap: { type: "Making it about you", text: "Wow, I've been waiting two years for a promotion here." }
  },
  {
    id: "coworker-09",
    rel: "coworker",
    kind: "conflict",
    setup: "In a meeting, you've cut your coworker Nia off a few times.",
    speaker: "Nia",
    quote: "That's the third time today you've interrupted me.",
    responses: [
      { move: "Own it", text: "You're right. I'm sorry. Please finish." },
      { move: "Thank them", text: "Thanks for calling it out. I want to hear what you were saying." },
      { move: "Validate", text: "That's frustrating, especially when you're trying to make a point." }
    ],
    trap: { type: "Explaining yourself", text: "Sorry, I just get excited and want to add to the idea." }
  },
  {
    id: "coworker-10",
    rel: "coworker",
    kind: "conflict",
    setup: "After a meeting, your coworker Rafael catches you in the hallway.",
    speaker: "Rafael",
    quote: "I feel like my ideas only count when you repeat them.",
    responses: [
      { move: "Own it", text: "You're right. That was your idea, and I should have said so in the room." },
      { move: "Validate", text: "That's really frustrating, and you're right to bring it up." },
      { move: "Get curious", text: "When else have you noticed it? I want to get this right." }
    ],
    trap: { type: "Getting defensive", text: "I wasn't trying to take credit. We're all on the same team." }
  },
  {
    id: "coworker-11",
    rel: "coworker",
    kind: "conflict",
    setup: "A deadline you owned slipped for the second time. Your manager, Helen, pulls you aside.",
    speaker: "Helen",
    quote: "I'm frustrated that this slipped again.",
    responses: [
      { move: "Own it", text: "That's fair. It's the second time, and I should have flagged it sooner." },
      { move: "Reflect back", text: "I get it. When I slip, it makes it hard for you to plan around me." },
      { move: "Get curious", text: "What would help you most from me going forward?" }
    ],
    trap: { type: "Explaining yourself", text: "Well, I was waiting on the other team, so it's not really on me." }
  },
  {
    id: "coworker-12",
    rel: "coworker",
    kind: "conflict",
    setup: "You changed a shared document your coworker Sam had been leading, without asking first.",
    speaker: "Sam",
    quote: "You rewrote my whole section without even talking to me.",
    responses: [
      { move: "Own it", text: "You're right. I should have talked to you first. I'm sorry." },
      { move: "Validate", text: "That was your work. I'd be upset too." },
      { move: "Get curious", text: "Can we go through it together? I want to hear what you were going for." }
    ],
    trap: { type: "Getting defensive", text: "I was just trying to help. It reads better now." }
  },
  {
    id: "coworker-13",
    rel: "coworker",
    kind: "repair",
    setup: "Your coworker Grace told you her dad died. You said, \"At least he lived a long life.\"",
    speaker: "Grace",
    quote: "I guess. It doesn't feel that way.",
    responses: [
      { move: "Own it", text: "I'm sorry, that came out wrong. Losing your dad hurts no matter how old he was." },
      { move: "Be present", text: "I'm really sorry, Grace. I'm here if you want to talk about him." },
      { move: "Get curious", text: "How are you doing, really?" }
    ],
    trap: { type: "Explaining yourself", text: "I just meant it's good that he had a full life." }
  },
  {
    id: "coworker-14",
    rel: "coworker",
    kind: "repair",
    setup: "Your coworker Leo said he's overwhelmed with his workload. You said, \"We all are.\"",
    speaker: "Leo",
    quote: "Okay. Never mind.",
    responses: [
      { move: "Own it", text: "Wait, I'm sorry. That was dismissive." },
      { move: "Get curious", text: "Tell me what's on your plate right now." },
      { move: "Validate", text: "You wouldn't have said it if it weren't a lot. I want to hear it." }
    ],
    trap: { type: "Minimizing", text: "I just meant it's a busy season for everyone. It'll calm down." }
  },
  {
    id: "coworker-15",
    rel: "coworker",
    kind: "repair",
    setup: "A new coworker, Mei, mentioned she was laid off from her last job. You asked, \"Were you a low performer?\"",
    speaker: "Mei",
    quote: "No. They cut the whole department.",
    responses: [
      { move: "Own it", text: "I'm sorry, that was a thoughtless question." },
      { move: "Name the feeling", text: "That sounds like a stressful, unsettling time." },
      { move: "Get curious", text: "How was that for you, going through it?" }
    ],
    trap: { type: "Changing the subject", text: "Oh, okay. Anyway, did you get your laptop set up yet?" }
  }
]);
