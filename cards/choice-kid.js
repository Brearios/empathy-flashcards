window.CARDS = (window.CARDS || []).concat([
  {
    id: "choice-kid-01",
    rel: "kid",
    kind: "everyday",
    type: "choice",
    setup: "Your seven-year-old's goldfish died this morning. They're sitting by the empty bowl.",
    speaker: "Your kid",
    quote: "I miss Bubbles. I keep looking for him.",
    options: [
      { tone: "green", text: "Of course you do. You loved him. Want to tell me your favorite thing about Bubbles?", note: "Validates the missing and invites a happy memory instead of rushing past the sadness." },
      { tone: "yellow", text: "Aw, sweetie. Come here, let's get some breakfast.", note: "Warm and comforting, but moves on before the feeling gets any room." },
      { tone: "red", text: "We can go to the pet store this weekend and pick out a new one.", trap: "Fixing" },
      { tone: "red", text: "At least he had a really good life with us.", trap: "Silver lining" }
    ]
  },
  {
    id: "choice-kid-02",
    rel: "kid",
    kind: "everyday",
    type: "choice",
    setup: "Your fifteen-year-old just finished their driving test and is walking back to the car.",
    speaker: "Your teen",
    quote: "I failed. I hit the curb parallel parking.",
    options: [
      { tone: "green", text: "Oof, that's so disappointing after all that practice. How are you feeling?", note: "Names the disappointment and asks before offering anything else." },
      { tone: "yellow", text: "Okay. Let's head home and grab some food.", note: "Calm and harmless, but skips over how they feel about it." },
      { tone: "red", text: "Everyone fails the first time. It's honestly not a big deal.", trap: "Minimizing" },
      { tone: "red", text: "I told you last week we should practice parking more in the school lot. You kept saying you were fine.", trap: "Judging" }
    ]
  },
  {
    id: "choice-kid-03",
    rel: "kid",
    kind: "everyday",
    type: "choice",
    setup: "Your eight-year-old's best friend is moving to another state next month.",
    speaker: "Your kid",
    quote: "Who am I going to play with at recess now?",
    options: [
      { tone: "green", text: "That's a really sad thing to wonder about. You two are so close.", note: "Validates the worry and honors the friendship before jumping to solutions." },
      { tone: "yellow", text: "I'm sure it'll all work out, buddy.", note: "Kind and reassuring, but vague. It doesn't show you understand the loss." },
      { tone: "red", text: "You've got lots of other friends! What about Leo or Maya?", trap: "Fixing" },
      { tone: "red", text: "When I was your age, I moved three times and had to make new friends every time. You'll be fine.", trap: "One-upping" }
    ]
  },
  {
    id: "choice-kid-04",
    rel: "kid",
    kind: "everyday",
    type: "choice",
    setup: "Your thirteen-year-old is staring at a blank page the night before a project is due.",
    speaker: "Your kid",
    quote: "I'm so stressed. I don't even know where to start.",
    options: [
      { tone: "green", text: "That stuck feeling is awful. Want to talk it through together for a minute?", note: "Names the feeling and offers company without taking over." },
      { tone: "yellow", text: "You've got this. You always figure it out.", note: "Encouraging, but brushes past the stress they just told you about." },
      { tone: "red", text: "Well, this is why we start projects early.", trap: "Judging" },
      { tone: "red", text: "Just start with an outline. Write down three main points first, and the rest will come a lot easier.", trap: "Advice" }
    ]
  },
  {
    id: "choice-kid-05",
    rel: "kid",
    kind: "everyday",
    type: "choice",
    setup: "Your ten-year-old comes home from soccer practice with red eyes.",
    speaker: "Your kid",
    quote: "Some kids said I'm the worst one on the team.",
    options: [
      { tone: "green", text: "Ouch. That must have really hurt to hear. What happened?", note: "Names the hurt and gets curious so your kid can tell the story." },
      { tone: "yellow", text: "Well, I think you're great.", note: "Loving, but jumps to reassurance without hearing what happened." },
      { tone: "red", text: "Just ignore them. They're probably jealous.", trap: "Dismissing" },
      { tone: "red", text: "Maybe we should do some extra drills in the backyard this week.", trap: "Fixing" }
    ]
  },
  {
    id: "choice-kid-06",
    rel: "kid",
    kind: "everyday",
    type: "choice",
    setup: "Your sixteen-year-old checks their phone and their face falls.",
    speaker: "Your teen",
    quote: "I didn't get the summer job. They picked someone else.",
    options: [
      { tone: "green", text: "Ugh, I'm sorry. You were really hoping for that one, weren't you?", note: "Reflects how much it mattered and leaves room for them to share more." },
      { tone: "yellow", text: "That's too bad. Something else will come along.", note: "Pleasant, but quickly moves past their disappointment." },
      { tone: "red", text: "Their loss. Honestly, you're better off somewhere else.", trap: "Silver lining" },
      { tone: "red", text: "Did you send them a thank-you email after the interview? That really helps you stand out next time.", trap: "Advice" }
    ]
  },
  {
    id: "choice-kid-07",
    rel: "kid",
    kind: "everyday",
    type: "choice",
    setup: "Your six-year-old bursts through the door after school.",
    speaker: "Your kid",
    quote: "I read a whole book all by myself today!",
    options: [
      { tone: "green", text: "A whole book by yourself! You must feel so proud. What was it about?", note: "Celebrates with them and gets curious, keeping the spotlight on their win." },
      { tone: "yellow", text: "Nice job, honey. Go wash your hands for snack.", note: "Friendly, but the moment passes without real celebration." },
      { tone: "red", text: "Great! Now let's try one of the harder chapter books.", trap: "Yes, but" },
      { tone: "red", text: "I was reading chapter books by your age, you know. Grandma used to take me to the library every week.", trap: "One-upping" }
    ]
  },
  {
    id: "choice-kid-08",
    rel: "kid",
    kind: "everyday",
    type: "choice",
    setup: "Your seventeen-year-old just opened an email at the kitchen table.",
    speaker: "Your teen",
    quote: "I got into my first-choice college!",
    options: [
      { tone: "green", text: "You did it! All that hard work paid off. How does it feel?", note: "Celebrates their effort and asks how they feel, keeping it about them." },
      { tone: "yellow", text: "That's great news. Congratulations.", note: "Positive, but a bit flat for such a big moment." },
      { tone: "red", text: "Amazing! Now we just have to figure out how to pay for it.", trap: "Yes, but" },
      { tone: "red", text: "I always knew you would. I can't wait to tell everyone at work.", trap: "Making it about you" }
    ]
  },
  {
    id: "choice-kid-09",
    rel: "kid",
    kind: "conflict",
    type: "choice",
    setup: "You read your twelve-year-old's group chat over their shoulder. They noticed.",
    speaker: "Your kid",
    quote: "You were reading my messages? That's private!",
    options: [
      { tone: "green", text: "You're right, I shouldn't have read over your shoulder. I'm sorry.", note: "Owns it plainly and respects their privacy without excuses." },
      { tone: "yellow", text: "Okay, okay. I'll give you some space.", note: "Backs off, but doesn't acknowledge why they're upset." },
      { tone: "red", text: "I'm your parent. I'm allowed to know what's going on.", trap: "Getting defensive" },
      { tone: "red", text: "I only looked because I worry about what goes on in those group chats. There's a lot of stuff online.", trap: "Explaining yourself" }
    ]
  },
  {
    id: "choice-kid-10",
    rel: "kid",
    kind: "conflict",
    type: "choice",
    setup: "You missed your nine-year-old's school concert because of a work meeting.",
    speaker: "Your kid",
    quote: "Everybody else's parents came. I looked for you the whole time.",
    options: [
      { tone: "green", text: "I'm so sorry. You were looking for me and I wasn't there. That must have felt lonely.", note: "Owns the miss and names how it felt from their side." },
      { tone: "yellow", text: "I'm sorry, sweetheart. I'll make the next one.", note: "Apologizes, but moves to the future before sitting with their hurt." },
      { tone: "red", text: "I had a really important meeting. I couldn't get out of it.", trap: "Explaining yourself" },
      { tone: "red", text: "Grandma recorded it, so I can still watch the whole thing!", trap: "Silver lining" }
    ]
  },
  {
    id: "choice-kid-11",
    rel: "kid",
    kind: "conflict",
    type: "choice",
    setup: "You told your fifteen-year-old they can't go to an overnight concert.",
    speaker: "Your teen",
    quote: "You treat me like a little kid. You never trust me.",
    options: [
      { tone: "green", text: "It feels like I don't trust you, and that's frustrating. Can you tell me more?", note: "Reflects their feeling and invites them to say more, even while holding the line." },
      { tone: "yellow", text: "I know you're upset. Let's talk about it later.", note: "Calm, but postpones the conversation they want to have now." },
      { tone: "red", text: "When you're paying the bills and living on your own, you can make the rules. Until then, it's my call.", trap: "Dismissing" },
      { tone: "red", text: "That's not true. I let you do plenty of things.", trap: "Getting defensive" }
    ]
  },
  {
    id: "choice-kid-12",
    rel: "kid",
    kind: "conflict",
    type: "choice",
    setup: "You gave away a box of old toys. Your eight-year-old just noticed one was missing.",
    speaker: "Your kid",
    quote: "You gave away my stuffed dog without even asking me!",
    options: [
      { tone: "green", text: "I should have asked you first. That dog was special to you, and I'm sorry.", note: "Owns the mistake and recognizes what the toy meant to them." },
      { tone: "yellow", text: "Oh no, I didn't realize. Sorry, buddy.", note: "A sincere apology, but light for something that clearly matters to them." },
      { tone: "red", text: "You haven't played with it in years, though.", trap: "Minimizing" },
      { tone: "red", text: "We'll go to the store this weekend and get you a new one, even softer than the old one.", trap: "Fixing" }
    ]
  },
  {
    id: "choice-kid-13",
    rel: "kid",
    kind: "repair",
    type: "choice",
    setup: "Your ten-year-old was crying over a lost video game level. You said, \"It's just a game.\"",
    speaker: "Your kid",
    quote: "You don't get it. I worked on that for days.",
    options: [
      { tone: "green", text: "You're right, I brushed it off. Losing days of work is really frustrating.", note: "Owns the brush-off and validates why it matters to them." },
      { tone: "yellow", text: "Okay, sorry. Want some help getting back to it?", note: "Well-meant, but skips acknowledging the frustration first." },
      { tone: "red", text: "I just meant there are bigger things to be upset about. I wasn't trying to make fun of you or anything.", trap: "Explaining yourself" },
      { tone: "red", text: "Maybe it's a sign you need a break from screens anyway.", trap: "Judging" }
    ]
  },
  {
    id: "choice-kid-14",
    rel: "kid",
    kind: "repair",
    type: "choice",
    setup: "Your fourteen-year-old said they wanted to quit piano. You said, \"You never stick with anything.\"",
    speaker: "Your teen",
    quote: "Wow. Thanks a lot.",
    options: [
      { tone: "green", text: "That was unfair of me, and I'm sorry. I want to hear why you want to stop.", note: "Owns the hurtful line, then gets curious about their actual reasons." },
      { tone: "yellow", text: "Sorry. I didn't mean it like that.", note: "An apology, but it doesn't open the door to their side." },
      { tone: "red", text: "Well, you did quit soccer and art club too. I'm just pointing out a pattern I've noticed lately.", trap: "Getting defensive" },
      { tone: "red", text: "I was just tired. Let's talk about something else.", trap: "Changing the subject" }
    ]
  },
  {
    id: "choice-kid-15",
    rel: "kid",
    kind: "repair",
    type: "choice",
    setup: "Your five-year-old was scared of a thunderstorm. You laughed and said, \"It's just noise, silly.\"",
    speaker: "Your kid",
    quote: "But it's really loud and scary!",
    options: [
      { tone: "green", text: "You're right, it is really loud. I'm sorry I laughed. Want to snuggle until it passes?", note: "Validates the fear, owns the laugh, and offers comfort." },
      { tone: "yellow", text: "Okay, okay. It'll be over soon.", note: "Gentle, but doesn't show you understand why it's scary." },
      { tone: "red", text: "Thunder can't hurt you, so there's nothing to be scared of.", trap: "Dismissing" },
      { tone: "red", text: "Should we count how far away it is? That'll make it fun!", trap: "Changing the subject" }
    ]
  }
]);
