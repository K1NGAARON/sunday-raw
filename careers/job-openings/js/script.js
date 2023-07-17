const target=document.querySelector(".section.content > .row > .wrapper"),content=[{title:"Customer Success Belgium",body:"Als Customer Success is het jouw missie om een uitstekende service te leveren v\xf3\xf3r, tijdens en na een deal.",img:"/careers/job-openings/img/image3.jpg",country:"belgium",city:"roeselare",flag:"",url:"/careers/job-openings/customer-success-manager-belgium/",order:""},];function createCards(){for(let e=0;e<content.length;e++){let t=`
            <div class="card ${content[e].country}">
                <img src="${content[e].img}">
                <h5>
                    ${content[e].title}
                </h5>
                <p class="location">
                    ${content[e].city}
                </p>
                <p>
                    ${content[e].body}
                </p>
                <a class="btn" href="${content[e].url}">
                    View opening
                </a>
            </div>
        `;target.insertAdjacentHTML("beforeend",t)}}$(document).ready(createCards);