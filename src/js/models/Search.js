//import axios from 'axios';
import localJsonGames from '../coralGameConfigurarion.json';

export default class Search {
    constructor (query) {
        this.getGames();
        this.gamesNamesArray;
    }

    getGames() {
        /**/
        fetch(`http://xbc-stub.games.dev.cloud.galabingo.com/shared/gamesConfiguration/coralGameConfigurarion.json`)
            .then(result => {
                return result.json();
            }).then(data => {
            //console.log(data);
            this.results = data;
        }).catch((error) => {
            console.log(error);
        });


        // local json call
        //this.results = localJsonGames;

        // axios call
        /*
         try{
             const results = await axios(`http://xbc-stub.games.dev.cloud.galabingo.com/shared/gamesConfiguration/coralGameConfigurarion.json`);
             this.results = results.data;
         } catch(error){
             console.log(error);
         }
         */
    }

    searchInGames(query, allGamesObj) {
        // search in games and return results
        const checkIfqueryExistInGamesObj = gameCode => {
            return allGamesObj[gameCode].name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
        };

        const AllGamesKeysArray = Object.keys(allGamesObj).filter(checkIfqueryExistInGamesObj); // return keys array that matched the search input value.

        const allGamesArray = AllGamesKeysArray.map(game => {
            return allGamesObj[game]
        }); //return obj array that matched the search input value.

        // console.log(AllGamesKeysArray);
        // console.log(allGamesArray);
        return allGamesArray
    };
}