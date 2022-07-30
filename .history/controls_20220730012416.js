class Control {
	constructor() {
		this.forward = false;
		this.left = false;
		this.right = false;
		this.reverse = false;

		this.#addKeyboardListeners();
	}

	$addKeyboardListeners() {
		document.onkeydown = (e) => {
			switch (e.key) {
				case "ArrowUp":
					this.forward = true;
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
	}
}