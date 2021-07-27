
function addLikes(num) {
    count = document.querySelector(`.likeBox${num}`).innerText;
    count++;
    document.querySelector(`.likeBox${num}`).innerText = `${count}`;
}