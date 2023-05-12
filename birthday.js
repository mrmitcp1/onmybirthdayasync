async function onMyBirthDayAsync(isKayoSick){
    if (!isKayoSick) return 2;
    throw new Error('i am sad')
}
async function doSomeThing(){
    try {
        let result = await onMyBirthDayAsync(false)
        console.log('i have '+ result +' cake')
    }
    catch (error){
        console.log(error)
    }
    finally {
        console.log('party')
    }
}
doSomeThing()