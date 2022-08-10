class Roads {
	constructor(x, width, laneCount = 3) {
		this.x = x;
		this.width = width;
		this.laneCount = laneCount;

		this.left = x - width / 2;
		this.right = x + width / 2;

		const infinity = 100000;
		this.top = -infinity;
		this.bottom = infinity;
	}

	draw = (ctx) => {
		ctx.lineWidth = 5;
		ctx.strokeStyle = "white";

		for (let i = 1; i < this.laneCount; i++) {
			const x = lerp(this.left, this.right, i / this.laneCount);

			ctx.beginPath();
			ctx.moveTo(x, this.top);
			ctx.lineTo(x, this.bottom);
			ctx.stroke();
		}
	};
}
