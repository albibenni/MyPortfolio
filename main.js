const linksID = ["Projects","Courses", "Contacts"];
const linkHref = ["#", "#", "#"]
const links = []

class Link {
    constructor(linkID, linkHref) {
        this.linkID = linkID
        this.linkHref = linkHref
    }
}



function displayMainPage(){
    //fill the links array with Link obj
    for (let i = 0; i < linksID.length; i++) {
        links.push(new Link(linksID[i], linkHref[i]))
    }

    const navBar = document.getElementById('navigation-bar')
    navBar.innerHTML = ""

    for(const link of links){

        const linkElement = document.createElement('a')
        linkElement.className = "nav-link"
        linkElement.href = link.linkHref
        linkElement.innerText = link.linkID

        navBar.appendChild(linkElement)

    }

    navBar.scrollTop = navBar.scrollHeight;


}

displayMainPage()