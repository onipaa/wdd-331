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