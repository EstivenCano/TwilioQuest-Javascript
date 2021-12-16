const firstValue = process.argv[2];
const secondValue = process.argv[3];

function sortOrder(first, second) {
  if (first.toLocaleLowerCase() < second.toLocaleLowerCase()) {
    return -1;
  } else if (first.toLocaleLowerCase() > second.toLocaleLowerCase()) {
    return 1;
  } else if (first.toLocaleLowerCase() === second.toLocaleLowerCase()) {
    return 0;
  }
}

console.log(sortOrder(firstValue, secondValue));
