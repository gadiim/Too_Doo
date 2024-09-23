// services/mock/mock-todo-days.ts
export const mockDays = [
    { id: 1, name: '', ordinal: 'first', ordinalNumber: '1st' },
    { id: 2, name: '', ordinal: 'second', ordinalNumber: '2nd' },
    { id: 3, name: '', ordinal: 'third', ordinalNumber: '3rd' },
    { id: 4, name: '', ordinal: 'fourth', ordinalNumber: '4th' },
    { id: 5, name: '', ordinal: 'fifth', ordinalNumber: '5th' },
    { id: 6, name: '', ordinal: 'sixth', ordinalNumber: '6th' },
    { id: 7, name: '', ordinal: 'seventh', ordinalNumber: '7th' },
    { id: 8, name: '', ordinal: 'eighth', ordinalNumber: '8th' },
    { id: 9, name: '', ordinal: 'ninth', ordinalNumber: '9th' },
    { id: 10, name: '', ordinal: 'tenth', ordinalNumber: '10th' },
    { id: 11, name: '', ordinal: 'eleventh', ordinalNumber: '11th' },
    { id: 12, name: '', ordinal: 'twelfth', ordinalNumber: '12th' },
    { id: 13, name: '', ordinal: 'thirteenth', ordinalNumber: '13th' },
    { id: 14, name: '', ordinal: 'fourteenth', ordinalNumber: '14th' },
    { id: 15, name: '', ordinal: 'fifteenth', ordinalNumber: '15th' },
    { id: 16, name: '', ordinal: 'sixteenth', ordinalNumber: '16th' },
    { id: 17, name: '', ordinal: 'seventeenth', ordinalNumber: '17th' },
    { id: 18, name: '', ordinal: 'eighteenth', ordinalNumber: '18th' },
    { id: 19, name: '', ordinal: 'nineteenth', ordinalNumber: '19th' },
    { id: 20, name: '', ordinal: 'twentieth', ordinalNumber: '20th' },
    { id: 21, name: '', ordinal: 'twenty-first', ordinalNumber: '21st' },
    { id: 22, name: '', ordinal: 'twenty-second', ordinalNumber: '22nd' },
    { id: 23, name: '', ordinal: 'twenty-third', ordinalNumber: '23rd' },
    { id: 24, name: '', ordinal: 'twenty-fourth', ordinalNumber: '24th' },
    { id: 25, name: '', ordinal: 'twenty-fifth', ordinalNumber: '25th' },
    { id: 26, name: '', ordinal: 'twenty-sixth', ordinalNumber: '26th' },
    { id: 27, name: '', ordinal: 'twenty-seventh', ordinalNumber: '27th' },
    { id: 28, name: '', ordinal: 'twenty-eighth', ordinalNumber: '28th' },
    { id: 29, name: '', ordinal: 'twenty-ninth', ordinalNumber: '29th' },
    { id: 30, name: '', ordinal: 'thirtieth', ordinalNumber: '30th' },
    { id: 31, name: '', ordinal: 'thirty-first', ordinalNumber: '31st' }
  ];
  
//   export const DAYS = Array.from({ length: 31 }, (_, i) => {
//     const day = i + 1;
//     return {
//       id: day,
//       name: `Day ${day}`,                        // // logic name creating
//       ordinal: getOrdinal(day),
//       ordinalNumber: `${day}${getOrdinalSuffix(day)}`
//     };
//   });
  
//   function getOrdinal(day: number): string {
//     const ordinals = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth', 'twentieth', 'twenty-first', 'twenty-second', 'twenty-third', 'twenty-fourth', 'twenty-fifth', 'twenty-sixth', 'twenty-seventh', 'twenty-eighth', 'twenty-ninth', 'thirtieth', 'thirty-first'];
//     return ordinals[day - 1] || '';
//   }
  
//   function getOrdinalSuffix(day: number): string {
//     const suffixes = ['th', 'st', 'nd', 'rd'];
//     const value = day % 100;
//     return suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0];
//   }