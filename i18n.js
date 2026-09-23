/* i18n.js — idiomas del mapa de pisos en venta: es · en · de · fr
   Cada fila: [español (clave), inglés, alemán, francés]. Lo que no esté aquí se queda en español. */
(function () {
  var LANGS = ['es', 'en', 'de', 'fr'];
  var LOCALE = { es: 'es-ES', en: 'en-GB', de: 'de-DE', fr: 'fr-FR' };
  var KEY = 'fb_lang';

  var D = [
    /* --- cabecera, héroe --- */
    ['Copiar enlace', 'Copy link', 'Link kopieren', 'Copier le lien'],
    ['Venta · Barcelona', 'For sale · Barcelona', 'Verkauf · Barcelona', 'Vente · Barcelone'],
    ['Propiedades en venta disponibles ahora', 'Properties for sale available now', 'Jetzt verfügbare Immobilien zum Verkauf', 'Biens à vendre disponibles maintenant'],
    ['Mira dónde está cada propiedad, su precio y sus fotos. Cuando una te encaje, pide la visita desde su ficha: te contesto yo directamente.',
      'See where each property is, its price and photos. When one suits you, request a visit from its page: I reply to you personally.',
      'Sehen Sie, wo jede Immobilie liegt, was sie kostet und wie sie aussieht. Wenn eine passt, fragen Sie die Besichtigung direkt im Exposé an: Ich antworte Ihnen persönlich.',
      'Voyez où se trouve chaque bien, son prix et ses photos. Quand l’un vous plaît, demandez la visite depuis sa fiche : je vous réponds personnellement.'],
    /* --- filtros y lista --- */
    ['Zona', 'Area', 'Gegend', 'Zone'],
    ['Todas', 'All', 'Alle', 'Toutes'],
    ['Presupuesto máx.', 'Max. budget', 'Max. Budget', 'Budget max.'],
    ['Precio máx.', 'Max. price', 'Max. Preis', 'Prix max.'],
    ['Sin límite', 'No limit', 'Kein Limit', 'Sans limite'],
    ['Habitaciones', 'Bedrooms', 'Zimmer', 'Chambres'],
    ['Cualquiera', 'Any', 'Beliebig', 'Indifférent'],
    ['1 o más', '1 or more', '1 oder mehr', '1 ou plus'],
    ['2 o más', '2 or more', '2 oder mehr', '2 ou plus'],
    ['3 o más', '3 or more', '3 oder mehr', '3 ou plus'],
    ['Limpiar', 'Clear', 'Zurücksetzen', 'Effacer'],
    ['Ver lista de propiedades', 'See list of properties', 'Immobilienliste ansehen', 'Voir la liste des biens'],
    ['Cargando propiedades…', 'Loading properties…', 'Immobilien werden geladen…', 'Chargement des biens…'],
    ['↻ Reintentar', '↻ Try again', '↻ Erneut versuchen', '↻ Réessayer'],
    ['No se pudieron cargar las propiedades.', 'Couldn’t load the properties.', 'Die Immobilien konnten nicht geladen werden.', 'Impossible de charger les biens.'],
    ['propiedad', 'property', 'Immobilie', 'bien'],
    ['propiedades', 'properties', 'Immobilien', 'biens'],
    ['propiedad ubicada', 'property located', 'Immobilie verortet', 'bien localisé'],
    ['propiedades ubicadas', 'properties located', 'Immobilien verortet', 'biens localisés'],
    ['Ubicaciones aproximadas', 'Approximate locations', 'Ungefähre Standorte', 'Emplacements approximatifs'],
    ['Ahora mismo no tengo propiedades publicadas. Escríbeme y te aviso en cuanto salga una.',
      'I have no properties listed right now. Message me and I’ll let you know as soon as one comes up.',
      'Derzeit habe ich keine Immobilien online. Schreiben Sie mir, ich melde mich, sobald eine verfügbar ist.',
      'Je n’ai aucun bien en ligne pour le moment. Écrivez-moi et je vous préviens dès qu’il y en a un.'],
    ['No hay propiedades con esos filtros. Prueba a limpiarlos o ', 'No properties match those filters. Try clearing them or ', 'Keine Immobilien mit diesen Filtern. Setzen Sie sie zurück oder ', 'Aucun bien avec ces filtres. Essayez de les effacer ou '],
    ['cuéntame qué buscas', 'tell me what you’re looking for', 'sagen Sie mir, was Sie suchen', 'dites-moi ce que vous cherchez'],
    ['Hasta ', 'Up to ', 'Bis ', 'Jusqu’à '],
    /* --- ficha del piso --- */
    ['hab.', 'bed.', 'Zi.', 'ch.'],
    ['baño', 'bathroom', 'Bad', 'salle de bain'],
    ['baños', 'bathrooms', 'Bäder', 'salles de bain'],
    ['Entrega:', 'Handover:', 'Übergabe:', 'Livraison :'],
    ['Inmediata', 'Immediately', 'Sofort', 'Immédiate'],
    ['RESERVADO', 'RESERVED', 'RESERVIERT', 'RÉSERVÉ'],
    ['Reservado · avísame si cae la reserva', 'Reserved · let me know if it falls through', 'Reserviert · sagen Sie mir Bescheid, falls die Reservierung platzt', 'Réservé · prévenez-moi si la réservation tombe'],
    ['Quiero visitarlo · por WhatsApp', 'I’d like to visit · via WhatsApp', 'Besichtigung anfragen · per WhatsApp', 'Je veux le visiter · via WhatsApp'],
    ['Quiero visitarlo', 'I’d like to visit', 'Besichtigung anfragen', 'Je veux le visiter'],
    ['Compartir', 'Share', 'Teilen', 'Partager'],
    ['📍 Ubicación aproximada (pin en el mapa). La dirección exacta te la doy al concertar la visita.',
      '📍 Approximate location (pin on the map). I’ll give you the exact address when we arrange the visit.',
      '📍 Ungefähre Lage (Pin auf der Karte). Die genaue Adresse nenne ich Ihnen bei der Terminvereinbarung.',
      '📍 Emplacement approximatif (repère sur la carte). Je vous donne l’adresse exacte au moment de fixer la visite.'],
    ['Foto de la propiedad en ', 'Photo of the property in ', 'Foto der Immobilie in ', 'Photo du bien à '],
    ['Enlace copiado ✓', 'Link copied ✓', 'Link kopiert ✓', 'Lien copié ✓'],
    ['Copia el enlace:', 'Copy the link:', 'Link kopieren:', 'Copiez le lien :'],
    ['Propiedades en venta — Fincas A.G. Núñez', 'Properties for sale — Fincas A.G. Núñez', 'Immobilien zum Verkauf — Fincas A.G. Núñez', 'Biens à vendre — Fincas A.G. Núñez'],
    ['Mira las propiedades en venta disponibles ahora en Barcelona:', 'See the properties available for sale now in Barcelona:', 'Sehen Sie die jetzt verfügbaren Immobilien zum Verkauf in Barcelona:', 'Découvrez les biens à vendre disponibles maintenant à Barcelone :'],
    ['Propiedad en venta en ', 'Property for sale in ', 'Immobilie zum Verkauf in ', 'Bien à vendre à '],
    /* --- mensajes de WhatsApp --- */
    ['Hola AG Núñez, me interesa la propiedad "{t}" ({z}) que vi en vuestro mapa de pisos en venta: {u}',
      'Hi AG Núñez, I’m interested in the property "{t}" ({z}) I saw on your for-sale map: {u}',
      'Hallo AG Núñez, ich interessiere mich für die Immobilie "{t}" ({z}), die ich auf Ihrer Verkaufskarte gesehen habe: {u}',
      'Bonjour AG Núñez, le bien « {t} » ({z}) vu sur votre carte des ventes m’intéresse : {u}'],
    ['Hola AG Núñez, quiero visitar la propiedad "{t}" ({z}) que vi en vuestro mapa de pisos en venta: {u}',
      'Hi AG Núñez, I’d like to visit the property "{t}" ({z}) I saw on your for-sale map: {u}',
      'Hallo AG Núñez, ich möchte die Immobilie "{t}" ({z}) besichtigen, die ich auf Ihrer Verkaufskarte gesehen habe: {u}',
      'Bonjour AG Núñez, je voudrais visiter le bien « {t} » ({z}) vu sur votre carte des ventes : {u}'],
    ['Hola AG Núñez, vi en vuestro mapa la propiedad "{t}" (reservada). Avísame si cae la reserva o si tenéis algo parecido.',
      'Hi AG Núñez, I saw the property "{t}" on your map (reserved). Let me know if the reservation falls through or if you have something similar.',
      'Hallo AG Núñez, ich habe die Immobilie "{t}" auf Ihrer Karte gesehen (reserviert). Sagen Sie mir Bescheid, falls die Reservierung platzt oder Sie etwas Ähnliches haben.',
      'Bonjour AG Núñez, j’ai vu le bien « {t} » (réservé) sur votre carte. Prévenez-moi si la réservation tombe ou si vous avez quelque chose de similaire.'],
    ['Hola AG Núñez, busco una propiedad para comprar en Barcelona', 'Hi AG Núñez, I’m looking for a property to buy in Barcelona', 'Hallo AG Núñez, ich suche eine Immobilie zum Kauf in Barcelona', 'Bonjour AG Núñez, je cherche un bien à acheter à Barcelone'],
    ['Hola AG Núñez, vi vuestro mapa de pisos en venta y quiero información.', 'Hi AG Núñez, I saw your for-sale map and I’d like some information.', 'Hallo AG Núñez, ich habe Ihre Verkaufskarte gesehen und hätte gern Informationen.', 'Bonjour AG Núñez, j’ai vu votre carte des ventes et je voudrais des informations.'],
    ['Hola AG Núñez, quiero enterarme de las novedades en venta, también las off market', 'Hi AG Núñez, I want to hear about new for-sale listings, including the off-market ones', 'Hallo AG Núñez, ich möchte über neue Verkaufsangebote informiert werden, auch Off-Market', 'Bonjour AG Núñez, je veux être au courant des nouveautés en vente, y compris hors marché'],
    ['Hola AG Núñez, acabo de enviaros los datos de mi propiedad desde vuestro mapa de pisos en venta.', 'Hi AG Núñez, I’ve just sent you my property’s details from your for-sale map.', 'Hallo AG Núñez, ich habe Ihnen soeben die Daten meiner Immobilie über Ihre Verkaufskarte geschickt.', 'Bonjour AG Núñez, je viens de vous envoyer les informations de mon bien depuis votre carte des ventes.'],
    ['Hola AG Núñez, acabo de dejaros lo que busco desde vuestro mapa de pisos en venta.', 'Hi AG Núñez, I’ve just left you what I’m looking for from your for-sale map.', 'Hallo AG Núñez, ich habe Ihnen soeben meine Suchkriterien über Ihre Verkaufskarte hinterlassen.', 'Bonjour AG Núñez, je viens de vous laisser ce que je recherche depuis votre carte des ventes.'],
    /* --- bloque de contacto --- */
    ['¿Tienes una propiedad para vender o buscas comprar con prioridad?', 'Do you have a property to sell, or are you looking to buy with priority?', 'Sie haben eine Immobilie zu verkaufen oder suchen eine mit Vorrang zu kaufen?', 'Vous avez un bien à vendre ou vous cherchez à acheter en priorité ?'],
    ['En AG Núñez gestionamos cada operación de compraventa directamente. Cuéntanos tu caso y te respondemos personalmente, sin intermediarios.',
      'At AG Núñez we handle every sale directly. Tell us your case and we’ll reply personally, no middlemen.',
      'Bei AG Núñez betreuen wir jeden Verkauf direkt. Schildern Sie uns Ihren Fall, wir antworten persönlich, ohne Zwischenhändler.',
      'Chez AG Núñez, nous gérons chaque vente directement. Racontez-nous votre cas, nous vous répondons personnellement, sans intermédiaires.'],
    ['Tengo un piso para vender', 'I have a flat to sell', 'Ich habe eine Wohnung zu verkaufen', 'J’ai un appartement à vendre'],
    ['Busco piso para comprar y quiero prioridad', 'I’m looking to buy a flat and want priority', 'Ich suche eine Wohnung zum Kauf und möchte Vorrang', 'Je cherche un appartement à acheter, en priorité'],
    /* --- asistente: común --- */
    ['Tú', 'You', 'Sie', 'Vous'],
    ['Tu piso', 'Your flat', 'Ihre Wohnung', 'Votre bien'],
    ['Objetivo', 'Goal', 'Ziel', 'Objectif'],
    ['Servicio', 'Service', 'Service', 'Service'],
    ['Búsqueda', 'Search', 'Suche', 'Recherche'],
    ['Nombre', 'Name', 'Name', 'Nom'],
    ['Atrás', 'Back', 'Zurück', 'Retour'],
    ['Siguiente', 'Next', 'Weiter', 'Suivant'],
    ['Enviar', 'Send', 'Senden', 'Envoyer'],
    ['(opcional)', '(optional)', '(optional)', '(facultatif)'],
    ['€', '€', '€', '€'],
    ['Privacidad', 'Privacy', 'Datenschutz', 'Confidentialité'],
    ['Acepto que Fincas A.G. Núñez use mis datos para contactarme.', 'I agree that Fincas A.G. Núñez may use my data to contact me.', 'Ich bin damit einverstanden, dass Fincas A.G. Núñez meine Daten nutzt, um mich zu kontaktieren.', 'J’accepte que Fincas A.G. Núñez utilise mes données pour me contacter.'],
    ['Faltan datos obligatorios (*)', 'Required details missing (*)', 'Pflichtangaben fehlen (*)', 'Champs obligatoires manquants (*)'],
    ['Dime tu nombre para saber cómo llamarte', 'Tell me your name so I know what to call you', 'Nennen Sie mir Ihren Namen, damit ich Sie ansprechen kann', 'Dites-moi votre nom pour savoir comment vous appeler'],
    ['Pon un WhatsApp válido (mínimo 9 cifras)', 'Enter a valid WhatsApp number (at least 9 digits)', 'Geben Sie eine gültige WhatsApp-Nummer ein (mindestens 9 Ziffern)', 'Saisissez un numéro WhatsApp valide (9 chiffres minimum)'],
    ['Pon un email válido, por ejemplo nombre@correo.com', 'Enter a valid email, e.g. name@mail.com', 'Geben Sie eine gültige E-Mail an, z. B. name@mail.com', 'Saisissez un e-mail valide, par exemple nom@mail.com'],
    ['Necesito tu OK para poder contactarte', 'I need your OK so I can contact you', 'Ich brauche Ihr Einverständnis, um Sie kontaktieren zu dürfen', 'J’ai besoin de votre accord pour pouvoir vous contacter'],
    ['Marca esta casilla para seguir con la búsqueda prioritaria', 'Tick this box to continue with the priority search', 'Setzen Sie dieses Häkchen, um mit der vorrangigen Suche fortzufahren', 'Cochez cette case pour continuer avec la recherche prioritaire'],
    ['Necesito tu confirmación para continuar', 'I need your confirmation to continue', 'Ich brauche Ihre Bestätigung, um fortzufahren', 'J’ai besoin de votre confirmation pour continuer'],
    ['Enviando…', 'Sending…', 'Wird gesendet…', 'Envoi…'],
    ['No se pudo enviar. Escríbeme por WhatsApp y lo vemos.', 'Couldn’t send. Message me on WhatsApp and we’ll sort it out.', 'Senden fehlgeschlagen. Schreiben Sie mir per WhatsApp, dann klären wir es.', 'Envoi impossible. Écrivez-moi sur WhatsApp et on s’arrange.'],
    ['¡Recibido!', 'Received!', 'Erhalten!', 'Bien reçu !'],
    ['¡Recibido, {n}!', 'Received, {n}!', 'Erhalten, {n}!', 'Bien reçu, {n} !'],
    ['Te escribo en cuanto lo revise.', 'I’ll write to you as soon as I’ve reviewed it.', 'Ich schreibe Ihnen, sobald ich es geprüft habe.', 'Je vous écris dès que j’ai regardé ça.'],
    ['Escríbeme ya por WhatsApp', 'Message me now on WhatsApp', 'Schreiben Sie mir jetzt per WhatsApp', 'Écrivez-moi maintenant sur WhatsApp'],
    ['Reviso los datos de tu piso y te escribo por WhatsApp para contarte cuánto puedes pedir por él y cómo lo haríamos.', 'I’ll review your flat’s details and message you on WhatsApp to tell you what you could ask for it and how we’d do it.', 'Ich prüfe die Daten Ihrer Wohnung und schreibe Ihnen per WhatsApp, welchen Preis Sie verlangen können und wie wir vorgehen.', 'Je regarde les informations de votre bien et je vous écris sur WhatsApp pour vous dire combien vous pouvez en demander et comment on ferait.'],
    ['Te escribo por WhatsApp en cuanto entre un piso que encaje contigo.', 'I’ll message you on WhatsApp as soon as a flat that fits comes in.', 'Ich schreibe Ihnen per WhatsApp, sobald eine passende Wohnung hereinkommt.', 'Je vous écris sur WhatsApp dès qu’un appartement qui vous correspond arrive.'],
    ['Te escribo por WhatsApp para hacer el estudio de tu capacidad de compra y empezar a buscar por ti.', 'I’ll message you on WhatsApp to do the study of your purchasing capacity and start searching for you.', 'Ich schreibe Ihnen per WhatsApp, um Ihre Kaufkraft zu prüfen und die Suche für Sie zu starten.', 'Je vous écris sur WhatsApp pour faire l’étude de votre capacité d’achat et commencer à chercher pour vous.'],
    ['Cuéntame sobre tu piso', 'Tell me about your flat', 'Erzählen Sie mir von Ihrer Wohnung', 'Parlez-moi de votre bien'],
    ['Tres pasos rápidos, menos de dos minutos. Te respondo yo personalmente.', 'Three quick steps, under two minutes. I’ll reply personally.', 'Drei schnelle Schritte, weniger als zwei Minuten. Ich antworte persönlich.', 'Trois étapes rapides, moins de deux minutes. Je réponds personnellement.'],
    ['Búsqueda prioritaria de piso', 'Priority flat search', 'Vorrangige Wohnungssuche', 'Recherche prioritaire d’appartement'],
    ['Tres pasos. Yo busco por ti y tú vas primero.', 'Three steps. I search for you and you go first.', 'Drei Schritte. Ich suche für Sie und Sie sind zuerst dran.', 'Trois étapes. Je cherche pour vous et vous passez en premier.'],
    /* --- asistente propietarios --- */
    ['¿Con quién hablo?', 'Who am I talking to?', 'Mit wem spreche ich?', 'Avec qui je parle ?'],
    ['Solo tres datos y sigo yo. Te escribo por WhatsApp, sin llamadas de sorpresa.', 'Just three details and I take it from here. I’ll message you on WhatsApp, no surprise calls.', 'Nur drei Angaben, den Rest übernehme ich. Ich schreibe Ihnen per WhatsApp, keine überraschenden Anrufe.', 'Trois informations et je m’occupe du reste. Je vous écris sur WhatsApp, sans appels surprises.'],
    ['Cuéntame cómo es tu propiedad', 'Tell me what your property is like', 'Erzählen Sie mir, wie Ihre Immobilie ist', 'Dites-moi comment est votre bien'],
    ['Lo que sepas, aunque sea aproximado. Lo afino yo después.', 'Whatever you know, even roughly. I’ll refine it later.', 'Was Sie wissen, gern ungefähr. Den Feinschliff mache ich danach.', 'Ce que vous savez, même approximatif. J’affinerai ensuite.'],
    ['¿Qué tipo de inmueble es?', 'What type of property is it?', 'Um welche Art von Immobilie handelt es sich?', 'De quel type de bien s’agit-il ?'],
    ['Piso', 'Flat', 'Wohnung', 'Appartement'],
    ['Ático', 'Penthouse', 'Penthouse', 'Attique'],
    ['Dúplex', 'Duplex', 'Maisonette', 'Duplex'],
    ['Estudio', 'Studio', 'Studio', 'Studio'],
    ['Casa / Chalet', 'House / Villa', 'Haus / Villa', 'Maison / Villa'],
    ['Local', 'Commercial unit', 'Gewerbefläche', 'Local commercial'],
    ['Otro', 'Other', 'Andere', 'Autre'],
    ['¿Cuál?', 'Which one?', 'Welche?', 'Lequel ?'],
    ['Barrio', 'Neighbourhood', 'Stadtviertel', 'Quartier'],
    ['¿Qué municipio o zona?', 'Which town or area?', 'Welche Gemeinde oder Gegend?', 'Quelle commune ou zone ?'],
    ['Calle y número', 'Street and number', 'Straße und Hausnummer', 'Rue et numéro'],
    ['Superficie', 'Size', 'Wohnfläche', 'Surface'],
    ['Desliza para elegir', 'Slide to choose', 'Zum Auswählen schieben', 'Faites glisser pour choisir'],
    ['Baños', 'Bathrooms', 'Badezimmer', 'Salles de bain'],
    ['¿Está amueblado?', 'Is it furnished?', 'Ist sie möbliert?', 'Est-il meublé ?'],
    ['Amueblado', 'Furnished', 'Möbliert', 'Meublé'],
    ['Vacío', 'Empty', 'Unmöbliert', 'Vide'],
    ['Parcial', 'Partly', 'Teilweise', 'Partiel'],
    ['¿Cuántas personas pueden vivir en él?', 'How many people can live there?', 'Wie viele Personen können dort wohnen?', 'Combien de personnes peuvent y vivre ?'],
    ['Personas', 'People', 'Personen', 'Personnes'],
    ['Situación y objetivo', 'Situation and goal', 'Situation und Ziel', 'Situation et objectif'],
    ['Así sé por dónde empezar y qué te conviene más.', 'That way I know where to start and what suits you best.', 'So weiß ich, wo ich anfange und was am besten zu Ihnen passt.', 'Ainsi je sais par où commencer et ce qui vous convient le mieux.'],
    ['¿Cómo está ahora?', 'What’s the situation now?', 'Wie ist der aktuelle Stand?', 'Quelle est la situation actuelle ?'],
    ['Libre', 'Vacant', 'Frei', 'Libre'],
    ['Puede entregarse ya', 'Can be handed over now', 'Kann sofort übergeben werden', 'Peut être livré tout de suite'],
    ['Alquilado', 'Rented', 'Vermietet', 'Loué'],
    ['Con inquilino actual', 'With a current tenant', 'Mit aktuellem Mieter', 'Avec locataire actuel'],
    ['¿Cuándo podrías entregar las llaves?', 'When could you hand over the keys?', 'Wann könnten Sie die Schlüssel übergeben?', 'Quand pourriez-vous remettre les clés ?'],
    ['Ya mismo', 'Right now', 'Sofort', 'Tout de suite'],
    ['En menos de 1 mes', 'In under 1 month', 'In weniger als 1 Monat', 'D’ici moins d’un mois'],
    ['En 1 a 3 meses', 'In 1 to 3 months', 'In 1 bis 3 Monaten', 'Dans 1 à 3 mois'],
    ['Sin fecha todavía', 'No date yet', 'Noch kein Termin', 'Pas encore de date'],
    ['Inquilino desde', 'Tenant since', 'Mieter seit', 'Locataire depuis'],
    ['Renta que cobras', 'Rent you currently charge', 'Ihre aktuelle Miete', 'Loyer perçu'],
    ['¿Qué buscas conmigo?', 'What are you looking for with me?', 'Was suchen Sie bei mir?', 'Que recherchez-vous avec moi ?'],
    ['Valoración gratis', 'Free valuation', 'Kostenlose Bewertung', 'Estimation gratuite'],
    ['Venta completa', 'Full sale management', 'Komplette Verkaufsabwicklung', 'Vente complète'],
    ['Las dos', 'Both', 'Beides', 'Les deux'],
    ['Comprador ideal', 'Ideal buyer', 'Idealer Käufer', 'Acheteur idéal'],
    ['(marca los que quieras)', '(tick any you like)', '(beliebig ankreuzen)', '(cochez ce que vous voulez)'],
    ['Familias', 'Families', 'Familien', 'Familles'],
    ['Parejas', 'Couples', 'Paare', 'Couples'],
    ['Estudiantes', 'Students', 'Studierende', 'Étudiants'],
    ['Profesionales', 'Professionals', 'Berufstätige', 'Professionnels'],
    ['Inversores', 'Investors', 'Investoren', 'Investisseurs'],
    ['Segunda residencia', 'Second home', 'Zweitwohnsitz', 'Résidence secondaire'],
    ['Me da igual', 'No preference', 'Egal', 'Peu importe'],
    ['Precio orientativo que te gustaría', 'Indicative price you’d like', 'Gewünschter Richtpreis', 'Prix indicatif souhaité'],
    ['¿Para cuándo?', 'By when?', 'Bis wann?', 'Pour quand ?'],
    ['Cuanto antes', 'As soon as possible', 'So bald wie möglich', 'Dès que possible'],
    ['En 1 o 2 meses', 'In 1 or 2 months', 'In 1 bis 2 Monaten', 'Dans 1 ou 2 mois'],
    ['Sin prisa, solo miro', 'No rush, just looking', 'Keine Eile, ich schaue nur', 'Pas pressé, je regarde'],
    ['¿Algo más que deba saber?', 'Anything else I should know?', 'Gibt es noch etwas, das ich wissen sollte?', 'Autre chose à savoir ?'],
    ['Elige tu barrio…', 'Choose your neighbourhood…', 'Wählen Sie Ihr Viertel…', 'Choisissez votre quartier…'],
    ['Otro municipio o zona…', 'Other town or area…', 'Andere Gemeinde oder Gegend…', 'Autre commune ou zone…'],
    ['Área metropolitana', 'Metropolitan area', 'Großraum Barcelona', 'Aire métropolitaine'],
    /* --- asistente inquilinos --- */
    ['¿Quién eres?', 'Who are you?', 'Wer sind Sie?', 'Qui êtes-vous ?'],
    ['Tres datos y seguimos. Te escribo por WhatsApp, sin llamadas de sorpresa.', 'Three details and we go on. I’ll message you on WhatsApp, no surprise calls.', 'Drei Angaben und es geht weiter. Ich schreibe Ihnen per WhatsApp, keine überraschenden Anrufe.', 'Trois informations et on continue. Je vous écris sur WhatsApp, sans appels surprises.'],
    ['¿Cómo prevés financiar la compra?', 'How do you plan to finance the purchase?', 'Wie planen Sie den Kauf zu finanzieren?', 'Comment prévoyez-vous de financer l’achat ?'],
    ['Con hipoteca', 'With a mortgage', 'Mit Hypothek', 'Avec crédit'],
    ['Al contado', 'Cash', 'In bar', 'Comptant'],
    ['Ya tengo hipoteca preaprobada', 'Already pre-approved', 'Bereits vorab genehmigt', 'Déjà pré-approuvé'],
    ['Aún no lo sé', 'Not sure yet', 'Noch nicht sicher', 'Pas encore sûr'],
    ['Otra', 'Other', 'Andere', 'Autre'],
    ['Búsqueda prioritaria', 'Priority search', 'Vorrangige Suche', 'Recherche prioritaire'],
    ['Antes de seguir, quiero ser claro con cómo funciona.', 'Before going on, I want to be clear about how it works.', 'Bevor es weitergeht, möchte ich klar erklären, wie es funktioniert.', 'Avant de continuer, je veux être clair sur le fonctionnement.'],
    ['Aviso gratuito', 'Free alert', 'Kostenlose Benachrichtigung', 'Alerte gratuite'],
    ['Entras en una lista de espera estática. Te aviso cuando encaje algo, sin garantía de orden ni de plazo.', 'You join a static waiting list. I’ll let you know when something fits, with no guarantee of order or timing.', 'Sie kommen auf eine feste Warteliste. Ich melde mich, wenn etwas passt, ohne Garantie für Reihenfolge oder Zeitrahmen.', 'Vous entrez sur une liste d’attente statique. Je vous préviens quand quelque chose correspond, sans garantie d’ordre ni de délai.'],
    ['Voy a buscar por ti y tienes preferencia real sobre el resto.', 'I’ll search for you and you get real priority over the rest.', 'Ich suche für Sie und Sie haben echten Vorrang vor allen anderen.', 'Je cherche pour vous et vous avez une vraie priorité sur les autres.'],
    ['Servicio personalizado', 'Personalised service', 'Persönlicher Service', 'Service personnalisé'],
    ['Sin precios cerrados: primero hablamos', 'No fixed prices: we talk first', 'Keine Festpreise: erst sprechen wir miteinander', 'Pas de prix fixe : on en parle d’abord'],
    ['¿Qué prefieres?', 'What do you prefer?', 'Was bevorzugen Sie?', 'Que préférez-vous ?'],
    ['Quiero prioridad', 'I want priority', 'Ich möchte Vorrang', 'Je veux la priorité'],
    ['Busco por ti', 'I search for you', 'Ich suche für Sie', 'Je cherche pour vous'],
    ['Solo el aviso', 'Just the alert', 'Nur die Benachrichtigung', 'Juste l’alerte'],
    ['Gratis', 'Free', 'Kostenlos', 'Gratuit'],
    ['Entiendo que es un servicio personalizado con condiciones propias, que AG Núñez me explicará por escrito antes de empezar, y que primero se hace un estudio de mi capacidad de compra.', 'I understand this is a personalised service with its own terms, which AG Núñez will explain to me in writing before we start, and that a study of my purchasing capacity comes first.', 'Ich verstehe, dass es sich um einen persönlichen Service mit eigenen Bedingungen handelt, die AG Núñez mir schriftlich erklärt, bevor wir beginnen, und dass zuerst meine Kaufkraft geprüft wird.', 'Je comprends qu’il s’agit d’un service personnalisé avec ses propres conditions, qu’AG Núñez m’expliquera par écrit avant de commencer, et qu’une étude de ma capacité d’achat est réalisée d’abord.'],
    ['¿Qué buscas?', 'What are you looking for?', 'Was suchen Sie?', 'Que recherchez-vous ?'],
    ['Cuanto más concreto, más rápido te encuentro algo bueno.', 'The more specific you are, the faster I find you something good.', 'Je konkreter Sie sind, desto schneller finde ich etwas Gutes.', 'Plus vous êtes précis, plus vite je vous trouve quelque chose de bien.'],
    ['¿Dónde?', 'Where?', 'Wo?', 'Où ?'],
    ['(marca las zonas que quieras)', '(tick any areas you like)', '(beliebige Gegenden ankreuzen)', '(cochez les zones souhaitées)'],
    ['Barrios concretos', 'Specific neighbourhoods', 'Bestimmte Stadtviertel', 'Quartiers précis'],
    ['Plazo de compra deseado', 'Desired purchase timeframe', 'Gewünschter Kaufzeitraum', 'Délai d’achat souhaité'],
    ['¿Qué urgencia tienes?', 'How urgent is it?', 'Wie dringend ist es?', 'Quelle est l’urgence ?'],
    ['1-2 meses', '1-2 months', '1-2 Monate', '1-2 mois'],
    ['Sin prisa', 'No rush', 'Keine Eile', 'Pas pressé'],
    ['Imprescindibles', 'Must-haves', 'Unverzichtbar', 'Indispensables'],
    ['Piscina', 'Pool', 'Pool', 'Piscine'],
    ['Ascensor', 'Lift', 'Aufzug', 'Ascenseur'],
    ['Terraza', 'Terrace', 'Terrasse', 'Terrasse'],
    ['Para reformar', 'Needs renovation', 'Renovierungsbedürftig', 'À rénover'],
    ['Parking', 'Parking', 'Parkplatz', 'Parking'],
    ['Lo que se te ocurra', 'Anything else', 'Was Ihnen sonst einfällt', 'Tout ce qui vous passe par la tête'],
    /* --- avisos de pisos nuevos --- */
    ['Que no se te escape ninguna propiedad', 'Never miss a new property', 'Verpassen Sie keine neue Immobilie', 'Ne ratez aucun nouveau bien'],
    ['Te aviso en cuanto sube uno nuevo. Elige cómo prefieres recibirlo.', 'I’ll let you know as soon as a new one goes up. Choose how you’d like to get it.', 'Ich informiere Sie, sobald eine neue online geht. Wählen Sie, wie Sie es erhalten möchten.', 'Je vous préviens dès qu’un nouveau est publié. Choisissez comment le recevoir.'],
    ['Por email', 'By email', 'Per E-Mail', 'Par e-mail'],
    ['Más rápido', 'Faster', 'Schneller', 'Plus rapide'],
    ['Canal de WhatsApp', 'WhatsApp channel', 'WhatsApp-Kanal', 'Chaîne WhatsApp'],
    ['Elige tus filtros si quieres: solo te aviso de los pisos que encajen.', 'Set filters if you like: I’ll only alert you about flats that match.', 'Setzen Sie Filter, wenn Sie möchten: Ich informiere Sie nur über passende Wohnungen.', 'Choisissez vos filtres si vous voulez : je ne vous préviens que pour ce qui correspond.'],
    ['Avisarme por email', 'Alert me by email', 'Per E-Mail benachrichtigen', 'Me prévenir par e-mail'],
    ['Acepto recibir avisos de propiedades nuevas por email. Puedo darme de baja cuando quiera.', 'I agree to receive new-property alerts by email. I can unsubscribe at any time.', 'Ich bin damit einverstanden, E-Mails zu neuen Immobilien zu erhalten. Ich kann mich jederzeit abmelden.', 'J’accepte de recevoir des alertes par e-mail sur les nouveaux biens. Je peux me désabonner à tout moment.'],
    ['Casi listo: te he enviado un email para confirmar tu suscripción. Mira también en spam.', 'Almost done: I’ve sent you an email to confirm your subscription. Check your spam folder too.', 'Fast geschafft: Ich habe Ihnen eine E-Mail zur Bestätigung geschickt. Schauen Sie auch im Spam-Ordner nach.', 'Presque fini : je vous ai envoyé un e-mail pour confirmer votre abonnement. Regardez aussi dans vos spams.'],
    ['Ya estabas suscrito. ¡Gracias!', 'You were already subscribed. Thanks!', 'Sie sind bereits angemeldet. Danke!', 'Vous étiez déjà abonné. Merci !'],
    ['Ahora mismo hay muchas solicitudes. Prueba mañana o escríbeme por WhatsApp.', 'There are a lot of requests right now. Try tomorrow or message me on WhatsApp.', 'Derzeit gibt es viele Anfragen. Versuchen Sie es morgen oder schreiben Sie mir per WhatsApp.', 'Beaucoup de demandes en ce moment. Réessayez demain ou écrivez-moi sur WhatsApp.'],
    ['No se pudo suscribir. Inténtalo de nuevo o escríbeme por WhatsApp.', 'Couldn’t subscribe. Try again or message me on WhatsApp.', 'Anmeldung fehlgeschlagen. Versuchen Sie es erneut oder schreiben Sie mir per WhatsApp.', 'Abonnement impossible. Réessayez ou écrivez-moi sur WhatsApp.'],
    ['Recibe cada propiedad nueva en tu móvil, sin dar tu email. Unirte es gratis y puedes salir cuando quieras.', 'Get every new property on your phone, without giving your email. Joining is free and you can leave whenever you want.', 'Erhalten Sie jede neue Immobilie auf Ihrem Handy, ohne E-Mail-Adresse. Der Beitritt ist kostenlos, Sie können jederzeit austreten.', 'Recevez chaque nouveau bien sur votre téléphone, sans donner votre e-mail. C’est gratuit et vous pouvez quitter quand vous voulez.'],
    ['Unirme al canal', 'Join the channel', 'Kanal beitreten', 'Rejoindre la chaîne'],
    ['Avísame de propiedades nuevas', 'Alert me about new properties', 'Über neue Immobilien benachrichtigen', 'Me prévenir des nouveaux biens'],
    ['Avisos de propiedades nuevas', 'New-property alerts', 'Benachrichtigungen zu neuen Immobilien', 'Alertes nouveaux biens'],
    /* --- Instagram, pie --- */
    ['Detrás de cada propiedad', 'Behind every property', 'Hinter jeder Immobilie', 'Derrière chaque bien'],
    ['Recorridos, barrios y consejos reales, en vídeo.', 'Walk-throughs, neighbourhoods and real advice, on video.', 'Rundgänge, Viertel und echte Tipps, im Video.', 'Visites, quartiers et vrais conseils, en vidéo.'],
    ['Seguir en Instagram', 'Follow on Instagram', 'Auf Instagram folgen', 'Suivre sur Instagram'],
    ['Vídeos incrustados desde Instagram: al mostrarse, Instagram carga su propio contenido.', 'Videos embedded from Instagram: when shown, Instagram loads its own content.', 'Von Instagram eingebettete Videos: Beim Anzeigen lädt Instagram eigene Inhalte.', 'Vidéos intégrées depuis Instagram : à l’affichage, Instagram charge son propre contenu.'],
    ['Ver en Instagram', 'View on Instagram', 'Auf Instagram ansehen', 'Voir sur Instagram'],
    ['Ver reel en Instagram', 'View reel on Instagram', 'Reel auf Instagram ansehen', 'Voir le reel sur Instagram'],
    ['© 2026 Fincas A.G. Núñez · Barcelona', '© 2026 Fincas A.G. Núñez · Barcelona', '© 2026 Fincas A.G. Núñez · Barcelona', '© 2026 Fincas A.G. Núñez · Barcelone'],
    ['Web de AG Núñez', 'AG Núñez’s website', 'Webseite von AG Núñez', 'Site d’AG Núñez'],
    /* --- atributos (aria-label, alt, placeholder) --- */
    ['Lista de propiedades', 'List of properties', 'Immobilienliste', 'Liste des biens'],
    ['Mapa de propiedades disponibles', 'Map of available properties', 'Karte der verfügbaren Immobilien', 'Carte des biens disponibles'],
    ['Detalle de la propiedad', 'Property details', 'Immobiliendetails', 'Détail du bien'],
    ['Propiedad anterior', 'Previous property', 'Vorherige Immobilie', 'Bien précédent'],
    ['Propiedad siguiente', 'Next property', 'Nächste Immobilie', 'Bien suivant'],
    ['Cerrar', 'Close', 'Schließen', 'Fermer'],
    ['Progreso del formulario', 'Form progress', 'Fortschritt', 'Progression du formulaire'],
    ['Tu nombre', 'Your name', 'Ihr Name', 'Votre nom'],
    ['tu@email.com', 'you@email.com', 'sie@email.com', 'vous@email.com'],
    ['Tipo de inmueble', 'Property type', 'Immobilientyp', 'Type de bien'],
    ['Ej. buhardilla, loft, plaza de parking…', 'E.g. attic, loft, parking space…', 'z. B. Dachboden, Loft, Stellplatz…', 'Ex. mansarde, loft, place de parking…'],
    ['Ej. Sitges, Terrassa…', 'E.g. Sitges, Terrassa…', 'z. B. Sitges, Terrassa…', 'Ex. Sitges, Terrassa…'],
    ['Solo lo veo yo. No se publica.', 'Only I see it. It’s not published.', 'Nur ich sehe es. Es wird nicht veröffentlicht.', 'Je suis le seul à le voir. Il n’est pas publié.'],
    ['Superficie en metros cuadrados', 'Size in square metres', 'Fläche in Quadratmetern', 'Surface en mètres carrés'],
    ['Menos habitaciones', 'Fewer bedrooms', 'Weniger Zimmer', 'Moins de chambres'],
    ['Más habitaciones', 'More bedrooms', 'Mehr Zimmer', 'Plus de chambres'],
    ['Menos baños', 'Fewer bathrooms', 'Weniger Bäder', 'Moins de salles de bain'],
    ['Más baños', 'More bathrooms', 'Mehr Bäder', 'Plus de salles de bain'],
    ['Menos personas', 'Fewer people', 'Weniger Personen', 'Moins de personnes'],
    ['Más personas', 'More people', 'Mehr Personen', 'Plus de personnes'],
    ['Situación actual', 'Current situation', 'Aktuelle Situation', 'Situation actuelle'],
    ['Servicio elegido', 'Chosen service', 'Gewählter Service', 'Service choisi'],
    ['Ej. 850', 'E.g. 850', 'z. B. 850', 'Ex. 850'],
    ['Ej. 350.000', 'E.g. 350,000', 'z. B. 350.000', 'Ex. 350 000'],
    ['Ej. 450.000', 'E.g. 450,000', 'z. B. 450.000', 'Ex. 450 000'],
    ['Reformas, ascensor, terraza, comunidad, cargas, lo que quieras…', 'Renovations, lift, terrace, community fees, charges, anything…', 'Renovierungen, Aufzug, Terrasse, Nebenkosten, Lasten, alles Mögliche…', 'Rénovations, ascenseur, terrasse, charges, ce que vous voulez…'],
    ['Urgencia', 'Urgency', 'Dringlichkeit', 'Urgence'],
    ['Zona tranquila, cerca del metro, para reformar, lo que quieras…', 'Quiet area, near the metro, needs renovation, anything…', 'Ruhige Lage, nahe U-Bahn, renovierungsbedürftig, alles Mögliche…', 'Quartier calme, près du métro, à rénover, ce que vous voulez…'],
    ['Fincas A.G. Núñez en Instagram', 'Fincas A.G. Núñez on Instagram', 'Fincas A.G. Núñez auf Instagram', 'Fincas A.G. Núñez sur Instagram'],
    ['Últimos reels de Instagram', 'Latest Instagram reels', 'Neueste Instagram-Reels', 'Derniers reels Instagram'],
    /* --- cookies (site.js) --- */
    ['Aviso de cookies', 'Cookie notice', 'Cookie-Hinweis', 'Avis sur les cookies'],
    ['Aceptar', 'Accept', 'Akzeptieren', 'Accepter'],
    ['Rechazar', 'Decline', 'Ablehnen', 'Refuser'],
    ['Uso cookies analíticas (Google Analytics) para entender qué partes de la web funcionan y mejorarla. Solo se activan si las aceptas. Más info en la <a href="privacidad.html#cookies">Política de Privacidad</a>.',
      'I use analytics cookies (Google Analytics) to understand which parts of the site work and to improve it. They are only enabled if you accept them. More info in the <a href="privacidad.html#cookies">Privacy Policy</a>.',
      'Ich verwende Analyse-Cookies (Google Analytics), um zu verstehen, welche Teile der Seite funktionieren, und sie zu verbessern. Sie werden nur aktiviert, wenn Sie zustimmen. Mehr dazu in der <a href="privacidad.html#cookies">Datenschutzerklärung</a>.',
      'J’utilise des cookies analytiques (Google Analytics) pour comprendre quelles parties du site fonctionnent et l’améliorer. Ils ne sont activés que si vous les acceptez. Plus d’infos dans la <a href="privacidad.html#cookies">Politique de confidentialité</a>.'],
    /* --- meta --- */
    ['Pisos en venta disponibles en Barcelona | Fincas A.G. Núñez', 'Flats for sale in Barcelona | Fincas A.G. Núñez', 'Wohnungen zum Verkauf in Barcelona | Fincas A.G. Núñez', 'Appartements à vendre à Barcelone | Fincas A.G. Núñez'],
    ['Mapa de pisos en venta disponibles ahora en Barcelona. Mira zona, precio y fotos, y pide visita directamente con Fincas A.G. Núñez.',
      'Map of flats for sale right now in Barcelona. See area, price and photos, and request a visit directly with Fincas A.G. Núñez.',
      'Karte der aktuell verfügbaren Wohnungen zum Verkauf in Barcelona. Sehen Sie Lage, Preis und Fotos und fragen Sie die Besichtigung direkt bei Fincas A.G. Núñez an.',
      'Carte des appartements à vendre disponibles maintenant à Barcelone. Voyez zone, prix et photos, et demandez une visite directement à Fincas A.G. Núñez.']
  ];

  /* bloques con marcas <b> (elementos con data-h="clave") */
  var H = {
    h1: ['Antes de empezar hago un <b>estudio de tu capacidad de compra</b> (financiación) para saber qué tipo de propiedad puedes conseguir y cómo prepararte.',
      'Before starting I carry out a <b>study of your purchasing capacity</b> (financing) to see what kind of property you can get and how to prepare.',
      'Bevor ich beginne, erstelle ich eine <b>Analyse Ihrer Kaufkraft</b> (Finanzierung), um zu klären, welche Immobilie realistisch ist und wie Sie sich vorbereiten.',
      'Avant de commencer, je réalise une <b>étude de votre capacité d’achat</b> (financement) pour savoir quel type de bien vous pouvez obtenir et comment vous préparer.'],
    h2: ['Busco, filtro, visito contigo y negocio, incluidas propiedades que <b>no llegan a publicarse</b>.',
      'I search, filter, visit with you and negotiate, including properties that <b>never get published</b>.',
      'Ich suche, filtere, besichtige mit Ihnen und verhandle, auch Immobilien, die <b>nie veröffentlicht werden</b>.',
      'Je cherche, je filtre, je visite avec vous et je négocie, y compris des biens qui <b>ne sont jamais publiés</b>.'],
    h3: ['Es un servicio adicional a la lista de espera, con condiciones propias. Te las explico <b>por escrito antes de empezar</b>, sin compromiso hasta que las aceptes.',
      'It is an extra service on top of the waiting list, with its own terms. I’ll explain them to you <b>in writing before we start</b>, with no commitment until you accept.',
      'Es ist ein zusätzlicher Service zur Warteliste mit eigenen Bedingungen. Ich erkläre sie Ihnen <b>schriftlich, bevor wir beginnen</b>, ohne Verpflichtung, bis Sie zustimmen.',
      'C’est un service en plus de la liste d’attente, avec ses propres conditions. Je vous les explique <b>par écrit avant de commencer</b>, sans engagement tant que vous ne les acceptez pas.']
  };

  var MAP = { en: {}, de: {}, fr: {} };
  D.forEach(function (r) { for (var i = 1; i < 4; i++) MAP[LANGS[i]][r[0]] = r[i]; });

  var lang = 'es';
  function fill(s, p) { return p ? s.replace(/\{(\w+)\}/g, function (m, k) { return p[k] != null ? p[k] : m; }) : s; }
  function t(es, p) { var v = lang === 'es' ? es : MAP[lang][es]; return fill(v == null ? es : v, p); }
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  var SKIP = ['cards', 'detail', 'count', 'statusTxt', 'emptyMsg', 'fZona', 'fPrecio', 'zonaChips', 'oBarrio', 'doneTitle', 'doneTxt', 'lMsg', 'toast', 'reels', 'rSupV', 'alMsg', 'alPrecio', 'alHab', 'leadTitle', 'leadSub', 'demoBar', 'lang'];
  function skipped(el) {
    while (el && el !== document.body) {
      if (el.nodeType === 1) {
        if (el.hasAttribute && (el.hasAttribute('data-h') || el.hasAttribute('data-noi'))) return true;
        if (el.id && SKIP.indexOf(el.id) !== -1) return true;
        var n = el.nodeName.toLowerCase();
        if (n === 'svg' || n === 'script' || n === 'style' || n === 'textarea') return true;
      }
      el = el.parentNode;
    }
    return false;
  }
  var ATTRS = ['placeholder', 'aria-label', 'alt', 'title'];
  function apply() {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), n, nodes = [];
    while ((n = w.nextNode())) nodes.push(n);
    nodes.forEach(function (n) {
      if (n._o === undefined) { if (!n.nodeValue.trim() || skipped(n.parentNode)) { n._o = null; return; } n._o = n.nodeValue; }
      if (n._o === null) return;
      var m = n._o.match(/^(\s*)([\s\S]*?)(\s*)$/);
      n.nodeValue = m[1] + t(m[2]) + m[3];
    });
    [].forEach.call(document.body.querySelectorAll('[placeholder],[aria-label],[alt],[title]'), function (el) {
      if (el.closest && el.closest('#lang')) return;
      el._oa = el._oa || {};
      ATTRS.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        if (el._oa[a] === undefined) el._oa[a] = el.getAttribute(a);
        el.setAttribute(a, t(el._oa[a]));
      });
    });
    [].forEach.call(document.querySelectorAll('[data-h]'), function (el) {
      var r = H[el.getAttribute('data-h')]; if (r) el.innerHTML = lang === 'es' ? r[0] : r[LANGS.indexOf(lang)];
    });
  }
  function setLang(l, silent) {
    if (LANGS.indexOf(l) === -1) l = 'es';
    lang = l;
    document.documentElement.lang = l;
    document.title = t('Pisos en venta disponibles en Barcelona | Fincas A.G. Núñez');
    var md = document.querySelector('meta[name=description]'); if (md) md.setAttribute('content', t('Mapa de pisos en venta disponibles ahora en Barcelona. Mira zona, precio y fotos, y pide visita directamente con Fincas A.G. Núñez.'));
    apply();
    [].forEach.call(document.querySelectorAll('#lang [data-lang]'), function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-lang') === l ? 'true' : 'false'); });
    if (!silent) { set(KEY, l); if (window.fbTrack) fbTrack('change_language', { language: l }); }
    document.dispatchEvent(new CustomEvent('fblang', { detail: l }));
  }
  function detect() {
    var q = null; try { q = new URLSearchParams(location.search).get('lang'); } catch (e) {}
    if (q && LANGS.indexOf(q) !== -1) return q;
    var s = get(KEY); if (s && LANGS.indexOf(s) !== -1) return s;
    var nav = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'es']);
    for (var i = 0; i < nav.length; i++) { var c = String(nav[i]).slice(0, 2).toLowerCase(); if (LANGS.indexOf(c) !== -1) return c; }
    return 'es';
  }

  window.fbI18n = { t: t, lang: function () { return lang; }, locale: function () { return LOCALE[lang]; }, setLang: setLang, apply: apply };
  window.fbT = t;

  function init() {
    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('#lang [data-lang]');
      if (b) setLang(b.getAttribute('data-lang'));
    });
    window.fbI18nReady = true;
    var l = detect(); lang = l;
    if (l !== 'es') setLang(l, true); else document.dispatchEvent(new CustomEvent('fblang', { detail: 'es' }));
    [].forEach.call(document.querySelectorAll('#lang [data-lang]'), function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-lang') === l ? 'true' : 'false'); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
