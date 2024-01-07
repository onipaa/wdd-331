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
[.] (A-3): Assignment
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
[ ] (A-2): Assignment
[ ] (A-1): Church Stuff and the Sabbath
## ########################################################################## ##
Import CSS:
I learned about the @import, where the imported library is another CSS. In this
case large inherits small when I put the following at the start of the large.css
file:

@import url('/wdd-331/sites/week1/styles/small.css');

- No more loading order issues.
- Why didn't they teach this before?

