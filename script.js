const textarea = document.getElementById('text');
const count = document.getElementById('tot');
function updateCharCount() {
    if(textarea.value.length<=50){
        count.textContent = textarea.value.length;
        document.getElementById('sub').textContent=50-textarea.value.length;
    }
    else{
        alert("Cannot enter more than 50 characters");
        textarea.value = textarea.value.slice(0, -1);
    }
}
textarea.addEventListener('input', updateCharCount);