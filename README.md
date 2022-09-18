# Landing Page Project
#### the project description

this project represents a landing page with 
multi sections and navigational menu that is added dynamically  using javascript based on
the number of sections in the page so we can navigate to any specified scetion we want 

### the Languages used:
- HTML
- CSS
- JS Version: ES2015/ES6


##### folder structure
css
- styles.css    
index.html
js
- app.js
Readme.md

##### All Methods Used ######
Document.querySelectorAll();
Document.getElementById();
forEach();
for...of
Document.createDocumentFragment();
Document.createElement();
innerHTML
appendChild();
getAttribute();
addEventListener();
getBoundingClientRect();
classList.remove();
classList.add();


### Functionalities ##

-lists is added dynamically into the unordered list, each list contains a link to specific section on the page so we can scroll to the section by clicking on the link on the navigation bar.
-when we scroll to specific section it will be in active state and the link on the navigation bar that linked to this section will be in active state too.

### building nav ####
-first we used querySelectorAll method to query the all sections
-then create fragment ,lists and anchors
-using forEah for looping through sections
-each anchor will have link to a specific section
-add lists to fragment 
-finally add the fragment to the unordered list
## active section and active link###

-useing GetBoundingClientRect to get the section that in view port
-Useing for...of to loop through the sections.
-Use if statement to get the Active
-if the section in the view port ,Use classList.add method to add the active class to the active section and add active class to the link
-Use classList.remove method to  remove the active class from the active section and from the link if  the condition is not met.
