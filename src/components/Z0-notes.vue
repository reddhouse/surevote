<!--
Things I've done/learned in this app.

Font-size
Font-size will be styled at the app component by percentage, and expand/grow
by a small amount at each media query break.
Font-size for emphasis will be further adjusted at individual components by
using ems, which are basically the same as setting a percentage, but they are
easier to type.
I had experimented with using vw based font-size, but this does not respond
when a user zooms into their browser.

Custom template
spc = Spacers
row = Rows (vertical flex item and horizontal flex container)
col = Column (flex item only)
icc = Inner Column Container turns a regular column into a vertical flex container
icr = Inner Column Row
nfr = No flex row
nfc = NO flex column

Numbered Classses = Rapid Prototyping
Discovered that col1 (with a width of 1vw) is very powerful.
Or, similarly for vertical height, spc5 (for a height of 5vh).

Spacers
Spacers by default prefer to fill/grow empty space 1000 to 1, but individual
spc's will limit height by declaring max-height as a PERCENTAGE of vh.
** spc5 stands for spacer with 5vh

Margins
Turns out trying to force stuff into grid is way harder than using margins.
However, be sure to use margins with a PERCENTAGE of vw.

Div Positions
I've decided to handle everything by flexbox. No absolute, relative, float, etc.
When in doubt, I've wrapped two divs inside a container, and gone from there.

Icons
Didn't want to download 736kb file of icons. Need to research bundling a custom
font package later.

-->
