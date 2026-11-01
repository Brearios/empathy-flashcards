window.CARDS = (window.CARDS || []).concat([
  {
    id: "choice-partner-01",
    rel: "partner",
    kind: "everyday",
    type: "choice",
    setup: "Your partner gets off the phone with the auto shop and puts their head in their hands.",
    speaker: "Your partner",
    quote: "The mechanic says it's going to be over two thousand dollars.",
    options: [
      { tone: "green", text: "Oof. That's a gut punch, especially right now. Come sit with me for a minute.", note: "Names how hard the news lands and offers closeness before solving anything." },
      { tone: "yellow", text: "Ugh, cars are so expensive. Sorry to hear it.", note: "Sympathetic, but generic. It doesn't really meet them in the moment." },
      { tone: "red", text: "Let's get a second quote. Shops always inflate the first estimate.", trap: "Fixing" },
      { tone: "red", text: "At least it broke down near home and not on the highway.", trap: "Silver lining" }
    ]
  },
  {
    id: "choice-partner-02",
    rel: "partner",
    kind: "everyday",
    type: "choice",
    setup: "It's been two weeks since your old dog died. Your partner is standing by the back door.",
    speaker: "Your partner",
    quote: "I keep expecting to hear the collar jingle when I come home.",
    options: [
      { tone: "green", text: "Me too. The house is so quiet without him.", note: "Shares the grief alongside them instead of trying to move them past it." },
      { tone: "yellow", text: "Yeah, it takes a while to get used to.", note: "True and gentle, but it closes the moment instead of opening it." },
      { tone: "red", text: "Maybe we should start looking at shelters. It might help.", trap: "Fixing" },
      { tone: "red", text: "He had a really long, happy life, though. That's what matters.", trap: "Silver lining" }
    ]
  },
  {
    id: "choice-partner-03",
    rel: "partner",
    kind: "everyday",
    type: "choice",
    setup: "Your partner just read a text from their best friend.",
    speaker: "Your partner",
    quote: "Sam's moving across the country. Like, next month.",
    options: [
      { tone: "green", text: "Next month? You two have been close forever. How are you feeling?", note: "Reflects the shock, honors the friendship, and asks how they're doing." },
      { tone: "yellow", text: "Wow, that's big news. Where are they going?", note: "Interested, but focused on logistics instead of what this means to your partner." },
      { tone: "red", text: "Well, you can always video chat. Long distance friendships work fine these days.", trap: "Minimizing" },
      { tone: "red", text: "Oh no, they were the only friend of yours I actually liked.", trap: "Making it about you" }
    ]
  },
  {
    id: "choice-partner-04",
    rel: "partner",
    kind: "everyday",
    type: "choice",
    setup: "Your partner got their annual review at work today.",
    speaker: "Your partner",
    quote: "It said I'm not a team player. I carry that team.",
    options: [
      { tone: "green", text: "That would sting. You carry that team. What did they point to?", note: "Validates the hurt and gets curious before weighing in." },
      { tone: "yellow", text: "That's annoying. Reviews are always kind of random.", note: "On their side, but it brushes past how much it hurt." },
      { tone: "red", text: "Do you think maybe you come across a little blunt sometimes? You can be pretty direct.", trap: "Judging" },
      { tone: "red", text: "You should write a rebuttal and send it to HR tomorrow.", trap: "Advice" }
    ]
  },
  {
    id: "choice-partner-05",
    rel: "partner",
    kind: "everyday",
    type: "choice",
    setup: "Your partner hangs up with their mom and stares out the window.",
    speaker: "Your partner",
    quote: "Dad fell again. Mom says he's fine, but I can't stop thinking about it.",
    options: [
      { tone: "green", text: "Of course you can't. That's scary, and being far away makes it worse.", note: "Validates the worry and names what makes it heavier." },
      { tone: "yellow", text: "I'm glad he's okay. Let me know if you hear more.", note: "Kind, but it skips past the worry they just shared." },
      { tone: "red", text: "If your mom says he's fine, he's probably fine. Try not to worry.", trap: "Dismissing" },
      { tone: "red", text: "He really needs one of those medical alert necklaces. Want me to look some up tonight?", trap: "Fixing" }
    ]
  },
  {
    id: "choice-partner-06",
    rel: "partner",
    kind: "everyday",
    type: "choice",
    setup: "It's the night before your partner's fortieth birthday.",
    speaker: "Your partner",
    quote: "I thought I'd have more figured out by forty.",
    options: [
      { tone: "green", text: "Big birthdays bring that up, huh? What did you picture by now?", note: "Normalizes the feeling and invites them to say more." },
      { tone: "yellow", text: "Forty's not old. You've got plenty of time.", note: "Reassuring, but it answers the number instead of the feeling." },
      { tone: "red", text: "Nobody has it figured out. I sure don't, and I'm older.", trap: "One-upping" },
      { tone: "red", text: "You have a good job, a home, friends who love you, and me. What else is there?", trap: "Yes, but" }
    ]
  },
  {
    id: "choice-partner-07",
    rel: "partner",
    kind: "everyday",
    type: "choice",
    setup: "Your partner is pacing the kitchen the night before a big presentation.",
    speaker: "Your partner",
    quote: "I have to present to the whole department tomorrow and I feel sick.",
    options: [
      { tone: "green", text: "That nervous, sick feeling is the worst. Want to run it with me, or need a break from it?", note: "Names the feeling and lets them choose what kind of support they want." },
      { tone: "yellow", text: "You'll be fine. You always are.", note: "Encouraging, but it skips the nerves they're feeling right now." },
      { tone: "red", text: "Just picture everyone in their underwear. That's what I do.", trap: "Joking it off" },
      { tone: "red", text: "You've been overpreparing. Honestly, you should just go to bed.", trap: "Advice" }
    ]
  },
  {
    id: "choice-partner-08",
    rel: "partner",
    kind: "everyday",
    type: "choice",
    setup: "An early frost hit overnight. Your partner is standing in the vegetable garden.",
    speaker: "Your partner",
    quote: "It killed everything. Months of work, gone in one night.",
    options: [
      { tone: "green", text: "Oh no. You worked on it all summer. That's heartbreaking.", note: "Acknowledges the effort and names the loss." },
      { tone: "yellow", text: "That's rough. Weather's so unpredictable lately.", note: "Sympathetic, but it talks about the weather more than about them." },
      { tone: "red", text: "We can just buy vegetables at the store. It's not a big loss.", trap: "Minimizing" },
      { tone: "red", text: "Next year you should get frost covers. I read about those.", trap: "Advice" }
    ]
  },
  {
    id: "choice-partner-09",
    rel: "partner",
    kind: "everyday",
    type: "choice",
    setup: "Your partner walks in soaked from the rain, holding a parking ticket.",
    speaker: "Your partner",
    quote: "Everything went wrong today. Literally everything.",
    options: [
      { tone: "green", text: "One of those days, huh? Get dry, and then tell me all of it.", note: "Validates and makes space for them to vent." },
      { tone: "yellow", text: "Aw, bad day? Tomorrow will be better.", note: "Well-meant, but it jumps ahead instead of hearing about today." },
      { tone: "red", text: "Wait till you hear about my day. My boss lost it on me.", trap: "One-upping" },
      { tone: "red", text: "Did you not see the sign? That street is always ticketed after five, everyone knows that.", trap: "Judging" }
    ]
  },
  {
    id: "choice-partner-10",
    rel: "partner",
    kind: "everyday",
    type: "choice",
    setup: "Your partner has been away from their hometown for a year now.",
    speaker: "Your partner",
    quote: "I miss home. Everything here still feels temporary.",
    options: [
      { tone: "green", text: "That sounds lonely, like you haven't landed yet. What do you miss?", note: "Reflects the unsettled feeling and asks about what matters to them." },
      { tone: "yellow", text: "It takes time. It'll start to feel like home eventually.", note: "Probably true, but it rushes them toward feeling better." },
      { tone: "red", text: "But we have a great life here. Don't you like it?", trap: "Getting defensive" },
      { tone: "red", text: "You just need to get out more. Join a club or a gym class or something, you'd meet people.", trap: "Advice" }
    ]
  },
  {
    id: "choice-partner-11",
    rel: "partner",
    kind: "everyday",
    type: "choice",
    setup: "Your partner comes home from a doctor's appointment and sits in the car for a while before coming in.",
    speaker: "Your partner",
    quote: "They said I need to start a medication I might be on forever.",
    options: [
      { tone: "green", text: "Forever is a lot to take in. How are you feeling about it?", note: "Picks up on the weight of the word and gets curious." },
      { tone: "yellow", text: "Okay. Well, it's good they caught it.", note: "Not wrong, but it skips how heavy the news feels." },
      { tone: "red", text: "Lots of people take daily meds. It's honestly not a big deal.", trap: "Minimizing" },
      { tone: "red", text: "Did you ask about side effects? You should get a second opinion.", trap: "Fixing" }
    ]
  },
  {
    id: "choice-partner-12",
    rel: "partner",
    kind: "everyday",
    type: "choice",
    setup: "Your partner opens an email and their face lights up.",
    speaker: "Your partner",
    quote: "I got into the program. I really didn't think I would.",
    options: [
      { tone: "green", text: "You did it! I'm so proud of you. How does it feel to read that?", note: "Celebrates fully and invites them to savor it." },
      { tone: "yellow", text: "Nice, congrats! When does it start?", note: "Happy for them, but it hurries to logistics." },
      { tone: "red", text: "I knew you would! So how are we going to pay for it, though? Have you looked at tuition?", trap: "Changing the subject" },
      { tone: "red", text: "Of course you got in. Those programs take almost everyone.", trap: "Minimizing" }
    ]
  },
  {
    id: "choice-partner-13",
    rel: "partner",
    kind: "everyday",
    type: "choice",
    setup: "Your partner clicks a button on their laptop and leans back.",
    speaker: "Your partner",
    quote: "That was my last student loan payment. It's done.",
    options: [
      { tone: "green", text: "Ten years of payments, finished! That must feel like a weight off. Let's celebrate.", note: "Celebrates and names the relief behind the milestone." },
      { tone: "yellow", text: "Oh, nice. That's good.", note: "Positive, but too flat for something this big to them." },
      { tone: "red", text: "Great, so now we can put that money toward the car.", trap: "Changing the subject" },
      { tone: "red", text: "Finally. I paid mine off years ago, so welcome to the club.", trap: "One-upping" }
    ]
  },
  {
    id: "choice-partner-14",
    rel: "partner",
    kind: "everyday",
    type: "choice",
    setup: "Your partner comes home from work grinning.",
    speaker: "Your partner",
    quote: "My boss stopped me in the hall and said my project saved the quarter.",
    options: [
      { tone: "green", text: "That's amazing! What exactly did they say?", note: "Celebrates with them and lets them relive the moment." },
      { tone: "yellow", text: "Cool! Good for you.", note: "Friendly, but it's over before they get to enjoy it." },
      { tone: "red", text: "That's great. Hopefully that means a raise, right?", trap: "Changing the subject" },
      { tone: "red", text: "Nice. Bosses say that stuff all the time, though.", trap: "Minimizing" }
    ]
  },
  {
    id: "choice-partner-15",
    rel: "partner",
    kind: "everyday",
    type: "choice",
    setup: "Your partner just got off the stage at an open mic night.",
    speaker: "Your partner",
    quote: "My hands were shaking the whole time, but I did it.",
    options: [
      { tone: "green", text: "You did! Shaking hands and all. How do you feel?", note: "Celebrates their courage and asks about their experience." },
      { tone: "yellow", text: "It sounded good from where I was sitting.", note: "Supportive, but it focuses on the result rather than their courage." },
      { tone: "red", text: "Yeah, I could tell. You missed a couple of chords.", trap: "Judging" },
      { tone: "red", text: "Totally. Remember when I did karaoke and froze? Way worse.", trap: "Making it about you" }
    ]
  },
  {
    id: "choice-partner-16",
    rel: "partner",
    kind: "conflict",
    type: "choice",
    setup: "You told your friends you'd both come to a weekend trip without asking your partner first.",
    speaker: "Your partner",
    quote: "You said yes for both of us without even asking me.",
    options: [
      { tone: "green", text: "You're right. I planned for you without you. Sorry. Do you even want to go?", note: "Owns the mistake and hands the decision back to them." },
      { tone: "yellow", text: "Okay, sorry. I can tell them we'll think about it.", note: "Apologizes, but it doesn't acknowledge why it bothered them." },
      { tone: "red", text: "I figured you'd want to go. You always say how much you love them and miss seeing them.", trap: "Explaining yourself" },
      { tone: "red", text: "It's one weekend. I didn't think it was a big deal.", trap: "Minimizing" }
    ]
  },
  {
    id: "choice-partner-17",
    rel: "partner",
    kind: "conflict",
    type: "choice",
    setup: "Your partner is wiping down the counters you said you'd clean.",
    speaker: "Your partner",
    quote: "I'm tired of being the one who notices everything that needs doing.",
    options: [
      { tone: "green", text: "That sounds exhausting, carrying all of it in your head.", note: "Reflects the invisible work they're doing instead of defending yourself." },
      { tone: "yellow", text: "Sorry, I'll finish the counters.", note: "Fixes this one task, but misses the bigger thing they named." },
      { tone: "red", text: "I do plenty around here. I took out the trash this morning.", trap: "Getting defensive" },
      { tone: "red", text: "Just make me a list and I'll do whatever's on it.", trap: "Fixing" }
    ]
  },
  {
    id: "choice-partner-18",
    rel: "partner",
    kind: "conflict",
    type: "choice",
    setup: "At dinner with friends, you mentioned something your partner had told you in confidence.",
    speaker: "Your partner",
    quote: "That was something I told you in private.",
    options: [
      { tone: "green", text: "You're right. I broke your trust, and that wasn't mine to share.", note: "Owns it clearly and names why it mattered." },
      { tone: "yellow", text: "Sorry. I won't bring it up again.", note: "Apologizes, but doesn't show they understand the hurt." },
      { tone: "red", text: "They're our closest friends, and they'd never repeat it. I honestly didn't think you'd mind.", trap: "Explaining yourself" },
      { tone: "red", text: "Nobody even reacted. I don't think anyone noticed.", trap: "Minimizing" }
    ]
  },
  {
    id: "choice-partner-19",
    rel: "partner",
    kind: "conflict",
    type: "choice",
    setup: "You bought an expensive new bike without talking about it first.",
    speaker: "Your partner",
    quote: "We agreed we'd talk before spending that much.",
    options: [
      { tone: "green", text: "We did, and I skipped it. I'm sorry. Can we talk about it now?", note: "Owns the broken agreement and invites the conversation they wanted." },
      { tone: "yellow", text: "Yeah, okay. I should have mentioned it.", note: "Admits it, but sounds like it's just to end the conversation." },
      { tone: "red", text: "It was forty percent off, and honestly it'll save us money on gas in the long run.", trap: "Explaining yourself" },
      { tone: "red", text: "You bought that couch last year without asking me.", trap: "Getting defensive" }
    ]
  },
  {
    id: "choice-partner-20",
    rel: "partner",
    kind: "conflict",
    type: "choice",
    setup: "Your partner learned from your sister that you agreed to host the holidays.",
    speaker: "Your partner",
    quote: "I had to find out from your sister that we're hosting?",
    options: [
      { tone: "green", text: "Ugh, that must have felt awful, hearing it secondhand. I'm sorry. You should've heard it from me first.", note: "Names how it felt to be left out and takes responsibility." },
      { tone: "yellow", text: "Sorry, I meant to tell you. It slipped my mind.", note: "An apology, but it doesn't touch how it felt for them." },
      { tone: "red", text: "I didn't think you'd care. You like hosting.", trap: "Dismissing" },
      { tone: "red", text: "She wasn't supposed to say anything yet.", trap: "Changing the subject" }
    ]
  },
  {
    id: "choice-partner-21",
    rel: "partner",
    kind: "conflict",
    type: "choice",
    setup: "You've worked late every night this week. You come home at nine.",
    speaker: "Your partner",
    quote: "I ate dinner alone again. That's four nights this week.",
    options: [
      { tone: "green", text: "That's lonely, and I've been gone a lot. Can we protect tomorrow night?", note: "Names the loneliness, owns their part, and offers a concrete step." },
      { tone: "yellow", text: "I know, I'm sorry. Work's just crazy right now.", note: "Sorry, but it mostly explains instead of connecting." },
      { tone: "red", text: "I'm doing this for us, you know. It's not like I want to be stuck at the office until nine.", trap: "Getting defensive" },
      { tone: "red", text: "It's just this month. Things will calm down soon.", trap: "Yes, but" }
    ]
  },
  {
    id: "choice-partner-22",
    rel: "partner",
    kind: "conflict",
    type: "choice",
    setup: "At a party, you corrected details of your partner's story in front of everyone.",
    speaker: "Your partner",
    quote: "You corrected my story in front of everyone. Twice.",
    options: [
      { tone: "green", text: "I did, and that was embarrassing for you. I'm sorry. It was your story.", note: "Owns it, names the embarrassment, and respects their story." },
      { tone: "yellow", text: "Oh, I didn't realize I did that. Sorry.", note: "Polite, but it doesn't acknowledge how it felt." },
      { tone: "red", text: "I was just trying to help. You had the dates wrong.", trap: "Explaining yourself" },
      { tone: "red", text: "Nobody cared about the details, honestly. It was just a party and everyone was having fun.", trap: "Minimizing" }
    ]
  },
  {
    id: "choice-partner-23",
    rel: "partner",
    kind: "conflict",
    type: "choice",
    setup: "You promised to pick up your partner's prescription on the way home, and forgot.",
    speaker: "Your partner",
    quote: "I really needed that today. You said you'd get it.",
    options: [
      { tone: "green", text: "I said I would, and I let you down. I'm going right now.", note: "Owns the broken promise and repairs it immediately." },
      { tone: "yellow", text: "Oh no, I'm sorry. Can it wait until tomorrow?", note: "Apologizes, but puts their need second." },
      { tone: "red", text: "I had a really long day and my meeting ran late. It totally slipped my mind.", trap: "Explaining yourself" },
      { tone: "red", text: "Why didn't you text me a reminder?", trap: "Getting defensive" }
    ]
  },
  {
    id: "choice-partner-24",
    rel: "partner",
    kind: "conflict",
    type: "choice",
    setup: "You're on vacation, and you've been answering work emails all morning.",
    speaker: "Your partner",
    quote: "We're on vacation and you've been on your phone all morning.",
    options: [
      { tone: "green", text: "You're right, you've been waiting on me. I'm putting it away.", note: "Owns it, acknowledges their experience, and turns back toward them." },
      { tone: "yellow", text: "Sorry. Just give me five more minutes.", note: "Apologetic, but still puts the phone first." },
      { tone: "red", text: "It's just a couple of emails. It's not ruining anything.", trap: "Minimizing" },
      { tone: "red", text: "If I don't answer now, I'll just have twice as much waiting for me when we get back.", trap: "Explaining yourself" }
    ]
  },
  {
    id: "choice-partner-25",
    rel: "partner",
    kind: "repair",
    type: "choice",
    setup: "Your partner said they want to go back to school. You said, \"Isn't that a lot of money at this point?\"",
    speaker: "Your partner",
    quote: "Wow. I thought you'd be excited for me.",
    options: [
      { tone: "green", text: "You're right, I led with my worry. Tell me what's pulling you toward it.", note: "Owns the misstep and gets curious about their dream." },
      { tone: "yellow", text: "I am excited. I'm just thinking practically.", note: "Not unkind, but it doesn't repair the letdown." },
      { tone: "red", text: "Someone has to think about the budget around here.", trap: "Getting defensive" },
      { tone: "red", text: "I'm excited, I am, but we should probably look at the numbers together before you apply.", trap: "Yes, but" }
    ]
  },
  {
    id: "choice-partner-26",
    rel: "partner",
    kind: "repair",
    type: "choice",
    setup: "Your partner said they feel bad about gaining weight. You said, \"Just cut back on snacks for a while.\"",
    speaker: "Your partner",
    quote: "That's not what I needed to hear.",
    options: [
      { tone: "green", text: "You're right, I'm sorry. You were sharing a feeling and I jumped to a plan. How are you feeling?", note: "Owns jumping to a fix and returns to their feelings." },
      { tone: "yellow", text: "Sorry. I was just trying to help.", note: "Well-meaning, but it centers your intent instead of their hurt." },
      { tone: "red", text: "I mean, you brought it up. I thought you wanted ideas.", trap: "Explaining yourself" },
      { tone: "red", text: "You look great anyway. I don't even notice a difference.", trap: "Dismissing" }
    ]
  },
  {
    id: "choice-partner-27",
    rel: "partner",
    kind: "repair",
    type: "choice",
    setup: "Your partner said they're worried about layoffs at work. You said, \"You worry about everything.\"",
    speaker: "Your partner",
    quote: "So I'm just supposed to not care?",
    options: [
      { tone: "green", text: "That was dismissive, sorry. Layoffs are scary. What are you hearing?", note: "Owns the dismissal, validates the fear, and asks to hear more." },
      { tone: "yellow", text: "No, that's not what I meant.", note: "A start, but it doesn't take back the hurt or reconnect." },
      { tone: "red", text: "I just mean you get really worked up about stuff.", trap: "Judging" },
      { tone: "red", text: "Your company's doing fine, though. With your experience, I really doubt you'd be the one cut.", trap: "Dismissing" }
    ]
  },
  {
    id: "choice-partner-28",
    rel: "partner",
    kind: "repair",
    type: "choice",
    setup: "Your partner was upset about a friend's comment. You said, \"I'm sure they didn't mean it like that.\"",
    speaker: "Your partner",
    quote: "You weren't even there.",
    options: [
      { tone: "green", text: "True, I wasn't. I'm sorry. Tell me what happened.", note: "Owns defending the friend and turns back to their experience." },
      { tone: "yellow", text: "Okay, fair. What did they say exactly?", note: "Curious, but it skips owning the brush-off." },
      { tone: "red", text: "I'm just saying, they're usually a nice person.", trap: "Yes, but" },
      { tone: "red", text: "Maybe you should just talk to them about it directly.", trap: "Advice" }
    ]
  },
  {
    id: "choice-partner-29",
    rel: "partner",
    kind: "repair",
    type: "choice",
    setup: "Your partner came home with a new haircut. You said, \"Oh. It's short.\"",
    speaker: "Your partner",
    quote: "You hate it.",
    options: [
      { tone: "green", text: "Sorry, I was just surprised and it came out wrong. How do you feel about it?", note: "Owns the clumsy reaction and centers how they feel." },
      { tone: "yellow", text: "No, no, it's nice. It'll grow on me.", note: "Trying to be kind, but it sounds lukewarm." },
      { tone: "red", text: "I didn't say I hated it. I just said it's short, which it is. It's a big change from before.", trap: "Getting defensive" },
      { tone: "red", text: "Relax, it's just hair. It'll grow back.", trap: "Minimizing" }
    ]
  },
  {
    id: "choice-partner-30",
    rel: "partner",
    kind: "repair",
    type: "choice",
    setup: "Your partner mentioned the anniversary of their dad's death is coming up. You said, \"Wasn't that years ago?\"",
    speaker: "Your partner",
    quote: "It still matters to me.",
    options: [
      { tone: "green", text: "Of course it does. That was careless of me, and I'm sorry. How can I be there for you that day?", note: "Validates that grief lasts, owns the comment, and offers support." },
      { tone: "yellow", text: "Right, sorry. I didn't mean anything by it.", note: "Apologizes, but doesn't acknowledge the grief." },
      { tone: "red", text: "I know, I just thought it had gotten easier for you.", trap: "Explaining yourself" },
      { tone: "red", text: "Sorry. So what do you want to do for dinner that night?", trap: "Changing the subject" }
    ]
  }
]);
