    let soldier = {
        health: 400,
        aromor: 100
    }

    let john = {
        health:100
    };

    john.__proto__=soldier;

    console.log(john);
    console.log(john.aromor);