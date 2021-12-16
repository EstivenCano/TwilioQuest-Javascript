argument = parseInt(process.argv[2]);

if (argument == 0) {
  console.log("alive");
} else if (argument == 1) {
  console.log("flowering");
} else if (argument == 2) {
  console.log("shedding");
} else if (argument > 3) {
  console.log("other");
}
