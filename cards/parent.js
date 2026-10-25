window.CARDS = (window.CARDS || []).concat([
  {
    id: "parent-01",
    rel: "parent",
    kind: "everyday",
    setup: "Your mom calls on a Sunday afternoon. It's been a few weeks since you talked.",
    speaker: "Your mom",
    quote: "I just feel like nobody calls me anymore.",
    responses: [
      { move: "Name the feeling", text: "That sounds lonely, Mom. I'm sorry." },
      { move: "Own it", text: "I haven't called as much as I should. I'm glad you told me." },
      { move: "Get curious", text: "How have your days been feeling lately?" }
    ],
    trap: { type: "Getting defensive", text: "Mom, I'm really busy. You know that." }
  },
  {
    id: "parent-02",
    rel: "parent",
    kind: "everyday",
    setup: "Your dad just got back from an eye appointment.",
    speaker: "Your dad",
    quote: "The doctor says I shouldn't drive anymore.",
    responses: [
      { move: "Validate", text: "Dad, that's a big loss. Driving is a lot of your independence." },
      { move: "Get curious", text: "How are you feeling about it?" },
      { move: "Offer help", text: "I'd like to help figure out rides. Can we talk about what would work for you?" }
    ],
    trap: { type: "Silver lining", text: "Well, at least you won't have to deal with traffic anymore." }
  },
  {
    id: "parent-03",
    rel: "parent",
    kind: "everyday",
    setup: "Your mom has been helping care for her own aging mother.",
    speaker: "Your mom",
    quote: "Grandma didn't recognize me when I visited on Sunday.",
    responses: [
      { move: "Name the feeling", text: "Oh, Mom. That must have been so painful to sit through." },
      { move: "Be present", text: "I'm so sorry. I'm here if you want to talk about it." },
      { move: "Get curious", text: "How are you doing since then?" }
    ],
    trap: { type: "Minimizing", text: "That's pretty normal with dementia, though." }
  },
  {
    id: "parent-04",
    rel: "parent",
    kind: "everyday",
    setup: "Your dad retired three months ago. You're having lunch together.",
    speaker: "Your dad",
    quote: "I thought I'd love retirement, but some days I don't know what to do with myself.",
    responses: [
      { move: "Validate", text: "That makes sense. Work gave your days a shape for a long time." },
      { move: "Reflect back", text: "So the free time feels more empty than freeing some days." },
      { move: "Get curious", text: "What do you miss most about working?" }
    ],
    trap: { type: "Advice", text: "You should take up golf or volunteer somewhere." }
  },
  {
    id: "parent-05",
    rel: "parent",
    kind: "everyday",
    setup: "Your mom calls you, clearly excited.",
    speaker: "Your mom",
    quote: "I finished my first 5K this morning! I walked part of it, but I finished.",
    responses: [
      { move: "Celebrate", text: "Mom, that's amazing! I'm so proud of you." },
      { move: "Validate", text: "Walking part of it still counts. You crossed the finish line." },
      { move: "Get curious", text: "How did it feel at the end?" }
    ],
    trap: { type: "One-upping", text: "Nice! I ran a half marathon last year, you should try one." }
  },
  {
    id: "parent-06",
    rel: "parent",
    kind: "everyday",
    setup: "Your dad has been learning to paint. He shows you a photo of a landscape he finished.",
    speaker: "Your dad",
    quote: "It's not much, but I'm kind of proud of this one.",
    responses: [
      { move: "Celebrate", text: "You should be! The light on those hills is really beautiful." },
      { move: "Get curious", text: "What was the hardest part to get right?" },
      { move: "Thank them", text: "Thanks for showing me. I love seeing what you're making." }
    ],
    trap: { type: "Judging", text: "The trees look a little off, but it's pretty good." }
  },
  {
    id: "parent-07",
    rel: "parent",
    kind: "everyday",
    setup: "Your mom is waiting on results from a biopsy.",
    speaker: "Your mom",
    quote: "They said it could take a week. I keep telling myself not to worry.",
    responses: [
      { move: "Name the feeling", text: "Waiting like that is so hard. It makes sense you're worried." },
      { move: "Be present", text: "You don't have to hold it together with me, Mom." },
      { move: "Offer help", text: "Want me to come over this week, or call you each evening?" }
    ],
    trap: { type: "Silver lining", text: "I'm sure it's nothing. Try not to think about it." }
  },
  {
    id: "parent-08",
    rel: "parent",
    kind: "everyday",
    setup: "Your dad's best friend from high school passed away last week.",
    speaker: "Your dad",
    quote: "We were supposed to go fishing next month.",
    responses: [
      { move: "Be present", text: "Dad, I'm so sorry. That's a huge loss." },
      { move: "Reflect back", text: "You still had plans together. He was part of your future, not just your past." },
      { move: "Get curious", text: "Will you tell me about him? I'd love to hear." }
    ],
    trap: { type: "Changing the subject", text: "That's sad. Hey, did you ever fix the gutter?" }
  },
  {
    id: "parent-09",
    rel: "parent",
    kind: "conflict",
    setup: "Your mom asked when you'd visit next. You said you're too busy right now.",
    speaker: "Your mom",
    quote: "You're always too busy for me.",
    responses: [
      { move: "Own it", text: "You're right, I've said that a lot. I'm sorry, Mom." },
      { move: "Name the feeling", text: "It sounds like you feel like you're at the bottom of my list." },
      { move: "Offer help", text: "Let's put a visit on the calendar right now. What weekend works?" }
    ],
    trap: { type: "Explaining yourself", text: "It's not personal, I just have a lot going on with work." }
  },
  {
    id: "parent-10",
    rel: "parent",
    kind: "conflict",
    setup: "Your sibling has handled most of your dad's doctor visits this year.",
    speaker: "Your dad",
    quote: "Your sister's been there every time. I hardly see you.",
    responses: [
      { move: "Own it", text: "That's true. She's carried most of it, and I haven't shown up." },
      { move: "Name the feeling", text: "It sounds like you've missed me, and maybe felt a bit forgotten." },
      { move: "Offer help", text: "I'd like to take the next appointment. Would that be okay?" }
    ],
    trap: { type: "Getting defensive", text: "She lives ten minutes away. That's not fair." }
  },
  {
    id: "parent-11",
    rel: "parent",
    kind: "conflict",
    setup: "You announced at dinner that you're skipping the family holiday this year, without telling your mom first.",
    speaker: "Your mom",
    quote: "I had to hear it in front of everyone.",
    responses: [
      { move: "Own it", text: "You're right. You deserved to hear that from me first, privately. I'm sorry." },
      { move: "Name the feeling", text: "That must have felt embarrassing, and a little hurtful." },
      { move: "Get curious", text: "What was the hardest part of hearing it that way?" }
    ],
    trap: { type: "Minimizing", text: "It's just one holiday, Mom. It's not a big deal." }
  },
  {
    id: "parent-12",
    rel: "parent",
    kind: "conflict",
    setup: "You snapped at your dad when he offered to look at your car.",
    speaker: "Your dad",
    quote: "I was only trying to help. You don't have to bite my head off.",
    responses: [
      { move: "Own it", text: "You're right, I was short with you. I'm sorry, Dad." },
      { move: "Thank them", text: "I know you were trying to help. Thank you for offering." },
      { move: "Reflect back", text: "You were reaching out and I pushed you away. That doesn't feel good." }
    ],
    trap: { type: "Getting defensive", text: "Well, you always act like I can't handle anything myself." }
  },
  {
    id: "parent-13",
    rel: "parent",
    kind: "repair",
    setup: "Your mom said she's been feeling her age lately. You said, \"Well, you're not getting any younger.\"",
    speaker: "Your mom",
    quote: "Thanks. That's very comforting.",
    responses: [
      { move: "Own it", text: "Sorry, Mom, that was a careless thing to say." },
      { move: "Validate", text: "Feeling your body change is hard. It's okay to not love it." },
      { move: "Get curious", text: "What's been making you feel it most lately?" }
    ],
    trap: { type: "Joking it off", text: "Come on, I was kidding. You know I'm kidding." }
  },
  {
    id: "parent-14",
    rel: "parent",
    kind: "repair",
    setup: "Your dad told you he's thinking of selling the family home. You said, \"Finally. That place is way too big for you.\"",
    speaker: "Your dad",
    quote: "It's where I raised you kids. It's not just a house to me.",
    responses: [
      { move: "Own it", text: "You're right, I'm sorry. I jumped to the practical part." },
      { move: "Validate", text: "Of course it's more than a house. There's a whole life in there." },
      { move: "Get curious", text: "What would you miss most about it?" }
    ],
    trap: { type: "Yes, but", text: "I get that, but it really is too much house for one person." }
  },
  {
    id: "parent-15",
    rel: "parent",
    kind: "repair",
    setup: "Your mom said she's been feeling left out since your kids got older. You said, \"They're teenagers, Mom. They're busy.\"",
    speaker: "Your mom",
    quote: "I know that. I still miss them.",
    responses: [
      { move: "Own it", text: "I'm sorry. I brushed that off when you were telling me something real." },
      { move: "Name the feeling", text: "It's sad when the grandkids grow up and there's less time together." },
      { move: "Offer help", text: "Want to plan something with just you and them? I'll help make it happen." }
    ],
    trap: { type: "Dismissing", text: "You see them all the time, though." }
  }
]);
