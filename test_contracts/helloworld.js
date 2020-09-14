/**
 * NAME: HELLOWORLD
 * DESCRIPTION: SIMPLE HELLO WORLD MODULE
 * AUTHOR: TURINGLABS
 * VERSION: 1.0.4
 * IMMUTABLE: false
 */

const time = new Date()
async function constructor() {

}

function helloworld(who) {
    return new Promise(async response => {
        if (who !== undefined && who.length > 0) {
            response('Hello ' + who + ' identified with address ' + request.address + ' now are ' + time + '!')
        } else {
            response('Hello who?')
        }
    })
}