let localStream; //local video & audio data
let remoteStream; //remote user's video & audio data

let init = async () => {
    localStream = await navigator.mediaDevices.getUserMedia({video:true, audio:false});
    document.getElementById('user1').srcObject = localStream;
}

init();