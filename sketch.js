var createSketches = function (n) {


    var z = 500;
    var d = 5; // déplacement des points du carré
    var s = 1;
    var x = [];
    var y = [];
    var l = [];
    //    var n = 4;
    //    console.log('n',n);

    for (var i = 0; i < ($(".wrapper div").length) - n; i++) {
        //            console.log("i", i);
        var id = ids[i];

        console.log('id', id);
        new p5(function (prt) {
            console.log('prt', prt);
            prt.setup = function () {

                var w = 2000; //prt._userNode.offsetWidth;
                var h = 2000; //prt._userNode.offsetHeight;

                var x1 = prt.random(0, w);
                var y1 = prt.random(0, h);

                x.push(x1);
                y.push(y1);

                var canvas = prt.createCanvas(w, h);
                //                    canvas.parent();

                forme = prt.createGraphics(w, h);
                //                    prt.colorMode(prt.HSB, 100, 100, 100);
                prt.stroke(0);
                prt.strokeWeight(4);
                prt.beginShape();
                //
                //
                for (var k = 0; k < n; k++) {
                    //                        console.log('p5 k',k);
                    l.push(k);
                    for (var j = 0; j < l[k]; j++) {
                        forme.vertex(x[j], y[j]);

                        console.log("x", x[j]);
                        console.log("y", y[j]);
                    }
                }
                //
                prt.endShape();
                //                    prt.print(forme);
                //                    prt.rect(20,20,20,20);
            };
        }, id);
    }
}
