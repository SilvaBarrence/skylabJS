function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        setTimeout(returnPromise, 2000)
        function returnPromise(){
            if (idade >= 18) {
                resolve();
            } else {
                reject();
            }
        }
    });
}

checaIdade(11)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.log("Menor que 18");
    });