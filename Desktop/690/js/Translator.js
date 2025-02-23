let es = 'Spanish';
let de = 'German';
let en = 'English';
let fr = 'French';

let user = prompt ("Type,Spanish, German, English, French to translate Hello World in that language");

if (user == es) {
    document.write("Hello World translated in Spanish is:Hola Mundo");
} else if (user == de) {
    document.write("Hello World translated in German is: Hallo Welt");
} else if (user == en) {
    document.write("Hello World translated in English is:Hello World");
} else if (user == fr) {
    document.write("Hello World translated in French is: Bonjour le monde");
} else 
    document.write("Hello World");


