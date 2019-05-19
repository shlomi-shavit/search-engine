import {elements} from './Selectores';

const renderGameHtml = game => {
    const markup = `
            <li>
                <img src="${game.imageURL}">
                <span>${game.name}</span>
            </li>
        `;
    elements.searchResultWrapper.insertAdjacentHTML('beforeend', markup)
} // insert games results to html

export const renderGamesResultsToHtml = (query, gamesResults) => {

    // console.log('~~~~~~~~~~~~~~~');
    // console.log(gamesResults);
    // console.log('~~~~~~~~~~~~~~~');

    if(gamesResults === undefined || gamesResults.length == 0){
        elements.searchResultWrapper.innerHTML = `0 result for ${query}`; // Prepare UI for results
    }else{
        elements.searchResultWrapper.innerHTML = ''; // Clear results
        gamesResults.forEach(renderGameHtml);
    }
}
