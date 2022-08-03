const canvas = document.getElementById("myCanvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");
const road = new Roads(canvas.width / 2, canvas.width * 0.9);
const car = new Car(100, 100, 30, 50);
car.draw(ctx);
const controls = new Controls();

animate();

function animate() {
	car.update(controls);
	canvas.height = window.innerHeight;
	road.draw(ctx);
	car.draw(ctx);
	requestAnimationFrame(animate);
}
