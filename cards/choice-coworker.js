window.CARDS = (window.CARDS || []).concat([
  {
    id: "choice-coworker-01",
    rel: "coworker",
    kind: "everyday",
    type: "choice",
    setup: "Your coworker Olivia just got off a call with a client who yelled at her.",
    speaker: "Olivia",
    quote: "I'm still shaking a little. He was so rude.",
    options: [
      { tone: "green", text: "That sounds rattling. Want to take a quick walk and shake it off?", note: "Names the feeling and offers a small, concrete break without pushing." },
      { tone: "yellow", text: "Some clients are just like that. Hang in there.", note: "Kind enough, but it skips past how shaken she still is." },
      { tone: "red", text: "Next time just tell him you'll call back when he's calmer.", trap: "Advice" },
      { tone: "red", text: "Ugh, you should have heard the guy who screamed at me last spring. I was shaky all afternoon.", trap: "One-upping" }
    ]
  },
  {
    id: "choice-coworker-02",
    rel: "coworker",
    kind: "everyday",
    type: "choice",
    setup: "Your coworker Hassan is staring at his screen during lunch.",
    speaker: "Hassan",
    quote: "My visa renewal got delayed again. I can't plan anything until it comes through.",
    options: [
      { tone: "green", text: "That kind of limbo is exhausting. How long have you been waiting on it?", note: "Validates how draining the uncertainty is and invites him to say more." },
      { tone: "yellow", text: "Oh, that's annoying. Hopefully it comes soon.", note: "Polite, but it treats a big worry like a small hassle." },
      { tone: "red", text: "At least you're still allowed to work while it's pending, right?", trap: "Silver lining" },
      { tone: "red", text: "Have you tried calling your representative's office? A friend of mine did that and it sped things up a lot.", trap: "Fixing" }
    ]
  },
  {
    id: "choice-coworker-03",
    rel: "coworker",
    kind: "everyday",
    type: "choice",
    setup: "Your coworker Beatriz mentions she's starting to look for a new job.",
    speaker: "Beatriz",
    quote: "I just don't feel like I'm growing here anymore.",
    options: [
      { tone: "green", text: "Feeling stuck is hard, especially when you care about your work. What would growing look like for you?", note: "Names the feeling and gets curious about what she wants." },
      { tone: "yellow", text: "Okay, well, I'd be sad to see you go.", note: "Sweet, but it makes the moment about losing her." },
      { tone: "red", text: "Really? You've got it pretty good here compared to most places.", trap: "Dismissing" },
      { tone: "red", text: "Just update your resume and talk to a recruiter this week.", trap: "Fixing" }
    ]
  },
  {
    id: "choice-coworker-04",
    rel: "coworker",
    kind: "everyday",
    type: "choice",
    setup: "Your coworker Chen is packing up early on a Thursday.",
    speaker: "Chen",
    quote: "My mom fell last night. She's okay, but I need to go check on her.",
    options: [
      { tone: "green", text: "Of course, go. That must have been scary. Is there anything I can cover for you?", note: "Names the fear and offers specific help so he can leave without worrying." },
      { tone: "yellow", text: "Sure, no problem. Hope everything's okay.", note: "Supportive, but brief enough that it doesn't really connect." },
      { tone: "red", text: "Good thing she's okay. Falls can be so much worse at that age, so honestly that's a relief.", trap: "Silver lining" },
      { tone: "red", text: "Can you send me the status on the report before you head out?", trap: "Changing the subject" }
    ]
  },
  {
    id: "choice-coworker-05",
    rel: "coworker",
    kind: "everyday",
    type: "choice",
    setup: "Your coworker Darnell just found out his big proposal was turned down.",
    speaker: "Darnell",
    quote: "Three weeks of work and they didn't even give feedback.",
    options: [
      { tone: "green", text: "Three weeks and no feedback? That's deflating. You put a lot into it.", note: "Reflects back what stings most and acknowledges his effort." },
      { tone: "yellow", text: "That's too bad. Their loss.", note: "Loyal and harmless, but it brushes past his disappointment." },
      { tone: "red", text: "Well, now you have a great template for the next one.", trap: "Silver lining" },
      { tone: "red", text: "Honestly, it might have been too ambitious for their budget. They usually go with the safer option.", trap: "Judging" }
    ]
  },
  {
    id: "choice-coworker-06",
    rel: "coworker",
    kind: "everyday",
    type: "choice",
    setup: "Your coworker Fatima has been quiet since she got back from a medical appointment.",
    speaker: "Fatima",
    quote: "They want to run more tests. I'm trying not to think about it.",
    options: [
      { tone: "green", text: "Waiting like that is hard. I won't pry, but I'm around if you want company or a distraction.", note: "Validates the waiting and offers presence while respecting her space." },
      { tone: "yellow", text: "I'm sure it's nothing. Try not to worry.", note: "Meant to comfort, but she can't know it's nothing, so it rings hollow." },
      { tone: "red", text: "My aunt had more tests too, and it turned out to be a whole thing.", trap: "Making it about you" },
      { tone: "red", text: "You should ask them for the results as fast as possible so you're not stuck waiting.", trap: "Advice" }
    ]
  },
  {
    id: "choice-coworker-07",
    rel: "coworker",
    kind: "everyday",
    type: "choice",
    setup: "Your coworker Aisha walks over holding her phone, smiling ear to ear.",
    speaker: "Aisha",
    quote: "I passed my certification exam! First try!",
    options: [
      { tone: "green", text: "Aisha, that's huge! First try, too. How are you celebrating?", note: "Celebrates with her energy, credits her effort, and keeps it about her." },
      { tone: "yellow", text: "Nice, congrats.", note: "Friendly, but it doesn't match her excitement at all." },
      { tone: "red", text: "Oh nice, I passed mine on the first try too. Honestly, it's easier than people make it sound.", trap: "Minimizing" },
      { tone: "red", text: "Great, so does that mean you'll be taking on the audit work now?", trap: "Changing the subject" }
    ]
  },
  {
    id: "choice-coworker-08",
    rel: "coworker",
    kind: "everyday",
    type: "choice",
    setup: "Your coworker Pablo is reading an email from his manager, looking a little stunned.",
    speaker: "Pablo",
    quote: "They want me to lead the new team. I'm excited but kind of terrified.",
    options: [
      { tone: "green", text: "Both of those make total sense. It's a big step. What part feels scariest?", note: "Validates both feelings and gets curious about the fear." },
      { tone: "yellow", text: "You'll be fine. Congrats!", note: "Encouraging, but it waves away the nervousness he just shared." },
      { tone: "red", text: "Leading a team is mostly meetings, honestly. Don't overthink it.", trap: "Minimizing" },
      { tone: "red", text: "When I led my first team, I barely slept for months. It was honestly the hardest year of my career.", trap: "One-upping" }
    ]
  },
  {
    id: "choice-coworker-09",
    rel: "coworker",
    kind: "conflict",
    type: "choice",
    setup: "You forgot to send your coworker Yuki the numbers she needed, and she had to present without them.",
    speaker: "Yuki",
    quote: "I looked unprepared in front of the whole room.",
    options: [
      { tone: "green", text: "That's on me, and I'm sorry. You got put in an awful spot because I dropped it.", note: "Owns the mistake plainly and names the impact on her." },
      { tone: "yellow", text: "Sorry about that. I'll get them to you now.", note: "An apology, but it skips how embarrassing this was for her." },
      { tone: "red", text: "I had three deadlines yesterday and the client call ran long, so it just slipped through the cracks.", trap: "Explaining yourself" },
      { tone: "red", text: "I'm sure nobody really noticed. You always present well.", trap: "Minimizing" }
    ]
  },
  {
    id: "choice-coworker-10",
    rel: "coworker",
    kind: "conflict",
    type: "choice",
    setup: "You took a vacation day without telling your coworker Ibrahim, and he covered your meetings.",
    speaker: "Ibrahim",
    quote: "I found out you were off when people started asking me where you were.",
    options: [
      { tone: "green", text: "You're right, I should have told you. That left you scrambling. Thanks for covering.", note: "Owns it, names how it affected him, and thanks him for stepping in." },
      { tone: "yellow", text: "Oh, sorry, I thought it was on the calendar.", note: "Not hostile, but it sidesteps what it was like for him." },
      { tone: "red", text: "It was on the shared calendar, though. I put it there two weeks ago, so I figured everyone saw it.", trap: "Getting defensive" },
      { tone: "red", text: "Yeah, sorry, but you would have done the same thing.", trap: "Yes, but" }
    ]
  },
  {
    id: "choice-coworker-11",
    rel: "coworker",
    kind: "conflict",
    type: "choice",
    setup: "Your report, Sofia, asks to talk after you reassigned her project to someone else.",
    speaker: "Sofia",
    quote: "I feel like you didn't trust me to finish it.",
    options: [
      { tone: "green", text: "I can see why it felt that way. I didn't explain it, and that's on me. Can we talk it through?", note: "Validates her read, owns the missing explanation, and opens a conversation." },
      { tone: "yellow", text: "It wasn't personal. It was just a staffing decision.", note: "Probably true, but it doesn't address how she feels." },
      { tone: "red", text: "That's not what happened at all. You're reading too much into it.", trap: "Dismissing" },
      { tone: "red", text: "Leadership pushed me to move fast, so I didn't really have a choice.", trap: "Explaining yourself" }
    ]
  },
  {
    id: "choice-coworker-12",
    rel: "coworker",
    kind: "conflict",
    type: "choice",
    setup: "In a group email, you pointed out a mistake in your coworker Kwame's work.",
    speaker: "Kwame",
    quote: "You could have just messaged me. Now the whole team saw it.",
    options: [
      { tone: "green", text: "You're right, that should have been private. I'm sorry I embarrassed you.", note: "Owns the choice and names the embarrassment without excuses." },
      { tone: "yellow", text: "Got it. I'll message you directly next time.", note: "A fair fix, but it doesn't acknowledge how it felt." },
      { tone: "red", text: "I just wanted everyone on the same page. It wasn't a big deal.", trap: "Minimizing" },
      { tone: "red", text: "I hear you, but the mistake did affect the whole team, so I thought everyone needed to see the fix.", trap: "Yes, but" }
    ]
  },
  {
    id: "choice-coworker-13",
    rel: "coworker",
    kind: "repair",
    type: "choice",
    setup: "Your coworker Elena said she's been dreading her performance review. You said, \"Just don't let it get to you.\"",
    speaker: "Elena",
    quote: "Easy for you to say.",
    options: [
      { tone: "green", text: "Fair. That was too easy to say. What's making you dread it?", note: "Owns the brush-off and gets curious about her worry instead." },
      { tone: "yellow", text: "Sorry, I just meant it'll probably be fine.", note: "Softens it a little, but still doesn't take her dread seriously." },
      { tone: "red", text: "I'm only trying to help. I get nervous about reviews too.", trap: "Getting defensive" },
      { tone: "red", text: "Write down your wins beforehand. It makes the conversation way easier, and you'll feel more prepared going in.", trap: "Advice" }
    ]
  },
  {
    id: "choice-coworker-14",
    rel: "coworker",
    kind: "repair",
    type: "choice",
    setup: "Your coworker Andre mentioned he's going through a divorce. You joked, \"Well, more time for golf!\"",
    speaker: "Andre",
    quote: "Yeah. I guess.",
    options: [
      { tone: "green", text: "Sorry, that was a bad joke. A divorce is a lot. How are you holding up?", note: "Owns the joke quickly and turns toward what he's really going through." },
      { tone: "yellow", text: "Sorry. Let me know if you need anything.", note: "Kind, but vague, and it lets the moment pass." },
      { tone: "red", text: "Come on, I was just trying to lighten things up a bit.", trap: "Getting defensive" },
      { tone: "red", text: "Honestly, you'll probably be happier in a year. Lots of people say their divorce was the best thing that happened to them.", trap: "Silver lining" }
    ]
  },
  {
    id: "choice-coworker-15",
    rel: "coworker",
    kind: "repair",
    type: "choice",
    setup: "Your coworker Nora told you she finally finished a hard project. You said, \"Wasn't that due last month?\"",
    speaker: "Nora",
    quote: "Wow. I was actually proud of it.",
    options: [
      { tone: "green", text: "You should be proud. I'm sorry, that came out wrong. It was a tough one. Congrats.", note: "Owns the comment, validates her pride, and celebrates the win." },
      { tone: "yellow", text: "Oh, sorry, I didn't mean anything by it.", note: "Apologetic, but it doesn't give her the credit she wanted." },
      { tone: "red", text: "I was just asking. I didn't mean it as a criticism.", trap: "Explaining yourself" },
      { tone: "red", text: "Ha, better late than never, right?", trap: "Joking it off" }
    ]
  }
]);
