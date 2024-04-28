type TourDate = {
    day: string;
    date: string;
    city: string;
    country: string;
    venue: string;
};

// placeholder tour dates which could come from a cdn/api later on
const tourDates: TourDate[] = [
    { day: "Wednesday", date: "03/07/19", city: "Glasgow", country: "UK", venue: "Hug & Pint" },
    { day: "Thursday", date: "04/07/19", city: "London", country: "UK", venue: "Boston Music Rooms" },
    { day: "Friday", date: "05/07/19", city: "Le Havre", country: "France", venue: "VENUE TBC" },
    { day: "Saturday", date: "06/07/19", city: "Lyon", country: "France", venue: "Le Farmer" },
    { day: "Sunday", date: "07/07/19", city: "Milan", country: "Italy", venue: "Viale Toscana 31" },
    { day: "Monday", date: "08/07/19", city: "Bern", country: "Switzerland", venue: "Die Cafete" },
    { day: "Tuesday", date: "09/07/19", city: "Salzburg", country: "Austria", venue: "Rockhouse" },
    { day: "Wednesday", date: "10/07/19", city: "Vienna", country: "Austria", venue: "Venster 99" },
    { day: "Thursday", date: "11/07/19", city: "Budapest", country: "Hungary", venue: "Dürer Kert" },
    { day: "Friday", date: "12/07/19", city: "Cluj-Napoca", country: "Romania", venue: "Flying Circus" },
    { day: "Saturday", date: "13/07/19", city: "Periam", country: "Romania", venue: "Rock La Mures Festival" },
    { day: "Sunday", date: "14/07/19", city: "Bratislava", country: "Slovakia", venue: "Kulturák Klub" },
    { day: "Monday", date: "15/07/19", city: "Prague", country: "Czech Republic", venue: "Modra Vopice" },
    { day: "Tuesday", date: "16/07/19", city: "Leipzig", country: "Germany", venue: "Neumanns" },
    { day: "Wednesday", date: "17/07/19", city: "Cologne", country: "Germany", venue: "Sonic Ballroom" },
    { day: "Thursday", date: "18/07/19", city: "Hamburg", country: "Germany", venue: "Bar 227 - possible upgrade" },
    { day: "Friday", date: "19/07/19", city: "Eernegem", country: "Belgium", venue: "B52" },
    { day: "Saturday", date: "20/07/19", city: "Paris", country: "France", venue: "Le Cirque Electrique" },
    { day: "Sunday", date: "21/07/19", city: "Leeds", country: "UK", venue: "The Key Club" }
];

export default tourDates;
