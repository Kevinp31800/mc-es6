(() => {
	const app = {
		tasks:null,
		init(){
			this.getTasks();
		},
		getTasks(){
			fetch('/database/tasks.json')
			.then(res=>res.json())
			.then(data=>{
				this.tasks = data.tasks;
				this.addTasks();
			})
		},
		addTasks(){
			// const newli = document.createElement("li");
			// newli.innerHTML = this.tasks[0].content;
			// const list = document.getElementById('newTodo');
			// list.appendChild(newli);
			this.tasks.map(task=>{
				document.getElementById('list').innerHTML += `<li>${task.content}</li>`
			})
		}
	}
	app.init();
})();
