const socialProofTarget = document.querySelector('#social-proof');
const socialProofContent = [
    {
        logo: '/img/logos/adyen-logo.svg',
        body: `
                Geen zin om jouw werknemers of zakenrelaties dit jaar een doos pralines, een fles cava of een drinkbus cadeau te doen? Kom dit jaar dan origineel uit de hoek met de Streamz Gift Box en geef jouw werknemers een cadeau dat echt entertaint.
                <br><br>
                Onze Box heeft het allemaal:
                <br>
                ✔️ 1 maand Vlaamse en internationale topseries kijken
                <br>
                ✔️ Ideale binge snacks & drinks van bij onz
                <br>
                ✔️ Comfy, stijlvolle kousen om je voeten warm te houden
                <br><br>
                Een complete entertainmentervaring die je graag cadeau wil doen? Haast je dan naar https://lnkd.in/dYuwH9U5
                <br><br>
                Let’s get the Streamz party poppin’! 🥳 
            `,
        img: 'https://via.placeholder.com/1200x800'
    },
    {
        logo: '/img/logos/adyen-logo.svg',
        body: `
                Geen zin om jouw werknemers of zakenrelaties dit jaar een doos pralines, een fles cava of een drinkbus cadeau te doen? Kom dit jaar dan origineel uit de hoek met de Streamz Gift Box en geef jouw werknemers een cadeau dat echt entertaint.
                <br><br>
                Onze Box heeft het allemaal:
                <br>
                ✔️ 1 maand Vlaamse en internationale topseries kijken
                <br>
                ✔️ Ideale binge snacks & drinks van bij onz
                <br>
                ✔️ Comfy, stijlvolle kousen om je voeten warm te houden
                <br><br>
                Een complete entertainmentervaring die je graag cadeau wil doen? Haast je dan naar https://lnkd.in/dYuwH9U5
                <br><br>
                Let’s get the Streamz party poppin’! 🥳 
            `,
        img: 'https://via.placeholder.com/1200x800'
    },
    {
        logo: '/img/logos/adyen-logo.svg',
        body: `
                Geen zin om jouw werknemers of zakenrelaties dit jaar een doos pralines, een fles cava of een drinkbus cadeau te doen? Kom dit jaar dan origineel uit de hoek met de Streamz Gift Box en geef jouw werknemers een cadeau dat echt entertaint.
                <br><br>
                Onze Box heeft het allemaal:
                <br>
                ✔️ 1 maand Vlaamse en internationale topseries kijken
                <br>
                ✔️ Ideale binge snacks & drinks van bij onz
                <br>
                ✔️ Comfy, stijlvolle kousen om je voeten warm te houden
                <br><br>
                Een complete entertainmentervaring die je graag cadeau wil doen? Haast je dan naar https://lnkd.in/dYuwH9U5
                <br><br>
                Let’s get the Streamz party poppin’! 🥳 
            `,
        img: 'https://via.placeholder.com/1200x800'
    }
];

function createSocialProof() {
    if (socialProofTarget) {
        shuffleArray(socialProofContent);

        for (let i = 0; i < socialProofContent.length; i++) {
            const template = `
                <div class="card">
                    <img class="logo" src="${socialProofContent[i].logo}" alt="">
                    <p>
                        ${socialProofContent[i].body}
                    </p>
                    <img class="featured" src="${socialProofContent[i].img}">
                </div>
            `;
            socialProofTarget.insertAdjacentHTML("beforeend", template);
        };
    }
};

$(document).ready(createSocialProof);