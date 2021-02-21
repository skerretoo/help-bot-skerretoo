const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "ODA2NDgxNjQzMTgzNDA3MTI2.YBqEjw.q7PQCVS_OzakU9K9WYxlbNmVDX4", 
prefix: "w!"
})
 
bot.onMessage()
 
bot.variables({
ccmd: "",
cdes: "",
})

bot.command({
name: "ping", 
code: `Pong! \`$ping\` ms` 
})

//STATUS

bot.status({
 
text: "STWORZYŁ MNIE SKERRETOO",
 
type: "WATCHING",
 
time: 12
 
})
 
bot.status({
 
text: "Pornhub",
 
type: "WATCHING",
 
time: 12
 
})
 
bot.status({
 
text: "Jagode",
 
type: "WATCHING",
 
time: 12
 
})

//24/7

let count = 0;
setInterval(
  () =>
    require("node-fetch")(process.env.URL).then(() =>
      console.log(`[${++count}] here i pinged ${process.env.URL}`)
    ),
  300000
);

//ping bot
bot.command({
name: "<@806481643183407126>",
code: `$title[HelpBot]
$description[Siema! Mój prefix to \`w!\`
Możesz napisać \`w!help\` po więcej info]
$color[ff0000]`,
nonPrefixed: true
})

bot.command({
name: "<@!806481643183407126>",
code: `$title[HelpBot]
$description[Siema! Mój prefix to \`w!\`
Możesz napisać \`w!help\` po więcej info]
$color[ff0000]`,
nonPrefixed: true
})

//ban
bot.command({
 name:"ban",
  aliasess:"banik",
 code: `$deleteIn[5s]
$color[$getServerVar[color]] 
$author[🌈 Banned successfully]
$addField[About:;
Reason:
> $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]
Date:
> $day $month $year
]
$addField[User information;
$userTag[$findUser[$message[1]]] - $findUser[$message[1]]]
$addField[Moderator;
$userTag - $authorID]
$thumbnail[$userAvatar[$findUser[$message[1]]]]
$ban[$findUser[$message[1]];$userTag: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]];7]
$if[$memberExists[$findUser[$message[1]]]==true]
$onlyIf[$rolePosition[$highestRole[$findUser[$message[1]]]]>$rolePosition[$highestRole];⛔ - To use this you need to have a higher rank than the mentioned user.]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ - You can't ban yourself (Or else, I couldn't find that user)**]
$onlyIf[$findUser[$message[1]]!=$clientID;**⛔ - I can't ban myself, that's illegal**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**⛔ - I can't ban the owner of the server**]
$elseIf[$memberExists[$findUser[$message[1]]]==false]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ - You can't ban yourself (Or else, I couldn't find that user)**]
$endelseIf
$endif
$onlyIf[$isBanned[$findUser[$message[1]]]==false;**⛔ - This user has already been banned on this server**]
$onlyIf[$message!=;**⛔ - Please specify the user you want to ban. Correct usage:** \`w!ban <@User> [Reason\\]\`]
$onlyPerms[ban;**⛔ - To use this you require the \`BAN_MEMBERS\` permission**]
 $onlyBotPerms[ban;**⛔ - I don't have enough perms to execute this command. Permissions missing:** \`BAN_MEMBERS\`]`
})

//spotify
bot.command({
name: "spotify",
code: `$playSpotify[https://open.spotify.com/playlist/384FPCNhnabINX2d8SyrgT?si=loi0T0UPQmWMRgU557nbmQ;name;yes;:x: An error has occured]
`
})

//eval
bot.command({
name: "eval", 
code: `
$eval[$message]
$onlyForIDs[653319195219460118;Tylko dla właściciela!]` 
})

//HELP
bot.command({
  name:"help",
    aliasess:"pomoc",
code: `$title[HelpBot]
$description[<:kjut:796299170599796776> Siemka! Jestem HelpBot! A moim twórcą jest Skerretoo! Posiadam $commandsCount komend, ale dalej jestem rozwijany! <:kjut:796299170599796776>
<a:hindusek:809745261614071848> Informacje o mnie pod komenda \`w!infobot\`, chcesz znać mój ping? Nie ma sprawy! komenda \`w!ping\`. Miłego używania! <a:hindusek:809745261614071848>

_**Aby zobaczyć dokładniejsze informacje o komendzie wpisz p przed komendą! Przykład:**_ \`w!pchat\`
Miłego!

<a:majkraft_ofyca:809743274822467585> > **Administracyjne:**
w!usun w!chat w!glos w!warn w!zmiennick w!się w!dajrole w!unwarn w!kick w!banik w!ankieta w!ogloszenie w!temprole w!wyjdź
w!embed

<a:majkraft_ofyca:809743274822467585> > **Konfiguracja:**
w!ustawoglo w!ustawank w!ustawpropo w!antylink w!config w!ank reset w!oglo reset w!propo reset w!modlog reset

<a:majkraft_ofyca:809743274822467585> > **Informacje:**
w!ri w!serverinfo w!userinfo w!zapros w!role w!statusy w!time w!infobot w!wiadomoscinfo w!autor w!apiping w!idserver w!myid

<a:majkraft_ofyca:809743274822467585> > **4FUN:**
w!covid w!duzy w!epilepsja w!random w!avatar w!8ball w!arch w!yt w!drake w!hack w!pv w!skinmc w!google w!saper w!ocena w!clyde w!nitro w!colepsze w!say

<a:majkraft_ofyca:809743274822467585> > **NSFW:**
||w!hentai w!porno||

<a:emoji_6:809860459699109898> > **Wkrótce więcej!** < <a:emoji_6:809860459699109898>]
$color[ff0000]`,
})

//unban

bot.command({
 name: "unban",
 code: `$unban[$message[1];Przez $userTag[$authorID] Powód: $sliceMessage[1]]
$username[$message[1]] **został unbanowany ✅**
$onlyBotPerms[ban;**⛔ Nie mam permisji!]
$argsCheck[>1;**⛔ Proszę, napisz ID osoby którą mam unbanować**]
$onlyPerms[ban;**⛔ Nie masz permisji!**]
$suppressErrors[**⛔ Nie mogę znaleźć użytkownika, lub nie ma bana!**]`
})

//KICK
bot.command({
name: "kick",
code: `$kick[$findUser[$message[1]]]
 $title[Kick]
 $description[
 Poprawnie wyrzucono użytkownika!
 **Tag:** $userTag[$findUser[$message[1]]]
 **Osoba:** <@$findUser[$message[1]]>
 **ID:** $findUser[$message[1]]]
 $footer[Wyrzucona przez $username[$authorID]]
 $addTimestamp
 $color[RANDOM]
$onlyIf[$findUser[$message[1]]!=$clientID;**❌ Nie możesz mnie wyrzucić! :thinking:**]
$onlyIf[$findUser[$message[1]]!=$authorID;**❌ Nie możesz siebie wyrzucić! :thinking:**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**❌ Nie możesz wyrzucić osoby która ma rangę wyższą niż Twoja!**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**❌ Nie mogę wyrzucić osoby z tą samą rangą co ja**]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;**❌ Nie mogę znaleźć tej osoby!**]
$onlyIf[$message[1]!=;**❌ Oznacz kogo mam wyrzucić!**]
$onlyBotPerms[kick;**❌ Nie mam premisji!**]
$onlyPerms[kick;**❌ Nie masz premisji!*]`
})

//usun
bot.command({
name: "usun",
aliases: ['clear'],
code: `$author[Usuwanie;https://thumbs.gfycat.com/AltruisticDistinctAoudad-size_restricted.gif]
$description[**Gotowe** \`$noMentionMessage $replaceText[$replaceText[&$mentioned[1]&;&&;wiadomości\` **usunąłem**;1];&$mentioned[1]&;**ostatnie wiadomomości**;1] $replaceText[$replaceText[&$mentioned[1]&;&&;;1];&$mentioned[1]&;<@$mentioned[1]>;1]]
$clear[$message]
$color[RANDOM]
$footer[Usunięte przez: $username[$authorID]#$discriminator[$authorID]]
$suppressErrors[**Spróbuj:** \`w!usun <liczba>\`]
$onlyIf[$noMentionMessage<=500; **Możesz usunąć 2-500 wiadomości na raz!**]
$onlyIf[$noMentionMessage>=2;**Możesz usunąć 2-500 na raz!**]
$onlyIf[$noMentionMessage!=;** Napisz ile wiadomośći mam usunąć!**, **Spróbuj:** \`w!usun <liczba>\`]
$onlyIf[$isNumber[$noMentionMessage]==true;Napisz ile wiadomości mam usunąć!! **Spróbuj:** \`w!usun <liczba>\`]
$onlyIf[$message[1]!=;**Spróbuj:** \`w!usun<liczba>\`]
$onlyBotPerms[managemessages;**Nie mam permisji\`MANAGE_MESSAGES\` !**]
$onlyPerms[managemessages;**Nie masz tych permisji!:** __**Zarządzanie wiadomościami**__]`
})

//add cmd
bot.command({
name: "add-cmd",
code: `
$setservervar[ccmd;$replacetext[$replacetext[$checkcondition[$getservervar[ccmd]!=];false;$tolowercase[$message[1]]/];true;$getservervar[ccmd]$tolowercase[$message[1]]/]]
$setservervar[cdes;$getservervar[cdes]$messageslice[1;10]/]
Successfully added $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<] to the commands list, type \`w!cmd-list\` to see all available commands
$onlyif[$findtextsplitindex[$tolowercase[$message[1]]]==0;{description:Command \`$tolowercase[$message[1]]\` is available in the command list}{color:ff2050}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{description:Please don't use it \`symbol\` for trigger and response}{color:ff2050}]
$argscheck[>2;{description:Correct use \n\`\`\`\w!add-cmd <trigger> <response>\n\`\`\`}{color:ff2050}]
$onlyperms[manageserver;{description:You have no permissions for \`MANAGE_SERVER\`}{color:ff2050}{timestamp}]
`
})


//cmd
bot.command({
name: "$alwaysExecute",
code: `
$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]
$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;]
$onlyif[$isbot[$authorid]==false;]
$textsplit[$getservervar[ccmd];/] 
`
}) 
 
 
//detete cmd
 
bot.command({
name: "del-cmd",
code: `
$onlyForIDs[65331919521946011;Tylko dla skerretoo \!\]
$setservervar[ccmd;$replacetext[$getservervar[ccmd];$advancedtextsplit[$getservervar[ccmd];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
$setservervar[cdes;$replacetext[$getservervar[cdes];$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
Poprawnie usunięto cmd $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<]
$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;{description:Command \`$tolowercase[$message]\` nie!}{color:ff2050}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{description:Nie używaj \`symbol\` w tej komendzie){color:ff2050}]
$argscheck[>1;{description:Poprawne użycie: \n\`\`\`\w!del-cmd <trigger>\n\`\`\`}{color:ff2050}]
$onlyperms[manageserver;{description:Nie masz  \`MANAGE_SERVER\`}{color:ff2050}{timestamp}]
`
}) 
 

//cmd list
bot.command({
name: "cmd-list",
code: `
$title[**__Custom Commands__**]
$color[RANDOM]
$thumbnail[$servericon]
$description[\`$replacetext[$replacetext[$replacetext[$getservervar[ccmd];#right_click#;>];#left_click#;<];/;, ]\`]
$addtimestamp
$onlyif[$gettextsplitlength>=2;{description:There are no custom commands on the server \`$servername\`}{color:ff2050}]
$textsplit[$getservervar[ccmd];/]

`
}) 

//MUZYKA
bot.command({
  name:"play",
  aliasess:"p",
  code:`
  $color[RANDOM]
  $thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]]
  $title[Muzyka dodana do kolejki!]
  $description[**Poprawnie dodano** [$songInfo[title]\\]($songInfo[url]) **do kolejki**
  :stopwatch: | Długość:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration]__**
  :dvd: | Wyświetlenia:;**__NIE DŁUGO__**]
  :coffe: | Autor:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploader_name]__**
  :clock1230: | Opublikowano:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploaded]__**]
  $message;1m;{title:Error}{description:**ERROR**}{color:"RED}]
  $onlyIf[$voiceID!=;**:x: Nie jesteś na kanale głosowym! Dołącz na kanał głosowy pierw!**]`
})

bot.command({
  name:"pauza",
  code: `$pauseSong
  **:pause_button: Zapauzowano muzykę!**
  $onlyIf[$queueLength!=0;Nic w tym momencie nie leci!]
  $onlyIf[$voiceID!=;Dołącz na kanał głosowy pierw!]`
})

bot.command({
  name:"start",
  aliasess:"resume",
  code: `$resumeSong
  **:arrow_forward: Odpauzowano!**
  $onlyIf[$queueLength!=0;Nic w tym momencie nie leci!]
  $onlyIf[$voiceID!=;Dołącz na kanał głosowy pierw!]`
})

bot.command({
  name:"loop",
  code: `$replaceText[$replaceText[$chceckCondition[$loopQueue==true];true;Pętla została **włączona**];false;Pętla została **wyłączona**]
  $onlyIf[$queueLength!=0;Nic w tym momencie nie leci!]
  $onlyIf[$voiceID!=;Dołącz na kanał głosowy pierw!]`
})

bot.command({
  name:"nowplaying",
  aliasess:"np",
  code: `$author[Teraz leci;https://cdn.discordapp.com/emojis/729630163750354955.gif?size=1024]
  $title[$songInfo[title]]
  $description[$addField[Długość:$songInfo[duration]]
  $addField[URL;$songInfo[url]]]
  $footer[$botPingms ping]
  $thumbnail[$songInfo[thumbnail]]
  $color[a09fff]
  $onlyIf[$queueLength!=0;Nic w tym momencie nie leci!]
  $onlyIf[$voiceID!=;Dołącz na kanał głosowy pierw!]`
})

bot.command({
  name:"stop",
  code: `$stopSong
  $sendMessage[:stop_button: Zastopowano!;no]
  $onlyIf[$queueLength!=0;Nic w tym momencie nie leci!]
  $onlyIf[$voiceID!=;Dołącz na kanał głosowy pierw!]`
})

bot.command({
  name:"skip",
  code: `$skipSong
  :fast_forward: Pominięto!
  $onlyIf[$queueLength!=0;Nic w tym momencie nie leci!]
  $onlyIf[$voiceID!=;Dołącz na kanał głosowy pierw!]
  $onlyIf[$queueLength>1;Jest tylko **$queueLength piosenek w kolejce!**]`
})

bot.command({
  name:"usunkolejke",
  aliasess:"uk",
  code: `$clearSongQueue
  $stopSong
  $editIn[125ms; :white_check_mark: Usunięto kolejke! Usunięto **$queueLength piosenek!**]
  $onlyIf[$queueLength!=0;Nic w tym momencie nie leci!]
  $onlyIf[$voiceID!=;Dołącz na kanał głosowy pierw!]`
})

bot.command({
  name:"kolejka",
  aliasess:"queue",
  code: `$queue[1;30]
  $onlyIf[$queueLength!=0;Nic w tym momencie nie leci!]
  $onlyIf[$voiceID!=;Dołącz na kanał głosowy pierw!]`
})

bot.command({
  name:"volume",
  aliasess:"v,glosnosc",
  code: `$volume[$message[1]]
  $onlyIf[$message[1]<101;**:no_entry: Maksymalna głośnośc to 100!**
  $onlyIf[$charCount[$message[1]]<4;Błąd.]
  $onlyIf[$isNumber[$message[1]]==true;Napisz liczbę!]
  $onlyIf[$message[1]!=;**:no_entry: Głośność możesz ustawić pomiędzy 0 a 100!**]
  $editIn[1s;**:white_check_mark: Zmienionoo głośność na $message[1]%**] **Zmieniam...**
  $onlyIf[$queueLength!=0;Nic w tym momencie nie leci!]
  $onlyIf[$voiceID!=;Dołącz na kanał głosowy pierw!]`
})
//MUZYKA
