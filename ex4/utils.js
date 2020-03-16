
function degToRad(deg) {
    return Math.PI * deg / 180;
}

// Adapted from MyScene class (TP3). This function was not written by myself
function hexToRGBA(hex) {
    var rgba;

    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        rgba = [
            parseInt(hex.substring(1,3), 16).toPrecision() / 255.0,
            parseInt(hex.substring(3,5), 16).toPrecision() / 255.0,
            parseInt(hex.substring(5,7), 16).toPrecision() / 255.0,
            1.0
        ];
    }
    else
        rgba = [
            hex[0].toPrecision() / 255.0,
            hex[1].toPrecision() / 255.0,
            hex[2].toPrecision() / 255.0,
            1.0
        ];

    return rgba;
}