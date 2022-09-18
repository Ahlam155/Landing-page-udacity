/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


//using querySelectorAll to grt all sections
const getMyAllSections = document.querySelectorAll('section');
//using getElementById to get ul list
const getMyUlList = document.getElementById('navbar__list');
//using createDocumentFragment() to create new Fregmant
const myNewFregmant=document.createDocumentFragment();



(function AddingListstoUl(){
 //using forEach to make a loop to all sections
getMyAllSections.forEach(element => {
    //create list items to be added inside the fragment that works as a container
    const myNewLivar= document.createElement('li');
    //get section name using its attribute that called 'data-nav'
    const sectionName=element.getAttribute('data-nav');
    //get section id using its attribute that called 'id'
    const mySectionId=element.getAttribute('id');
    /*adding link inside li using innerhtml and passing it to  sections id to be linked to it ,so when we click on the link, window will scroll to the specified link .
     adding section name to be the same name of the link */
   myNewLivar.innerHTML=`<a id="section__link" class='menu__link' href=#${mySectionId}>${sectionName}</a>`;
    //using appendChild to append all lists to the Fregmant
   myNewFregmant.appendChild(myNewLivar)
});
//finally after adding all links inside the Fragment ,we will add it to ul list that is better way to save time
getMyUlList.appendChild(myNewFregmant);
}
());



//using addEventListener to add event on scroll

document.addEventListener('scroll',function()
{
    //using querySelectorAll to get all linkes by id
    const myLinks=document.querySelectorAll("#section__link");

    //define variable works as a counter so we can get the index of section inside for..of loop
    let i=0;
    //using for of to make a loop to all sections
    for(const mySection of getMyAllSections)

    { //using getBoundingClientRect method to get the section that in the view port
        let checkActiveSection = mySection.getBoundingClientRect().top;

        //declar variable to get each link by index
        let myLink=myLinks[i];

        //check if the section in the view port or not
        if(checkActiveSection >=-100 && checkActiveSection<=400)
        {
           //add class "your-active-class" to the section that in view port
            mySection.classList.add("your-active-class");

            //add class "active__link" to the link that linked to the section
            myLink.classList.add("active__link");

   
        }
        else{

        //remove class "your-active-class" from the section that not achieve the condition
        mySection.classList.remove("your-active-class");
        //remove class "active__link" from the link that linked to the section

        myLink.classList.remove("active__link");
  
        }
        //increase the counter by 1
        i++;      
    }  
});
