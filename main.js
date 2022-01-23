// https://teachablemachine.withgoogle.com/models/dvN7McQej/ //

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dvN7McQej/model.json', modelReady);
}

function modelReady(){
    classifier.classify( gotResults);
}

var dog = 0
var cat = 0
var lion = 0
var cow = 0
var background_noise = 0

function gotResults(error, results)
{
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("dog").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("cat").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("lion").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("cow").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("background_noise").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        if (results[0].label == "Barking")
        {
        document.getElementById("dog").innerHTML = 'Dog - 1';
        document.getElementById("cat").innerHTML = 'Cat - 0';
        document.getElementById("lion").innerHTML = 'Lion - 0';
        document.getElementById("cow").innerHTML = 'Cow - 0';
        document.getElementById("background_noise").innerHTML = 'Background Noise - 0';
        }
        else if (results[0].label == "Meowing")
        {
            document.getElementById("dog").innerHTML = 'Dog - 0';
            document.getElementById("cat").innerHTML = 'Cat - 1';
            document.getElementById("lion").innerHTML = 'Lion - 0';
            document.getElementById("cow").innerHTML = 'Cow - 0';
            document.getElementById("background_noise").innerHTML = 'Background Noise - 0';
        }
        else if (results[0].label == "Roaring")
        {
            document.getElementById("dog").innerHTML = 'Dog - 0';
            document.getElementById("cat").innerHTML = 'Cat - 0';
            document.getElementById("lion").innerHTML = 'Lion - 1';
            document.getElementById("cow").innerHTML = 'Cow - 0';
            document.getElementById("background_noise").innerHTML = 'Background Noise - 0';
        }
        else if (results[0].label == "Mooing")
        {
            document.getElementById("dog").innerHTML = 'Dog - 0';
            document.getElementById("cat").innerHTML = 'Cat - 0';
            document.getElementById("lion").innerHTML = 'Lion - 0';
            document.getElementById("cow").innerHTML = 'Cow - 1';
            document.getElementById("background_noise").innerHTML = 'Background Noise - 0';
        }
        else if (results[0].label == "background_noise")
        {
            document.getElementById("dog").innerHTML = 'Dog - 0';
            document.getElementById("cat").innerHTML = 'Cat - 0';
            document.getElementById("lion").innerHTML = 'Lion - 0';
            document.getElementById("cow").innerHTML = 'Cow - 0';
            document.getElementById("background_noise").innerHTML = 'Background Noise - 1';
        }
    }
}