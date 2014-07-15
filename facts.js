var jack_bauer_facts = [
	"Nem hörög a paraszt, ha nem szúrja a kés!",
	"Ordít, mint a számba szorult féreg.",
	"A szó elszáll, az írás olvashatatlan.",
	"Részemről a kockahas el van vetve!",
	"Kína teljes lakossága Jack fejét akarja. Fair küzdelem lenne.",
	"Sokat akar a szarka, de menstruál a szarkalány.",
	"A kivétel erősíti a vakbelet.",
	"Kicsi a bors, de nagyot tüsszentesz tőle.",
	"Felesleges, mint Zalatnaynak az utazási katalógus.",
	"Egyik szemem sír, másik meg a koporsó.",
	"Ki korán kel, egész nap álmos.",
	"Olcsó húsnak is emelkedik az ára.",
	"Ajándék ló nem látja a fától a szódás lovát.",
	"Itt van a kutya elesve!",
	"A moha déli oldalán mindig fa van.",
	"Az ismétlés az unalom apja.",
	"Ajándék szesznek ne nézd a fokát!",
	"A lustaság fél egészség, de miért ne legyünk teljesen egészségesek?",
	"Kétféle vélemény van: az enyém és a helytelen.",
	"Ez beütött, mint Quasimodonak a Limbo-láz.",
	"Ajándék lónak híg a leve.",
	"Aki korán kel... hamarabb iszik.",
	"Ha minden kötél szakad, akkor ne félj az akasztófától!",
	"Jobb ma örömmel, mint holnap körömmel. (mosogatás előtt.",
	"Nem esik messze a szódás a lovától.",
	"Amit magadnak kívánsz, ne tedd azt embertársaiddal, hátha más az ízlésük.",
	"A hülyeségnek nincs határa, életcélom azt mégis átlépni.",
	"Ami ingyen van, az biztos megéri az árát.",
	"Nem a világ lett rosszabb, a hírszolgáltatás lett jobb.",
	"Nem bírom nézni, ha szenvednek az emberek. De valamiből nekem is élnem kell - mondta az inkvizítor.",
	"Az angol repülőtéren máris kétszer annyi ember tolong, mint amennyi elfér.",
	"Meteorológiai előrejelzés: előbb-utóbb tavasz lesz.",
	"Ferde fej a divat! Tessék mondani: a gondolat azért lehet egyenes?",
	"Jó munkavédelmi tevékenység: sok baleset!",
	"A szabadstrandot utasaink díjmentesen használhatják.",
	"Minél idősebb egy sportoló, annál sikeresebb volt hajdan.",
	"Az öregkor hamar elszáll. Aztán jön a második fiatalságunk.",
	"Aki tudja, hogyan kell a nehézségekből kilábalni, mindig kevesebbet ér, mint aki azt tudja, hogyan lehet elkerülni őket.",
	"Tévedni emberi dolog. Különösen akkor, ha mi tévedünk.",
	"Ahelyett, hogy egy politikusnak átnyújtanánk a város kulcsait, jobb lenne inkább a zárat kicseréltetni.",
	"Az embernek az az örökös fő hibája, hogy annyi apró hibája van.",
	"Legjobb párna a lelkiismeret.",
	"Túl messzire kell mennünk ahhoz, hogy megtudjuk, milyen messzire mehetünk.",
	"Az az egyetlen baj az egoistákkal, hogy saját maguk jobban érdeklik őket, mint én.",
	"Bármi, amiben egy csöpp élvezet is van, az vagy erkölcstelen, vagy törvénysértő, vagy hízlal.",
	"A teve olyan ló, amit egy bizottság tervezett.",
	"Le a gravitációval!",
	"A kannibál nem vegetáriánus, hanem humanitáriánus.",
	"Csak egyszer vagyunk fiatalok. Utána más mentséget kell találnunk.",
	"Csak a bolondok veszik magukat igazán komolyan.",
	"A helyzet reménytelen, de nem súlyos.",
	"A remény az az érzés, hogy ez az érzés nem tartós.",
	"Nem hiszek a túlvilágban, de azért van nálam egy váltás alsónemű.",
	"Az a legszebb a kopaszságban, hogy az ember hallja a hópelyheket.",
	"A teológia a vallásnak az a része, amihez ész is kell.",
	"Az emberek törvényt mondanak, de vagyonra gondolnak.",
	"A vezér ne előzze meg nagyon a csapatát, mert seggbelövik.",
	"Nincs annál jobb vicc, mint amit az ember a beosztottjainak mesél.",
	"Semmi sem okozhat nagyobb kárt, mint egy olyan hazugság, amelyik hasonlít az igazsághoz.",
	"A szellemesség művelt pimaszság."
];

var getAFact = function() {
	// check if we're out of facts to avoid an indexOutOfBounds exception
	if(jack_bauer_facts.length === 0) {
		// all the facts have been seen, tell user that they're done.
		$("#fact").text("A féligazságnak rendszerint még a fele sem igaz.");
	} else {
		// there are still facts in the array, so picks a random one
		var index = Math.floor(Math.random() * jack_bauer_facts.length);
		$("#fact").text(jack_bauer_facts[index]);

		// remove this fact from the facts list to avoid repeating facts
		jack_bauer_facts.splice(index, 1);
	}
}

// set up handler for when random fact button clicked
$("#random_fact").click(getAFact);

// initialize text
getAFact();
