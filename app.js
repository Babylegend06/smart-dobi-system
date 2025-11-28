// Optional: For ESP32 realtime updates and monitoring
import { db, ref, onValue } from './firebase.js';

// Listen machine statuses
onValue(ref(db, 'machines/'), snapshot => {
  const machines = snapshot.val();
  console.log("Current machine status:", machines);
});
