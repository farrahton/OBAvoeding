const loader = document.getElementsByClassName('loadingBook');

export function checkState(state){
    switch(state){
        case 'resultsLoaded':
            console.log(loader)
             for(let item of loader){
                item.style.setProperty('display', 'none')
            };            
            break;
        case 'loading':
            console.log(loader)
             for(let item of loader){
                item.style.setProperty('display', 'block')
            };            
            break;
        case 'error':
            console.log(loader)
             for(let item of loader){
                item.style.setProperty('display', 'none')
            };            
            break;
    }
}