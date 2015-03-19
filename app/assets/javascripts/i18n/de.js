var I18n = I18n || {};
I18n.translations = {"de":{"active_admin":{"dashboard":"\u00dcbersicht","dashboard_welcome":{"welcome":"Willkommen in Active Admin. Dies ist die Standard-\u00dcbersichtsseite.","call_to_action":"Siehe 'app/admin/dashboard.rb', um \u00dcbersichts-Bereiche hinzuzuf\u00fcgen."},"view":"Anzeigen","edit":"Bearbeiten","delete":"L\u00f6schen","delete_confirmation":"Wollen Sie dieses Element wirklich l\u00f6schen?","new_model":"%{model} erstellen","create_model":"%{model} erstellen","edit_model":"%{model} bearbeiten","update_model":"%{model} bearbeiten","delete_model":"%{model} l\u00f6schen","details":"%{model} Details","cancel":"Abbrechen","empty":"Leer","previous":"Zur\u00fcck","next":"Weiter","download":"Herunterladen:","has_many_new":"%{model} hinzuf\u00fcgen","has_many_delete":"L\u00f6schen","filter":"Filtern","clear_filters":"Filter entfernen","search_field":"Durchsuche %{field}","equal_to":"Gleich","greater_than":"Gr\u00f6\u00dfer als","less_than":"Kleiner als","main_content":"Bitte implementieren Sie %{model}#main_content, um Inhalte anzuzeigen.","logout":"Abmelden","powered_by":"Powered by %{active_admin} %{version}","sidebars":{"filters":"Filter"},"pagination":{"empty":"Keine %{model} gefunden","one":"Zeige <b>1</b> %{model}","one_page":"Zeige <b>alle %{n}</b> %{model}","multiple":"Zeige %{model} <b>%{from}&nbsp;\u2013&nbsp;%{to}</b> von <b>%{total}</b>","entry":{"one":"Eintrag","other":"Eintr\u00e4ge"},"multiple_without_total":"Zeige %{model} <b>%{from}&nbsp;\u2013&nbsp;%{to}</b>"},"any":"Alle","blank_slate":{"content":"Es gibt noch keine %{resource_name}.","link":"Erstellen"},"batch_actions":{"button_label":"Stapelverarbeitung","delete_confirmation":"Sind Sie sicher dass sie diese %{plural_model} l\u00f6schen wollen? Dies kann nicht r\u00fcckg\u00e4ngig gemacht werden","succesfully_destroyed":{"one":"Erfolgreich 1 %{model} gel\u00f6scht","other":"Erfolgreich %{count} %{plural_model} gel\u00f6scht"},"selection_toggle_explanation":"(Auswahl umschalten)","link":"erstellen","action_label":"%{title} ausgew\u00e4hlte","labels":{"destroy":"L\u00f6sche"}},"comments":{"body":"Inhalt","author":"Autor","title":"Kommentar","resource":"Res\u00adsour\u00adce","add":"Kommentar hinzuf\u00fcgen","no_comments_yet":"Es gibt noch keine Kommentare.","title_content":"Kommentare (%{count})","errors":{"empty_text":"Der Kommentar wurde nicht gespeichert, da der Text fehlt."},"resource_type":"Res\u00adsour\u00adcen-Typ","author_type":"Autor-Typ"},"devise":{"login":{"title":"Login","remember_me":"erinnere dich an mich","submit":"Login"},"reset_password":{"title":"Passwort vergessen?","submit":"Mein Passwort zur\u00fccksetzen"},"change_password":{"title":"\u00c4ndern Sie Ihr Passwort","submit":"Mein Passwort \u00e4ndern"},"links":{"sign_in":"Anmeldung","forgot_your_password":"Passwort vergessen?","sign_in_with_omniauth_provider":"Anmeldung mit %{provider}"}},"has_many_remove":"Entfernen","filters":{"buttons":{"filter":"Filtern","clear":"Filter entfernen"},"predicates":{"contains":"Enth\u00e4lt","equals":"Gleich","starts_with":"Beginnt mit","ends_with":"Endet mit","greater_than":"Gr\u00f6\u00dfer als","less_than":"Kleiner als"}}},"activerecord":{"attributes":{"admin_user":{"id":"ID","email":"E-Mail","encrypted_Password":"Verschl\u00fcsseltes Passwort","reset_password_token":"Passwort-Reset-Token","reset_password_sent_at":"Passwort-Reset-Anweisungen gesendet am","remember_created_at":"Passwort merken seit","sign_in_count":"Anzahl Logins","current_sign_in_at":"Aktuell angemeldet seit","last_sign_in_at":"Letzter Login am","current_sign_in_ip":"Aktuelle IP-Adresse","last_sign_in_ip":"Letzte IP-Adresse","created_at":"Erstellt am","updated_at":"Aktualisiert am"},"user":{"first_name":"Vorname","last_name":"Nachname","privacy_policy":"Datenschutzbestimmungen","terms":"Nutzungsbedingungen"},"poi":{"name":"Name","type":"Typ","address":"Adresse","website":"Website","phone":"Telefon","address_street":"Stra\u00dfe","address_city":"Stadt"}},"models":{"admin_user":{"one":"Administrator","other":"Administratoren"},"user":"Benutzer"},"errors":{"full_messages":{"format":"%{attribute} %{message}"},"messages":{"accepted":"muss akzeptiert werden","blank":"muss ausgef\u00fcllt werden","confirmation":"stimmt nicht mit der Best\u00e4tigung \u00fcberein","empty":"muss ausgef\u00fcllt werden","equal_to":"muss genau %{count} sein","even":"muss gerade sein","exclusion":"ist nicht verf\u00fcgbar","greater_than":"muss gr\u00f6\u00dfer als %{count} sein","greater_than_or_equal_to":"muss gr\u00f6\u00dfer oder gleich %{count} sein","inclusion":"ist nicht in der Liste aufgef\u00fchrt","invalid":"ist nicht g\u00fcltig","less_than":"muss kleiner als %{count} sein","less_than_or_equal_to":"muss kleiner oder gleich %{count} sein","not_a_number":"ist keine Zahl","not_equal_to":"darf nicht genau %{count} sein","odd":"muss ungerade sein","record_invalid":"G\u00fcltigkeitspr\u00fcfung ist fehlgeschlagen: %{errors}","taken":"ist bereits vergeben","too_long":"ist zu lang (maximal %{count} Zeichen)","too_short":"ist zu kurz (mindestens %{count} Zeichen)","wrong_length":"hat die falsche L\u00e4nge (muss genau %{count} Zeichen haben)"},"models":{"user":{"attributes":{"email":{"blank":"muss ausgef\u00fcllt werden, wenn ein Passwort gesetzt wird"},"privacy_policy":{"accepted":"m\u00fcssen akzeptiert werden"},"terms":{"accepted":"m\u00fcssen akzeptiert werden"}}},"user_session":{"email":"E-Mail-Adresse","password":"Passwort","remember_me":"Angemeldet bleiben"}},"template":{"body":"Bitte \u00fcberpr\u00fcfen Sie die folgenden Felder:","header":{"one":"Konnte dieses %{model}-Objekt nicht speichern, da Fehler auftrat.","other":"Konnte dieses %{model}-Objekt nicht speichern, da %{count} Fehler auftraten."}}}},"devise":{"failure":{"admin_user":{"invalid":"Benutzername oder Kennwort nicht korrekt.","unauthenticated":"Bitte melden Sie sich als Administrator an."},"already_authenticated":"Du bist bereits angemeldet.","inactive":"Dein Konto wurde noch nicht aktiviert.","invalid":"Ung\u00fcltige Email oder ung\u00fcltiges Kennwort.","invalid_token":"Ung\u00fcltiger Authentifizierungstoken.","locked":"Dein Konto ist gesperrt.","timeout":"Deine Sitzung ist abgelaufen! Um fortzufahren, melde dich bitte erneut an.","unauthenticated":"Du musst dich anmelden oder registrieren um fortzufahren.","unconfirmed":"NEU: Bitte best\u00e4tige einmalig dein Konto um fortzufahren. Dazu haben wir Dir eine E-Mail mit einem Link geschickt. Falls du diese nicht vorliegen hast hast, klicke bitte am Ende der Seite auf 'Keine Best\u00e4tigungsmail bekommen'."},"sessions":{"admin_user":{"signed_in":"Erfolgreich als Administrator angemeldet."},"inactive":"Dein Benutzerkonto wurde noch nicht best\u00e4tigt. Um es zu Best\u00e4tigen klicke bitte auf den Link, den wir dir per E-Mail geschickt haben.","invalid":"Ung\u00fcltige E-Mail oder Passwort.","invalid_token":"Ung\u00fcltiger Authentizit\u00e4tstoken. Bitte l\u00f6sche die Cookies in deinem Browser und versuche es noch einmal.","link":"Login","locked":"Dein Benutzerkonto ist gesperrt.","new":{"no_osm_account":"Nicht bei OpenStreetMap?","osm_promo_text":"Die Wheelmap basiert auf dem Kartenmaterial der OpenStreetMap (OSM). Die OSM ist eine freie editierbare Weltkarte, die von Menschen wie dir erstellt wird. Eine Wikipedia f\u00fcr Karten. Damit du bestehende Orte bearbeiten oder neue Orte anlegen kannst, musst du bei der OSM einen Benutzerkonto haben und mit diesem hier eingeloggt sein.","promo_text_thank_you":"Vielen Dank f\u00fcr deine Unterst\u00fctzung!","sign_in_with":"Einloggen mit %{kind}","sign_up_with_osm":"Registriere dich hier.","wheelmap_promo_text":"Mit deinem Wissen \u00fcber rollstuhlgerechte Orte leistest du einen Beitrag dazu, dass Menschen mit Mobilit\u00e4tseinschr\u00e4nkungen ihren Alltag besser planen k\u00f6nnen. Zudem werden die Ortsinformationen in der OSM umfangreicher."},"signed_in":"Login erfolgreich.","signed_out":"Logout erfolgreich.","timeout":"Deine Sitzung ist abgelaufen, bitte melde dich erneut an.","unauthenticated":"Bitte logge dich ein oder registriere dich neu, um fortzufahren.","unconfirmed":"Bitte best\u00e4tige zuerst dein Benutzerkonto, um fortzufahren. Um es zu Best\u00e4tigen klicke bitte auf den Link, den wir dir per E-Mail geschickt haben."},"confirmations":{"confirmed":"Dein E-Mail-Adresse wurde erfolgreich best\u00e4tigt.","link":"Keine Best\u00e4tigungsmail bekommen?","send_instructions":"Du bekommst in wenigen Minuten eine E-Mail mit einem Link, um deine E-Mail-Adresse zu best\u00e4tigen.","send_paranoid_instructions":"Wenn Deine E-Mail-Adresse in unserer Datenbank ist, wirst Du eine E-mail mit Anweisungen zur Best\u00e4tigung Deines Kontos in wenigen Minuten erhalten."},"destroy":{"confirm":"Bist du dir sicher?","headline":"Benutzerkonto l\u00f6schen","link":"Jetzt l\u00f6schen"},"edit":{"form":{"labels":{"current_password":"Aktuelles Passwort <i>(wir brauchen es, um deine \u00c4nderungen zu best\u00e4tigen)</i>","email":"E-Mail","password":"Passwort <i>(leer lassen, wenn du es nicht \u00e4ndern m\u00f6chtest)</i>","password_confirmation":"Passwort wiederholen"},"submit":"\u00c4nderungen speichern"},"headline":"Benutzerkonto verwalten"},"mailer":{"confirmation_instructions":{"landing_page":"Bitte klicke auf den Link, den wir Dir gerade an Deine E-Mail Adresse geschickt haben. Solltest Du keine E-Mail bekommen haben, so pr\u00fcfe bitte auch deinen Spam-Ordner. Wenn sie dort auch nicht ist, dann kannst Du Dir die E-Mail erneut zusenden lassen.","subject":"Noch einen Schritt zur Aktivierung deines Benutzerkontos"},"reset_password_instructions":{"subject":"Anleitung zum Neu setzen deines Passworts"},"unlock_instructions":{"subject":"Anleitung zum Entsperren deines Benutzerkontos"}},"mandatory":"* Pflichtfeld","omniauth_callbacks":{"failure":"Authorisierung mit %{kind} fehlgeschlagen. Fehler: \"%{reason}\". ","permission_missing":"Du hast uns nicht die ben\u00f6tigten Rechte einger\u00e4umt.","success":"Erfolgreich authorisiert mit %{kind}."},"password_recovery":{"form":{"labels":{"email":"E-Mail"},"submit":"Passwort neu setzen"},"headline":"Passwort vergessen?"},"password_reset":{"email":{"comment":"Solltest du diese Anfrage nicht gestellt haben, ignoriere diese E-Mail einfach.<br/>Dein Passwort wird nicht ge\u00e4ndert, bis du auf den oben angegebenen Link klickst und ein neues Passwort setzt.","headline":"Willkommen %{email}","link":"Mein Passwort \u00e4ndern","text":"Jemand hat angefragt, dein Passwort zu \u00e4ndern. Falls du es warst, kannst du Dein Passwort \u00e4ndern, indem du folgenden Link anklickst - falls nicht, bitte ignorieren:"},"form":{"labels":{"password":"Neues Passwort","password_confirmation":"Passwort wiederholen"},"submit":"Passwort neu setzen"},"headline":"Passwort zur\u00fccksetzen"},"passwords":{"link":"Passwort vergessen?","send_instructions":"Du bekommst in wenigen Minuten eine E-Mail mit Informationen wie du dein Passwort neu setzen kannst.","send_paranoid_instructions":"Wenn Deine E-Mail-Adresse in unserer Datenbank ist, wirst Du eine E-mail mit einem Link zum R\u00fccksetzen des Passwortes erhalten.","updated":"Dein Passwort wurde erfolgreich ge\u00e4ndert. Du bist nun angemeldet.","updated_not_active":"Dein Passwort wurde erfolgreich ge\u00e4ndert."},"registrations":{"destroyed":"Dein Benutzerkonto wurde efolgreich gel\u00f6scht.","inactive_signed_up":"Anmeldung erfolgreich. Aber wir konnten dich nicht einloggen. Grund: \"%{reason}\"","link":"Registrieren","reasons":{"inactive":"inaktiv","locked":"gesperrt","unconfirmed":"unbest\u00e4tigt"},"signed_up":"Deine Registrierung war erfolgreich.","updated":"Dein Benutzerkonto wurde aktualisiert."},"sign_in":{"form":{"labels":{"email":"E-Mail","password":"Passwort","remember_me":"Eingeloggt bleiben?"},"submit":"Login"},"headline":"Login"},"sign_out":{"headline":"Logout"},"sign_up":{"email":{"confirm_my_account":"Mein Benutzerkonto best\u00e4tigen.","please_confirm":"Du kannst deine E-Mail Adresse best\u00e4tigen indem du folgenden Link klickst:","welcome":"Willkommen %{email}!"},"form":{"labels":{"email":"E-Mail","password":"Passwort","password_confirmation":"Passwort wiederholen","wants_newsletter":"Ja, haltet mich \u00fcber wheelmap auf dem laufenden. (Aber bitte nicht \u00f6fter als einmal im Monat.)"},"submit":"Registrieren"},"headline":"Registrieren"},"unlocks":{"link":"Keine Anleitung zum Entsperren deines Benutzerkontos bekommen?","send_instructions":"Du bekommst in wenigen Minuten eine E-Mail mit Informationen wie du dein Benutzerkonto entsperren kannst.","send_paranoid_instructions":"Wenn Dein Konto vorhanden ist, wirst Du in wenigen Minuten eine E-Mail erhalten mit Anweisungen, wie man es wieder entsperrt. ","unlocked":"Dein Benutzerkonto wirde erfolgreich entsperrt. Du bist jetzt eingeloggt."}},"poi":{"category":{"accommodation":"Unterkunft","education":"Bildung","food":"Essen & Trinken","government":"Beh\u00f6rden & Botschaften","health":"Gesundheit","leisure":"Freizeit","misc":"Sonstiges","money_post":"Bank & Post","public_transfer":"Verkehr","shopping":"Einkaufen","sport":"Sport","tourism":"Tourismus","unknown":"Unbekannt"},"name":{"accommodation":{"beach_resort":"Strandhotel","bed_and_breakfast":"Zimmer mit Fr\u00fchst\u00fcck","camp_site":"Zeltplatz","caravan_site":"Campingplatz","chalet":"Ferienhaus","dormitory":"Wohnheim","guest_house":"Pension","hostel":"Hostel","hotel":"Hotel","motel":"Motel"},"education":{"college":"Hochschule","driving_school":"Fahrschule","kindergarten":"Kindertagesst\u00e4tte","library":"Bibliothek","museum":"Museum","school":"Schule","university":"Universit\u00e4t"},"food":{"bar":"Bar","biergarten":"Biergarten","cafe":"Caf\u00e9","drinking_water":"Trinkwasser","fast_food":"Fast Food","ice_cream":"Eisdiele","pub":"Pub","restaurant":"Restaurant"},"government":{"courthouse":"Gericht","embassy":"Botschaft","government":"Amt/Beh\u00f6rde","police":"Polizei","public_building":"\u00d6ffentliches Geb\u00e4ude","townhall":"Rathaus"},"health":{"dentist":"Zahnarzt","doctors":"Arzt","hearing_aids":"H\u00f6rger\u00e4teakustiker","hospital":"Krankenhaus","medical_supply":"Sanit\u00e4tshaus","pharmacy":"Apotheke","social_facility":"Soziale Einrichtung","veterinary":"Tierarzt"},"leisure":{"arena":"Stadion","brothel":"Bordell","casino":"Spielcasino","cinema":"Kino","community_center":"Stadthalle/Gemeindezentrum","gallery":"Galerie","nightclub":"Nachtclub","playground":"Spielplatz","sauna":"Sauna","stripclub":"Stripclub","theatre":"Theater","zoo":"Zoo"},"misc":{"company":"Unternehmen (B\u00fcro)","estate_agent":"Immobilienmakler","insurance":"Versicherung","lawyer":"Anwalt","place_of_worship":"Religi\u00f6ser Ort","toilets":"\u00d6ffentliche Toilette"},"money_post":{"atm":"Geldautomat","bank":"Bank","bureau_de_change":"Geldwechselb\u00fcro","post_box":"Briefkasten","post_office":"Postfiliale"},"public_transfer":{"aerodrome":"Flughafen","bicycle_parking":"Fahrradparkplatz","bicycle_rental":"Fahrradvermietung","boatyard":"Hafen","bus_station":"Busbahnhof","bus_stop":"Bushaltestelle","cable_car":"Seilbahnstation","car_rental":"Autovermietung","car_sharing":"Carsharing","chair_lift":"Sessellift","ferry":"F\u00e4hre","ferry_terminal":"F\u00e4hranlegestelle","fuel":"Tankstelle","halt":"Haltestelle","light_rail":"S-Bahn","parking":"Parkplatz/Parkhaus","parking_aisle":"Fahrweg auf Parkpl\u00e4tzen","platform":"Bahnsteig","station":"Bahnhof","subway_entrance":"U-Bahn Eingang","terminal":"Flughafenterminal","tram_stop":"Stra\u00dfenbahnhaltestelle"},"shopping":{"alcohol":"Spirituosen","bakery":"B\u00e4ckerei","beauty":"Sch\u00f6nheitssalon","beverages":"Getr\u00e4nkemarkt","bicycle":"Fahrradladen","books":"Buchhandlung","butcher":"Fleischer","car_repair":"Autowerkstatt","car_shop":"Autohandel","chemist":"Drogerie","clothes":"Bekleidung","computer":"Computer","confectionery":"S\u00fc\u00dfwarengesch\u00e4ft","convenience":"Sp\u00e4tkauf","deli":"Feinkostladen","department_store":"Warenhaus","doityourself":"Baumarkt","dry_cleaning":"Chemische Reinigung","electronics":"Elektronik","fabric":"Stoffladen","farm_shop":"Hofladen","florist":"Blumengesch\u00e4ft","furniture":"M\u00f6belhaus","garden_centre":"Garten-Center","gift":"Souvenir-/Geschenkartikelladen","hairdresser":"Friseur","hardware":"Eisenwarenladen","jewelry":"Juwelier","kiosk":"Kiosk","laundry":"W\u00e4scherei","mall":"Shoppingcenter","optician":"Optiker","organic":"Bio-Laden","outdoor":"Outdoorbedarf","pet":"Zoohandlung","photo":"Foto","second_hand":"Second-Hand","shoes":"Schuhe","sports":"Sportlerbedarf","stationery":"Schreibwaren","supermarket":"Supermarkt","toys":"Spielwarenladen","travel_agency":"Reiseb\u00fcro","video":"Videothek"},"sport":{"pitch":"Spielfeld/Sportplatz","sports_centre":"Sportzentrum/-halle","stadium":"Stadion","swimming":"Freibad","swimming_pool":"Schwimmbad"},"tourism":{"archaeological_site":"Arch\u00e4ologische Ausgrabungst\u00e4tte","arts_centre":"Kulturzentrum","artwork":"Kunstwerk","attraction":"Attraktion","battlefield":"Kampfschauplatz","beach":"Strand","beacon":"Leuchtturm","castle":"Schloss","cave_entrance":"H\u00f6hleneingang","information":"Touristeninformation","memorial":"Denkmal","theme_park":"Vergn\u00fcgungspark","tower":"Turm","viewpoint":"Aussichtspunkt"},"unknown":{"unknown":"Unbekannt"}}},"date":{"abbr_day_names":["So","Mo","Di","Mi","Do","Fr","Sa"],"abbr_month_names":["","Jan","Feb","M\u00e4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],"day_names":["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],"formats":{"default":"%d.%m.%Y","long":"%e. %B %Y","short":"%e. %b"},"month_names":["","Januar","Februar","M\u00e4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"etwa 1 Stunde","other":"etwa %{count} Stunden"},"about_x_months":{"one":"etwa 1 Monat","other":"etwa %{count} Monate"},"about_x_years":{"one":"etwa 1 Jahr","other":"etwa %{count} Jahre"},"almost_x_years":{"one":"fast 1 Jahr","other":"fast %{count} Jahre"},"half_a_minute":"eine halbe Minute","less_than_x_minutes":{"one":"weniger als eine Minute","other":"weniger als %{count} Minuten"},"less_than_x_seconds":{"one":"weniger als eine Sekunde","other":"weniger als %{count} Sekunden"},"over_x_years":{"one":"mehr als 1 Jahr","other":"mehr als %{count} Jahre"},"x_days":{"one":"1 Tag","other":"%{count} Tage"},"x_minutes":{"one":"1 Minute","other":"%{count} Minuten"},"x_months":{"one":"1 Monat","other":"%{count} Monate"},"x_seconds":{"one":"1 Sekunde","other":"%{count} Sekunden"}},"prompts":{"day":"Tag","hour":"Stunde","minute":"Minute","month":"Monat","second":"Sekunde","year":"Jahr"}},"models":{"category":{"prompt":"W\u00e4hle eine Kategorie"},"node_type":{"prompt":"W\u00e4hle einen Typ"},"node":{"info_edit_position":"So wie auf der Karte oben w\u00fcrde der Ort auf der Wheelmap aussehen. Sollte der Marker nicht an der richtigen Stelle sitzen, kannst du ihn <a href=\"%{url}\">auf der OpenStreetMap neu positionieren.</a>","mail":{"subject":"[Wheelmap] Problem mit %{headline}","body":"(Bitte schreibe nur in Englisch oder Deutsch.)\n\nHi Sozialhelden,\netwas ist falsch mit dem Ort: %{url}\n\nDas Problem ist:"}}},"actions":{"send":"Absenden","save":"Speichern","cancel":"Abbrechen"},"errors":{"models":{"node":{"website":{"invalid":"Webseiten-URL ist nicht korrekt."},"phone":{"invalid":"Telefonnumer ist nicht korrekt. Die Telefonnummer muss im folgenden Format eingegeben werden: +49 30 234567"}}},"dynamic_format":"%{message}","format":"%{attribute} %{message}","messages":{"accepted":"muss akzeptiert werden","already_confirmed":"wurde bereits best\u00e4tigt","blank":"muss ausgef\u00fcllt werden","confirmation":"stimmt nicht mit der Best\u00e4tigung \u00fcberein","empty":"muss ausgef\u00fcllt werden","equal_to":"muss genau %{count} sein","even":"muss gerade sein","exclusion":"ist nicht verf\u00fcgbar","expired":"ist abgelaufen, bitte neu anfordern","greater_than":"muss gr\u00f6\u00dfer als %{count} sein","greater_than_or_equal_to":"muss gr\u00f6\u00dfer oder gleich %{count} sein","inclusion":"ist kein g\u00fcltiger Wert","invalid":"ist nicht g\u00fcltig","less_than":"muss kleiner als %{count} sein","less_than_or_equal_to":"muss kleiner oder gleich %{count} sein","not_a_number":"ist keine Zahl","not_an_integer":"muss eine Zahl sein","not_found":"nicht gefunden","not_locked":"war nicht gesperrt","not_saved":{"one":"Ein Fehler hat das Speichern von %{resource} verweigert:","other":"%{count} Fehler: %{resource} verweigerte das Speichern:"},"odd":"muss ungerade sein","taken":"ist bereits vergeben","too_long":"ist zu lang (nicht mehr als %{count} Zeichen)","too_short":"ist zu kurz (nicht weniger als %{count} Zeichen)","wrong_length":"hat die falsche L\u00e4nge (muss genau %{count} Zeichen haben)"},"template":{"body":"Bitte \u00fcberpr\u00fcfen Sie die folgenden Felder:","header":{"one":"Konnte dieses %{model}-Objekt nicht speichern, da Fehler auftrat.","other":"Konnte dieses %{model}-Objekt nicht speichern, da %{count} Fehler auftraten."}}},"faq":{"answers":{"0":"Du kannst die Markierung jederzeit selbst \u00e4ndern. Einfach die richtige Markierung w\u00e4hlen und \"Speichern\" - fertig!","1":"Als angemeldeter Nutzer kannst du alle Angaben zu einem Ort selbst \u00e4ndern. Klicke auf \"Bearbeiten\" und korrigiere oder erg\u00e4nze die Angaben.","2":"Du kannst zus\u00e4tzliche Informationen (z.B. \"Dieser Ort hat eine Rampe\") als Hinweis hinterlassen. Klicke auf \"Bearbeiten\" und \"Kommentar verfassen\"."},"headline":"Gibt es ein Problem mit diesem Ort?","questions":{"0":"Die Markierung ist falsch.","1":"Angaben zum Ort sind falsch bzw. fehlen.","2":"Ich habe mehr Informationen zum Ort."}},"header":{"navigation":{"about_wheelmap":"\u00dcber Wheelmap","choose_language":"Sprache w\u00e4hlen","contact":"Kontakt","map":"Karte","projects":"Projekte","blog":"News","feedback":"Feedback","home":"Start","how_to_add_a_place":"Wie trage ich Orte ein?","imprint":"Impressum","logged_in_as":"Eingeloggt als:","login":"Login","logout":"Logout","newsletter":"Newsletter","press":"Presse","profile":"Profil","suggestions":"Anregungen","what_is_barrier_free":"Was bedeutet \u201erollstuhlgerecht\u201c?","what_is_wheelmap":"Was ist Wheelmap?"},"toolbar":{"categories":"Kategorien"},"meta":{"description":"Stufen hier, Treppen da oder keine Behindertentoiletten - dank Wheelmap wissen Sie jetzt im Vorhinein, ob ein Museum, eine Kino oder das n\u00e4chste Restaurant rollstuhlgerecht sind.","homepage":"Startseite","keywords":"rollstuhl gerechte Orte finden suchen markieren","search":"Suche"},"searchbar":{"add_place":"Ort hinzuf\u00fcgen","find":"Finden","placeholder":"Nach Ort suchen","title_add_place":"Jetzt einen neuen Ort an dieser Stelle hinzuf\u00fcgen"},"tagline":"Wheelmap logo","title":"Rollstuhlgerechte Orte finden"},"home":{"index":{"overlay":{"button":"Okay, los geht's!","categories":"Kategorien filtern","filter":"Ergebnisse auf der Karte nach Rollstuhlgerechtigkeit filtern","headline":"Mit Wheelmap.org kannst Du rollstuhlgerechte Orte finden und markieren - weltweit und kostenlos. So einfach gehts:","lookup":"Direkt Orte finden","secondary_headline":"Das Ampelsystem zum Markieren der Rollstuhlgerechtigkeit:"},"filter":{"category":"Kategorie w\u00e4hlen","deselect_all":"Alle deaktivieren","select_all":"Alle ausw\u00e4hlen","wheelchair":"Rollstuhlgerecht?"},"ie":{"action":{"ignore":"Ignorieren","upgrade":"Browser aktualisieren"},"warning":{"headline":"Entschuldigung!","message":"Offenbar verwendest Du Internet Explorer. Wheelmap ben\u00f6tigt einen standard-konformen Browser, um korrekt zu funktionieren. Bitte verwende Firefox, Chrome, Safari oder Opera."}},"link":{"node":{"create":"Neuen Ort anlegen"}},"popup":{"form":{"limited":"Teilweise rollstuhlgerecht","no":"Nicht rollstuhlgerecht","save":"Speichern","unknown":"Unbekannter Status","yes":"Voll rollstuhlgerecht"},"help":"Rollstuhlgerecht? (Hilfe)","more":"mehr ..."}}},"nodes":{"new":{"form":{"legend":"Lage des Ortes","location":"Bitte klicke auf der Karte an die Stelle, wo sich der Ort befindet!"},"header":{"title":"Neuer Ort | wheelmap.org"},"link":{"large_map":"&laquo; Abbrechen"}},"node_data":{"address":"Adresse:","contact_details":"Kontaktdaten:"},"node_edit":{"details":"Details","edit":"Bearbeiten"},"node_map":{"map":"Karte:"},"node_note":{"comment":"Nutzerkommentar:"},"node_photos":{"add":"Hinzuf\u00fcgen","photos_of_this_place":"Fotos von diesem Ort:","upload":"Hochladen"},"node_similar":{"similar":"\u00c4hnliche Orte: %{name}"},"node_status":{"accessible_toilet":"Rollstuhlgerechtes WC:","premium":"%{name} sagt: dieser Ort ist","wheelchair_accessibility":"Rollstuhlgerechtigkeit:"},"node_streetview":{"streetview":"Stra\u00dfenansicht:"},"show":{"header":{"meta":{"description":"Finde auf Wheelmap.org heraus, ob der Ort rollstuhlgerecht ist. Oder f\u00fcge Informationen und Bilder zu dem Ort hinzu.","title":"Dieser Ort ist auf Wheelmap.org: %{name}"},"title":"Ort: %{node} | wheelmap.org"},"share":{"email":"E-Mail","facebook":"Facebook","text":"Ich habe folgenden Ort auf Wheelmap.org gefunden: %{name}","twitter":"Twitter"},"link":{"back":"zur\u00fcck","large_map":"Ansicht vergr\u00f6\u00dfern","listing":"Alle Orte vom Typ '%{type}' in %{city}","upload":"Bild hochladen"},"more_data_from":"Zu diesem Ort gibt es weitere Daten, qualifiziert von:","show-in-osm":"in Openstreetmap anzeigen"},"create":{"flash":{"not_successfull":"Oops, die Angaben sind noch unvollst\u00e4ndig oder inkorrekt.","successfull":"Vielen Dank, der Eintrag wurde gespeichert und wird demn\u00e4chst aktualisiert."}},"edit":{"header":{"title":"Ort bearbeiten: %{node} | wheelmap.org"},"link":{"large_map":"&laquo; Abbrechen"}},"errors":{"default":"Oops, das ist was schief gegangen. Wir wurden aber dar\u00fcber informiert!","not_authorized":"Authentifizierung fehlgeschlagen","not_available":"Leider steht diese Seite zur Zeit nicht zur Verf\u00fcgung","not_existent":"Leider ist dieser Ort nicht mehr da","not_found":"Leider konnte die Seite nicht gefunden werden","param_missing":"Bitte einen Suchbegriff eingeben."},"flash":{"authorize_wheelmap":"Um Daten zu \u00e4ndern ben\u00f6tigst Du einen OpenStreetMap Account."},"node":{"link":{"claim":"Du arbeitest hier?","edit_node":"Ort bearbeiten","report_bug":"Problem melden"}},"update":{"flash":{"not_successfull":"Oops, die Angaben sind noch unvollst\u00e4ndig oder inkorrekt.","successfull":"Vielen Dank, der Eintrag wurde gespeichert und wird demn\u00e4chst aktualisiert."}},"update_wheelchair":{"successfull":"Der Status des Ortes \"%{name}\" wurde in \"%{status}\" ge\u00e4ndert und wird demn\u00e4chst aktualisiert."}},"search":{"index":{"no-results":{"hint":{"example":"<strong>Beispiel:</strong> Berlin, Deutschland","info":"Unser Suchdienst kann nur nach Adressen und Namen suchen. Ortstypen wie z.B. \"Restaurant\" oder \"Kino\" k\u00f6nnen \u00fcber die Suche nicht gefunden werden. Gib deswegen bitte entweder den Namen des Ortes ein oder die Adresse (z.B. Stra\u00dfe oder Stadt).","work_in_progress":"Wir arbeiten daran, dass du bald noch einfacher und intuitiver Orte finden kannst."},"try_this":{"address":"Gib bitte eine <strong>genauere Adresse</strong> ein.","intro":"Versuch doch mal Folgendes:","spell_check":"\u00dcberpr\u00fcfe die <strong>Schreibweise</strong> deiner Eingabe."}},"results":{"ticker":{"one":"%{count} Ergebnis:","other":"%{count} Ergebnisse:"}},"search":{"for":"Suche nach \"%{q}\"","not_found":"Es wurden keine Orte gefunden!"}},"timeout":{"headline":"Oh, unser Fehler","info":"Unser Suchdienst war kurzzeitig nicht verf\u00fcgbar.","repeat_search":"Suche wiederholen"}},"application":{"require_no_user":{"notice":"Du bist bereits eingeloggt\u2026"},"require_user":{"notice":"Du musst dich anmelden, um diese Seite zu sehen."}},"breadcrumbs":{"node":{"create":"Neuen Ort anlegen","edit":"Ort bearbeiten"},"root":"Wheelmap-Karte"},"common":{"close":"schlie\u00dfen","skip":"\u00dcberspringen"},"flash":{"actions":{"create":{"notice":"%{resource_name} wurde erfolgreich angelegt."},"destroy":{"alert":"%{resource_name} konnte nicht entfernt werden.","notice":"%{resource_name} wurde erfolgreich entfernt."},"update":{"notice":"%{resource_name} wurde erfolgreich aktualisiert."}},"photos":{"destroy":{"notice":"Bild wurde erfolgreich entfernt."}}},"form":{"show_fully_accessible_places":"Ja","show_limited_accessible_places":"Teilweise","show_places_without_status":"unbekannter Status","show_unaccessible_places":"nicht rollstuhlgerecht"},"formtastic":{"hints":{"lat":"Bewegen Sie den Marker auf der Karte","osm_username":"Noch nicht Mitglied? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Openstreetmap Benutzerkonto anlegen</a>","password":"(leer lassen, wenn du es nicht \u00e4ndern m\u00f6chtest)","phone":"Beispiel: +49 30 123456-78","website":"Beispiel: http://www.example.com"},"labels":{"category":"Kategorie:","centralkey":"Zentralschl\u00fcssel:","city":"Ort:","create":"Ort anlegen","email":"E-Mail","finish":"Fertigstellen","housenumber":"Nr:","lat":"Breitengrad","lon":"L\u00e4ngengrad","name":"Name:","osm_password":"OSM-Passwort","osm_username":"OSM-Mitgliedsname","password":"Passwort","password_confirmation":"Passwort wiederholen","phone":"Telefon:","postcode":"PLZ:","privacy_policy":"Ich stimme Ziffer 1 und 2 der Datenschutzbestimmungen zu.","reset":"Reset","save":"Speichern","street":"Stra\u00dfe:","terms":"Ich stimme den Nutzungsbedingungen zu.","type":"Typ:","website":"Webseite:","wheelchair":"Rollstuhlgerecht?","wheelchair_description":"Info zu Barrierefreiheit:","wheelchair_toilet":"Rollstuhltoilette"},"titles":{"basic":"Basisdaten","optional":"Mehr Infos <span class=\"addition\">(alle Felder sind optional)</span>"}},"global":{"form_validation_error":"Bitte beachte die unten angezeigten Fehlermeldungen."},"helpers":{"select":{"prompt":"Bitte ausw\u00e4hlen"},"submit":{"create":"%{model} anlegen","submit":"%{model} speichern","update":"%{model} aktualisieren"}},"how?":"Wie?","landing_pages":{"index":{"wheelchair":{"limit":{"headline":"Alle rollstuhlgerechten %{type} in %{city} (%{count})"},"no":{"headline":"Alle nicht rollstuhlgerechten %{type} in %{city} (%{count})"},"unknown":{"headline":"Alle %{type} in %{city} mit unbekanntem Rollstuhlstatus (%{count})"},"yes":{"headline":"Alle rollstuhlgerechten %{type} in %{city} (%{count})"}}}},"layouts":{"application":{"banner":{"alt":"Ein Projekt der Sozialhelden.de"}}},"node":{"address":{"city":"%{postcode} %{city}","street":"%{street} %{housenumber}"},"tags":{"phone":"Telefon:","website":"Website:"}},"number":{"currency":{"format":{"delimiter":".","format":"%n %u","separator":",","unit":"\u20ac"}},"format":{"delimiter":".","separator":","},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Milliarde","million":"Million","quadrillion":"Quadrillion","thousand":"Tausend","trillion":"Trillion"}},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"gb":"GB","kb":"KB","mb":"MB","tb":"TB"}}}},"oauth":{"application":{"connect":{"headline":"Bevor du auf wheelmap.org Orte bearbeiten bzw. anlegen kannst, musst du dein Benutzerkonto mit Openstreetmap verbinden."}},"callback":{"notice":"Dein Benutzerkonto wurde erfoglreich mit dem OpenStreetMap-Benutzerkonto von '%{user}' verbunden."}},"or":"oder","place":{"one":"%{count} Ort","other":"%{count} Orte"},"profile":{"edit":{"application":{"oauth":{"connected":"Status: verbunden","grant":"Jetzt verbinden","not_connected":"Status: nicht verbunden","revoke":"Verbindung aufheben"}},"headline":"Dein Profil bearbeiten"}},"splash":{"countline":"%{count} Orte wurden schon markiert.","headline":"Jeder kann rollstuhlgerechte Orte eintragen!","start":"Start","step1":"Klicke auf einen Ort, den du kennst.","step2":"Markiere ihn und klicke auf \"speichern\".","step3":"Fertig! Keine Registrierung n\u00f6tig!","what_is_wheelmap":"Was ist Wheelmap?"},"statistics":"Statistik","support":{"array":{"last_word_connector":", und","sentence_connector":"und","two_words_connector":" und ","words_connector":","},"select":{"prompt":"Bitte ausw\u00e4hlen"}},"time":{"am":"vormittags","formats":{"default":"%A, %e. %B %Y, %H:%M Uhr","long":"%A, %e. %B %Y, %H:%M Uhr","short":"%e. %B, %H:%M Uhr"},"pm":"nachmittags"},"toiletstatus":{"no":"Kein Rollstuhlgerechtes WC","unknown":"WC Status unbekannt","yes":"Rollstuhlgerechtes WC"},"user_sessions":{"create":{"activation":{"notice":"Dein Benutzerkonto ist nun freigeschaltet!"},"error":{"notice":"E-Mail-Adresse und Passwort passen nicht zueinander."},"notice":"Du bist jetzt drin!"},"destroy":{"notice":"Tsch\u00fcss, bis bald!"},"new":{"email":"E-mail Adresse","login":"Log in","login_with_twitter":"Mit Twitter einloggen","password":"Passwort","remember_me":"Eingeloggt bleiben"}},"users":{"after_signup_edit":{"welcome":{"headline":"Fast geschafft! Jetzt noch den Wheelmap-Account fertigstellen:","set_password_for_mobile":"Du hast Dich erfolgreich bei OpenStreetMap angemeldet.\nW\u00e4hle jetzt noch die Email-Adresse und das Passwort f\u00fcr Deinen Wheelmap-Account aus. Du brauchst diese Email-Adresse und das Passwort, um dich in der Wheelmap-App f\u00fcr iPhone und Android einloggen zu k\u00f6nnen.","text":"Du bist nun erfolgreich registriert. Wie k\u00f6nnen wir dich in Zukunft \u00fcber wichtige Neuigkeiten rund um die Wheelmap informieren?"}},"edit":{"headline":{"your_images":"Deine hochgeladenen Bilder"}}},"wheelchairstatus":{"limited":"Teilweise rollstuhlgerecht","no":"Nicht rollstuhlgerecht","unknown":"Unbekannter Status","yes":"Voll Rollstuhlgerecht"},"wheelmap":{"footer":{"a_project_of":"Ein Projekt der","based_on":"Basiert auf","become_a_supporter":"F\u00f6rderer werden","main_supporter":"Hauptf\u00f6rderer"},"itunes":{"alt":"AppStore Logo","title":"Jetzt iPhone App herunterladen!"},"logo":{"alt":"Wheelmap Logo - Rollstuhlgerechte Orte finden","title":"Wheelmap - Rollstuhlgerechte Orte finden"},"what_is":{"fully_accessible":"Eingang stufenlos, alle R\u00e4ume stufenlos erreichbar.","limited_accessible":"Eingang max 1 Stufe (7cm hoch), die wichtigsten R\u00e4ume stufenlos erreichbar.","not_accessible":"Eingang hat h\u00f6here oder mehrere Stufen, R\u00e4ume nicht erreichbar.","unknown_accessible":"Hilf mit und markiere diese Orte!"}},"will_paginate":{"next_label":"Vor &#8594;","page_entries_info":{"multi_page":"Zeige %{model} %{from} - %{to} von %{count} insgesamt ","multi_page_html":"Zeige %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> von <b>%{count}</b> insgesamt","single_page":{"one":"Zeige 1 %{model}","other":"Zeige alle %{count} %{model} ","zero":"Nicht %{model} gefunden"},"single_page_html":{"one":"Zeige <b>1</b> %{model} ","other":"Zeige <b>all&nbsp;%{count}</b> %{model} ","zero":"Nicht %{model} gefunden "}},"page_gap":" &hellip; ","previous_label":"&#8592; Zur\u00fcck"}}};