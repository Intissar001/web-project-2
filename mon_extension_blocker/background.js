let usageData = {
  "www.youtube.com": { usedToday: 0, maxPerDay: 3600 }, // en secondes
  "www.facebook.com": { usedToday: 0, maxPerDay: 1800 }
};

setInterval(() => {
  const currentSite = getCurrentTabHostname();
  if (usageData[currentSite]) {
    usageData[currentSite].usedToday += 1;

    if (usageData[currentSite].usedToday >= usageData[currentSite].maxPerDay) {
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
          if (new URL(tab.url).hostname === currentSite) {
            chrome.scripting.executeScript({
              target: { tabId: tab.id },
              func: () => {
                document.body.innerHTML = "<h1 style='color:red;text-align:center;margin-top:50px;'>Temps écoulé pour cette plateforme !</h1>";
              }
            });
          }
        });
      });
    }
  }
}, 1000); // vérifie toutes les secondes

function getCurrentTabHostname() {
  // Ne fonctionne pas ici car `chrome.tabs` ne retourne pas de valeur directement
  // À améliorer plus tard avec les événements de changement d’onglet
  return "";
}
