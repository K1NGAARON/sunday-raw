const target=document.querySelector(".related-content > .row > .wrapper"),content=[{client:"videoland",title:"A promise of awesome, sustainable fashion to Videoland",body:"As one of the largest consumer brands of RTL, Videoland’s priority is building brand ambassadors internally and externally.",logo:"https://teamsunday.com/wp-content/uploads/2022/11/videoland-logo-black_lr.png",img:"https://teamsunday.com/wp-content/uploads/2022/11/videoland-1024x683.jpg",url:"https://teamsunday.com/en/client-cases/a-promise-of-awesome-sustainable-fashion-to-videoland/"},{client:"videoland",title:"A promise of awesome, sustainable fashion to Videoland",body:"As one of the largest consumer brands of RTL, Videoland’s priority is building brand ambassadors internally and externally.",logo:"https://teamsunday.com/wp-content/uploads/2022/11/videoland-logo-black_lr.png",img:"https://teamsunday.com/wp-content/uploads/2022/11/videoland-1024x683.jpg",url:"https://teamsunday.com/en/client-cases/a-promise-of-awesome-sustainable-fashion-to-videoland/"},{client:"videoland",title:"A promise of awesome, sustainable fashion to Videoland",body:"As one of the largest consumer brands of RTL, Videoland’s priority is building brand ambassadors internally and externally.",logo:"https://teamsunday.com/wp-content/uploads/2022/11/videoland-logo-black_lr.png",img:"https://teamsunday.com/wp-content/uploads/2022/11/videoland-1024x683.jpg",url:"https://teamsunday.com/en/client-cases/a-promise-of-awesome-sustainable-fashion-to-videoland/"}];function createCards(){for(let e=0;e<content.length;e++){let o=`
            <div class="card">
                <img src="${content[e].img}" alt="${content[e].title}">
                <img class="logo" src="${content[e].logo}" alt="${content[e].title}">
                <h5>
                    ${content[e].title}
                </h5>
                <p>
                    ${content[e].body}
                </p>
                <a class="btn" href="${content[e].url}">
                    Read the case
                </a>
            </div>
        `;target.insertAdjacentHTML("beforeend",o)}}$(document).ready(createCards);