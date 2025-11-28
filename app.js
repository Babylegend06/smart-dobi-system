import { db } from './firebase.js';
import { ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const machineContainer = document.getElementById('machine-container');

// Hanya 2 mesin aktif, tapi web boleh tunjuk lebih
const machineIds = ["relay1", "relay2", "relay3", "relay4"];

function renderMachines(data) {
    machineContainer.innerHTML = '';
    machineIds.forEach(id => {
        const status = data[id] ? "ON" : "OFF";
        const statusClass = data[id] ? "available" : "off";

        const card = document.createElement('div');
        card.className = `machine-card ${statusClass}`;
        card.innerHTML = `
            <span>${id.toUpperCase()}</span>
            <span class="status">${status}</span>
        `;
        card.onclick = () => toggleRelay(id, data[id]);
        machineContainer.appendChild(card);
    });
}

function toggleRelay(id, current) {
    // Update di Firebase
    set(ref(db, id), !current);
}

// Listener realtime
onValue(ref(db, '/'), snapshot => {
    const data = snapshot.val();
    renderMachines(data);
});
