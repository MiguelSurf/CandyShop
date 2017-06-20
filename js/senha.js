window.onload = function inicio() {
    document.getElementById("senha").addEventListener("focus", function () {
        document.getElementsByTagName("label")[0].classList.add("sobelabel");
        document.getElementsByTagName("label")[0].classList.add("vermelho");
        document.getElementsByTagName("p")[0].classList.add("si");
        document.getElementsByTagName("p")[1].classList.remove("hp");
        var valid = document.getElementById("senha").value.length;
        if (valid >= 6) {
            document.getElementsByTagName("label")[0].classList.add("rosa");
            document.getElementsByTagName("label")[0].classList.remove("vermelho");
            document.getElementsByTagName("p")[0].classList.remove("si");

        }
        else{
            document.getElementsByTagName("label")[0].classList.remove("rosa");
            document.getElementsByTagName("label")[0].classList.add("vermelho");
        }
    });
    document.getElementById("senha").addEventListener("blur", function () {

        var input = document.getElementById("senha").value.length;
        if (input > 0 && input < 6) {
            document.getElementsByTagName("label")[0].classList.add("sobelabel");
            document.getElementsByTagName("label")[0].classList.add("vermelho");
        }
        else if (input >= 6) {
            document.getElementsByTagName("label")[0].classList.add("sobelabel");
            document.getElementsByTagName("label")[0].classList.add("cinza");
            document.getElementsByTagName("label")[0].classList.remove("vermelho");
            document.getElementsByTagName("label")[0].classList.remove("rosa");
    }
        else {
            document.getElementsByTagName("label")[0].classList.remove("sobelabel");
        }
        var barra = document.getElementById("senha").value.length;
            if (barra > 0 && barra < 6){
                document.getElementsByTagName("input")[0].classList.add("barred");
            }
            else if (barra >= 6) {
                document.getElementsByTagName("input")[0].classList.remove("barred");
            }
            else {
                document.getElementsByTagName("input")[0].classList.add("barred");
            }
    });
    document.getElementById("senha").addEventListener("keydown", function () {
        setTimeout(function () {
            var valid = document.getElementById("senha").value.length;
            if (valid >= 6) {
                document.getElementsByTagName("label")[0].classList.add("rosa");
                document.getElementsByTagName("label")[0].classList.remove("vermelho");
                document.getElementsByTagName("p")[0].classList.remove("si");
            }
            else{
                document.getElementsByTagName("label")[0].classList.remove("rosa");
                document.getElementsByTagName("label")[0].classList.add("vermelho");
                document.getElementsByTagName("p")[0].classList.add("si");
            }
        });
    });
};