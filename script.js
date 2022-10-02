const firstPhoto = document.querySelector("#firstPhoto");
const secondPhoto = document.querySelector("#secondPhoto");
console.log(firstPhoto)

const fetchImg = (gender, order, index) => {
  axios
    .get(
      `https://pixabay.com/api/?key=24207016-191355ae8b52be3e9ab330072&q=${gender}+face&image_type=photo`
    )
    .then((response) => {
        if(index === 0){
            let firstPhotoOptions = response.data.hits;
            firstPhoto.src = firstPhotoOptions[order].previewURL;
        } else {
            let secondPhotoOptions = response.data.hits;
            secondPhoto.src = secondPhotoOptions[order].previewURL;
        }
    })
    .catch((error) => {
      console.log(error);
    });
};
fetchImg('women', 0, 0);
fetchImg('men', 0, 1)

let date = new Date();
const today = new Date();

let day = date.getDate();
let month = date.getMonth();

const addDay = document.querySelector("#add");
const subDay = document.querySelector("#substract");
const textDay = document.querySelector("#dateNumbers");
const dateContainer = document.querySelector("#dateText");
const todayText = document.createElement("span");
todayText.classList.add("dateText");
todayText.innerHTML = "Today";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

if (
  date.getDate() === today.getDate() &&
  date.getMonth() === today.getMonth() &&
  date.getFullYear() === today.getFullYear()
) {
  dateContainer.appendChild(todayText);
}

textDay.innerHTML = months[date.getMonth()] + ". " + date.getDate();

addDay.addEventListener("click", () => {
  date.setDate(date.getDate() + 1);
  textDay.innerHTML = months[date.getMonth()] + ". " + date.getDate();
  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    dateContainer.appendChild(todayText);
  } else if (document.querySelector(".dateText")) {
    dateContainer.lastChild.remove();
  }
});

subDay.addEventListener("click", () => {
  date.setDate(date.getDate() - 1);
  textDay.innerHTML = months[date.getMonth()] + ". " + date.getDate();
  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    dateContainer.appendChild(todayText);
  } else if (document.querySelector(".dateText")) {
    dateContainer.lastChild.remove();
  }
});

firstPhoto.addEventListener('click', () => {
    fetchImg('women', parseInt(Math.random()*20), 0)
})

secondPhoto.addEventListener('click', () => {
    fetchImg('men', parseInt(Math.random()*20), 1)
})


// console.log({date, day, month})
