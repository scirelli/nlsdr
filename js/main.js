!function main(){

    function createStarField(){
        var oStarsCont  = document.getElementById('stars'),
            nStarsContW = oStarsCont.clientWidth,
            nStarsContH = oStarsCont.clientHeight,
            nStarCount  = nStarsContW*nStarsContH*0.001;
        
        for( var i=0,star=nullc=0; i<nStarCount; i++ ){
            star = document.createElement('div');
            star.className = "star";
            star.style.top = Math.rndRange( 0, nStarsContH ) + "px";
            star.style.left = Math.rndRange( 0, nStarsContW ) + "px";
            c = Math.round(Math.rndRange(64,255));
            star.style.backgroundColor = 'rgb(' + c + ',' + c + ',' + c + ')';
            oStarsCont.appendChild(star);
        }
    };

    function createAurora(){
        var oAurora = document.getElementById('aurora'),
            nW      = oAurora.clientWidth;

        for( var i=0,ray; i<nW; i++ ){
            ray = document.createElement('div');
            ray.className  = "aurora-ray";
            ray.style.top  = 0;
            ray.style.left = i + 'px';
            ray.style.height = 100 + 'px';
            ray.style.opacity = i * .2 + 0.1;
            oAurora.appendChild(ray);
        }
    }

    createStarField();
    createAurora();
}();
