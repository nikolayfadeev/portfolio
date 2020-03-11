window.onload = function() {
    let x = 0;
    let y = 0;
    let r = 0;


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function drowCircle(x,y,r,color) {
        ctx.beginPath();
        ctx.fillStyle = 'color';
        ctx.arc(x, y, r, 0, Math.PI*2, false);
        ctx.fill();
        ctx.closePath();
    }

    let rendNumXY = setInterval(function () {

        x = getRandomInt(0, 1920);
        y = getRandomInt(80, 1080);
        r = getRandomInt(1,20);
        drowCircle(x,y,r, '#e3e3d7');

    }, 500);



    let cnv = document.getElementById("bg-main");
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;

    let ctx = cnv.getContext('2d');




    ctx.beginPath();
    ctx.fillStyle = '#363836';
    ctx.fillRect(0,0,1920,1080);
    ctx.closePath();

    // ctx.beginPath();
    // ctx.fillStyle = '#fff';
    // // ctx.fillRect(0,0,50,50);
    // ctx.arc(0, 0, 75, 0, getRadians(360));
    // ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = '#e3e3d7';
    ctx.arc(1900, 110, 350, 0, Math.PI*2, false);
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.fillStyle = '#e3e3d7';
    ctx.arc(680, -25, 100, 0, Math.PI*2, false);
    ctx.fill();
    ctx.closePath();
















};