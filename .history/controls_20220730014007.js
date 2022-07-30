class Controls {
	constructor() {
		this.forward = false;
		this.left = false;
		this.right = false;
		this.reverse = false;

		this.#addKeyboardListeners();
	}

	#addKeyboardListeners() {
		document.onkeydown = (e) => {
			console.log(e.key);
			switch (e.key) {
				case "ArrowUp":
					this.forward = true;
					console.log("forward");
					break;
				case "ArrowLeft":
					this.left = true;
					break;
				case "ArrowRight":
					this.right = true;
					break;
				case "ArrowDown":
					this.reverse = true;
					break;
			}
		};

		document.onkeyup = (e) => {
			console.log(e.key);
			switch (e.key) {
				case "ArrowUp":
					this.forward = false;
					break;
				case "ArrowLeft":
					this.left = false;
					break;
				case "ArrowRight":
					this.right = false;
					break;
				case "ArrowDown":
					this.reverse = false;
					break;
			}
		};
		console.table(this);
	}
}
