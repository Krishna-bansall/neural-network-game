class Car {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	update(controls) {
		if (controls.forward) {
			this.y -= 2;
		}
		if (controls.reverse) {
			this.y += 2;
		}
	}
	draw(ctx) {
		ctx.beginPath();
		ctx.rect(
			this.x - this.width / 2,
			this.y - this.height / 2,
			this.width,
			this.height
		);
		ctx.fill();
	}
}
