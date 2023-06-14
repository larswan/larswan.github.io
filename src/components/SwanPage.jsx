import { swan, goose, duck, dale0, dale1, dale2, dale3, dale4, dale5, ex1, ex2, ex3, ex4, ex5, exGif } from "../assets/swanPics";
import { goodSound, badSound, huhSound, gooseHonk, wellUhDuck, uhDuck, swanNo, noStop, pop, explosion, d1, d2, d3, d4, d5, d6 } from "../assets/swanSongs";
import { useState } from "react";
import swanStyling from '../swanStyling.css'
// import "../swanStyling.css"
const SwanPage = () => {
    const [swanPic, setSwanPic] = useState(swan)

    function toDuck() {
        let duckNum = Math.floor(Math.random() * 10)
        // Image chooser
        if (duckNum > 6) {
            pop();
            // Sound chooser
            setTimeout(function () {
                if (duckNum < 3) {
                    huhSound();
                }
                else if (duckNum < 5) {
                    wellUhDuck();
                }
                else
                    uhDuck();
            }, 300)
            setSwanPic(duck);
        }
        else if (duckNum > 5) {
            d1();
            setSwanPic(dale0) 
        }
        else if (duckNum > 4) {
            d2();
            setSwanPic(dale1) 
        }
        else if (duckNum > 3) {
            d3();
            setSwanPic(dale2) 
        }
        else if (duckNum > 2) {
            d4();
            setSwanPic(dale3) 
        }
        else if (duckNum > 1) {
            d5();
            setSwanPic(dale4) 
        }
        else {
            d6();
            setSwanPic(dale5) 
        }


    }
    function toSwan() {
        pop();
        setSwanPic(swan);

        swanNum += 1;
        setTimeout(function () {
            switch (swanNum) {
                case 1:
                    swanNo();
                    break
                case 2:
                    noStop();
                    break
                case 3:
                    badSound();
                    swanNum = 0
            }
        }, 500);


    }

    let nummy = 6;

    //declare the clickChange function that is called by picture onclick
    function clickChange() {
        nummy = Math.floor(Math.random() * 10);

        //to Swan
        if (swanPic == goose) {
            setSwanPic(exGif)
            explosion();
            setTimeout(function () { setSwanPic(swan) }, 300);
        }

        //to Duck
        else if (nummy > 3.5) {
            setSwanPic(exGif)
            explosion()
            setTimeout(function () { toDuck() }, 500);
        }
        //to Goose        
        else {
            goodSound();
            setSwanPic(exGif)
            explosion()
            setTimeout(function () { setSwanPic(goose)}, 1800);
            setTimeout(function () { gooseHonk() }, 2500);
        }
    }

    return(
        <div className="swanPage">
            <div className="story">
            <h1 className="swanHeader">The Little Swan that Goosed!</h1>
            
                <h4 className="swanSubhead">A Website by Swan the Goose</h4> 
            
                <p><strong>Once upon a time</strong> there was a little swan who felt so very <i>strange</i>... You see, for as long as the swan could remember, it had wanted to be a goose!
                    <br/>The little swan would gander at the gaggles or geese grazing and swallow sad swan tears.. "someday", it said..</p>
                
                <p>Today you can make this little swan's dreams come true! Click to transform it into its <i>true form</i>!</p>

                <p><small>*Note : once transformed <b><i>please</i></b> do not keep clicking - it only wants to be a goose..</small></p>  
            </div>

            <div id= "picDiv"> 
            <img id="fowlPicture" src={swanPic} alt="Swan the Gooose" onClick={clickChange} />
            </div>

        </div>
    )
}

export default SwanPage