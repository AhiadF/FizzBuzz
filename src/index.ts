for (let i = 50; i < 500; i++) {
  i % 3 == 0 && i % 5 == 0
    ? console.log('Brunch')
    : i % 3 == 0
    ? console.log('Breakfast')
    : i % 5 == 0
    ? console.log('Lunch')
    : console.log(i);
}
