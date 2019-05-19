import Search from './models/Search';
import {elements} from './views/Selectores';
import * as searchView from './views/SearchView';

const search = new Search();

const highlightGameText = text => {
    let gameText = document.getElementsByTagName("span"); // return all <span>

    for (let i=0; i < search.gamesNamesArray.length; i++){
        let gameTxt = search.gamesNamesArray[i].toLowerCase(); // return <span> txt
        let index = gameTxt.indexOf(text);
        gameTxt = `${gameTxt.substring(0,index)}<div class='highlight'> ${gameTxt.substring(index,index+text.length)}</div>${gameTxt.substring(index + text.length)}`;
        gameText[i].innerHTML = gameTxt;
    }
}
let gamesNamesArrayCopy = [];

function checkIfArraysAreEqual(array1,array2){
    return (array1.join('') != array2.join(''));
}

const controlSearch = query => {
    // 1) get all games into 'search.result' once
    if(!search.results) {
        search.getGames();
    }

    // 2) Get query results
    const gamesResults = search.searchInGames(query, search.results);

    // 3. push games names to 'search.gamesNamesArray'
    search.gamesNamesArray = [];

    gamesResults.forEach(function (gameObj) {
        search.gamesNamesArray.push(gameObj.name)
    });

    // 4. render HTML only if gamesNamesArray results changed
    let ArraysAreEqual = checkIfArraysAreEqual(search.gamesNamesArray, gamesNamesArrayCopy);
    if(ArraysAreEqual){
        searchView.renderGamesResultsToHtml(query, gamesResults);
        highlightGameText(query);
    }else{
        highlightGameText(query);
    }
}

// Search input event
elements.searchField.addEventListener('keyup', event => {

    if (event.keyCode == 13) {
        event.preventDefault();
    }
    else if(event.target.value.length > 2){
        controlSearch(event.target.value);
        gamesNamesArrayCopy = search.gamesNamesArray;
        //console.log(search);
    }else{
        // cleans games names arrays & UI wrapper
        search.gamesNamesArray = [];
        gamesNamesArrayCopy = [];
        elements.searchResultWrapper.innerHTML = ''; // Clear results
    }
})

elements.searchField.focus();