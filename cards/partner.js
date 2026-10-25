window.CARDS = (window.CARDS || []).concat([
  {
    id: "partner-01",
    rel: "partner",
    kind: "everyday",
    setup: "Your partner gets home after a long day and drops onto the couch.",
    speaker: "Your partner",
    quote: "I just need to sit for a minute before anyone asks me for anything.",
    responses: [
      { move: "Validate", text: "Totally fair. Sounds like today took everything you had." },
      { move: "Be present", text: "Got it. Sit. I'm right here, no questions." },
      { move: "Offer help", text: "Want me to bring you some water or tea? No need to answer if you don't feel like talking." }
    ],
    trap: { type: "Making it about you", text: "Me too, my day was insane." }
  },
  {
    id: "partner-02",
    rel: "partner",
    kind: "everyday",
    setup: "Your partner has been texting with family about an upcoming weekend visit.",
    speaker: "Your partner",
    quote: "I'm kind of dreading seeing my family this weekend.",
    responses: [
      { move: "Get curious", text: "What's weighing on you most about it?" },
      { move: "Validate", text: "That makes sense. Family visits can be a lot, even when you love them." },
      { move: "Offer help", text: "Want to come up with a signal for when you need a break? I'll make an excuse." }
    ],
    trap: { type: "Minimizing", text: "It's just two days, you'll be fine." }
  },
  {
    id: "partner-03",
    rel: "partner",
    kind: "everyday",
    setup: "Your partner is quiet over breakfast.",
    speaker: "Your partner",
    quote: "I dreamed about my grandma last night. I really miss her.",
    responses: [
      { move: "Name the feeling", text: "That kind of dream can make the missing feel fresh all over again." },
      { move: "Get curious", text: "What was she like in the dream?" },
      { move: "Be present", text: "Come here. Tell me about her, if you want to." }
    ],
    trap: { type: "Silver lining", text: "At least you got to see her, right?" }
  },
  {
    id: "partner-04",
    rel: "partner",
    kind: "everyday",
    setup: "Your partner is getting ready in front of the mirror and sighs.",
    speaker: "Your partner",
    quote: "I just feel ugly today.",
    responses: [
      { move: "Validate", text: "Those days in your own skin are rough. I'm sorry you're having one." },
      { move: "Get curious", text: "Is it something specific, or just one of those days?" },
      { move: "Be present", text: "I don't see you that way at all. But I hear you, and I'm here." }
    ],
    trap: { type: "Dismissing", text: "What? No you don't. You look fine." }
  },
  {
    id: "partner-05",
    rel: "partner",
    kind: "everyday",
    setup: "Your partner checks their phone and lets out a long sigh.",
    speaker: "Your partner",
    quote: "My friend canceled on me. Again.",
    responses: [
      { move: "Reflect back", text: "Again? And you were really looking forward to it." },
      { move: "Name the feeling", text: "That's disappointing. It's hard not to take it personally after a few times." },
      { move: "Offer help", text: "Want to do something together tonight instead?" }
    ],
    trap: { type: "Judging", text: "Honestly, I don't know why you still make plans with them." }
  },
  {
    id: "partner-06",
    rel: "partner",
    kind: "everyday",
    setup: "Your partner spent the whole day cleaning. An hour later, things are already cluttered again.",
    speaker: "Your partner",
    quote: "I spent all day on this and it already looks messy.",
    responses: [
      { move: "Name the feeling", text: "That's so deflating. All that work and it barely lasted." },
      { move: "Thank them", text: "Thank you for everything you did today. I noticed." },
      { move: "Offer help", text: "Let me take care of this round. You've done enough today." }
    ],
    trap: { type: "Minimizing", text: "It doesn't look that bad." }
  },
  {
    id: "partner-07",
    rel: "partner",
    kind: "everyday",
    setup: "Your partner turned down a volunteer role they were asked to take on.",
    speaker: "Your partner",
    quote: "I finally said no, and now I feel so guilty.",
    responses: [
      { move: "Validate", text: "It makes sense to feel guilty even when it was the right call." },
      { move: "Celebrate", text: "That took guts. I'm proud of you for protecting your time." },
      { move: "Get curious", text: "What's the guilt telling you?" }
    ],
    trap: { type: "Dismissing", text: "Why feel guilty? Just don't think about it." }
  },
  {
    id: "partner-08",
    rel: "partner",
    kind: "everyday",
    setup: "Your partner has been going back and forth about their job for weeks.",
    speaker: "Your partner",
    quote: "I think I'm burned out, and I don't know what to do about it.",
    responses: [
      { move: "Validate", text: "I believe you. You've been carrying a lot for a long time." },
      { move: "Get curious", text: "What does burned out feel like for you day to day?" },
      { move: "Be present", text: "We don't have to figure it out tonight. I'm with you in this." }
    ],
    trap: { type: "Advice", text: "You should just start applying to other jobs." }
  },
  {
    id: "partner-09",
    rel: "partner",
    kind: "everyday",
    setup: "You're lying in bed and your partner can't sleep.",
    speaker: "Your partner",
    quote: "I keep worrying about money. I can't turn my brain off.",
    responses: [
      { move: "Name the feeling", text: "That sounds exhausting, lying here with your mind racing." },
      { move: "Be present", text: "Come here. You don't have to carry this by yourself." },
      { move: "Offer help", text: "Want to sit down together this weekend and look at it all? Just not at midnight." }
    ],
    trap: { type: "Minimizing", text: "We're fine. Stop worrying and go to sleep." }
  },
  {
    id: "partner-10",
    rel: "partner",
    kind: "everyday",
    setup: "Your partner got off a phone call with their doctor and looks shaken.",
    speaker: "Your partner",
    quote: "They want to do more tests. They wouldn't really say why.",
    responses: [
      { move: "Name the feeling", text: "Not knowing is so scary. I'd be rattled too." },
      { move: "Be present", text: "I'm right here. Whatever it is, we'll find out together." },
      { move: "Offer help", text: "Do you want me to come with you to the appointment?" }
    ],
    trap: { type: "Silver lining", text: "I'm sure it's nothing. They're just being careful." }
  },
  {
    id: "partner-11",
    rel: "partner",
    kind: "everyday",
    setup: "Your partner has been looking at old photos of friends who moved away.",
    speaker: "Your partner",
    quote: "I feel like I don't really have close friends anymore.",
    responses: [
      { move: "Validate", text: "That's a real loss. Adult friendships are hard to keep, and it hurts when they fade." },
      { move: "Get curious", text: "Who do you miss most?" },
      { move: "Name the feeling", text: "That sounds lonely, even with me around. I get that." }
    ],
    trap: { type: "Dismissing", text: "But you have me. Isn't that enough?" }
  },
  {
    id: "partner-12",
    rel: "partner",
    kind: "everyday",
    setup: "Your partner rushes in the door, beaming.",
    speaker: "Your partner",
    quote: "I got the job! They called me on the way home!",
    responses: [
      { move: "Celebrate", text: "YES! I knew it! Come here!" },
      { move: "Validate", text: "You earned this. You worked so hard for it." },
      { move: "Get curious", text: "Tell me everything. What did they say?" }
    ],
    trap: { type: "Changing the subject", text: "Nice. So what's the pay like? Is the commute bad?" }
  },
  {
    id: "partner-13",
    rel: "partner",
    kind: "everyday",
    setup: "Your partner holds up their phone, grinning, after a run.",
    speaker: "Your partner",
    quote: "I ran three miles without stopping. Three months ago I couldn't do one.",
    responses: [
      { move: "Celebrate", text: "That's huge! Look at you!" },
      { move: "Reflect back", text: "From not even one mile to three. That's a real change." },
      { move: "Get curious", text: "How did it feel at the end?" }
    ],
    trap: { type: "One-upping", text: "Nice. I used to run five every morning." }
  },
  {
    id: "partner-14",
    rel: "partner",
    kind: "everyday",
    setup: "Your partner has been learning to cook and just served a new dish.",
    speaker: "Your partner",
    quote: "Okay, be honest. I actually made this from scratch.",
    responses: [
      { move: "Celebrate", text: "From scratch? This is so good. I'm impressed." },
      { move: "Thank them", text: "Thank you for making this. It feels really special." },
      { move: "Get curious", text: "What was the trickiest part?" }
    ],
    trap: { type: "Judging", text: "It's good, but it could use more salt." }
  },
  {
    id: "partner-15",
    rel: "partner",
    kind: "everyday",
    setup: "Your partner comes home smiling after a hard conversation with their sibling.",
    speaker: "Your partner",
    quote: "We actually talked it out. I think we're okay now.",
    responses: [
      { move: "Celebrate", text: "That's wonderful. I know how much that's been weighing on you." },
      { move: "Name the feeling", text: "You must feel so much lighter." },
      { move: "Get curious", text: "How did it go? What changed?" }
    ],
    trap: { type: "Yes, but", text: "Good, but I'll believe it when they actually change." }
  },
  {
    id: "partner-16",
    rel: "partner",
    kind: "conflict",
    setup: "You were twenty minutes late to dinner and didn't text.",
    speaker: "Your partner",
    quote: "It's not about the twenty minutes. It's that you didn't text.",
    responses: [
      { move: "Own it", text: "You're right. I should have texted. I'm sorry." },
      { move: "Reflect back", text: "You were sitting there not knowing where I was, and it felt like I wasn't thinking of you." },
      { move: "Validate", text: "That makes sense. I'd feel the same way." }
    ],
    trap: { type: "Explaining yourself", text: "Traffic was terrible, and my phone was in my bag." }
  },
  {
    id: "partner-17",
    rel: "partner",
    kind: "conflict",
    setup: "Your partner was telling you about their day while you scrolled your phone.",
    speaker: "Your partner",
    quote: "When you looked at your phone, I felt like I didn't matter.",
    responses: [
      { move: "Own it", text: "I'm sorry. You were sharing something and I wasn't there for it." },
      { move: "Be present", text: "I'm putting it away. Will you tell me again?" },
      { move: "Validate", text: "That's a lousy feeling, and I caused it." }
    ],
    trap: { type: "Getting defensive", text: "I was listening. I can do two things at once." }
  },
  {
    id: "partner-18",
    rel: "partner",
    kind: "conflict",
    setup: "You and your partner are in a serious talk about the relationship.",
    speaker: "Your partner",
    quote: "I feel like I'm always the one who has to bring up the hard stuff.",
    responses: [
      { move: "Reflect back", text: "So you end up carrying all the hard conversations by yourself." },
      { move: "Name the feeling", text: "That sounds lonely and tiring." },
      { move: "Own it", text: "You're right, I avoid them. I don't want you doing that alone anymore." }
    ],
    trap: { type: "Getting defensive", text: "That's not true. I brought something up last month." }
  },
  {
    id: "partner-19",
    rel: "partner",
    kind: "conflict",
    setup: "You've been explaining your side of an argument for a while.",
    speaker: "Your partner",
    quote: "I'm not trying to attack you. I'm trying to tell you I'm hurt.",
    responses: [
      { move: "Own it", text: "Okay. I've been defending myself instead of listening." },
      { move: "Be present", text: "I'm going to stop talking. Tell me about the hurt." },
      { move: "Thank them", text: "Thank you for saying it that way. I needed to hear that." }
    ],
    trap: { type: "Explaining yourself", text: "I know, I just need you to understand why I did it." }
  },
  {
    id: "partner-20",
    rel: "partner",
    kind: "conflict",
    setup: "After a tense visit with your family, your partner is upset in the car.",
    speaker: "Your partner",
    quote: "You always take your mom's side.",
    responses: [
      { move: "Reflect back", text: "When it counts, it feels like you can't count on me to be with you." },
      { move: "Name the feeling", text: "That must feel really lonely in that room." },
      { move: "Get curious", text: "What happened tonight that felt that way?" }
    ],
    trap: { type: "Getting defensive", text: "That's not fair. I don't always do that." }
  },
  {
    id: "partner-21",
    rel: "partner",
    kind: "conflict",
    setup: "The sink has been leaking for a week.",
    speaker: "Your partner",
    quote: "I asked you three times to call the plumber.",
    responses: [
      { move: "Own it", text: "You did, and I kept letting it slide. I'll call today." },
      { move: "Reflect back", text: "It probably feels like you have to manage everything, even the things you hand off." },
      { move: "Validate", text: "You have every reason to be frustrated." }
    ],
    trap: { type: "Minimizing", text: "It's a small drip. It's not a big deal." }
  },
  {
    id: "partner-22",
    rel: "partner",
    kind: "conflict",
    setup: "You've been spending most evenings on your own hobbies.",
    speaker: "Your partner",
    quote: "Sometimes I feel like your hobbies matter more to you than we do.",
    responses: [
      { move: "Name the feeling", text: "That's a painful thing to feel. I don't want you feeling it." },
      { move: "Own it", text: "I've been disappearing into my own stuff a lot. I see that." },
      { move: "Get curious", text: "When have you felt it most?" }
    ],
    trap: { type: "Yes, but", text: "Yeah, but you have your things too." }
  },
  {
    id: "partner-23",
    rel: "partner",
    kind: "conflict",
    setup: "You forgot your anniversary until late in the day.",
    speaker: "Your partner",
    quote: "I'm not mad that you forgot. I'm sad that it didn't seem important to you.",
    responses: [
      { move: "Reflect back", text: "It's not about the date. It's what it seemed to say about us." },
      { move: "Own it", text: "I'm sorry. It is important to me, and I didn't show it." },
      { move: "Validate", text: "That makes complete sense. I'd feel the same way." }
    ],
    trap: { type: "Explaining yourself", text: "I've just had so much going on at work." }
  },
  {
    id: "partner-24",
    rel: "partner",
    kind: "conflict",
    setup: "You've been stressed and short-tempered for a couple of weeks.",
    speaker: "Your partner",
    quote: "I feel like I'm walking on eggshells around you.",
    responses: [
      { move: "Own it", text: "I've been snapping at you. I'm sorry. That's not okay." },
      { move: "Name the feeling", text: "That sounds exhausting, never knowing which version of me you'll get." },
      { move: "Get curious", text: "What have you been noticing?" }
    ],
    trap: { type: "Explaining yourself", text: "I'm just stressed. It's not about you." }
  },
  {
    id: "partner-25",
    rel: "partner",
    kind: "repair",
    setup: "Your partner said they were exhausted, and you said, 'Me too, I've had a crazy week.'",
    speaker: "Your partner",
    quote: "It's not a competition.",
    responses: [
      { move: "Own it", text: "You're right. I made it about me. Sorry." },
      { move: "Get curious", text: "Tell me about your week. What's been the worst of it?" },
      { move: "Validate", text: "You're wiped out, and that deserves its own moment." }
    ],
    trap: { type: "Getting defensive", text: "I wasn't competing, I was relating." }
  },
  {
    id: "partner-26",
    rel: "partner",
    kind: "repair",
    setup: "Your partner was venting about a difficult coworker, and you said, 'Have you tried just talking to them?'",
    speaker: "Your partner",
    quote: "Of course I have. I'm not an idiot.",
    responses: [
      { move: "Own it", text: "No, you're not. I jumped to advice. Sorry." },
      { move: "Validate", text: "It sounds like you've tried everything and they're still impossible." },
      { move: "Get curious", text: "Tell me more. What did they do today?" }
    ],
    trap: { type: "Explaining yourself", text: "I was just trying to help." }
  },
  {
    id: "partner-27",
    rel: "partner",
    kind: "repair",
    setup: "Your partner told you about a fight with their parent, and you said, 'Honestly, your mom kind of has a point.'",
    speaker: "Your partner",
    quote: "Seriously? Whose side are you on?",
    responses: [
      { move: "Own it", text: "Yours. I'm sorry. You needed me with you, and I started analyzing." },
      { move: "Name the feeling", text: "That fight sounds awful. You must be so frustrated." },
      { move: "Get curious", text: "What hurt the most about what she said?" }
    ],
    trap: { type: "Getting defensive", text: "I'm not taking sides. I'm just being objective." }
  },
  {
    id: "partner-28",
    rel: "partner",
    kind: "repair",
    setup: "Your partner said they've been feeling lonely, and you said, 'But you have so many friends.'",
    speaker: "Your partner",
    quote: "That's not what lonely means.",
    responses: [
      { move: "Own it", text: "You're right. I'm sorry, that brushed it off." },
      { move: "Validate", text: "You can feel lonely even when you're surrounded by people." },
      { move: "Get curious", text: "What's it been feeling like for you?" }
    ],
    trap: { type: "Yes, but", text: "I know, but you do have a lot of people who care about you." }
  },
  {
    id: "partner-29",
    rel: "partner",
    kind: "repair",
    setup: "Your partner said, 'I feel like you don't see me,' and you said, 'That's not fair, I do so much for you.'",
    speaker: "Your partner",
    quote: "See? You're doing it right now.",
    responses: [
      { move: "Own it", text: "You're right. I got defensive instead of listening." },
      { move: "Get curious", text: "Help me understand what not being seen feels like for you." },
      { move: "Be present", text: "Okay. I'm listening now, for real." }
    ],
    trap: { type: "Getting defensive", text: "I'm not doing anything. I'm just telling you the facts." }
  },
  {
    id: "partner-30",
    rel: "partner",
    kind: "repair",
    setup: "Your partner teared up during a movie, and you joked, 'Seriously? This one?'",
    speaker: "Your partner",
    quote: "Never mind.",
    responses: [
      { move: "Own it", text: "Hey, I'm sorry. That was a dumb joke." },
      { move: "Get curious", text: "Something in it really touched you. What was it?" },
      { move: "Be present", text: "Come here. I'd like to know what got you." }
    ],
    trap: { type: "Joking it off", text: "Come on, I was just kidding. Don't be so sensitive." }
  }
]);
