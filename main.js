// You have volunteered your time to a local political candidate, Elizabeth Sanger, who wants to become a US representative in Congress for your district. Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, and store information about Elizabeth and her campaign.

// Your job is to define the different objects and resources, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.
//1.
// Her congressional district (you can use yours here)
const dist = {
    district: "5th",
}

function changeDist(district, newDist) {
    dist['district'] = newDist;
}
changeDist(dist, '3rd');
console.log(dist.district)
//2. 
//Her platform statements for the following issues.
// Taxes
// Jobs
// Infrastructure
// Health care
// Crime and enforcement
const platform = {
    taxes: "Tax Statement",
    jobs: "Jobs Stateent",
    infrastructure: "Infrastructure Statement",
    healthCare: "Health Care Statement",
    crimeAndEnforcement: "Crime Statement"
}
function changePlatform(platToChange, newInfo) {
    platform[platToChange] = newInfo;
}
changePlatform('jobs', 'more jobs')
changePlatform('healthCare', 'better healthcare')
changePlatform('crimeAndEnforcement', 'new crime statement')
console.log(platform['jobs'])
console.log(platform['healthCare'])
console.log(platform.crimeAndEnforcement)
console.log(platform['crimeAndEnforcement'])
//3.
// URL for donation form
const url = {
    donations: "www.donate.gov"
}
function changeDonURL(url, newURL) {
    url['donations'] = newURL;
}
changeDonURL(url, 'www.newdonate.gov');
console.log(url.donations)
//4.
// Calendar of events
const calendar = {
    events: [
        {eventOne: "5/31"},
        {eventTwo: "6/1"},
        {eventThree: "6/2"},
        {eventFour: "6/3"}
    ]
}

function changeEventDate(calToChange, eventToChange, newDate) {

}


//5.
// Volunteer information
// Name
// Address
// Email
// Phone number
// Availability
// What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
const volInfo = {
    name: ['Mary', 'Joe', 'Sally', 'Heather'],
    address: ['1 Main St', '2 Broadway', '5 ']
}
//6.
// Biography
const bio = {
    biography: "Information about candidate"
}

function editBio(bitoToChange, newBio) {
    bio['biography'] = newBio
}

editBio('biography', 'This is her new bio');
console.log(bio.biography)
//7.
// Image gallery
// Head shot
// Picture of family
// Picture of constituents
const gallery = {
    headShot: "link.url",
    familyPic: "link2.url",
    constituentPic: "link3.url"
}

function changePics(galleryItem, newPic) {
    gallery[galleryItem] = newPic;
}
changePics('familyPic', 'newpic2.url')
console.log(gallery.familyPic)

//8.
// Mission statement
const missionStatement = {
    statement: "Mission Statement"
}

function changeMission(missState, newState) {
    missionStatement[missState] = newState
}
changeMission('statement', 'New mission statement')
console.log(missionStatement.statement)
//9.
// URL for registering to vote
const regVote = {
    site: "www.votehere.gov"
}

function changeVote(voteSite, newSite) {
    regVote[voteSite] = newSite
}
changeVote('site', 'www.newvoters.gov')
console.log(regVote.site)


// After you have defined all the objects for representing the data, write a corresponding function for each one whose purpose is to change the state of the object. Then invoke each function, and pass a reference to the correct object to it and modify a property.

// Example:

// function changeBookState (anyBookObject, thePropertyToChange) {
//     ...
// }

// const jest = {
//     title: "The Infinite Jest",
//     author: "David Foster Wallace",
//     publishDate: "1 February 1996"
// }

// const lamb = {
//     title: "Lamb: The Gospel According to Biff",
//     author: "Christopher Moore",
//     publishDate: "25 May 2004"
// }

// Use document.createElement() to build an <article> element representing Elizabeth. The id property of the element should be her congressional district, and its content should be her platform data. Once the element has been created, insert it into the DOM.

document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  var newArt = document.createElement("article");
  newArt.setAttribute('id', '5')
  // and give it some content
  let platformInfo = '';
for (let x in platform) {
      platformInfo = platformInfo + " " +  platform[x]
    }
  var newContent = document.createTextNode(platformInfo); 
  // add the text node to the newly created div
  newArt.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newArt, currentDiv); 
}







