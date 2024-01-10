// Select DOM elements to work with
const signInButton = document.getElementById('signIn');
const signOutButton = document.getElementById('signOut')
const titleDiv = document.getElementById('title-div');
const welcomeDiv = document.getElementById('welcome-div');
const tableDiv = document.getElementById('table-div');
const tableBody = document.getElementById('table-body-div');
const editProfileButton = document.getElementById('editProfileButton');
const callApiButton = document.getElementById('callApiButton');
const response = document.getElementById("response");
const label = document.getElementById('label');
const page = document.getElementById(document.title)
const page_403 = document.getElementById('403_page')

function welcomeUser(username) {
    if(welcomeDiv){
        welcomeDiv.innerHTML = `Hi there, ${username}!`
    }

    if(label){
        label.classList.add('d-none');
    }
    if(signInButton){
        signInButton.classList.add('d-none');
    }
    if(titleDiv){
        titleDiv.classList.add('d-none');
    }
    if(page_403){
        page_403.classList.add('d-none');
    }


    if(signOutButton){
        signOutButton.classList.remove('d-none');
    }
    if(editProfileButton){
        editProfileButton.classList.remove('d-none');
    }
    if(welcomeDiv){
        welcomeDiv.classList.remove('d-none');
    }
    if(callApiButton){
        callApiButton.classList.remove('d-none');
    }
    if(page){
        page.classList.remove('d-none')
    }
}

function logMessage(s) {
    response.appendChild(document.createTextNode('\n' + s + '\n'));
}
