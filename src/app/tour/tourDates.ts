type TourDate = {
    date: string;
    location: string
    venue: string;
};

// placeholder tour dates which could come from a cdn/api later on
const tourDates: TourDate[] = [
  { date: "Wednesday 03/07/19", location: "Glasgow, UK", venue: "Hug & Pint" },
  { date: "Thursday 04/07/19", location: "London, UK", venue: "Boston Music Rooms" },
  { date: "Friday 05/07/19", location: "Le Havre, France", venue: "VENUE TBC" },
  { date: "Saturday 06/07/19", location: "Lyon, France", venue: "Le Farmer" },
  { date: "Sunday 07/07/19", location: "Milan, Italy", venue: "Viale Toscana 31" },
  { date: "Monday 08/07/19", location: "Bern, Switzerland", venue: "Die Cafete" },
  { date: "Tuesday 09/07/19", location: "Salzburg, Austria", venue: "Rockhouse" },
  { date: "Wednesday 10/07/19", location: "Vienna, Austria", venue: "Venster 99" },
  { date: "Thursday 11/07/19", location: "Budapest, Hungary", venue: "Dürer Kert" },
  { date: "Friday 12/07/19", location: "Cluj-Napoca, Romania", venue: "Flying Circus" },
  { date: "Saturday 13/07/19", location: "Periam, Romania", venue: "Rock La Mures Festival" },
  { date: "Sunday 14/07/19", location: "Bratislava, Slovakia", venue: "Kulturák Klub" },
  { date: "Monday 15/07/19", location: "Prague, Czech Republic", venue: "Modra Vopice" },
  { date: "Tuesday 16/07/19", location: "Leipzig, Germany", venue: "Neumanns" },
  { date: "Wednesday 17/07/19", location: "Cologne, Germany", venue: "Sonic Ballroom" },
  { date: "Thursday 18/07/19", location: "Hamburg, Germany", venue: "Bar 227" },
  { date: "Friday 19/07/19", location: "Eernegem, Belgium", venue: "B52" },
  { date: "Saturday 20/07/19", location: "Paris, France", venue: "Le Cirque Electrique" },
  { date: "Sunday 21/07/19", location: "Leeds, UK", venue: "The Key Club" }
];

export default tourDates;
