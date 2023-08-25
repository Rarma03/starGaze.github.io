//object for coordinates
const coordinates = {
    x: 0,
    y: 0
}

const circles = document.body.querySelectorAll('.circle')
circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
})


window.addEventListener("mousemove", funtion = (val) => {
    //below shows the coordinates of mouse moving
    // console.log(val.clientX, val.clientY);  --(1)

    coordinates.x = val.clientX;
    coordinates.y = val.clientY;

    //similar as 1 but in object form
    // console.log(coordinates)

    // to make circle follow mouse 
    animate_circle();
})

function animate_circle() {
    let X = coordinates.x;
    let Y = coordinates.y;

    circles.forEach(function (circle, index) {
        circle.style.left = X - 12 + 'px';
        circle.style.top = Y - 12 + 'px';
        //--(2)
        circle.x = X;
        circle.y = Y;

        //--(3) to make trail
        // circle.style.scale = index;  ❌
        // circle.style.scale = index/10; ✅ reverse trail
        // circle.style.scale = (10 - index) / 10; //✅
        circle.style.scale = (circles.length - index) / circles.length; //✅

        //--(1) old which make only diagonal of circles
        // x += 10;
        // y += 10;
        //--(2)
        const nextcircle = circles[index + 1] || circle[0];
        X += ((nextcircle.x) - X) * 0.5;
        // took random value 
        Y += ((nextcircle.y) - Y) * 0.5;
    })
    //below method tells the browser that you wish to do an animation
    //so browser call a specified function and update animation 
    //before next repaint
    // requestAnimationFrame(animate_circle);
}