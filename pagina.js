
document.addEventListener("DOMContentLoaded", ()=>{ //inizio
    
    const cerca= document.getElementById("cerca")
    const button = document.querySelector("button")

    button.addEventListener("click", ()=>{
    const iniettiamo=document.getElementById("iniettiamo")
    let str=""

    const input = cerca.value //quello che abbiamo digitato nella casella di testo
    

    const ApiUrl=`https://api.themoviedb.org/3/search/movie?query=${input}&api_key=59876cb15896738a0d4e8abc0c1c8d3d `
    console.log(ApiUrl)
        
    fetch(ApiUrl).then(
        response => response.json()
    )
    .then (
        data => {
            console.log(data.results),

        data.results.forEach(
            element => {
            
            str +=` 
            <div class="card">
                <ul>
                    <li><img src="https://image.tmdb.org/t/p/original${element.poster_path}"></li>
                    <li><strong>${element.original_title}</strong></li>
                    <li>${element.title}</li>
                    <li>${element.overview}</li>
                    <li>${element.release_date}</li>
                </ul>   
            </div>       
        `})
        iniettiamo.innerHTML= str
        }
    )
    .catch(
        error => console.log(error)
    )

    })
    

}) //fine