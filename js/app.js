/*----------------- Constants -----------------*/



/*------------- Variables (state) -------------*/



/*--------- Cached Element References ---------*/

const initialCount = document.querySelector('#initial-count');
const input = document.querySelector('#user-input');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');

/*-------------- Event Listeners --------------*/
plusBtn.addEventListener('click', addResult)
minusBtn.addEventListener('click', minusResult)


/*----------------- Functions -----------------*/

function addResult() {
  if (parseInt(initialCount.innerText) === 0) {
    return initialCount.innerText = parseInt(input.value)
	} else {
    return initialCount.innerText =parseInt(input.value) + parseInt(initialCount.innerText)
  }
}
function minusResult() {
  let result = parseInt(input.value);
  if (parseInt(initialCount.innerText) === 0) {
    return initialCount.innerText = result -= parseInt(initialCount.innerText)
	} else {
    return (initialCount.innerText = parseInt(initialCount.innerText) - parseInt(input.value));
  }
}
