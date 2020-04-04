//adapted from https://github.com/xxnatc/typing.js
const typing = id => {
  // set typing speed and wait time
  const timeChar = 100 // time until next letter

  const cursorChar = "&#9608;"
  const originText = document.getElementById(id).innerHTML
  const cursorLine = document.getElementById("cursor-line")
  let currentTimeout, showCursor

  const typeWriter = () => {
    let loc = document.getElementById(id)
    let fullText = originText
    let letterCount = 0

    // this function spits out one letter per call, then calls the subsequent typeLetter()
    const typeLetter = () => {
      currentTimeout = setTimeout(() => {
        loc.className = "visible"
        letterCount += 1
        const showText = fullText.substring(0, letterCount)

        // stops the function from self-calling when all letters are typed
        if (letterCount === fullText.length) {
          loc.innerHTML =
            showText +
            '<span class="typed-cursor typed-cursor-blink">' +
            cursorChar +
            "</span>"
        } else {
          loc.innerHTML =
            showText + '<span class="typed-cursor">' + cursorChar + "</span>"
          typeLetter()
        }
      }, timeChar)
    }

    typeLetter()

    // show cursor on next line
    const totalTime = fullText.length * timeChar + timeChar
    // prettier-ignore
    console.log('crlntn -- typing.js fullText',fullText)
    showCursor = setTimeout(() => {
      if (document.getElementById("cursor-line") !== null) {
        document.getElementById("cursor-line").className = "visible"
      }
    }, totalTime)
  }

  typeWriter()
}

export default typing
