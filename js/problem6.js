const loadWordById = async(searchText) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        showWord(data);
    } catch (error) {
        console.log(error)
    }
}
const showWord = words => {
    const wordsContainer = document.getElementById('show-words');
    wordsContainer.innerHTML = '';
    words.forEach(word => {
    const div = document.createElement('div');
    div.innerHTML =`
    <div class="card w-full glass">
    <div class="card-body">
      <h3 class="text-green">${word ? word.word : ''}</h3>
      <div class="flex">
        <p class="text-blue my-3">Pronunciation in Usa :</p>
        <audio controls>
        <source src="${word.phonetics[0] ? word.phonetics[0].audio : ''}" type="audio/ogg">
        </audio>
      </div>
      <p>${word.phonetics[1] ? word.phonetics[1].text : ''}</p>
      <div class="flex">
        <p class="text-blue my-3">Pronunciation in Uk :</p>
        <audio controls>
        <source src="${word.phonetics[1] ? word.phonetics[1].audio : ''}" type="audio/ogg">
        </audio>
      </div>
      <p>${word.phonetics[2] ? word.phonetics[2].text : ''}</p>
        
      <p>Type of Parts of speech: <span class="text-primary">${word.meanings[0] ? word.meanings[0].partOfSpeech : ''}</span></p>
      <p>Definition: <span class="text-primary">${word.meanings[0].definitions[0] ? word.meanings[0].definitions[0].definition : ''}</span></p>
      <p>Synonyms: <span class="text-primary">${word.meanings[0] ? word.meanings[0].synonyms : 'none'}</span></p>
      <p>Antonyms: <span class="text-primary">${word.meanings[0] ? word.meanings[0].antonyms : ''}</span></p>
    </div>
  </div>
    `
    wordsContainer.appendChild(div);
    });
   
}


document.getElementById('search-btn').addEventListener('click', function(){
    const searchElement = document.getElementById('search-field');
    const searchText = searchElement.value;
    loadWordById(searchText);
})
document.getElementById('search-field').addEventListener('keypress', function(event){
    const searchElement = document.getElementById('search-field');
    const searchText = searchElement.value;
    if(event.key === 'Enter'){
        loadWordById(searchText);
    }
})