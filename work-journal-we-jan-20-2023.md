wdd-331
    - sites
    - template (I'll put stuff her for boilerplate)
    - week1
        - data
        - images
        - scripts
        - styles
        index.html

## ########################################################################## ##
## Week 1: 6 Jan 2024
## ########################################################################## ##
[x] (A-1): Complete Introduction
[x] (A-2): Syllabus Quiz
[>] (A-3): Assignment
## ########################################################################## ##
Introduction: Done, I blabbed a bunch in that document. I hope the fellow 
students don't think I'm too nerdy.

Syllabus: 3:3 (100%)

Assignment:
- I've got the "small" version almost done. I still need to find out from Sister
  Denkers if I've got the right font and if the "small" site is 100%.

- I need to finish the large version. I set the max-size in my media query at
  650 px. So, I'll set the minimum size for the large site at 651 px, with no
  bounding on the right side.

- The class seems silent... I'm not used to students being this quiet; however,
  it is only 9 AM in Utah.

- Things Learned:
    - I'm using "nesting" now in my CSS. It feels much better than the parent 
      child child kind of thing I did before. Plus, the browser likes the nest
      better.

      ..........................................................................
      example:
      ..........................................................................
      #content {
        stuff..
        .header {
            stuff...
            h1 {
                stuff...
            }
        }
      }
      ..........................................................................
      vs:
      ..........................................................................
      #content {
        stuff...
      }

          #content .header {
              stuff...
          }

              #content .header h1 {
                  stuff...
              }

Crickets...
So, am I the only person responding today? I would think that folks would want
to get a head start instead of cramming everything into the last moments. I've
gone back to the post and Slack. Nothing, nothing, nothing... Hey! Hey, Hey! I
feel like the goat in Brother Bear, "No you shut up!..."

Repo Invites:
- I don't know who will be on my team. I am going to wait to see who is actually
  going to be active in the class.
- I invited Sister Noelle Denkers (Teacher)

## ########################################################################## ##
## Week 1: 7 Jan 2024
## ########################################################################## ##
[.] (A-2): Assignment
[x] (A-1): Church Stuff and the Sabbath
## ########################################################################## ##
Import CSS:
I learned about the @import, where the imported library is another CSS. In this
case large inherits small when I put the following at the start of the large.css
file:

@import url('/wdd-331/sites/week1/styles/small.css');

- No more loading order issues.
- Why didn't they teach this before?

Other tricks:
- While in developer mode, if I "right-click" the refresh icon, I can choose
  to refresh with a hard-clear of the cache. This has been something that has
  plagued me for some time. I've ended up clearing the cache for the entire
  browser and that was never good for saved passwords and such.

Ok, small is pretty much done. I'll force myself out of it because my O.C.D.
doesn't like the alignment of some stuff and I could spend way too much time on
something that may not matter.

Church:
- Still sick. Kim is making me stay home, but I think that's for the best. It
  would  make me sad if I got any of the members sick because I just couldn't
  miss the BoM lesson this week. These are my favorite chapters in 1 Nephi and I
  did a bunch of research. I will attend in spirit.

## ########################################################################## ##
## Week 1: 8 Jan 2024
## ########################################################################## ##
[x] (A-2): Book Club Assignment
[x] (A-1): Regular Work (DBA Stuff)
[>] (A-3): Find Example Websites Assignment
## ########################################################################## ##
Breakpoints (Noelle D 1:17 PM 9 January 2024):
  - "There are some standard screen sizes, but for this assignment, [there is]
    no need to worry about an exact large/small breakpoint."

Book Club:
Find Example Websites:

## ########################################################################## ##
## Week 1: 11 Jan 2024
## ########################################################################## ##
[x] (A-1): Complete Small CSS
[ ] (A-2): Book Club Assignment
[ ] (A-3): Find Example Websites Assignment
## ########################################################################## ##
W3C Validator:
<p>
    <a href="https://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>

Look of the Page:
I made a few improvements. I need to ask Sister Denkers if I'm doing the right
thing. I'll do that tomorrow.

I need to finish the Large CSS tomorrow, before EOB MST. That means I'll finish
by 8PM MST, which is 10PM EST. I want to be able to interact with the class and
Sister Denkers on Saturday. I also want to be nearly done with week-2 by 
Saturday evening.

Personal Note:
I was pretty upset about troubleshooting the HTML. It was hard for me to 
distinguish nesting and discover errors because many of the "spacings" were
random. The file looked very unkempt. I was also tired. I committed those hard
words in a previous release if anyone wants to see them. I stewed on how hard
the words seemed and vowed to change them. So, here I am at 11:27 PM EST. I feel
good that I repented. I think the rest of this assignment will go well.


Large CSS:



FAVICON:
I added my cookie monster as in (Johnster My Monster) icon. The web inspector
kept giving me a 404 because I didn't have it.

Crap-o-la:
I got my git commits all bunched. I had to do a git push --force. Let's see
where that gets me. Ok, I'm good to go. Now, I need to get the large css done.

## ########################################################################## ##
## Week 2: 15 Jan 2024
## ########################################################################## ##
[x] (A-1): Turned in all assignemnt from W1 (on time) 100% so far
[ ] (A-2): Book Club Assignment
[ ] (A-3): Find Example Websites Assignment
[x] (A-4): Install software
[ ] (A-5): Quiz
## ########################################################################## ##
Installs:
john_harper/school-work  > brew install node
john_harper/school-work  > node -v
v21.5.0


john_harper/school-work  > brew install npm
Warning: node 21.5.0 is already installed and up-to-date.
To reinstall 21.5.0, run:
  brew reinstall node
john_harper/school-work  > npm -v
10.2.4

john_harper/school-work  > npm install -g stylelint stylelint-config-standard
john_harper/school-work  > npm install -g npm@10.3.0
john_harper/school-work  > npm install -g analyze-css

john_harper/school-work  > npm install -g uncss

Zombies:
conflicting CSS rules. Only one wins/survives based on specificity. If rules do
not contradict, then all will be applied.

Least --> Most Specific (wins)

default (lowest) --> external (next) --> in HTML <style> tags (next) --> inline
with html tag (highest) --> can use !important to raise even more.

Example:
## -------------------------------------------------------------------------- ##
#zombie-killa p a { 
     color: black;
} 

.talkin-smack div .verbal a { 
     color: red;
}

These two selectors want to change the "a" tag.

#zombie-killa (a single element ID selector)
.zombie-killa (a multiple element CLASS selector)

The # wins . because it is more specific.


(A) #zombie-killa (id=100) + p (element=1) + a (element=1) = 102 
(B) .talkin-smack (class=10) + div (element=1) + .verbal (class=10) + a (element=1) = 22

A > B means A wins.
## -------------------------------------------------------------------------- ##
#zombie-killa .talkin-smack a { 
     color: black;
} 

#zombie-killa div .verbal a { 
     color: red;
}

(A) #zombie-killa .talkin-smack a = 111 
    100 + 10 + 1

(B) #zombie-killa div .verbal a = 112
    100 + 1 + 10 + 1

B > A means B wins.
## -------------------------------------------------------------------------- ##
#zombie-killa div.ima.talkin-smack a { 
     color: black;
}

#zombie-killa div .verbal a { 
     color: red !important;
}

## ########################################################################## ##
RANT:
The !important; attribute trumps all, like the golden snitch. Weird scoring
system. Everyone gets stinking points but whomever gets the snitch wins the 
game. I'm wondering... what if Slytherin score 50000 points and then Hufflepuff
got the snitch. What would be the point in all that? Slytherin kicked the living
snot out of Hufflepuff, but huffelpuff wins? Sounds like Communism to me.
## ########################################################################## ##


Sitepoint (https://www.sitepoint.com/premium-for-teams/#knowledge):
I completed the first page. When I tried to click into other pages, it said I 
have to become a member. I've asked for an educational license. Maybe they will
give it to me, maybe not.


Smashing Magazine (https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/):
Apart from Floats, the CSS Specificity is one of the most difficult concepts to
grasp in Cascading Stylesheets. The different weight of selectors is usually the
reason why your CSS-rules don’t apply to some elements, although you think they 
should have. In order to minimize the time for bug hunting you need to 
understand, how browsers interpret your code. And to understand that, you need 
to have a firm understanding on how specificity works.

CSS Specificity: An Overview #
Specificity determines, which CSS rule is applied by the browsers.
Specificity is usually the reason why your CSS-rules don’t apply to some elements, although you think they should.
Every selector has its place in the specificity hierarchy.
If two selectors apply to the same element, the one with higher specificity wins.
There are five distinct categories which define the specificity level of a given selector: inline styles, IDs, classes, attributes, and elements.
You can understand specificity if you love Star Wars: CSS Specificity Wars.
You can understand specificity if you love poker: CSS Specificity for Poker Players
When selectors have an equal specificity value, the latest rule is the one that counts.
When selectors have an unequal specificity value, the more specific rule is the one that counts.
Rules with more specific selectors have a greater specificity.
The last rule defined overrides any previous, conflicting rules.
The embedded style sheet has a greater specificity than other rules.
ID selectors have a higher specificity than attribute selectors.
You should always try to use IDs to increase the specificity.
A class selector beats any number of element selectors.
The universal selector and inherited selectors have a specificity of 0, 0, 0, 0.
You can calculate CSS specificity with CSS Specificity Calculator.

CSS’ barrier to entry is extremely low, mainly due to the nature of its syntax. Being clear and easy to understand, the syntax makes sense even to the inexperienced Web designer. It’s so simple, in fact, that you could style a simple CSS-based website within a few hours of learning it.
CSS’ barrier to entry is extremely low, mainly due to the nature of its syntax. Being clear and easy to understand, the syntax makes sense even to the inexperienced Web designer. It’s so simple, in fact, that you could style a simple CSS-based website within a few hours of learning it.

But this apparent simplicity is deceitful. If after a few hours of work, your perfectly crafted website looks great in Safari, all hell might break loose if you haven’t taken the necessary measures to make it work in Internet Explorer. In a panic, you add hacks and filters where only a few tweaks or a different approach might do. Knowing how to deal with these issues comes with experience, with trial and error and with failing massively and then learning the correct way.

Understanding a few often overlooked concepts is also important. The concepts may be hard to grasp and look boring at first, but understanding them and knowing how to take advantage of them is important.

* + *

Despite its irreverent name and precarious form, the lobotomized owl selector is no mere thought experiment for me. It is the result of ongoing experimentation into automating the layout of flow content. The owl selector is an “axiomatic” selector with a voracious purview. As such, many will be hesitant to use it, and it will terrify some that I include it in production code. I aim to demonstrate how the selector can reduce bloat, speed up development, and help automate the styling of arbitrary, dynamic content.

Bloat
Regardless of whether you can create and maintain presentational markup, the question of whether you should remains. Adding presentational ciphers to your previously terse markup necessarily engorges it, but what’s the tradeoff? Does this allow us to reduce bloat in the stylesheet?

By choosing to style entirely in terms of named elements, we make the mistake of asserting that HTML elements exist in a vacuum, not subject to inheritance or commonality. By treating the element as “this thing that needs to be styled,” we are liable to redundantly set some values for the element in hand that should have already been defined higher in the cascade. Adding new modules to a project invites bloat, which is a hard thing to keep in check.

## ************************************************************************** ##
Ok, if I'm reading right, I can use * + * for rules that need to be applied 
every where, like this:

* + * {
    top-margin: 1.5em;
}

Means everything will get a 1.5em top margin.

## ************************************************************************** ##

Wikipedia:
Fifteen years later, it was evident the term separation of concerns was becoming an accepted idea. In 1989, Chris Reade wrote a book titled Elements of Functional Programming[7] that describes separation of concerns:

The programmer is having to do several things at the same time, namely,

1. describe what is to be computed;
2. organise the computation sequencing into small steps;
3. organise memory management during the computation.

flukeout.github.io

# https://flukeout.github.io/ #

01. plate
02. bento
03. #fancy
04. plate apple
05. #fancy pickle
06. .small
07. orange.small
08. bento orange.small
09. plate, bento
10. *
11. plate *
12. plate + apple
13. bento ~ pickle
14. plate > apple
15. orange:first-child
16. plate apple:only-child, plate pickle:only-child
17. .small:last-child
18. plate:nth-child(3)
19. bento:nth-last-child(3)
20. apple:first-of-type
21. plate:nth-of-type(even)
22. plate:nth-of-type(2n+3)    means: select every 2nd plate starting at the 3rd plate
23. plate apple:only-of-type
24. orange:last-of-type, apple:last-of-type
25. bento:empty
26. apple:not(.small)
27. *[for]
28. plate[for]
29. bento[for="Vitaly"]
30. *[for^="Sa"]
31. *[for$="ato"]
32. bento[for*="obb"]


You can use only one pseudo-element in a selector. The pseudo-element must appear after all the other components in the complex or compound selector in which it appears. For example, you can select a paragraph's first line using p::first-line but not the first-line's children or a hovered first line. So both p::first-line > * and p::first-line:hover are invalid.

x y (decendant)
x > y (direct child)
x + y (adjacent)
x ~ y (general selector)

Um, the Quiz:
It's not easy. I only get three attempts. I am able to screenshot the questions and then go research.

A pseudo-class and a pseudo-element are both CSS selectors that allow you to target and style specific parts of an element. However, they serve different purposes and operate in slightly different ways.

1. **Pseudo-Class:**
   - A pseudo-class is a keyword that is added to a selector to style a specific state or condition of an element.
   - Pseudo-classes begin with a colon (`:`) followed by the keyword. Examples include `:hover`, `:active`, `:focus`, and `:nth-child()`.
   - Pseudo-classes select elements based on dynamic conditions or user interactions.
   - They are used to style elements in response to events or conditions that cannot be expressed through the HTML structure alone.

   Example:
   ```css
   a:hover {
       color: red;
   }
   ```

2. **Pseudo-Element:**
   - A pseudo-element is a keyword that is added to a selector to style a specific part of an element.
   - Pseudo-elements begin with a double colon (`::`) followed by the keyword. Examples include `::before`, `::after`, and `::first-line`.
   - Pseudo-elements allow you to style and manipulate parts of an element that do not exist in the HTML structure itself.
   - They are used to create virtual elements or apply styles to specific parts of an element's content.

   Example:
   ```css
   p::first-line {
       font-weight: bold;
   }
   ```

In summary, pseudo-classes are used for styling based on dynamic conditions or user interactions, while pseudo-elements are used for styling specific parts or creating virtual elements within an existing element.

Ok, I'm going to have to memorize stuff, but I don't know how much I really "get it" beyond memorization. I think this stuff will come
with time and use.

The choice between `fieldset[title=fieldset2] > p+p` and `fieldset:nth-of-type(s) > p + p` depends on your specific use case and the structure of your HTML. Here are some considerations:

1. **Specificity:**
   - `fieldset[title=fieldset2] > p+p` is more specific because it directly targets a `<fieldset>` element with the title "fieldset2" and selects its immediate adjacent paragraphs (`p + p`).
   - `fieldset:nth-of-type(s) > p + p` is less specific as it targets any `<fieldset>` element (not necessarily with a specific title) and selects its immediate adjacent paragraphs.

2. **Targeting Specific Fieldset:**
   - Use `fieldset[title=fieldset2] > p+p` if you specifically want to target paragraphs that are direct children of a `<fieldset>` with the title "fieldset2".
   - Use `fieldset:nth-of-type(s) > p + p` if you want to target paragraphs that are direct children of any `<fieldset>` (regardless of title) and apply styles to their adjacent paragraphs.

3. **Flexibility:**
   - If your HTML structure may change, and you want to ensure you are targeting the second paragraph specifically in a `<fieldset>` with the title "fieldset2," `fieldset[title=fieldset2] > p+p` may be more resilient to structural changes.
   - If you want a more generic selector that targets any second paragraph in any `<fieldset>`, `fieldset:nth-of-type(s) > p + p` provides more flexibility.

In summary, choose the selector based on your specific requirements and how precisely you need to target the elements in your HTML structure. If you need more specificity and want to target a specific fieldset, use `fieldset[title=fieldset2] > p+p`. If you want a more generic selector, use `fieldset:nth-of-type(s) > p + p`.


## ########################################################################## ##
## Week 2: 20 Jan 2024
## ########################################################################## ##
[x] (A-1): Complete Quiz at 80% or higher. I want 100%
[x] (A-2): Finish getting the team together
[x] (A-3): Reading
[x] (A-4): Software Install)
## ########################################################################## ##
I've been going to many sources on the net to learn more about selectors. I
started getting my mind wrapped around selectivity calculations. I need to work
on memorizing what pieces go where. I put some metadata in on my previous notes.
I need to go over these notes multiple times. My mind is going to
explode because I have at least this much information for work and a bunch more
for this class.

I got a 19/25 on my last quiz attempt. I need to do even better next time 
around, which has to be before the EOB today.

Ok, I got 21/25 with the essay questions needing to be graded. I hope I can get 25/25
after the grading is done.

Lessons Learned:
    There is a lot that I don't know about these "advanced" selectors and such.
    There is also a lot of data out there (internet). But, 
    some of the data is plumb wrong. I had to extrapolate and copy specific nuggets of information from elsewhere. I had to take the quiz 
    all three times to do well. I am grateful for that chance.

    Try 1: I was dizzy-eyed at half of the quiz. Sister D posted an article
    that showed how stuff is calculated. It was a Gru moment, "light bulb!"

    Try 2: I had some more minor problems. I had to go back out to the internet
    and research some more, and take more notes.

    Try 3: I'm so glad this was open-note. I got 100% (crosses-fingers). The essay
    questions still need to be graded.

What I need for next week:
    Do the same, keep learning, fail fast, learn more, and repeat.

Reflection:
    I am grateful for my peers and professor who helped me through this week. I
    will keep at it for the next 14 weeks. I don't know if I'll use
    this stuff because I'm the System Admin, Database Administrator, Data
    Architect guy. I'm not looking to change my career drastically. I do have a
    gob of respect for front-end developers after this series of classes. 
    ::Before {
        john-thought-design: "easy";
    }

    ::After {
        metadata: "gobs more";
        embarrassed-face: "red";
        john-thought-design: "respect";
    }



