
function randDay(){
  return(Math.floor(Math.random() * 6) + 1);
}

function randMonth(){
  return(Math.floor(Math.random() * 11) + 1);
}

function randYear(){
  var num = Math.floor(Math.random() * 2) + 1;
  if (num == 1)
    return(2015);
  if (num == 2)
    return(2016);
  if (num == 3)
    return(2017);
}

function getReviews(arr, obj)
{
  var sum = 0;
  var total_entries = 10000;
  for (var i = 0; i < total_entries; i++) {
    obj.reviews[i] = arr[Math.floor(Math.random() * 5)];
  }
  for (var i = 0; i < obj.reviews.length; i++) {
    sum += obj.reviews[i].rating_individual;
  }
  obj.rating = sum / total_entries;
  return(obj);
}

var reviews = [
  {
    rating_individual: 1,
    username: "pizzaboi",
    comment: "this place was really dirty. i do not recommend",
    date: {
      day: randDay(),
      month: randMonth(),
      year: randYear()
    }
  },
  {
    rating_individual: 2,
    username: "soccermama",
    comment: "You refused to give my son a new meal after you undercooked his potato!!",
    date: {
      day: randDay(),
      month: randMonth(),
      year: randYear()
    }
  },
  {
    rating_individual : 3,
    username: "angrypapa",
    comment: "One of your waiters flirted with my daughter. I do not think that is professional; however, I loved the food",
    date: {
      day: randDay(),
      month: randMonth(),
      year: randYear()
    }
  },
  {
    rating_individual : 4,
    username: "drinkdrinkboy",
    comment: "Amazing food. I would give you a 5 if you had filled my drink more often.",
    date: {
      day: randDay(),
      month: randMonth(),
      year: randYear()
    }
  },
  {
    rating_individual: 5,
    username: "steakboi",
    comment: "the steak was great.",
    date: {
      day: randDay(),
      month: randMonth(),
      year: randYear()
    }
  }
];

var google = {
  rating: 0,
  reviews: []
}
var result = getReviews(reviews, google);
console.log(result);
module.exports = result;
