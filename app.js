const canvas = document.getElementById("myCanvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);
car.draw(ctx);
const controls = new Controls();

animate();

function animate() {
	car.update(controls);
	canvas.height = window.innerHeight;
	car.draw(ctx);
	requestAnimationFrame(animate);
}
