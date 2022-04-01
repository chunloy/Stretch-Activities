const talkingCalendar = function (date) {
  date = date.split('/');       //split string using forward slash as delimiter 'YYY/MM/DD' -> ['YYYY', 'MM', 'DD']
  let day = Number(date[2]);    //convert last element to a number
  let month = Number(date[1]);  //convert middle element to a number
  let year = Number(date[0]);   //convert first element to a number

  //convert to appropriate month
  switch (month) {
    case 1:
      month = 'January';
      break;
    case 2:
      month = 'February';
      break;
    case 3:
      month = 'March';
      break;
    case 4:
      month = 'April';
      break;
    case 5:
      month = 'May';
      break;
    case 6:
      month = 'June';
      break;
    case 7:
      month = 'July';
      break;
    case 8:
      month = 'August';
      break;
    case 9:
      month = 'September';
      break;
    case 10:
      month = 'October';
      break;
    case 11:
      month = 'November';
      break;
    case 12:
      month = 'December';
      break;
  }

  //convert day to appropriate ordinal
  switch (day) {
    case 1:
    case 21:
      day += 'st';
      break;
    case 2:
    case 22:
      day += 'nd';
      break;
    case 3:
    case 23:
      day += 'rd';
      break;
    default:
      day += 'th';
      break;
  }

  return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));