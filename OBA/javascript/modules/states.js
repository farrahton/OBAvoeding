const loader = document.getElementsByClassName('loadingBook');
const errorState = document.getElementsByClassName('error');

export function checkState(state){
    switch(state){
        case 'resultsLoaded':
            console.log(loader)
            for(let item of loader){
                item.style.setProperty('display', 'none')
            };     
            
            for(let item of errorState){
                item.style.setProperty('display', 'none')
            };  
            break;
        case 'loading':
            console.log(loader)
             for(let item of loader){
                item.style.setProperty('display', 'block')
            };   
                             
            for(let item of errorState){
                item.style.setProperty('display', 'none')
            }; 
            break;
        case 'error':

                    
            for(let item of errorState){
                item.style.setProperty('display', 'block')
                errorState.textContent =
                ` 
                <h5> Er ging helaas iets fout. Probeer het opnieuw door eerst toestemming te geven via https://cors-anywhere.herokuapp.com/corsdemo <h5>
                `            }; 
             for(let item of loader){
                item.style.setProperty('display', 'none')
            };            
            break;
    }
}