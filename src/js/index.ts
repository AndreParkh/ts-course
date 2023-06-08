const rainSound = document.getElementById('rainSound') as HTMLAudioElement
const summerSound = document.getElementById('summerSound') as HTMLAudioElement
const winterSound = document.getElementById('winterSound') as HTMLAudioElement



const slider = document.getElementById('myRange') as HTMLInputElement

const volume = slider.value

const changeStateSound = (target: EventTarget):any => {
	if (target instanceof Element){
		const targetID = target.id
		
		switch (targetID) {
			case 'rain':
				summerSound.pause();
				winterSound.pause();
				rainSound.paused? rainSound.play() : rainSound.pause();
				document.body.style.backgroundImage = 'url(/src/assets/rainy-bg.jpg)'
				break;
			case 'summer':
				rainSound.pause();
				winterSound.pause();
				summerSound.paused? summerSound.play() : summerSound.pause();
				document.body.style.backgroundImage = 'url(/src/assets/summer-bg.jpg)'
				break;
			case 'winter':
				rainSound.pause();
				summerSound.pause();
				winterSound.paused? winterSound.play() : winterSound.pause();
				document.body.style.backgroundImage = 'url(/src/assets/winter-bg.jpg)'
				break;
			default: break;
		}
	}
}

slider.addEventListener('change', ()=>{
	console.log(slider.value)
	rainSound.volume = Number(slider.value)
	summerSound.volume = Number(slider.value)
	winterSound.volume = Number(slider.value)
})


document.body.addEventListener('click', (e)=>{changeStateSound(e.target!)})

// rainNode.addEventListener('click', (e)=>changeStateSound(e.target, rainSound))
// summerNode.addEventListener('click', ()=>changeStateSound(summerSound))
// winterNode.addEventListener('click', ()=>changeStateSound(winterSound))