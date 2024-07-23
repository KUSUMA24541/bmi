const bmiindex = document.querySelector('.bmiindex')
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const click = document.querySelector('#clicked')
const res = document.querySelector('#result')


click.addEventListener('click', function(){
    const heightValue =  Number(height.value)
    const weightValue =  Number(weight.value)

    if(heightValue> 0 &&  weightValue > 0){
        //console.log("you entered fair number")
        let bmi = weightValue/( heightValue*heightValue )
        console.log(bmi)
        res.innerHTML= `${bmi}`
        //msg.innerHTML = 'your bmi is ${bmi}'

        
    }else{
        console.log('check your input')
        res.innerHTML = `chek your input`
        
    }
})



