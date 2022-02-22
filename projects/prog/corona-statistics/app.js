createCoronaStatsComponent("Finland", document.body);
createCoronaStatsComponent("Sweden", document.body);
createCoronaStatsComponent("Canada", document.body);

function createCoronaStatsComponent(country, parentElement) {
    const element = document.createElement("div");
    element.classList.add("corona-stats-component");
    parentElement.append(element);

    let isLoading = true;
    let cases = 0;
    let deaths = 0;

    const render = () => {
        element.innerHTML = `
            <h2>${ country }</h2>
            ${
                isLoading ? `<div class="spinner"></div>` : 
                `
                <div>Cases: ${ cases }</div>
                <div>Deaths: ${ deaths }</div>
                `
            }
        `;
    }

    const load = async () => {
        isLoading = true;
        const res = await fetch(`https://corona.lmao.ninja/v2/countries/${ country }?yesterday=1&strict&query%20`);
        
        const data = await res.json();

        cases = data.cases;
        deaths = data.deaths;

        isLoading = false

        render();
    }


    render();
    load();
}