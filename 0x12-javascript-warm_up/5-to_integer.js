#!/usr/bin/node
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Not a number');
} else {
  const number = Number(args[0]);
  if (Number.isInteger(number)) {
    console.log(`My number: ${number}`);
  } else {
    console.log('Not a number');
  }
}
