document.title = ("Scenic Route Finder");

var titleBar = document.createElement('div');
titleBar.id = 'title';
titleBar.innerHTML = 'Scenic Route Planner';
container.append(titleBar);


/*************** MAIN CONTENT *****************/
var mainContent = document.createElement('div');
mainContent.id = 'main-content';
container.append(mainContent);

/*                  MAP                   */
var map = document.createElement('div');
map.id = 'map';
mainContent.append(map);

var sideBar = document.createElement('div');
sideBar.id = 'side-bar';
mainContent.append(sideBar);


/*               SIDEBAR                */

// SIDEBAR TITLE
var sideBarTitle = document.createElement('BUTTON');
sideBarTitle.id = 'title-sideBar';
sideBarTitle.className = 'title-elements';
sideBarTitle.innerText = 'MENU';
sideBar.append(sideBarTitle);

// SIDEBAR DATA STREAM

var dataDiv = document.createElement('div');
dataDiv.id = 'data-stream';
dataDiv.className = 'data-sidebar';
sideBar.append(dataDiv);


// SIDEBAR NAVIGATION CONTROLS
var buttonDiv = document.createElement('div');
var btnReturn = document.createElement('BUTTON');
var btnUndo = document.createElement('BUTTON');
var btnClear = document.createElement('BUTTON');

btnReturn.id = 'btn-return';
btnUndo.id = 'btn-id';
btnClear.id = 'btn-clear';

btnReturn.className = 'side-btns noreturn';
btnUndo.className = 'side-btns';
btnClear.className = 'side-btns';

btnReturn.innerText = 'RETURN';
btnUndo.innerText = 'UNDO';
btnClear.innerText = 'CLEAR';

buttonDiv.append(btnClear);
buttonDiv.append(btnUndo);
buttonDiv.append(btnReturn);

var goHome = false;
btnReturn.addEventListener("click", function(){
    if (goHome){
        goHome = false;
        btnReturn.className = 'side-btns return';
    } else {
        goHome = true;
        btnReturn.className = 'side-btns noreturn';
    }
});

sideBar.append(buttonDiv);


// STREET VIEW PLAYER

var running = false;
var playButton = document.createElement('button');
playButton.id = 'street-play';
playButton.className = 'side-btns stopped';
playButton.innerText = 'RUN';
playButton.addEventListener("click", function(){
    if (running){
        running = false;
        playButton.className = 'side-btns stopped';
        playButton.innerText = 'RUN';
    } else {
        running = true;
        playButton.className = 'side-btns running';
        playButton.innerText = 'STOP';
    }
});


sideBar.append(playButton);
