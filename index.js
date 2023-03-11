const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#joke-btn');

// const getJoke = () => {

//     const setHeader = {
//         headers:{
//             Accept:"application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com/',setHeader)
//     .then((res) => res.json() )
//     .then((data) => { joke.innerHTML = data.joke })
//     .catch((err) => { console.log(err) });
// }

const getJoke = async () => {
    try{
        const setHeader = {
            headers:{
                Accept:"application/json"
            }
        }
    
        const res = await fetch('https://icanhazdadjoke.com/',setHeader);
        const data = await res.json();
        joke.innerHTML = data.joke;
    }catch(err){
        console.log(err);
    }
}

jokeBtn.addEventListener('click',getJoke);
getJoke();