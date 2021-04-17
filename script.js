const form = document.getElementById('form')

form.addEventListener('submit', e =>{
    e.preventDefault()

    const resultContainer = document.getElementById('result')
    const amountString =document.getElementById('amount').value 
    const procentString = document.getElementById('procent').value
    const peopleString = document.getElementById('people').value
    let stringOutput =''
    
    if(!(amountString && procentString && peopleString)){
        stringOutput = ''
        resultContainer.innerHTML = stringOutput

        return
    }
    

    const amount = parseInt(amountString)
    const procent = parseInt(procentString)
    const people = parseInt(peopleString)

    if(people === 0){
        stringOutput = "People can't be zero."
        resultContainer.innerHTML = stringOutput

        return
    }


    const result = Math.round((amount*procent/100)/people)
    
    stringOutput = `${result} RON / each`
    resultContainer.innerHTML = stringOutput
})