/**Logo Class
 *
 * Implements THM Logo and required operations/animations.
 *
 * Created by MuratCan on 18.9.2016.
 */
var Logo = function (font) {
    this._createCubes(); //init cubes for the logo
    this._createTexts(font); //init texts
};

Logo.prototype = {
    constructor: Logo,

    //*********************** Cube Operations ***********************//
    /**
     * Group that is going to contain all cubes for the logo.
     */
    group: new THREE.Group(),

    cubes: [
        [
            {
                position: [-400, -550, 0],
                rotation: [0, 0, 0]
            },
            {
                position: [-400, -250, 0],
                rotation: [0, 0, 0]
            },
            {
                position: [-400, 50, 0],
                rotation: [0, 0, 0]
            }
        ],
        [
            {
                position: [-100, -550, 0],
                rotation: [0, 0, 0]
            },
            {
                position: [-100, -250, 0],
                rotation: [0, 0, 0]
            },
            {
                position: [-100, 50, 0],
                rotation: [0, 0, 0]
            },
            {
                position: [-100, 350, 0],
                rotation: [0, 0, 0]
            }
        ],
        [
            {
                position: [200, -550, 0],
                rotation: [0, 0, 0]
            },
            {
                position: [200, -250, 0],
                rotation: [0, 0, 0]
            },
            {
                position: [200, 50, 0],
                rotation: [0, 0, 0]
            },
            {
                position: [200, 350, 0],
                rotation: [0, 0, 0]
            }
        ]
    ],

    /**
     * Inits cubes according to the positions and rotations.
     *
     * @private
     */
    _createCubes: function () {
        var tmp;
        for (var i = 0; i < this.cubes.length; i++) {
            for (var j = 0; j < this.cubes[i].length; j++) {
                tmp = new HOLO.Cube();
                //Setting positions
                tmp.position.x = this.cubes[i][j].position[0];
                tmp.position.y = this.cubes[i][j].position[1];
                tmp.position.z = this.cubes[i][j].position[2];
                //Setting rotations
                tmp.rotation.x = this.cubes[i][j].rotation[0];
                tmp.rotation.y = this.cubes[i][j].rotation[1];
                tmp.rotation.z = this.cubes[i][j].rotation[2];
                this.group.add(tmp); //adding to the group
                this.cubes[i][j].cube = tmp;//for referencing to the cube later on.(clock?)
            }
        }
    },


    //*********************** Text Operations ***********************//
    /**
     * Creates required texts for showing time.
     *
     * @param font
     * @private
     */
    _createTexts: function (font) {
        this._hoursText = new HOLO.Text(font, 'hrs.');
        this._minutesText = new HOLO.Text(font, 'mins.');
    },


    //*********************** Camera Operations ***********************//
    cameraParameters: {
        position: [0, 0, 2000],
        far: 4000,
        lookAt: new Vector(0, 0, 0)
    },

    /**
     * Sets given camera's position, far and lookAt vectors according to the
     * camera parameters set for the logo.
     *
     * @param camera
     */
    setCamera: function (camera) {
        camera.position.x = this.cameraParameters.position[0];
        camera.position.y = this.cameraParameters.position[1];
        camera.position.z = this.cameraParameters.position[2];
        camera.far = this.cameraParameters.far;
        camera.lookAt(this.cameraParameters.lookAt);
    }


    //*********************** Animations ***********************//
    /*flag: true,

    showClock: function (animator) {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        var bcd1;
        var bcd2;
        var i;

        if (this.flag) {
            //Logo._objects[0][0].cube.remove(this._minutesTxt);
            //Logo._objects[0][0].cube.add(this._hoursTxt);

            bcd1 = this._intToBCDReverse((hours - (hours % 10)) / 10);

            for (i = 0; i < 4; i++) {

                if (bcd1[i]) animator.add(new HOLO.ChangeColorAnimation(
                    Logo._objects[1][i],
                    new THREE.Color(0xF5F5F5),
                    10
                ));

                else animator.add(new HOLO.ChangeColorAnimation(
                    Logo._objects[1][i],
                    new THREE.Color(0x66ff33),
                    10
                ));
            }

            bcd2 = this._intToBCDReverse(hours % 10);

            for (i = 0; i < 4; i++) {

                if (bcd2[i]) animator.add(new HOLO.ChangeColorAnimation(
                    Logo._objects[1][i],
                    new THREE.Color(0xF5F5F5),
                    10
                ));

                else animator.add(new HOLO.ChangeColorAnimation(
                    Logo._objects[1][i],
                    new THREE.Color(0x66ff33),
                    10
                ));
            }
        }
        else {
            //Logo._objects[0][0].cube.remove(this._hoursTxt);
            //Logo._objects[0][0].cube.add(this._minutesTxt);

            bcd1 = this._intToBCDReverse((minutes - (minutes % 10)) / 10);

            for (i = 0; i < 4; i++) {

                if (bcd1[i]) animator.add(new HOLO.ChangeColorAnimation(
                    Logo._objects[1][i],
                    new THREE.Color(0xF5F5F5),
                    10
                ));

                else animator.add(new HOLO.ChangeColorAnimation(
                    Logo._objects[1][i],
                    new THREE.Color(0x66ff33),
                    10
                ));
            }

            bcd2 = this._intToBCDReverse(minutes % 10);

            for (i = 0; i < 4; i++) {

                if (bcd2[i]) animator.add(new HOLO.ChangeColorAnimation(
                    Logo._objects[1][i],
                    new THREE.Color(0xF5F5F5),
                    10
                ));

                else animator.add(new HOLO.ChangeColorAnimation(
                    Logo._objects[1][i],
                    new THREE.Color(0x66ff33),
                    10
                ));
            }
        }
    },

    _intToBCDReverse: function (integer) {
        var bcd = integer.toString(2);
        if (bcd.length < 4) {
            var pad = "0000";
            bcd = pad.substring(0, pad.length - bcd.length) + bcd;
        }
        return bcd.split('').reverse().join('');
    }*/
};