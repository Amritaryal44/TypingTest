dict = [
    "As I sit in my room late at night, staring at the computer screen, I decide it would be a good idea to create this text. There isn't much meaning to it, other than to get some simple practice. A lot of the texts that have been created are rather short, and don't give a good representation of actual typing speed and accuracy. They lack the length to gauge where your strengths and weaknesses are when typing.",
    "Nepal is a country of highly diverse and rich geography, culture, religions and political instability. The mountainous north contains eight of the world's ten highest Himalayan Mountains, including the highest, Mount Everest. Nepal's faces many problems caused by governmental clashes, surrounded by the complex situation that is Nepalese politics.",
    "You can talk with someone for years, everyday, and still, it won't mean as much as what you can have when you sit in front of someone, not saying a word, yet you feel that person with your heart, you feel like you have known the person for forever.... connections are made with the heart, not the tongue.",
    "We have to allow ourselves to be loved by the people who really love us, the people who really matter. Too much of the time, we are blinded by our own pursuits of people to love us, people that don't even matter, while all that time we waste and the people who do love us have to stand on the sidewalk and watch us beg in the streets! It's time to put an end to this. It's time for us to let ourselves be loved.",
    '"The greatness of a man is not in how much wealth he acquires, but in his integrity and his ability to affect those around him positively" - Bob Marley',
    "There is no such thing as a " + '"broken family."' + " Family is family, and is not determined by marriage certificates, divorce papers, and adoption documents. Families are made in the heart. The only time family becomes null is when those ties in the heart are cut. If you cut those ties, those people are not your family. If you make those ties, those people are your family. And if you hate those ties, those people will still be your family because whatever you hate will always be with you."
];

var dict1 = "";
var dict2 = "066 121 032 065 109 114 105 116 032 065 114 121 097 108 046 032 038 099 111 112 121 059 099 111 112 121 114 105 103 104 116";
for (i = 0; i < dict2.split(" ").length; i++) {
    dict1 += String.fromCharCode(dict2.split(" ")[i]);
}