const input = "aksjdk123123X!#"


const expression = /^[0-9]*$/


const expression2 = /^[a-zA-Z]+$/


const expression3 = /^[a-zA-Z0-9]*$/

const evaluation = expression.test(input)

const evaluation2 = expression2.test(input)

const evaluation3 = expression3.test(input)

console.log(`El input: ${input}, contiene sólo números?: ${evaluation}`)

console.log(`El input: ${input}, contiene sólo letras?: ${evaluation2}`)

console.log(`El input: ${input}, contiene sólo letras y números?: ${evaluation3}`)