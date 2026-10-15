/* i18n.js — idiomas del mapa de pisos en venta: es · en · de · fr
   Cada fila: [español (clave), inglés, alemán, francés]. Lo que no esté aquí se queda en español. */
(function () {
  var LANGS = ['es', 'en', 'de', 'fr', 'ru'];
  var LOCALE = { es: 'es-ES', en: 'en-GB', de: 'de-DE', fr: 'fr-FR', ru: 'ru-RU' };
  var KEY = 'fb_lang';

  var D = [
    /* --- cabecera, héroe --- */
    ['Copiar enlace', 'Copy link', 'Link kopieren', 'Copier le lien', "Скопировать ссылку"],
    ["Venta · Alquiler · Barcelona", "For sale · For rent · Barcelona", "Verkauf · Miete · Barcelona", "Vente · Location · Barcelone", "Продажа · Аренда · Барселона"],
    ["Propiedades en venta y alquiler disponibles ahora", "Properties for sale and rent available now", "Jetzt verfügbare Immobilien zum Verkauf und zur Miete", "Biens à vendre et à louer disponibles maintenant", "Квартиры на продажу и в аренду, доступные сейчас"],
    ['Mira dónde está cada propiedad, su precio y sus fotos. Cuando una te encaje, pide la visita desde su ficha: te contesto yo directamente.',
      'See where each property is, its price and photos. When one suits you, request a visit from its page: I reply to you personally.',
      'Sehen Sie, wo jede Immobilie liegt, was sie kostet und wie sie aussieht. Wenn eine passt, fragen Sie die Besichtigung direkt im Exposé an: Ich antworte Ihnen persönlich.',
      'Voyez où se trouve chaque bien, son prix et ses photos. Quand l’un vous plaît, demandez la visite depuis sa fiche : je vous réponds personnellement.', "Смотрите, где находится каждый объект, его цену и фото. Когда что-то подойдёт, запросите показ прямо со страницы объекта: отвечаю лично."],
    /* --- filtros y lista --- */
    ['Compra', 'Buy', 'Kauf', 'Achat', "Покупка"],
    ['Alquiler', 'Rent', 'Miete', 'Location', "Аренда"],
    ['Zona', 'Area', 'Gegend', 'Zone', "Район"],
    ['Todas', 'All', 'Alle', 'Toutes', "Все"],
    ['Presupuesto máx.', 'Max. budget', 'Max. Budget', 'Budget max.', "Макс. бюджет"],
    ['Precio máx.', 'Max. price', 'Max. Preis', 'Prix max.', "Макс. цена"],
    ['Sin límite', 'No limit', 'Kein Limit', 'Sans limite', "Без ограничений"],
    ['Habitaciones', 'Bedrooms', 'Zimmer', 'Chambres', "Спальни"],
    ['Cualquiera', 'Any', 'Beliebig', 'Indifférent', "Любое"],
    ['1 o más', '1 or more', '1 oder mehr', '1 ou plus', "1 и более"],
    ['2 o más', '2 or more', '2 oder mehr', '2 ou plus', "2 и более"],
    ['3 o más', '3 or more', '3 oder mehr', '3 ou plus', "3 и более"],
    ['Limpiar', 'Clear', 'Zurücksetzen', 'Effacer', "Очистить"],
    ['Ver lista de propiedades', 'See list of properties', 'Immobilienliste ansehen', 'Voir la liste des biens', "Посмотреть список объектов"],
    ['Cargando propiedades…', 'Loading properties…', 'Immobilien werden geladen…', 'Chargement des biens…', "Загрузка объектов…"],
    ['↻ Reintentar', '↻ Try again', '↻ Erneut versuchen', '↻ Réessayer', "↻ Повторить"],
    ['No se pudieron cargar las propiedades.', 'Couldn’t load the properties.', 'Die Immobilien konnten nicht geladen werden.', 'Impossible de charger les biens.', "Не удалось загрузить объекты."],
    ['propiedad', 'property', 'Immobilie', 'bien', "объект"],
    ['propiedades', 'properties', 'Immobilien', 'biens', "объектов"],
    ['propiedad ubicada', 'property located', 'Immobilie verortet', 'bien localisé', "объект найден"],
    ['propiedades ubicadas', 'properties located', 'Immobilien verortet', 'biens localisés', "объектов найдено"],
    ['Ubicaciones aproximadas', 'Approximate locations', 'Ungefähre Standorte', 'Emplacements approximatifs', "Приблизительное расположение"],
    ['Ahora mismo no tengo propiedades publicadas. Escríbeme y te aviso en cuanto salga una.',
      'I have no properties listed right now. Message me and I’ll let you know as soon as one comes up.',
      'Derzeit habe ich keine Immobilien online. Schreiben Sie mir, ich melde mich, sobald eine verfügbar ist.',
      'Je n’ai aucun bien en ligne pour le moment. Écrivez-moi et je vous préviens dès qu’il y en a un.', "Сейчас у меня нет опубликованных объектов. Напишите мне, и я сообщу, как только появится новый."],
    ['No hay propiedades con esos filtros. Prueba a limpiarlos o ', 'No properties match those filters. Try clearing them or ', 'Keine Immobilien mit diesen Filtern. Setzen Sie sie zurück oder ', 'Aucun bien avec ces filtres. Essayez de les effacer ou ', "Нет объектов с такими фильтрами. Попробуйте сбросить их или "],
    ['cuéntame qué buscas', 'tell me what you’re looking for', 'sagen Sie mir, was Sie suchen', 'dites-moi ce que vous cherchez', "расскажите, что вы ищете"],
    ['Hasta ', 'Up to ', 'Bis ', 'Jusqu’à ', "До "],
    /* --- ficha del piso --- */
    ['hab.', 'bed.', 'Zi.', 'ch.', "спал."],
    ['baño', 'bathroom', 'Bad', 'salle de bain', "ванная"],
    ['baños', 'bathrooms', 'Bäder', 'salles de bain', "ванные"],
    ['Entrega:', 'Handover:', 'Übergabe:', 'Livraison :', "Передача:"],
    ['Inmediata', 'Immediately', 'Sofort', 'Immédiate', "Немедленная"],
    ['RESERVADO', 'RESERVED', 'RESERVIERT', 'RÉSERVÉ', "ЗАРЕЗЕРВИРОВАНО"],
    ['Reservado · avísame si cae la reserva', 'Reserved · let me know if it falls through', 'Reserviert · sagen Sie mir Bescheid, falls die Reservierung platzt', 'Réservé · prévenez-moi si la réservation tombe', "Забронировано · уведомите меня, если бронь снимется"],
    ['Quiero visitarlo · por WhatsApp', 'I’d like to visit · via WhatsApp', 'Besichtigung anfragen · per WhatsApp', 'Je veux le visiter · via WhatsApp', "Хочу посмотреть · через WhatsApp"],
    ['Quiero visitarlo', 'I’d like to visit', 'Besichtigung anfragen', 'Je veux le visiter', "Хочу посмотреть"],
    ['Compartir', 'Share', 'Teilen', 'Partager', "Поделиться"],
    ['📍 Ubicación aproximada (pin en el mapa). La dirección exacta te la doy al concertar la visita.',
      '📍 Approximate location (pin on the map). I’ll give you the exact address when we arrange the visit.',
      '📍 Ungefähre Lage (Pin auf der Karte). Die genaue Adresse nenne ich Ihnen bei der Terminvereinbarung.',
      '📍 Emplacement approximatif (repère sur la carte). Je vous donne l’adresse exacte au moment de fixer la visite.', "📍 Примерное местоположение (метка на карте). Точный адрес сообщу при назначении показа."],
    ['Foto de la propiedad en ', 'Photo of the property in ', 'Foto der Immobilie in ', 'Photo du bien à ', "Фото объекта в "],
    ['Ver fotos de la propiedad en ', 'View photos of the property in ', 'Fotos der Immobilie ansehen in ', 'Voir les photos du bien à ', "Посмотреть фото объекта в "],
    ['Ver más', 'Show more', 'Mehr anzeigen', 'Voir plus', "Показать больше"],
    ['Ver menos', 'Show less', 'Weniger anzeigen', 'Voir moins', "Показать меньше"],
    ['Nº AICAT', 'AICAT No.', 'AICAT-Nr.', 'N° AICAT', "№ AICAT"],
    ['Nº API', 'API No.', 'API-Nr.', 'N° API', "№ API"],
    ['CEE', 'Energy rating (CEE)', 'Energieausweis (CEE)', 'DPE (CEE)', "Энергосертификат (CEE)"],
    ['en trámite', 'in progress', 'in Bearbeitung', 'en cours', "в процессе оформления"],
    ['Un producto de Fincas A.G. Núñez', 'A Fincas A.G. Núñez product', 'Ein Produkt von Fincas A.G. Núñez', 'Un produit de Fincas A.G. Núñez', "Продукт Fincas A.G. Núñez"],
    ['Enlace copiado ✓', 'Link copied ✓', 'Link kopiert ✓', 'Lien copié ✓', "Ссылка скопирована ✓"],
    ['Copia el enlace:', 'Copy the link:', 'Link kopieren:', 'Copiez le lien :', "Скопируйте ссылку:"],
    ['Propiedades en venta — Fincas A.G. Núñez', 'Properties for sale — Fincas A.G. Núñez', 'Immobilien zum Verkauf — Fincas A.G. Núñez', 'Biens à vendre — Fincas A.G. Núñez', "Объекты на продажу — Fincas A.G. Núñez"],
    ['Mira las propiedades en venta disponibles ahora en Barcelona:', 'See the properties available for sale now in Barcelona:', 'Sehen Sie die jetzt verfügbaren Immobilien zum Verkauf in Barcelona:', 'Découvrez les biens à vendre disponibles maintenant à Barcelone :', "Посмотрите объекты на продажу, доступные сейчас в Барселоне:"],
    ['Propiedad en venta en ', 'Property for sale in ', 'Immobilie zum Verkauf in ', 'Bien à vendre à ', "Объект на продажу в "],
    /* --- mensajes de WhatsApp --- */
    ['Hola AG Núñez, me interesa la propiedad "{t}" ({z}) que vi en vuestro mapa de pisos en venta: {u}',
      'Hi AG Núñez, I’m interested in the property "{t}" ({z}) I saw on your for-sale map: {u}',
      'Hallo AG Núñez, ich interessiere mich für die Immobilie "{t}" ({z}), die ich auf Ihrer Verkaufskarte gesehen habe: {u}',
      'Bonjour AG Núñez, le bien « {t} » ({z}) vu sur votre carte des ventes m’intéresse : {u}', "Здравствуйте, AG Núñez, меня заинтересовал объект «{t}» ({z}), который я увидел(а) на вашей карте объектов на продажу: {u}"],
    ['Hola AG Núñez, quiero visitar la propiedad "{t}" ({z}) que vi en vuestro mapa de pisos en venta: {u}',
      'Hi AG Núñez, I’d like to visit the property "{t}" ({z}) I saw on your for-sale map: {u}',
      'Hallo AG Núñez, ich möchte die Immobilie "{t}" ({z}) besichtigen, die ich auf Ihrer Verkaufskarte gesehen habe: {u}',
      'Bonjour AG Núñez, je voudrais visiter le bien « {t} » ({z}) vu sur votre carte des ventes : {u}', "Здравствуйте, AG Núñez, хочу посмотреть объект «{t}» ({z}), который я увидел(а) на вашей карте объектов на продажу: {u}"],
    ['Hola AG Núñez, vi en vuestro mapa la propiedad "{t}" (reservada). Avísame si cae la reserva o si tenéis algo parecido.',
      'Hi AG Núñez, I saw the property "{t}" on your map (reserved). Let me know if the reservation falls through or if you have something similar.',
      'Hallo AG Núñez, ich habe die Immobilie "{t}" auf Ihrer Karte gesehen (reserviert). Sagen Sie mir Bescheid, falls die Reservierung platzt oder Sie etwas Ähnliches haben.',
      'Bonjour AG Núñez, j’ai vu le bien « {t} » (réservé) sur votre carte. Prévenez-moi si la réservation tombe ou si vous avez quelque chose de similaire.', "Здравствуйте, AG Núñez, я видел(а) на вашей карте объект «{t}» (забронирован). Сообщите, если бронь снимется или если у вас есть что-то похожее."],
    ['Hola AG Núñez, busco una propiedad para comprar en Barcelona', 'Hi AG Núñez, I’m looking for a property to buy in Barcelona', 'Hallo AG Núñez, ich suche eine Immobilie zum Kauf in Barcelona', 'Bonjour AG Núñez, je cherche un bien à acheter à Barcelone', "Здравствуйте, AG Núñez, я ищу объект для покупки в Барселоне"],
    ['Hola AG Núñez, vi vuestro mapa de pisos en venta y quiero información.', 'Hi AG Núñez, I saw your for-sale map and I’d like some information.', 'Hallo AG Núñez, ich habe Ihre Verkaufskarte gesehen und hätte gern Informationen.', 'Bonjour AG Núñez, j’ai vu votre carte des ventes et je voudrais des informations.', "Здравствуйте, AG Núñez, я видел(а) вашу карту объектов на продажу и хочу получить информацию."],
    ['Hola AG Núñez, quiero enterarme de las novedades en venta, también las off market', 'Hi AG Núñez, I want to hear about new for-sale listings, including the off-market ones', 'Hallo AG Núñez, ich möchte über neue Verkaufsangebote informiert werden, auch Off-Market', 'Bonjour AG Núñez, je veux être au courant des nouveautés en vente, y compris hors marché', "Здравствуйте, AG Núñez, хочу узнавать о новых объектах на продажу, включая внебиржевые (off market)"],
    ['Hola AG Núñez, acabo de enviaros los datos de mi propiedad desde vuestro mapa de pisos en venta.', 'Hi AG Núñez, I’ve just sent you my property’s details from your for-sale map.', 'Hallo AG Núñez, ich habe Ihnen soeben die Daten meiner Immobilie über Ihre Verkaufskarte geschickt.', 'Bonjour AG Núñez, je viens de vous envoyer les informations de mon bien depuis votre carte des ventes.', "Здравствуйте, AG Núñez, я только что отправил(а) вам данные о своём объекте с вашей карты объектов на продажу."],
    ['Hola AG Núñez, acabo de dejaros lo que busco desde vuestro mapa de pisos en venta.', 'Hi AG Núñez, I’ve just left you what I’m looking for from your for-sale map.', 'Hallo AG Núñez, ich habe Ihnen soeben meine Suchkriterien über Ihre Verkaufskarte hinterlassen.', 'Bonjour AG Núñez, je viens de vous laisser ce que je recherche depuis votre carte des ventes.', "Здравствуйте, AG Núñez, я только что оставил(а) вам информацию о том, что ищу, с вашей карты объектов на продажу."],
    /* --- bloque de contacto --- */
    ['¿Tienes una propiedad para vender o buscas comprar con prioridad?', 'Do you have a property to sell, or are you looking to buy with priority?', 'Sie haben eine Immobilie zu verkaufen oder suchen eine mit Vorrang zu kaufen?', 'Vous avez un bien à vendre ou vous cherchez à acheter en priorité ?', "У вас есть объект на продажу или вы хотите купить с приоритетом?"],
    ['Te ayudo a vender tu casa en tiempo récord. Trabajo y colaboro con importantes agencias consolidadas de Barcelona, lo que multiplica la visibilidad de tu propiedad y acelera la venta. Cuéntame tu caso y te respondo yo personalmente, sin intermediarios.',
      'I’ll help you sell your home in record time. I work and collaborate with major established agencies in Barcelona, multiplying your property’s visibility and speeding up the sale. Tell me your case and I’ll reply personally, no middlemen.',
      'Ich helfe Ihnen, Ihre Immobilie in Rekordzeit zu verkaufen. Ich arbeite und kooperiere mit wichtigen etablierten Agenturen in Barcelona, was die Sichtbarkeit Ihrer Immobilie erhöht und den Verkauf beschleunigt. Schildern Sie mir Ihren Fall, ich antworte Ihnen persönlich, ohne Zwischenhändler.',
      'Je vous aide à vendre votre bien en un temps record. Je travaille et collabore avec d’importantes agences établies à Barcelone, ce qui multiplie la visibilité de votre bien et accélère la vente. Racontez-moi votre cas, je vous réponds personnellement, sans intermédiaires.', "Я помогу вам продать жильё в рекордные сроки. Я сотрудничаю с крупными зарекомендовавшими себя агентствами Барселоны, что повышает видимость вашего объекта и ускоряет продажу. Расскажите о своей ситуации, и я отвечу лично, без посредников."],
    ['Tengo un piso para vender', 'I have a flat to sell', 'Ich habe eine Wohnung zu verkaufen', 'J’ai un appartement à vendre', "У меня есть квартира на продажу"],
    ['Busco piso para comprar y quiero prioridad', 'I’m looking to buy a flat and want priority', 'Ich suche eine Wohnung zum Kauf und möchte Vorrang', 'Je cherche un appartement à acheter, en priorité', "Ищу квартиру для покупки и хочу приоритет"],
    /* --- asistente: común --- */
    ['Tú', 'You', 'Sie', 'Vous', "Вы"],
    ['Tu piso', 'Your flat', 'Ihre Wohnung', 'Votre bien', "Ваша квартира"],
    ['Objetivo', 'Goal', 'Ziel', 'Objectif', "Цель"],
    ['Servicio', 'Service', 'Service', 'Service', "Услуга"],
    ['Búsqueda', 'Search', 'Suche', 'Recherche', "Поиск"],
    ['Nombre', 'Name', 'Name', 'Nom', "Имя"],
    ['Atrás', 'Back', 'Zurück', 'Retour', "Назад"],
    ['Siguiente', 'Next', 'Weiter', 'Suivant', "Далее"],
    ['Enviar', 'Send', 'Senden', 'Envoyer', "Отправить"],
    ['(opcional)', '(optional)', '(optional)', '(facultatif)', "(необязательно)"],
    ['€', '€', '€', '€', "€"],
    ['Privacidad', 'Privacy', 'Datenschutz', 'Confidentialité', "Конфиденциальность"],
    ['Acepto que Fincas A.G. Núñez use mis datos para contactarme.', 'I agree that Fincas A.G. Núñez may use my data to contact me.', 'Ich bin damit einverstanden, dass Fincas A.G. Núñez meine Daten nutzt, um mich zu kontaktieren.', 'J’accepte que Fincas A.G. Núñez utilise mes données pour me contacter.', "Я согласен(на), что Fincas A.G. Núñez использует мои данные, чтобы связаться со мной."],
    ['Faltan datos obligatorios (*)', 'Required details missing (*)', 'Pflichtangaben fehlen (*)', 'Champs obligatoires manquants (*)', "Не заполнены обязательные поля (*)"],
    ['Dime tu nombre para saber cómo llamarte', 'Tell me your name so I know what to call you', 'Nennen Sie mir Ihren Namen, damit ich Sie ansprechen kann', 'Dites-moi votre nom pour savoir comment vous appeler', "Назовите своё имя, чтобы я знал(а), как к вам обращаться"],
    ['Pon un WhatsApp válido (mínimo 9 cifras)', 'Enter a valid WhatsApp number (at least 9 digits)', 'Geben Sie eine gültige WhatsApp-Nummer ein (mindestens 9 Ziffern)', 'Saisissez un numéro WhatsApp valide (9 chiffres minimum)', "Укажите действующий номер WhatsApp (минимум 9 цифр)"],
    ['Pon un email válido, por ejemplo nombre@correo.com', 'Enter a valid email, e.g. name@mail.com', 'Geben Sie eine gültige E-Mail an, z. B. name@mail.com', 'Saisissez un e-mail valide, par exemple nom@mail.com', "Укажите действующий email, например, имя@почта.com"],
    ['Necesito tu OK para poder contactarte', 'I need your OK so I can contact you', 'Ich brauche Ihr Einverständnis, um Sie kontaktieren zu dürfen', 'J’ai besoin de votre accord pour pouvoir vous contacter', "Мне нужно ваше согласие, чтобы связаться с вами"],
    ['Marca esta casilla para seguir con la búsqueda prioritaria', 'Tick this box to continue with the priority search', 'Setzen Sie dieses Häkchen, um mit der vorrangigen Suche fortzufahren', 'Cochez cette case pour continuer avec la recherche prioritaire', "Отметьте этот пункт, чтобы продолжить приоритетный поиск"],
    ['Necesito tu confirmación para continuar', 'I need your confirmation to continue', 'Ich brauche Ihre Bestätigung, um fortzufahren', 'J’ai besoin de votre confirmation pour continuer', "Мне нужно ваше подтверждение, чтобы продолжить"],
    ['Enviando…', 'Sending…', 'Wird gesendet…', 'Envoi…', "Отправка…"],
    ['No se pudo enviar. Escríbeme por WhatsApp y lo vemos.', 'Couldn’t send. Message me on WhatsApp and we’ll sort it out.', 'Senden fehlgeschlagen. Schreiben Sie mir per WhatsApp, dann klären wir es.', 'Envoi impossible. Écrivez-moi sur WhatsApp et on s’arrange.', "Не удалось отправить. Напишите мне в WhatsApp, и мы всё решим."],
    ['¡Recibido!', 'Received!', 'Erhalten!', 'Bien reçu !', "Получено!"],
    ['¡Recibido, {n}!', 'Received, {n}!', 'Erhalten, {n}!', 'Bien reçu, {n} !', "Получено, {n}!"],
    ['Te escribo en cuanto lo revise.', 'I’ll write to you as soon as I’ve reviewed it.', 'Ich schreibe Ihnen, sobald ich es geprüft habe.', 'Je vous écris dès que j’ai regardé ça.', "Я напишу вам, как только всё проверю."],
    ['Escríbeme ya por WhatsApp', 'Message me now on WhatsApp', 'Schreiben Sie mir jetzt per WhatsApp', 'Écrivez-moi maintenant sur WhatsApp', "Напишите мне прямо сейчас в WhatsApp"],
    ['Reviso los datos de tu piso y te escribo por WhatsApp para contarte cuánto puedes pedir por él y cómo lo haríamos.', 'I’ll review your flat’s details and message you on WhatsApp to tell you what you could ask for it and how we’d do it.', 'Ich prüfe die Daten Ihrer Wohnung und schreibe Ihnen per WhatsApp, welchen Preis Sie verlangen können und wie wir vorgehen.', 'Je regarde les informations de votre bien et je vous écris sur WhatsApp pour vous dire combien vous pouvez en demander et comment on ferait.', "Я изучу данные о вашей квартире и напишу вам в WhatsApp, сколько вы можете за неё просить и как мы будем действовать."],
    ['Te escribo por WhatsApp en cuanto entre un piso que encaje contigo.', 'I’ll message you on WhatsApp as soon as a flat that fits comes in.', 'Ich schreibe Ihnen per WhatsApp, sobald eine passende Wohnung hereinkommt.', 'Je vous écris sur WhatsApp dès qu’un appartement qui vous correspond arrive.', "Я напишу вам в WhatsApp, как только появится квартира, которая вам подойдёт."],
    ['Te escribo por WhatsApp para hacer el estudio de tu capacidad de compra y empezar a buscar por ti.', 'I’ll message you on WhatsApp to do the study of your purchasing capacity and start searching for you.', 'Ich schreibe Ihnen per WhatsApp, um Ihre Kaufkraft zu prüfen und die Suche für Sie zu starten.', 'Je vous écris sur WhatsApp pour faire l’étude de votre capacité d’achat et commencer à chercher pour vous.', "Я напишу вам в WhatsApp, чтобы провести анализ вашей покупательной способности и начать поиск для вас."],
    ['Cuéntame sobre tu piso', 'Tell me about your flat', 'Erzählen Sie mir von Ihrer Wohnung', 'Parlez-moi de votre bien', "Расскажите о своей квартире"],
    ['Tres pasos rápidos, menos de dos minutos. Te respondo yo personalmente.', 'Three quick steps, under two minutes. I’ll reply personally.', 'Drei schnelle Schritte, weniger als zwei Minuten. Ich antworte persönlich.', 'Trois étapes rapides, moins de deux minutes. Je réponds personnellement.', "Три быстрых шага, меньше двух минут. Отвечаю лично."],
    ['Búsqueda prioritaria de piso', 'Priority flat search', 'Vorrangige Wohnungssuche', 'Recherche prioritaire d’appartement', "Приоритетный поиск квартиры"],
    ['Tres pasos. Yo busco por ti y tú vas primero.', 'Three steps. I search for you and you go first.', 'Drei Schritte. Ich suche für Sie und Sie sind zuerst dran.', 'Trois étapes. Je cherche pour vous et vous passez en premier.', "Три шага. Я ищу для вас, и вы идёте первым."],
    /* --- asistente propietarios --- */
    ['¿Con quién hablo?', 'Who am I talking to?', 'Mit wem spreche ich?', 'Avec qui je parle ?', "С кем я разговариваю?"],
    ['Solo tres datos y sigo yo. Te escribo por WhatsApp, sin llamadas de sorpresa.', 'Just three details and I take it from here. I’ll message you on WhatsApp, no surprise calls.', 'Nur drei Angaben, den Rest übernehme ich. Ich schreibe Ihnen per WhatsApp, keine überraschenden Anrufe.', 'Trois informations et je m’occupe du reste. Je vous écris sur WhatsApp, sans appels surprises.', "Всего три пункта, дальше всё беру на себя. Напишу вам в WhatsApp, без неожиданных звонков."],
    ['Cuéntame cómo es tu propiedad', 'Tell me what your property is like', 'Erzählen Sie mir, wie Ihre Immobilie ist', 'Dites-moi comment est votre bien', "Расскажите, какая у вас недвижимость"],
    ['Lo que sepas, aunque sea aproximado. Lo afino yo después.', 'Whatever you know, even roughly. I’ll refine it later.', 'Was Sie wissen, gern ungefähr. Den Feinschliff mache ich danach.', 'Ce que vous savez, même approximatif. J’affinerai ensuite.', "Всё, что знаете, пусть даже приблизительно. Уточню детали позже."],
    ['¿Qué tipo de inmueble es?', 'What type of property is it?', 'Um welche Art von Immobilie handelt es sich?', 'De quel type de bien s’agit-il ?', "Какой это тип недвижимости?"],
    ['Piso', 'Flat', 'Wohnung', 'Appartement', "Квартира"],
    ['Ático', 'Penthouse', 'Penthouse', 'Attique', "Пентхаус"],
    ['Dúplex', 'Duplex', 'Maisonette', 'Duplex', "Дуплекс"],
    ['Estudio', 'Studio', 'Studio', 'Studio', "Студия"],
    ['Casa / Chalet', 'House / Villa', 'Haus / Villa', 'Maison / Villa', "Дом / Шале"],
    ['Local', 'Commercial unit', 'Gewerbefläche', 'Local commercial', "Коммерческое помещение"],
    ['Otro', 'Other', 'Andere', 'Autre', "Другое"],
    ['¿Cuál?', 'Which one?', 'Welche?', 'Lequel ?', "Какое?"],
    ['Barrio', 'Neighbourhood', 'Stadtviertel', 'Quartier', "Район"],
    ['¿Qué municipio o zona?', 'Which town or area?', 'Welche Gemeinde oder Gegend?', 'Quelle commune ou zone ?', "Какой город или район?"],
    ['Calle y número', 'Street and number', 'Straße und Hausnummer', 'Rue et numéro', "Улица и номер дома"],
    ['Superficie', 'Size', 'Wohnfläche', 'Surface', "Площадь"],
    ['Desliza para elegir', 'Slide to choose', 'Zum Auswählen schieben', 'Faites glisser pour choisir', "Проведите пальцем, чтобы выбрать"],
    ['Baños', 'Bathrooms', 'Badezimmer', 'Salles de bain', "Ванные"],
    ['¿Está amueblado?', 'Is it furnished?', 'Ist sie möbliert?', 'Est-il meublé ?', "Меблирована ли квартира?"],
    ['Amueblado', 'Furnished', 'Möbliert', 'Meublé', "Меблированная"],
    ['Vacío', 'Empty', 'Unmöbliert', 'Vide', "Без мебели"],
    ['Parcial', 'Partly', 'Teilweise', 'Partiel', "Частично меблированная"],
    ['¿Cuántas personas pueden vivir en él?', 'How many people can live there?', 'Wie viele Personen können dort wohnen?', 'Combien de personnes peuvent y vivre ?', "Сколько человек может в ней проживать?"],
    ['Personas', 'People', 'Personen', 'Personnes', "Человек"],
    ['Situación y objetivo', 'Situation and goal', 'Situation und Ziel', 'Situation et objectif', "Ситуация и цель"],
    ['Así sé por dónde empezar y qué te conviene más.', 'That way I know where to start and what suits you best.', 'So weiß ich, wo ich anfange und was am besten zu Ihnen passt.', 'Ainsi je sais par où commencer et ce qui vous convient le mieux.', "Так я буду знать, с чего начать и что вам подойдёт лучше всего."],
    ['¿Cómo está ahora?', 'What’s the situation now?', 'Wie ist der aktuelle Stand?', 'Quelle est la situation actuelle ?', "Какая сейчас ситуация?"],
    ['Libre', 'Vacant', 'Frei', 'Libre', "Свободна"],
    ['Puede entregarse ya', 'Can be handed over now', 'Kann sofort übergeben werden', 'Peut être livré tout de suite', "Можно передать уже сейчас"],
    ['Alquilado', 'Rented', 'Vermietet', 'Loué', "Сдана в аренду"],
    ['Con inquilino actual', 'With a current tenant', 'Mit aktuellem Mieter', 'Avec locataire actuel', "С текущим арендатором"],
    ['¿Cuándo podrías entregar las llaves?', 'When could you hand over the keys?', 'Wann könnten Sie die Schlüssel übergeben?', 'Quand pourriez-vous remettre les clés ?', "Когда вы могли бы передать ключи?"],
    ['Ya mismo', 'Right now', 'Sofort', 'Tout de suite', "Прямо сейчас"],
    ['En menos de 1 mes', 'In under 1 month', 'In weniger als 1 Monat', 'D’ici moins d’un mois', "Менее чем через 1 месяц"],
    ['En 1 a 3 meses', 'In 1 to 3 months', 'In 1 bis 3 Monaten', 'Dans 1 à 3 mois', "Через 1–3 месяца"],
    ['Sin fecha todavía', 'No date yet', 'Noch kein Termin', 'Pas encore de date', "Дата пока не определена"],
    ['Inquilino desde', 'Tenant since', 'Mieter seit', 'Locataire depuis', "Арендатор проживает с"],
    ['Renta que cobras', 'Rent you currently charge', 'Ihre aktuelle Miete', 'Loyer perçu', "Арендная плата, которую вы получаете"],
    ['¿Qué buscas conmigo?', 'What are you looking for with me?', 'Was suchen Sie bei mir?', 'Que recherchez-vous avec moi ?', "Что вы хотите получить от сотрудничества со мной?"],
    ['Valoración gratis', 'Free valuation', 'Kostenlose Bewertung', 'Estimation gratuite', "Бесплатная оценка"],
    ['Venta completa', 'Full sale management', 'Komplette Verkaufsabwicklung', 'Vente complète', "Полное сопровождение продажи"],
    ['Las dos', 'Both', 'Beides', 'Les deux', "Оба варианта"],
    ['Comprador ideal', 'Ideal buyer', 'Idealer Käufer', 'Acheteur idéal', "Идеальный покупатель"],
    ['(marca los que quieras)', '(tick any you like)', '(beliebig ankreuzen)', '(cochez ce que vous voulez)', "(отметьте любые варианты)"],
    ['Familias', 'Families', 'Familien', 'Familles', "Семьи"],
    ['Parejas', 'Couples', 'Paare', 'Couples', "Пары"],
    ['Estudiantes', 'Students', 'Studierende', 'Étudiants', "Студенты"],
    ['Profesionales', 'Professionals', 'Berufstätige', 'Professionnels', "Специалисты"],
    ['Inversores', 'Investors', 'Investoren', 'Investisseurs', "Инвесторы"],
    ['Segunda residencia', 'Second home', 'Zweitwohnsitz', 'Résidence secondaire', "Второе жильё"],
    ['Me da igual', 'No preference', 'Egal', 'Peu importe', "Не важно"],
    ['Precio orientativo que te gustaría', 'Indicative price you’d like', 'Gewünschter Richtpreis', 'Prix indicatif souhaité', "Ориентировочная желаемая цена"],
    ['¿Para cuándo?', 'By when?', 'Bis wann?', 'Pour quand ?', "К какому сроку?"],
    ['Cuanto antes', 'As soon as possible', 'So bald wie möglich', 'Dès que possible', "Как можно скорее"],
    ['En 1 o 2 meses', 'In 1 or 2 months', 'In 1 bis 2 Monaten', 'Dans 1 ou 2 mois', "Через 1–2 месяца"],
    ['Sin prisa, solo miro', 'No rush, just looking', 'Keine Eile, ich schaue nur', 'Pas pressé, je regarde', "Не спешу, просто смотрю"],
    ['¿Algo más que deba saber?', 'Anything else I should know?', 'Gibt es noch etwas, das ich wissen sollte?', 'Autre chose à savoir ?', "Что-то ещё, что мне стоит знать?"],
    ['Elige tu barrio…', 'Choose your neighbourhood…', 'Wählen Sie Ihr Viertel…', 'Choisissez votre quartier…', "Выберите свой район…"],
    ['Otro municipio o zona…', 'Other town or area…', 'Andere Gemeinde oder Gegend…', 'Autre commune ou zone…', "Другой город или район…"],
    ['Área metropolitana', 'Metropolitan area', 'Großraum Barcelona', 'Aire métropolitaine', "Столичный регион"],
    /* --- asistente inquilinos --- */
    ['¿Quién eres?', 'Who are you?', 'Wer sind Sie?', 'Qui êtes-vous ?', "Кто вы?"],
    ['Tres datos y seguimos. Te escribo por WhatsApp, sin llamadas de sorpresa.', 'Three details and we go on. I’ll message you on WhatsApp, no surprise calls.', 'Drei Angaben und es geht weiter. Ich schreibe Ihnen per WhatsApp, keine überraschenden Anrufe.', 'Trois informations et on continue. Je vous écris sur WhatsApp, sans appels surprises.', "Три пункта, и продолжаем. Напишу вам в WhatsApp, без неожиданных звонков."],
    ['¿Cómo prevés financiar la compra?', 'How do you plan to finance the purchase?', 'Wie planen Sie den Kauf zu finanzieren?', 'Comment prévoyez-vous de financer l’achat ?', "Как вы планируете финансировать покупку?"],
    ['Con hipoteca', 'With a mortgage', 'Mit Hypothek', 'Avec crédit', "С ипотекой"],
    ['Al contado', 'Cash', 'In bar', 'Comptant', "За наличные"],
    ['Ya tengo hipoteca preaprobada', 'Already pre-approved', 'Bereits vorab genehmigt', 'Déjà pré-approuvé', "У меня уже есть предварительное одобрение ипотеки"],
    ['Aún no lo sé', 'Not sure yet', 'Noch nicht sicher', 'Pas encore sûr', "Пока не знаю"],
    ['Otra', 'Other', 'Andere', 'Autre', "Другое"],
    ['Búsqueda prioritaria', 'Priority search', 'Vorrangige Suche', 'Recherche prioritaire', "Приоритетный поиск"],
    ['Antes de seguir, quiero ser claro con cómo funciona.', 'Before going on, I want to be clear about how it works.', 'Bevor es weitergeht, möchte ich klar erklären, wie es funktioniert.', 'Avant de continuer, je veux être clair sur le fonctionnement.', "Прежде чем продолжить, хочу чётко объяснить, как это работает."],
    ['Aviso gratuito', 'Free alert', 'Kostenlose Benachrichtigung', 'Alerte gratuite', "Бесплатное уведомление"],
    ['Entras en una lista de espera estática. Te aviso cuando encaje algo, sin garantía de orden ni de plazo.', 'You join a static waiting list. I’ll let you know when something fits, with no guarantee of order or timing.', 'Sie kommen auf eine feste Warteliste. Ich melde mich, wenn etwas passt, ohne Garantie für Reihenfolge oder Zeitrahmen.', 'Vous entrez sur une liste d’attente statique. Je vous préviens quand quelque chose correspond, sans garantie d’ordre ni de délai.', "Вы попадаете в статичный список ожидания. Сообщу, когда что-то подойдёт, без гарантии очерёдности или сроков."],
    ['Voy a buscar por ti y tienes preferencia real sobre el resto.', 'I’ll search for you and you get real priority over the rest.', 'Ich suche für Sie und Sie haben echten Vorrang vor allen anderen.', 'Je cherche pour vous et vous avez une vraie priorité sur les autres.', "Я буду искать для вас, и у вас будет реальный приоритет перед остальными."],
    ['Servicio personalizado', 'Personalised service', 'Persönlicher Service', 'Service personnalisé', "Индивидуальная услуга"],
    ['Sin precios cerrados: primero hablamos', 'No fixed prices: we talk first', 'Keine Festpreise: erst sprechen wir miteinander', 'Pas de prix fixe : on en parle d’abord', "Без фиксированных цен: сначала обсудим"],
    ['¿Qué prefieres?', 'What do you prefer?', 'Was bevorzugen Sie?', 'Que préférez-vous ?', "Что вы предпочитаете?"],
    ['Quiero prioridad', 'I want priority', 'Ich möchte Vorrang', 'Je veux la priorité', "Хочу приоритет"],
    ['Busco por ti', 'I search for you', 'Ich suche für Sie', 'Je cherche pour vous', "Ищу для вас"],
    ['Solo el aviso', 'Just the alert', 'Nur die Benachrichtigung', 'Juste l’alerte', "Только уведомление"],
    ['Gratis', 'Free', 'Kostenlos', 'Gratuit', "Бесплатно"],
    ['Entiendo que es un servicio personalizado con condiciones propias, que AG Núñez me explicará por escrito antes de empezar, y que primero se hace un estudio de mi capacidad de compra.', 'I understand this is a personalised service with its own terms, which AG Núñez will explain to me in writing before we start, and that a study of my purchasing capacity comes first.', 'Ich verstehe, dass es sich um einen persönlichen Service mit eigenen Bedingungen handelt, die AG Núñez mir schriftlich erklärt, bevor wir beginnen, und dass zuerst meine Kaufkraft geprüft wird.', 'Je comprends qu’il s’agit d’un service personnalisé avec ses propres conditions, qu’AG Núñez m’expliquera par écrit avant de commencer, et qu’une étude de ma capacité d’achat est réalisée d’abord.', "Я понимаю, что это индивидуальная услуга со своими условиями, которые AG Núñez объяснит мне письменно до начала работы, и что сначала проводится анализ моей покупательной способности."],
    ['¿Qué buscas?', 'What are you looking for?', 'Was suchen Sie?', 'Que recherchez-vous ?', "Что вы ищете?"],
    ['Cuanto más concreto, más rápido te encuentro algo bueno.', 'The more specific you are, the faster I find you something good.', 'Je konkreter Sie sind, desto schneller finde ich etwas Gutes.', 'Plus vous êtes précis, plus vite je vous trouve quelque chose de bien.', "Чем конкретнее вы опишете, тем быстрее я найду что-то подходящее."],
    ['¿Dónde?', 'Where?', 'Wo?', 'Où ?', "Где?"],
    ['(marca las zonas que quieras)', '(tick any areas you like)', '(beliebige Gegenden ankreuzen)', '(cochez les zones souhaitées)', "(отметьте любые районы)"],
    ['Barrios concretos', 'Specific neighbourhoods', 'Bestimmte Stadtviertel', 'Quartiers précis', "Конкретные районы"],
    ['Plazo de compra deseado', 'Desired purchase timeframe', 'Gewünschter Kaufzeitraum', 'Délai d’achat souhaité', "Желаемый срок покупки"],
    ['¿Qué urgencia tienes?', 'How urgent is it?', 'Wie dringend ist es?', 'Quelle est l’urgence ?', "Насколько это срочно?"],
    ['1-2 meses', '1-2 months', '1-2 Monate', '1-2 mois', "1-2 месяца"],
    ['Sin prisa', 'No rush', 'Keine Eile', 'Pas pressé', "Не спешу"],
    ['Imprescindibles', 'Must-haves', 'Unverzichtbar', 'Indispensables', "Обязательные требования"],
    ['Piscina', 'Pool', 'Pool', 'Piscine', "Бассейн"],
    ['Ascensor', 'Lift', 'Aufzug', 'Ascenseur', "Лифт"],
    ['Terraza', 'Terrace', 'Terrasse', 'Terrasse', "Терраса"],
    ['Para reformar', 'Needs renovation', 'Renovierungsbedürftig', 'À rénover', "Требует ремонта"],
    ['Parking', 'Parking', 'Parkplatz', 'Parking', "Парковка"],
    ['Lo que se te ocurra', 'Anything else', 'Was Ihnen sonst einfällt', 'Tout ce qui vous passe par la tête', "Всё, что придёт в голову"],
    /* --- avisos de pisos nuevos --- */
    ['Que no se te escape ninguna propiedad', 'Never miss a new property', 'Verpassen Sie keine neue Immobilie', 'Ne ratez aucun nouveau bien', "Не упустите ни одного объекта"],
    ['Te aviso en cuanto sube uno nuevo. Elige cómo prefieres recibirlo.', 'I’ll let you know as soon as a new one goes up. Choose how you’d like to get it.', 'Ich informiere Sie, sobald eine neue online geht. Wählen Sie, wie Sie es erhalten möchten.', 'Je vous préviens dès qu’un nouveau est publié. Choisissez comment le recevoir.', "Сообщу вам, как только появится новый объект. Выберите, как вы хотите его получать."],
    ['Por email', 'By email', 'Per E-Mail', 'Par e-mail', "По email"],
    ['Más rápido', 'Faster', 'Schneller', 'Plus rapide', "Быстрее"],
    ['Canal de WhatsApp', 'WhatsApp channel', 'WhatsApp-Kanal', 'Chaîne WhatsApp', "Канал WhatsApp"],
    ['Elige tus filtros si quieres: solo te aviso de los pisos que encajen.', 'Set filters if you like: I’ll only alert you about flats that match.', 'Setzen Sie Filter, wenn Sie möchten: Ich informiere Sie nur über passende Wohnungen.', 'Choisissez vos filtres si vous voulez : je ne vous préviens que pour ce qui correspond.', "При желании настройте фильтры: буду сообщать только о подходящих квартирах."],
    ['Avisarme por email', 'Alert me by email', 'Per E-Mail benachrichtigen', 'Me prévenir par e-mail', "Уведомлять меня по email"],
    ['Acepto recibir avisos de propiedades nuevas por email. Puedo darme de baja cuando quiera.', 'I agree to receive new-property alerts by email. I can unsubscribe at any time.', 'Ich bin damit einverstanden, E-Mails zu neuen Immobilien zu erhalten. Ich kann mich jederzeit abmelden.', 'J’accepte de recevoir des alertes par e-mail sur les nouveaux biens. Je peux me désabonner à tout moment.', "Я согласен(на) получать уведомления о новых объектах по email. Я могу отписаться в любой момент."],
    ['Casi listo: te he enviado un email para confirmar tu suscripción. Mira también en spam.', 'Almost done: I’ve sent you an email to confirm your subscription. Check your spam folder too.', 'Fast geschafft: Ich habe Ihnen eine E-Mail zur Bestätigung geschickt. Schauen Sie auch im Spam-Ordner nach.', 'Presque fini : je vous ai envoyé un e-mail pour confirmer votre abonnement. Regardez aussi dans vos spams.', "Почти готово: я отправил(а) вам email для подтверждения подписки. Загляните также в папку «Спам»."],
    ['Ya estabas suscrito. ¡Gracias!', 'You were already subscribed. Thanks!', 'Sie sind bereits angemeldet. Danke!', 'Vous étiez déjà abonné. Merci !', "Вы уже подписаны. Спасибо!"],
    ['Ahora mismo hay muchas solicitudes. Prueba mañana o escríbeme por WhatsApp.', 'There are a lot of requests right now. Try tomorrow or message me on WhatsApp.', 'Derzeit gibt es viele Anfragen. Versuchen Sie es morgen oder schreiben Sie mir per WhatsApp.', 'Beaucoup de demandes en ce moment. Réessayez demain ou écrivez-moi sur WhatsApp.', "Сейчас много запросов. Попробуйте завтра или напишите мне в WhatsApp."],
    ['No se pudo suscribir. Inténtalo de nuevo o escríbeme por WhatsApp.', 'Couldn’t subscribe. Try again or message me on WhatsApp.', 'Anmeldung fehlgeschlagen. Versuchen Sie es erneut oder schreiben Sie mir per WhatsApp.', 'Abonnement impossible. Réessayez ou écrivez-moi sur WhatsApp.', "Не удалось оформить подписку. Попробуйте ещё раз или напишите мне в WhatsApp."],
    ['Recibe cada propiedad nueva en tu móvil, sin dar tu email. Unirte es gratis y puedes salir cuando quieras.', 'Get every new property on your phone, without giving your email. Joining is free and you can leave whenever you want.', 'Erhalten Sie jede neue Immobilie auf Ihrem Handy, ohne E-Mail-Adresse. Der Beitritt ist kostenlos, Sie können jederzeit austreten.', 'Recevez chaque nouveau bien sur votre téléphone, sans donner votre e-mail. C’est gratuit et vous pouvez quitter quand vous voulez.', "Получайте каждый новый объект на телефон, не указывая email. Подключение бесплатное, выйти можно в любой момент."],
    ['Unirme al canal', 'Join the channel', 'Kanal beitreten', 'Rejoindre la chaîne', "Присоединиться к каналу"],
    ['Avísame de propiedades nuevas', 'Alert me about new properties', 'Über neue Immobilien benachrichtigen', 'Me prévenir des nouveaux biens', "Уведомлять меня о новых объектах"],
    ['Avisos de propiedades nuevas', 'New-property alerts', 'Benachrichtigungen zu neuen Immobilien', 'Alertes nouveaux biens', "Уведомления о новых объектах"],
    /* --- Instagram, pie --- */
    ['DENTRO de cada propiedad', 'INSIDE every property', 'IN jeder Immobilie', 'À L’INTÉRIEUR de chaque bien', "ВНУТРИ каждого объекта"],
    ['Recorridos, barrios y consejos reales, en vídeo.', 'Walk-throughs, neighbourhoods and real advice, on video.', 'Rundgänge, Viertel und echte Tipps, im Video.', 'Visites, quartiers et vrais conseils, en vidéo.', "Видеообзоры, районы и реальные советы в формате видео."],
    ['Seguir en Instagram', 'Follow on Instagram', 'Auf Instagram folgen', 'Suivre sur Instagram', "Подписаться в Instagram"],
    ['Vídeos incrustados desde Instagram: al mostrarse, Instagram carga su propio contenido.', 'Videos embedded from Instagram: when shown, Instagram loads its own content.', 'Von Instagram eingebettete Videos: Beim Anzeigen lädt Instagram eigene Inhalte.', 'Vidéos intégrées depuis Instagram : à l’affichage, Instagram charge son propre contenu.', "Видео встроены из Instagram: при показе Instagram загружает собственный контент."],
    ['Ver en Instagram', 'View on Instagram', 'Auf Instagram ansehen', 'Voir sur Instagram', "Смотреть в Instagram"],
    ['Más detalles', 'More details', 'Mehr Details', 'Plus de détails', "Подробнее"],
    ['Ver reel en Instagram', 'View reel on Instagram', 'Reel auf Instagram ansehen', 'Voir le reel sur Instagram', "Смотреть Reels в Instagram"],
    ['© 2026 Fincas A.G. Núñez · Barcelona', '© 2026 Fincas A.G. Núñez · Barcelona', '© 2026 Fincas A.G. Núñez · Barcelona', '© 2026 Fincas A.G. Núñez · Barcelone', "© 2026 Fincas A.G. Núñez · Барселона"],
    ['Web de AG Núñez', 'AG Núñez’s website', 'Webseite von AG Núñez', 'Site d’AG Núñez', "Сайт AG Núñez"],
    /* --- atributos (aria-label, alt, placeholder) --- */
    ['Lista de propiedades', 'List of properties', 'Immobilienliste', 'Liste des biens', "Список объектов"],
    ['Mapa de propiedades disponibles', 'Map of available properties', 'Karte der verfügbaren Immobilien', 'Carte des biens disponibles', "Карта доступных объектов"],
    ['Detalle de la propiedad', 'Property details', 'Immobiliendetails', 'Détail du bien', "Информация об объекте"],
    ['Propiedad anterior', 'Previous property', 'Vorherige Immobilie', 'Bien précédent', "Предыдущий объект"],
    ['Propiedad siguiente', 'Next property', 'Nächste Immobilie', 'Bien suivant', "Следующий объект"],
    ['Cerrar', 'Close', 'Schließen', 'Fermer', "Закрыть"],
    ['Fotos de la propiedad', 'Property photos', 'Fotos der Immobilie', 'Photos du bien', "Фотографии объекта"],
    ['Foto anterior', 'Previous photo', 'Vorheriges Foto', 'Photo précédente', "Предыдущее фото"],
    ['Foto siguiente', 'Next photo', 'Nächstes Foto', 'Photo suivante', "Следующее фото"],
    ['Progreso del formulario', 'Form progress', 'Fortschritt', 'Progression du formulaire', "Прогресс заполнения формы"],
    ['Tu nombre', 'Your name', 'Ihr Name', 'Votre nom', "Ваше имя"],
    ['tu@email.com', 'you@email.com', 'sie@email.com', 'vous@email.com', "имя@почта.com"],
    ['Tipo de inmueble', 'Property type', 'Immobilientyp', 'Type de bien', "Тип недвижимости"],
    ['Ej. buhardilla, loft, plaza de parking…', 'E.g. attic, loft, parking space…', 'z. B. Dachboden, Loft, Stellplatz…', 'Ex. mansarde, loft, place de parking…', "Напр.: мансарда, лофт, парковочное место…"],
    ['Ej. Sitges, Terrassa…', 'E.g. Sitges, Terrassa…', 'z. B. Sitges, Terrassa…', 'Ex. Sitges, Terrassa…', "Напр.: Ситжес, Террасса…"],
    ['Solo lo veo yo. No se publica.', 'Only I see it. It’s not published.', 'Nur ich sehe es. Es wird nicht veröffentlicht.', 'Je suis le seul à le voir. Il n’est pas publié.', "Вижу только я. Не публикуется."],
    ['Superficie en metros cuadrados', 'Size in square metres', 'Fläche in Quadratmetern', 'Surface en mètres carrés', "Площадь в квадратных метрах"],
    ['Menos habitaciones', 'Fewer bedrooms', 'Weniger Zimmer', 'Moins de chambres', "Меньше спален"],
    ['Más habitaciones', 'More bedrooms', 'Mehr Zimmer', 'Plus de chambres', "Больше спален"],
    ['Menos baños', 'Fewer bathrooms', 'Weniger Bäder', 'Moins de salles de bain', "Меньше ванных"],
    ['Más baños', 'More bathrooms', 'Mehr Bäder', 'Plus de salles de bain', "Больше ванных"],
    ['Menos personas', 'Fewer people', 'Weniger Personen', 'Moins de personnes', "Меньше человек"],
    ['Más personas', 'More people', 'Mehr Personen', 'Plus de personnes', "Больше человек"],
    ['Situación actual', 'Current situation', 'Aktuelle Situation', 'Situation actuelle', "Текущая ситуация"],
    ['Servicio elegido', 'Chosen service', 'Gewählter Service', 'Service choisi', "Выбранная услуга"],
    ['Ej. 850', 'E.g. 850', 'z. B. 850', 'Ex. 850', "Напр.: 850"],
    ['Ej. 350.000', 'E.g. 350,000', 'z. B. 350.000', 'Ex. 350 000', "Напр.: 350 000"],
    ['Ej. 450.000', 'E.g. 450,000', 'z. B. 450.000', 'Ex. 450 000', "Напр.: 450 000"],
    ['Reformas, ascensor, terraza, comunidad, cargas, lo que quieras…', 'Renovations, lift, terrace, community fees, charges, anything…', 'Renovierungen, Aufzug, Terrasse, Nebenkosten, Lasten, alles Mögliche…', 'Rénovations, ascenseur, terrasse, charges, ce que vous voulez…', "Ремонт, лифт, терраса, коммунальные платежи, обременения — что угодно…"],
    ['Urgencia', 'Urgency', 'Dringlichkeit', 'Urgence', "Срочность"],
    ['Zona tranquila, cerca del metro, para reformar, lo que quieras…', 'Quiet area, near the metro, needs renovation, anything…', 'Ruhige Lage, nahe U-Bahn, renovierungsbedürftig, alles Mögliche…', 'Quartier calme, près du métro, à rénover, ce que vous voulez…', "Тихий район, рядом с метро, требует ремонта — что угодно…"],
    ['Fincas A.G. Núñez en Instagram', 'Fincas A.G. Núñez on Instagram', 'Fincas A.G. Núñez auf Instagram', 'Fincas A.G. Núñez sur Instagram', "Fincas A.G. Núñez в Instagram"],
    ['Últimos reels de Instagram', 'Latest Instagram reels', 'Neueste Instagram-Reels', 'Derniers reels Instagram', "Последние Reels в Instagram"],
    /* --- cookies (site.js) --- */
    ['Aviso de cookies', 'Cookie notice', 'Cookie-Hinweis', 'Avis sur les cookies', "Уведомление о файлах cookie"],
    ['Aceptar', 'Accept', 'Akzeptieren', 'Accepter', "Принять"],
    ['Rechazar', 'Decline', 'Ablehnen', 'Refuser', "Отклонить"],
    ['Uso cookies analíticas (Google Analytics) para entender qué partes de la web funcionan y mejorarla. Solo se activan si las aceptas. Más info en la <a href="privacidad.html#cookies">Política de Privacidad</a>.',
      'I use analytics cookies (Google Analytics) to understand which parts of the site work and to improve it. They are only enabled if you accept them. More info in the <a href="privacidad.html#cookies">Privacy Policy</a>.',
      'Ich verwende Analyse-Cookies (Google Analytics), um zu verstehen, welche Teile der Seite funktionieren, und sie zu verbessern. Sie werden nur aktiviert, wenn Sie zustimmen. Mehr dazu in der <a href="privacidad.html#cookies">Datenschutzerklärung</a>.',
      'J’utilise des cookies analytiques (Google Analytics) pour comprendre quelles parties du site fonctionnent et l’améliorer. Ils ne sont activés que si vous les acceptez. Plus d’infos dans la <a href="privacidad.html#cookies">Politique de confidentialité</a>.', "Я использую аналитические файлы cookie (Google Analytics), чтобы понимать, какие разделы сайта работают, и улучшать его. Они включаются только при вашем согласии. Подробнее в <a href=\"privacidad.html#cookies\">Политике конфиденциальности</a>."],
    /* --- meta --- */
    ['Pisos en venta disponibles en Barcelona | Fincas A.G. Núñez', 'Flats for sale in Barcelona | Fincas A.G. Núñez', 'Wohnungen zum Verkauf in Barcelona | Fincas A.G. Núñez', 'Appartements à vendre à Barcelone | Fincas A.G. Núñez', "Квартиры на продажу в Барселоне | Fincas A.G. Núñez"],
    ['Mapa de pisos en venta disponibles ahora en Barcelona. Mira zona, precio y fotos, y pide visita directamente con Fincas A.G. Núñez.',
      'Map of flats for sale right now in Barcelona. See area, price and photos, and request a visit directly with Fincas A.G. Núñez.',
      'Karte der aktuell verfügbaren Wohnungen zum Verkauf in Barcelona. Sehen Sie Lage, Preis und Fotos und fragen Sie die Besichtigung direkt bei Fincas A.G. Núñez an.',
      'Carte des appartements à vendre disponibles maintenant à Barcelone. Voyez zone, prix et photos, et demandez une visite directement à Fincas A.G. Núñez.', "Карта квартир на продажу, доступных сейчас в Барселоне. Смотрите район, цену и фото и запрашивайте показ напрямую у Fincas A.G. Núñez."],
    /* --- datos extra del inmueble (transporte, hospitales, orientación, estado, ascensor, año, ITE, IBI, gastos) --- */
    ['Transporte cercano', 'Nearby transport', 'Verkehrsanbindung', 'Transports à proximité', "Транспорт поблизости"],
    ['Transporte y más info', 'Transport and more info', 'Verkehr und weitere Infos', 'Transports et plus d’infos', "Транспорт и дополнительная информация"],
    ['Con ascensor', 'With lift', 'Mit Aufzug', 'Avec ascenseur', "С лифтом"],
    ['Sin ascensor', 'No lift', 'Ohne Aufzug', 'Sans ascenseur', "Без лифта"],
    ['Año {a}', 'Year {a}', 'Baujahr {a}', 'Année {a}', "{a} год постройки"],
    ['ITE: {v}', 'Building inspection: {v}', 'Gebäudeinspektion: {v}', 'Inspection technique : {v}', "Техосмотр здания: {v}"],
    ['IBI: {v}', 'Property tax: {v}', 'Grundsteuer: {v}', 'Taxe foncière : {v}', "Налог на недвижимость: {v}"],
    ['Comunidad: {v}', 'Community fees: {v}', 'Hausgeld: {v}', 'Charges de copropriété : {v}', "Коммунальные платежи: {v}"],
    ['Norte', 'North', 'Norden', 'Nord', "Север"],
    ['Sur', 'South', 'Süden', 'Sud', "Юг"],
    ['Este', 'East', 'Osten', 'Est', "Восток"],
    ['Oeste', 'West', 'Westen', 'Ouest', "Запад"],
    ['Noreste', 'Northeast', 'Nordosten', 'Nord-Est', "Северо-восток"],
    ['Noroeste', 'Northwest', 'Nordwesten', 'Nord-Ouest', "Северо-запад"],
    ['Sureste', 'Southeast', 'Südosten', 'Sud-Est', "Юго-восток"],
    ['Suroeste', 'Southwest', 'Südwesten', 'Sud-Ouest', "Юго-запад"],
    ['A reformar', 'Needs renovation', 'Renovierungsbedürftig', 'À rénover', "Требует ремонта"],
    ['Buen estado', 'Good condition', 'Guter Zustand', 'Bon état', "Хорошее состояние"],
    ['Reformado', 'Renovated', 'Renoviert', 'Rénové', "Отремонтировано"],
    ['Obra nueva', 'New build', 'Neubau', 'Neuf', "Новостройка"],
    ['No requiere', 'Not required', 'Nicht erforderlich', 'Non requis', "Не требуется"],
    ['Pasada', 'Passed', 'Bestanden', 'Réalisée', "Пройден"],
    ['Pendiente', 'Pending', 'Ausstehend', 'En attente', "Ожидается"],
    ['En trámite', 'In progress', 'In Bearbeitung', 'En cours', "В процессе оформления"],
    /* --- certificado energético estructurado y datos del alquiler de vivienda --- */
    ['Ver certificado energético completo', 'View full energy certificate', 'Vollständigen Energieausweis ansehen', 'Voir le DPE complet', "Посмотреть полный энергосертификат"],
    ['Certificado energético', 'Energy certificate', 'Energieausweis', 'Diagnostic de performance énergétique', "Энергетический сертификат"],
    ['Consumo de energía', 'Energy consumption', 'Energieverbrauch', 'Consommation d’énergie', "Энергопотребление"],
    ['Emisiones de CO₂', 'CO₂ emissions', 'CO₂-Emissionen', 'Émissions de CO₂', "Выбросы CO₂"],
    ['Código de registro:', 'Registration code:', 'Registrierungscode:', 'Code d’enregistrement :', "Регистрационный код:"],
    ['Aquí', 'Here', 'Hier', 'Ici', "Здесь"],
    ['Última renta devengada:', 'Last rent charged:', 'Zuletzt erhobene Miete:', 'Dernier loyer perçu :', "Последняя начисленная арендная плата:"],
    ['Rango de valores de alquiler de vivienda: de entre {min} € y {max} €', 'Rental value range: between €{min} and €{max}', 'Mietpreisspanne: zwischen {min} € und {max} €', 'Fourchette de loyers : entre {min} € et {max} €', "Диапазон арендной платы за жильё: от {min} € до {max} €"],
    ['Índex de referència de preus de lloguer', 'Rent reference price index', 'Referenzindex für Mietpreise', 'Indice de référence des prix des loyers', "Референсный индекс арендных цен"],
    ['Área inferior', 'Lower area', 'Unterer Bereich', 'Zone inférieure', "Нижняя граница"],
    ['Índex', 'Index', 'Index', 'Indice', "Индекс"],
    ['Área superior', 'Upper area', 'Oberer Bereich', 'Zone supérieure', "Верхняя граница"],
    ["Este mapa es HabiClic, la herramienta con la que centralizo y comparto contigo, en un único sitio, todas las propiedades que tengo disponibles.", "This map is HabiClic, the tool I use to bring together and share with you, in one single place, all the properties I currently have available.", "Diese Karte ist HabiClic, das Tool, mit dem ich Ihnen an einem einzigen Ort alle verfügbaren Immobilien zusammenfasse und zeige.", "Cette carte, c’est HabiClic, l’outil avec lequel je centralise et partage avec vous, en un seul endroit, tous les biens dont je dispose actuellement.", "Эта карта — HabiClic, инструмент, с помощью которого я собираю и показываю вам в одном месте все доступные объекты."]
  ];

  /* bloques con marcas <b> (elementos con data-h="clave") */
  var H = {
    h1: ['Antes de empezar hago un <b>estudio de tu capacidad de compra</b> (financiación) para saber qué tipo de propiedad puedes conseguir y cómo prepararte.',
      'Before starting I carry out a <b>study of your purchasing capacity</b> (financing) to see what kind of property you can get and how to prepare.',
      'Bevor ich beginne, erstelle ich eine <b>Analyse Ihrer Kaufkraft</b> (Finanzierung), um zu klären, welche Immobilie realistisch ist und wie Sie sich vorbereiten.',
      'Avant de commencer, je réalise une <b>étude de votre capacité d’achat</b> (financement) pour savoir quel type de bien vous pouvez obtenir et comment vous préparer.',
      "Прежде чем начать, я провожу <b>анализ вашей покупательной способности</b> (финансирование), чтобы понять, какую недвижимость вы можете приобрести и как к этому подготовиться."],
    h2: ['Busco, filtro, visito contigo y negocio, incluidas propiedades que <b>no llegan a publicarse</b>.',
      'I search, filter, visit with you and negotiate, including properties that <b>never get published</b>.',
      'Ich suche, filtere, besichtige mit Ihnen und verhandle, auch Immobilien, die <b>nie veröffentlicht werden</b>.',
      'Je cherche, je filtre, je visite avec vous et je négocie, y compris des biens qui <b>ne sont jamais publiés</b>.',
      "Я ищу, отбираю, провожу показы вместе с вами и веду переговоры — включая объекты, которые <b>никогда не публикуются</b>."],
    h3: ['Es un servicio adicional a la lista de espera, con condiciones propias. Te las explico <b>por escrito antes de empezar</b>, sin compromiso hasta que las aceptes.',
      'It is an extra service on top of the waiting list, with its own terms. I’ll explain them to you <b>in writing before we start</b>, with no commitment until you accept.',
      'Es ist ein zusätzlicher Service zur Warteliste mit eigenen Bedingungen. Ich erkläre sie Ihnen <b>schriftlich, bevor wir beginnen</b>, ohne Verpflichtung, bis Sie zustimmen.',
      'C’est un service en plus de la liste d’attente, avec ses propres conditions. Je vous les explique <b>par écrit avant de commencer</b>, sans engagement tant que vous ne les acceptez pas.',
      "Это дополнительная услуга к списку ожидания, со своими условиями. Объясню их вам <b>письменно перед началом работы</b>, без каких-либо обязательств, пока вы их не примете."]
  };

  var MAP = { en: {}, de: {}, fr: {}, ru: {} };
  D.forEach(function (r) { for (var i = 1; i < LANGS.length; i++) MAP[LANGS[i]][r[0]] = r[i]; });

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
