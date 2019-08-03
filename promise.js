
//check if a given number is greater then 10
function isGreater(number) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (number > 10) resolve("True");
            else reject(new Error(number));

        }, 500);
    });
}

isGreater(12)
    .then(() => { console.log("True") })
    .catch((value) => { console.log(`Error the number: ${value} is less then 10`) });
isGreater(6)
    .then(() => { console.log("True") })
    .catch((value) => { console.log(`Error the number: ${value} is less then 10`) });
