const socket = new WebSocket("ws://localhost:9999/");
socket.addEventListener('open', function (event) {
    console.log("System Ready");
});
socket.addEventListener('message', function (event) {
    console.log(event.data);
    $(".images").css("display", "none");
    switch (event.data) {
        case "0":
            $("#listening_img").css("display", "block");
            break;
        case "1":
            $("#sending_img").css("display", "block");
            break;
        case "2":
            $("#finished_img").css("display", "block");
            break;
        default:
            console.log("Something Wrong...");
            console.log(event.data);
    }
    setTimeout(() => {
        socket.send(event.data);
    }, 3000);
});