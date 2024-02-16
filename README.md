wdd-331
    - sites
    - template (I'll put stuff her for boilerplate)
    - week1
        - data
        - images
        - scripts
        - styles
        index.html
    - work-journal-markdown-files

Kinda how I do my work journal:
## ########## ## for header
## .......... ## sub 1
## ========== ## sub 2
[ ] task not started
[.] task started
[x] task completed
[>] task forwarded to future date
(A-1) priority

Why I do it this way:
- grep is my friend
- When I have months or years worth of journals I don't remember when or the
  specifics. So, grep is my friend.

Example:
Let's say 6 months ago, I had a conversation about mysql partitions and our
website. Fred and Betty said that Pebbles wanted to partition the 
customer_likes table by the update_ts (datetime) column. We didn't do the
work because we were not sure about the distribution and how many partitions
we could get per year, per month, per week.

Now, we're six months down the road and I just got blindsided by a request,
hair-on-fire, to partition the customer_likes table per week. Being 55 years
old and having COVID brain, I have to rely on my linux/unix skills. I can 
simply do:
    $ grep -i "customer_likes" * ## and see where my notes are.f

Greps can get much more complex and use regular expressions if needed. But, 
most of the time, simple greps get me to the files I need.

allow pasting

var emailElement = document.getElementById('email');
emailElement.value = 'hello';
emailElement.value = 'me@';
emailElement.value = 'me@me.';
emailElement.value = 'me@me.com';

document.getElementById('email').click();


portrait practice:
    from my pinterest faces
    https://i.pinimg.com/originals/d2/c4/56/d2c45669f6821604dea6b4840ce6473a.jpg

    about 30 minutes > stop

1 8018570777