//define UI 
const form=document.querySelector('#task-form')
const tasklist=document.querySelector('.collection')
const taskinput=document.querySelector('#task')
const clearbtn=document.querySelector('.clear-tasks')
const filter=document.querySelector('#filter')

//load all events
loadEventListeners();
function loadEventListeners(){
	//add task event
	form.addEventListener('submit',addTask)
	//remove task event
	tasklist.addEventListener('click',removeTask)
	//clear task
	clearbtn.addEventListener('click',clearTask)
	//filter task
	filter.addEventListener('keyup',filterTask)
}

//add task
function addTask(e){
	if(taskinput.value ===''){
		alert('add a task')
	}

const li=document.createElement('li')
li.className='collection-item'
li.appendChild(document.createTextNode(taskinput.value))

const link=document.createElement('a')
link.className='delete-item secondary-content'
link.innerHTML='<i class ="fa fa-remove"></i>'


li.appendChild(link)
tasklist.appendChild(li)
taskinput.value='';
e.preventDefault();
}

////remove task 
function removeTask(e){
	if(e.target.parentElement.classList.containes('delete-item')){
		if(conform('Are You Sure?')){
		e.target.parentElement.parentElement.remove()
	}
}

}

//clear task
function clearTask(e){
	tasklist.innerHTML='';
	e.preventDefault()
}

//filter task
function filterTask(e){
	const text=e.target.value.toLowerCase()
    document.querySelectorAll('.collection-item').forEach(function(task){
    	const item=task.firstChild.textContent
    	if(item.toLowerCase().indexOf(task)!=-1){
    		task.style.display='block'
    	}
    	else{
    		task.style.display='none'
    	}
    })
}