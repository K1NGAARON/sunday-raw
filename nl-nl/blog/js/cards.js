const target=document.querySelector(".section.content > .row > .wrapper"),content=[{title:"De 4 employer branding strategie\xebn die je moet volgen in 2023",body:"Nog steeds op zoek naar die perfecte collega's om jouw team te versterken? Ook al heb je misschien veel moeite gestoken in leuke wervingscampagnes, toch kunnen de resultaten tegenvallen.",img:"/blog/employee-retention-strategy-2023/img/banner.jpg",url:"/nl-nl/blog/employer-branding-strategie",beachhead:"hr"},{title:"Hoe houd je jouw werknemers gelukkig en gezond",body:"De werkvloer is de plek waar mensen het grootste deel van hun wakkere uren doorbrengen.",img:"/blog/make-employees-happy/img/banner.jpg",url:"/nl-nl/blog/gezonde-werknemers/",beachhead:"hr"},{title:"7 manieren om je conferentie of evenement duurzamer te maken",body:"De vaak alarmerende impact van bedrijven op de maatschappij en het milieu vereist een andere aanpak.",img:"/blog/make-your-event-more-sustainable/img/banner.jpg",url:"/nl-nl/blog/maak-je-event-duurzamer/",beachhead:"hr"},];function createCards(){for(let e=0;e<content.length;e++){let n=`
            <div class="card ${content[e].beachhead}">
                <a href="${content[e].url}">
                    <img src="${content[e].img}" alt="${content[e].title}">
                    <h5>
                        ${content[e].title}
                    </h5>
                    <p>
                        ${content[e].body}
                    </p>
                    <a class="btn" href="${content[e].url}">
                        Lees de blog
                    </a>
                </a>
            </div>
        `;target.insertAdjacentHTML("beforeend",n)}}$(document).ready(createCards);