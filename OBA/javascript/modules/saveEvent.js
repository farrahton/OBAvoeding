export function toggleBookmark() { 
    // clicking on the bookmark for activiteiten shows the empty state and when you click on the x you leave it
    document.querySelector("#saveEvent").addEventListener("click", function(){
        document.querySelector("#activiteitenSpan").classList.remove('hidden');
    });
    
    document.querySelector("span img:nth-of-type(1)").addEventListener("click", function() {
        document.querySelector("#activiteitenSpan").classList.add('hidden')
    })
    } 
     