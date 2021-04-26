let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint
    Bodies = Matter.Bodies;

let engine = Engine.create();

let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600
    }
});

let mouse = Mouse.create(render.canvas)
let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse 
})
render.mouse = mouse

let ground = Bodies.rectangle(400, 610, 820, 60, {isStatic:true});
let plank = Bodies.rectangle(400, 200, 200, 10,)
let boxA = Bodies.rectangle(400, 200, 60, 60,)
let circle1 = Bodies.circle(400,100, 60)

World.add(engine.world, [boxA, ground, circle1, mouseConstraint, plank]);

Engine.run(engine);

Render.run(render);