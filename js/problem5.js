const loadAdvices = async() => {
    const url = 'https://api.adviceslip.com/advice';
    try {
        const res = await fetch(url);
        const data = await res.json();
        showAdvice(data.slip);
    } catch (error) {
        console.log(error)
    }
}
const showAdvice = advice => {
    const adviceContainer = document.getElementById('show-advice');
    const div = document.createElement('div');
    div.innerHTML =`
    <div class="card w-full bg-base-100 shadow-xl image-full h-full hover:bg-purple-400">
            <div class="card-body">
              <q class="tracking-wide italic hover:not-italic">${advice.advice}</q>
              <div class="card-actions justify-end">
                <h2 class="card-title text-sm text-green-200">-Mohammad Al-Amin</h2>
              </div>
            </div>
          </div>
    `
    adviceContainer.appendChild(div);
}
loadAdvices()

const loadAdviceById = async(id) => {
    const url = `https://api.adviceslip.com/advice/${id}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        showAdvice(data.slip);
    } catch (error) {
        console.log(error)
    }
}
document.getElementById('search-btn').addEventListener('click', function(){
    const searchElement = document.getElementById('search-field');
    const searchId = searchElement.value;
    loadAdviceById(searchId);
})
document.getElementById('search-field').addEventListener('keypress', function(event){
    const searchElement = document.getElementById('search-field');
    const searchId = searchElement.value;
    if(event.key === 'Enter'){
    loadAdviceById(searchId);
    }
})