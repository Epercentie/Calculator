class Calculator {
    constructor(previousOperandandTextElement, currentOperandTextElement){
        this.previousOperandandTextElement= previousOperandandTextElement
    this.currentOperandTextElement=currentOperandTextElement
this.clear()}
}

clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}
const Calculator = new Calculator(previousOperandandTextElement, currentOperandTextElement

)
numberButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        Calculator.appendNumber(button.innerText)
        Calculator.updateDisplay()
    })
})

delete(){}
appendNumber(number){if(number ==='.'&& this.currentOperand.includes(.)) return this.currentOperand = this.currentOperand.toString() + number.toString()}
chooseOperation(operation){
    operationButtons.forEach(button=>){
        button.addEventListener('click',() =>){
            Calculator.chooseOperation(button.innerText)
Calculator.updateDisplay()
    })
})

chooseOperation(operation){
    if (this.currentOperand === '') return
    if (this.previousOperand !== ''){
        this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}

equalsButton.addEventListener('click', button =>){
    Calculator.compute()
    Calculator.updateDisplay()
})

compute(){
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return 
    switch(this.operation){
        case '+':
            computation = prev + current
            break
            case '-':
                computation = prev - current
                break
                case 'X':
                    computation = prev X current
                    break
                    case '÷':
                        computation = prev / current
                        break
                        default:
                            return 


    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
}
allClearButton.addEventListener('click', button => {
    Calculator.clear()
    Calculator.updateDisplay()
})
delete(){
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
}

deleteButton.addEventListener('click', button =>{
    Calculator.delete()
    Calculator.updateDisplay()
})

updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}



getDisplayNumber(number) {
    const floatNumber = parseFloat(number)
    if (isNaN(floatNumber)) return ''
    return floatNumber.toLocaleString('en')
}

getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }
Finally, we need to clear the previous operand value. This can be achieved by creating an if-else statement and checking if this.previousOperandTextElement.innerText is an empty string.

getDisplayNumber(number) {
if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }




<div data-previous-operand class="previous-operand"></div>
<div data-current-operand class="current-operand"></div>
<button data-delete>DEL</button>
<button data-operation>÷</button>
<button data-number>1</button>
<button data-number>2</button>
<button data-number>3</button>
<button data-operation>X</button>
<button data-number>4</button>
<button data-number>5</button>
<button data-number>6</button>
<button data-operation>+</button>
<button data-number>7</button>
<button data-number>8</button>
<button data-number>9</button>
<button data-operation>-</button>
<button data-number>.</button>
<button data-number>0</button>
<button data-equals class="span-two">=</button>

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandandTextElement = document.querySelector('[data-privious-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')







