window.CARDS = (window.CARDS || []).concat([
  {
    id: "choice-parent-01",
    rel: "parent",
    kind: "everyday",
    type: "choice",
    setup: "Your mom is figuring out a new smartphone and calls you for the third time today.",
    speaker: "Your mom",
    quote: "I feel so stupid. Everyone else just knows how to do this stuff.",
    options: [
      { tone: "green", text: "You're not stupid, Mom. It's frustrating when everything changes. Want to do it together?", note: "Names the frustration, rejects the self-blame, and offers to stay with her." },
      { tone: "yellow", text: "Don't worry, Mom, you'll get the hang of it eventually.", note: "Kind and hopeful, but skips over how embarrassed she feels right now." },
      { tone: "red", text: "Just look up a video on YouTube, Mom. There are step-by-step ones for pretty much every phone.", trap: "Advice" },
      { tone: "red", text: "Ha, you should've seen me trying to set up my new laptop.", trap: "One-upping" }
    ]
  },
  {
    id: "choice-parent-02",
    rel: "parent",
    kind: "everyday",
    type: "choice",
    setup: "Your dad has been dating someone new since your parents divorced. He sounds nervous on the phone.",
    speaker: "Your dad",
    quote: "I'd like you to meet her. I hope that's not weird for you.",
    options: [
      { tone: "green", text: "Thanks for asking, Dad. It might feel a bit strange, but I'd like to meet her.", note: "Thanks him, is honest about mixed feelings, and still says yes warmly." },
      { tone: "yellow", text: "Sure, whatever works for you. Just tell me when.", note: "Agreeable, but sounds detached when he's clearly nervous about it." },
      { tone: "red", text: "It's fine. Honestly, I don't really care who you date.", trap: "Dismissing" },
      { tone: "red", text: "Isn't it a little soon to be introducing her to the family? You've only been seeing her a few months.", trap: "Judging" }
    ]
  },
  {
    id: "choice-parent-03",
    rel: "parent",
    kind: "everyday",
    type: "choice",
    setup: "Your mom just learned her longtime hairdresser is retiring.",
    speaker: "Your mom",
    quote: "Twenty-two years she's done my hair. I know it's silly to be upset.",
    options: [
      { tone: "green", text: "It's not silly. Twenty-two years is a real relationship. You'll miss her.", note: "Validates the feeling and names the loss underneath the haircut." },
      { tone: "yellow", text: "Oh, that's a shame. Did she say why she's retiring?", note: "A friendly question, but it turns attention to the hairdresser, not to Mom." },
      { tone: "red", text: "At least you've got time to find someone even better.", trap: "Silver lining" },
      { tone: "red", text: "I can look up a few highly rated salons near you tonight and send you the list, no problem.", trap: "Fixing" }
    ]
  },
  {
    id: "choice-parent-04",
    rel: "parent",
    kind: "everyday",
    type: "choice",
    setup: "Your dad calls you, grinning so wide you can hear it.",
    speaker: "Your dad",
    quote: "I passed my citizenship test! I'm finally a citizen.",
    options: [
      { tone: "green", text: "Dad, that's huge! After all these years. How does it feel to finally hear that?", note: "Celebrates with him, honors the long road, and asks him to share the moment." },
      { tone: "yellow", text: "Nice, congrats! That's good news.", note: "Pleasant, but much smaller than the moment he's having." },
      { tone: "red", text: "Great! So did they say how long until your passport comes?", trap: "Changing the subject" },
      { tone: "red", text: "I figured you'd pass, honestly. That test isn't that hard.", trap: "Minimizing" }
    ]
  },
  {
    id: "choice-parent-05",
    rel: "parent",
    kind: "everyday",
    type: "choice",
    setup: "Your mom has been taking piano lessons for a year. She just played her first recital.",
    speaker: "Your mom",
    quote: "My hands were shaking the whole time, but I got through the whole piece!",
    options: [
      { tone: "green", text: "You were shaking and still played the whole thing! That took guts. I'm proud of you.", note: "Celebrates her courage, not just the result, and says you're proud." },
      { tone: "yellow", text: "That's nice, Mom. Good for you.", note: "Supportive enough, but flat compared to her excitement." },
      { tone: "red", text: "Everyone gets nervous. I bet nobody even noticed.", trap: "Minimizing" },
      { tone: "red", text: "Next time try some slow deep breathing right before you go on. It really helps calm your hands down.", trap: "Advice" }
    ]
  },
  {
    id: "choice-parent-06",
    rel: "parent",
    kind: "everyday",
    type: "choice",
    setup: "Your dad was laid off from a job he held for nineteen years. He's two years from retiring.",
    speaker: "Your dad",
    quote: "Who's going to hire a guy my age?",
    options: [
      { tone: "green", text: "That's a scary spot after nineteen years. How are you holding up?", note: "Names the fear behind the question and asks how he's really doing." },
      { tone: "yellow", text: "Something will come along, Dad. You've got so much experience, and companies need people who know the work.", note: "Encouraging, but it argues with his worry before hearing it." },
      { tone: "red", text: "Well, you were close to retiring anyway. Maybe just retire early?", trap: "Silver lining" },
      { tone: "red", text: "You need to get your resume on LinkedIn this week.", trap: "Fixing" }
    ]
  },
  {
    id: "choice-parent-07",
    rel: "parent",
    kind: "everyday",
    type: "choice",
    setup: "Your mom is recovering from a hip replacement and can't get around much yet.",
    speaker: "Your mom",
    quote: "I hate needing help just to get to the bathroom.",
    options: [
      { tone: "green", text: "That has to feel awful when you're used to doing everything yourself.", note: "Names the loss of independence that makes this so hard for her." },
      { tone: "yellow", text: "It's only temporary. You'll be up and around soon.", note: "Reassuring and true, but moves past the feeling too quickly." },
      { tone: "red", text: "Mom, it's not a big deal. Everybody needs help sometimes.", trap: "Minimizing" },
      { tone: "red", text: "You'd probably heal faster if you did all the exercises the physical therapist gave you, though.", trap: "Judging" }
    ]
  },
  {
    id: "choice-parent-08",
    rel: "parent",
    kind: "everyday",
    type: "choice",
    setup: "Your dad's dog of fourteen years died last week. He's quiet at dinner.",
    speaker: "Your dad",
    quote: "The house is so quiet without him.",
    options: [
      { tone: "green", text: "He was with you every day for fourteen years. What do you miss most?", note: "Honors how big the bond was and invites him to talk about the dog." },
      { tone: "yellow", text: "I'm sorry, Dad. He was a good dog.", note: "Kind and sincere, but closes the topic instead of opening it." },
      { tone: "red", text: "Maybe you should look into adopting another one soon. A new dog might make the house feel less empty.", trap: "Fixing" },
      { tone: "red", text: "At least he had a long life and didn't suffer.", trap: "Silver lining" }
    ]
  },
  {
    id: "choice-parent-09",
    rel: "parent",
    kind: "conflict",
    type: "choice",
    setup: "You moved across the country for a job and told your mom after you'd already accepted.",
    speaker: "Your mom",
    quote: "You didn't even ask what I thought. You just decided.",
    options: [
      { tone: "green", text: "You're right, I told you after it was done. That must have felt like you didn't matter.", note: "Owns the choice without excuses and reflects how it landed for her." },
      { tone: "yellow", text: "I'm sorry you're upset, Mom. It all happened really fast.", note: "Polite, but \"sorry you're upset\" sidesteps owning what you did." },
      { tone: "red", text: "I'm an adult, Mom. I don't need permission to take a job.", trap: "Getting defensive" },
      { tone: "red", text: "I knew you'd try to talk me out of it, so I waited.", trap: "Explaining yourself" }
    ]
  },
  {
    id: "choice-parent-10",
    rel: "parent",
    kind: "conflict",
    type: "choice",
    setup: "Your dad came to visit, and you spent most of the weekend on your laptop working.",
    speaker: "Your dad",
    quote: "I drove four hours, and I've barely seen your face.",
    options: [
      { tone: "green", text: "You did, and I wasn't really here. I'm sorry. Let's do something tonight, just us.", note: "Owns it plainly and offers a concrete way to make it right." },
      { tone: "yellow", text: "Sorry, Dad. Work's been crazy lately.", note: "Apologizes, but mostly points at work instead of at his feelings." },
      { tone: "red", text: "I told you before you came that I'd have to work some this weekend. I did warn you about that.", trap: "Getting defensive" },
      { tone: "red", text: "Yes, but we had dinner together both nights, didn't we?", trap: "Yes, but" }
    ]
  },
  {
    id: "choice-parent-11",
    rel: "parent",
    kind: "conflict",
    type: "choice",
    setup: "Your mom found out from a cousin's social media post that you got engaged.",
    speaker: "Your mom",
    quote: "I had to find out from Facebook. Facebook!",
    options: [
      { tone: "green", text: "That's awful, and it's on me. You should've heard it from me first. I'm sorry.", note: "Takes full responsibility and acknowledges how hurtful that discovery was." },
      { tone: "yellow", text: "I was going to call you this weekend, I promise.", note: "Probably true, but it explains instead of acknowledging her hurt." },
      { tone: "red", text: "Well, I didn't post it. Take it up with Jenna.", trap: "Getting defensive" },
      { tone: "red", text: "Mom, does it really matter how you found out? We're engaged! I thought you'd just be happy for us.", trap: "Dismissing" }
    ]
  },
  {
    id: "choice-parent-12",
    rel: "parent",
    kind: "conflict",
    type: "choice",
    setup: "You keep correcting your dad's memory of family stories in front of others.",
    speaker: "Your dad",
    quote: "Every time I tell a story, you jump in to fix it. It's embarrassing.",
    options: [
      { tone: "green", text: "I didn't see it that way, but you're right. Those are your stories. I'll let you tell them.", note: "Owns the habit and respects that the stories belong to him." },
      { tone: "yellow", text: "Okay, okay. I'll try to stop doing that.", note: "Agrees, but sounds brushed off rather than understanding why it stung." },
      { tone: "red", text: "I just don't want people hearing the wrong version.", trap: "Explaining yourself" },
      { tone: "red", text: "Come on, Dad, it's not that serious. They're just stories.", trap: "Minimizing" }
    ]
  },
  {
    id: "choice-parent-13",
    rel: "parent",
    kind: "repair",
    type: "choice",
    setup: "Your mom said she's lonely since her friends moved away. You said, \"Why don't you just join a club or something?\"",
    speaker: "Your mom",
    quote: "It's not that easy to make friends at my age.",
    options: [
      { tone: "green", text: "You're right, I jumped to a fix. Losing longtime friends is really lonely.", note: "Owns the quick fix, then names the loneliness she was sharing." },
      { tone: "yellow", text: "I know, I know. I was just trying to help.", note: "Means well, but defends your intent instead of meeting her feeling." },
      { tone: "red", text: "Sure it is, Mom. There's a senior center right near you, and they have events almost every single day.", trap: "Yes, but" },
      { tone: "red", text: "Trust me, it's not easy at my age either.", trap: "Making it about you" }
    ]
  },
  {
    id: "choice-parent-14",
    rel: "parent",
    kind: "repair",
    type: "choice",
    setup: "Your dad showed you the garden he spent all spring planting. You said, \"Huh, it's smaller than I expected.\"",
    speaker: "Your dad",
    quote: "Well, it's a lot of work for one person.",
    options: [
      { tone: "green", text: "That came out wrong. You did all this by yourself. Show me around?", note: "Repairs the comment, honors his effort, and gets curious about his work." },
      { tone: "yellow", text: "No, it looks good. Really.", note: "A quick save, but it doesn't acknowledge what you said or his effort." },
      { tone: "red", text: "I didn't mean anything by it. I just pictured it bigger from how you described it on the phone.", trap: "Explaining yourself" },
      { tone: "red", text: "You should hire a landscaper to help next year.", trap: "Advice" }
    ]
  },
  {
    id: "choice-parent-15",
    rel: "parent",
    kind: "repair",
    type: "choice",
    setup: "Your mom mentioned she's been having trouble sleeping since your dad passed. You said, \"Have you tried melatonin?\"",
    speaker: "Your mom",
    quote: "It's not about the sleep, honey.",
    options: [
      { tone: "green", text: "I'm sorry, I went straight to fixing it. You miss him, especially at night. Tell me.", note: "Owns the fix, names the grief behind the sleeplessness, and invites her in." },
      { tone: "yellow", text: "Okay. Well, let me know if there's anything I can do.", note: "A kind offer, but vague and it lets the moment pass." },
      { tone: "red", text: "I know, but sleep really does help with everything else.", trap: "Yes, but" },
      { tone: "red", text: "I've had a hard time sleeping since then too, honestly.", trap: "Making it about you" }
    ]
  }
]);
