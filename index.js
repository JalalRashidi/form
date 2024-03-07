const items =  [
    "LHA-Lufthansa",
    "IAG-British Airways",
    "AF-Air France",
    "AFR-KLM Royal Dutch Airlines",
    "RYAAY-Ryanair",
    "EZJ-EasyJet",
    "THY-Turkish Airlines",
    "AFLT-Aeroflot",
    "LXS-Swiss International Air Lines",
    "NAS-Norwegian Air Shuttle",
    "SAS-SAS Scandinavian Airlines",
    "IBE-Iberia",
    "AUA-Austrian Airlines",
    "FIA1S-Finnair",
    "AZA-Alitalia",
    "LOT-LOT Polish Airlines",
    "EADSY-Brussels Airlines",
    "WIZZ-Wizz Air",
    "AIR-Air Europa",
    "TAP-TAP Air Portugal"
];

const searchInput = document.getElementById('searchInput');
const autocompleteItems = document.getElementById('autocompleteItems');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const suggestions = items.filter(item => item.toLowerCase().includes(query));
    showSuggestions(suggestions);
});

function showSuggestions(suggestions) {
    autocompleteItems.innerHTML = '';
    suggestions.forEach(suggestion => {
        const div = document.createElement('div');
        div.textContent = suggestion;
        div.addEventListener('click', () => {
            searchInput.value = suggestion;
            autocompleteItems.innerHTML = '';
        });
        autocompleteItems.appendChild(div);
    });
}

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !autocompleteItems.contains(e.target)) {
        autocompleteItems.innerHTML = '';
    }
});