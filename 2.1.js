
        const readlineSync = require('readline-sync')
       

        let userAge = readlineSync.question('how old are you?');
        if (userAge >= 18) {
                console.log('You\'r an adult!')
        } else {
                console.log('You\' are  child')
        }
