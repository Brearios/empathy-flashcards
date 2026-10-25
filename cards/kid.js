window.CARDS = (window.CARDS || []).concat([
  {
    id: "kid-01",
    rel: "kid",
    kind: "everyday",
    setup: "Your ten-year-old gets in the car after school, unusually quiet.",
    speaker: "Your kid",
    quote: "Nobody sat with me at lunch today.",
    responses: [
      { move: "Name the feeling", text: "That sounds really lonely. I'm sorry, buddy." },
      { move: "Be present", text: "Come here. I'm really glad you told me." },
      { move: "Get curious", text: "What was lunch like? Tell me what happened." }
    ],
    trap: { type: "Fixing", text: "Tomorrow just go sit with someone new!" }
  },
  {
    id: "kid-02",
    rel: "kid",
    kind: "everyday",
    setup: "Your six-year-old is getting ready for bed.",
    speaker: "Your kid",
    quote: "I'm scared about the dentist tomorrow.",
    responses: [
      { move: "Validate", text: "That makes sense. Lots of grown-ups get nervous about the dentist too." },
      { move: "Get curious", text: "What part feels the scariest?" },
      { move: "Offer help", text: "Want to bring your stuffed bear? I'll be right there the whole time." }
    ],
    trap: { type: "Dismissing", text: "There's nothing to be scared of. Go to sleep." }
  },
  {
    id: "kid-03",
    rel: "kid",
    kind: "everyday",
    setup: "Your eight-year-old climbs off the school bus holding pieces of cardboard.",
    speaker: "Your kid",
    quote: "My science project broke on the bus.",
    responses: [
      { move: "Name the feeling", text: "Oh no, after all that work? That's so frustrating." },
      { move: "Be present", text: "Come here. That's a really bad bus ride." },
      { move: "Offer help", text: "When you're ready, want me to help you figure out what to do?" }
    ],
    trap: { type: "Judging", text: "I told you to hold it on your lap." }
  },
  {
    id: "kid-04",
    rel: "kid",
    kind: "everyday",
    setup: "Your teenager comes home clearly upset. You ask what's wrong.",
    speaker: "Your teen",
    quote: "I don't want to talk about it.",
    responses: [
      { move: "Validate", text: "Okay. You don't have to." },
      { move: "Be present", text: "I'm around all evening if you change your mind." },
      { move: "Offer help", text: "Want me to make your favorite for dinner?" }
    ],
    trap: { type: "Fixing", text: "Well, I can't help if you won't tell me anything." }
  },
  {
    id: "kid-05",
    rel: "kid",
    kind: "everyday",
    setup: "Your twelve-year-old is in front of the bathroom mirror, frowning.",
    speaker: "Your kid",
    quote: "I hate how I look.",
    responses: [
      { move: "Name the feeling", text: "Oof. That's a rough feeling to wake up with." },
      { move: "Validate", text: "A lot of people your age feel that way. You're not alone in it." },
      { move: "Get curious", text: "What's bugging you most today?" }
    ],
    trap: { type: "Dismissing", text: "Don't be silly, you look fine." }
  },
  {
    id: "kid-06",
    rel: "kid",
    kind: "everyday",
    setup: "Your teenager has been looking at friends' photos online all evening.",
    speaker: "Your teen",
    quote: "Everyone got invited to the party except me.",
    responses: [
      { move: "Name the feeling", text: "That really stings. Seeing it online makes it worse." },
      { move: "Validate", text: "Of course you're hurt. Anyone would be." },
      { move: "Be present", text: "Want company? We can just hang out tonight." }
    ],
    trap: { type: "Silver lining", text: "At least you won't be out late on a school night." }
  },
  {
    id: "kid-07",
    rel: "kid",
    kind: "everyday",
    setup: "Your nine-year-old runs into the kitchen waving a paper.",
    speaker: "Your kid",
    quote: "I got a hundred on my spelling test!",
    responses: [
      { move: "Celebrate", text: "A hundred! That's amazing! High five!" },
      { move: "Reflect back", text: "You practiced those words every night, and it paid off." },
      { move: "Get curious", text: "Which word was the hardest one?" }
    ],
    trap: { type: "Yes, but", text: "Great! Now let's keep it up for math too." }
  },
  {
    id: "kid-08",
    rel: "kid",
    kind: "everyday",
    setup: "Your teenager walks off the field after their first varsity game.",
    speaker: "Your teen",
    quote: "Coach actually put me in for the whole second half!",
    responses: [
      { move: "Celebrate", text: "The whole second half! I was screaming in the stands." },
      { move: "Reflect back", text: "Coach trusts you. That's what all those early practices were for." },
      { move: "Get curious", text: "What did it feel like out there?" }
    ],
    trap: { type: "Advice", text: "Nice. You've got to work on that left-side passing, though." }
  },
  {
    id: "kid-09",
    rel: "kid",
    kind: "conflict",
    setup: "It's bedtime and your youngest is protesting.",
    speaker: "Your kid",
    quote: "It's not fair that my sister gets to stay up later!",
    responses: [
      { move: "Validate", text: "It really does feel unfair. I get it." },
      { move: "Name the feeling", text: "Being the younger one is frustrating sometimes." },
      { move: "Be present", text: "I'll stay and read one more page with you." }
    ],
    trap: { type: "Explaining yourself", text: "She's older. That's just how it works." }
  },
  {
    id: "kid-10",
    rel: "kid",
    kind: "conflict",
    setup: "You worked all Saturday instead of taking your seven-year-old to the park like you said.",
    speaker: "Your kid",
    quote: "You promised we'd go and then you worked all day.",
    responses: [
      { move: "Own it", text: "You're right. I promised, and I broke it. I'm sorry." },
      { move: "Name the feeling", text: "You were really looking forward to it. That's so disappointing." },
      { move: "Offer help", text: "Let's pick a time together, and I'll keep it." }
    ],
    trap: { type: "Explaining yourself", text: "I had to work. Someone has to pay for things." }
  },
  {
    id: "kid-11",
    rel: "kid",
    kind: "conflict",
    setup: "You've been talking with your teenager about grades.",
    speaker: "Your teen",
    quote: "You never listen to me. You just lecture.",
    responses: [
      { move: "Own it", text: "Okay. I've been doing a lot of the talking." },
      { move: "Reflect back", text: "It feels like I talk at you instead of with you." },
      { move: "Get curious", text: "I'll stop. What do you want me to understand?" }
    ],
    trap: { type: "Getting defensive", text: "I'm lecturing because you won't listen to me." }
  },
  {
    id: "kid-12",
    rel: "kid",
    kind: "conflict",
    setup: "You just picked your fourteen-year-old up from a friend's house.",
    speaker: "Your teen",
    quote: "You embarrassed me in front of my friends.",
    responses: [
      { move: "Own it", text: "I'm sorry. I didn't mean to, but I can see I did." },
      { move: "Name the feeling", text: "That's an awful feeling, especially with your friends right there." },
      { move: "Get curious", text: "What did I do that bothered you most?" }
    ],
    trap: { type: "Joking it off", text: "That's my job! Wait till you see me at graduation." }
  },
  {
    id: "kid-13",
    rel: "kid",
    kind: "repair",
    setup: "Your five-year-old showed you a drawing and you asked, \"What is it?\"",
    speaker: "Your kid",
    quote: "It's YOU.",
    responses: [
      { move: "Own it", text: "Oops, I didn't see it at first. I'm sorry!" },
      { move: "Thank them", text: "You drew me? That's so special. Thank you." },
      { move: "Get curious", text: "Tell me about it. What am I doing in the picture?" }
    ],
    trap: { type: "Joking it off", text: "Do I really have a head that big?" }
  },
  {
    id: "kid-14",
    rel: "kid",
    kind: "repair",
    setup: "Your eleven-year-old said they got a B on a test, and you asked, \"Why not an A?\"",
    speaker: "Your kid",
    quote: "I studied really hard.",
    responses: [
      { move: "Own it", text: "You're right. That came out wrong, and I'm sorry." },
      { move: "Reflect back", text: "You worked hard for that B, and I'm proud of you." },
      { move: "Get curious", text: "How do you feel about it?" }
    ],
    trap: { type: "Explaining yourself", text: "I just know you can do better, that's all." }
  },
  {
    id: "kid-15",
    rel: "kid",
    kind: "repair",
    setup: "Your teenager told you about a crush, and you laughed.",
    speaker: "Your teen",
    quote: "Forget it. I'm never telling you anything again.",
    responses: [
      { move: "Own it", text: "That's fair. I'm sorry I laughed." },
      { move: "Validate", text: "It felt like I was laughing at you. Of course you shut down." },
      { move: "Thank them", text: "I'm glad you trust me with this stuff. I'd love to hear more, if you're willing." }
    ],
    trap: { type: "Minimizing", text: "Oh, relax. It was cute, that's all." }
  }
]);
