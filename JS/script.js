const messageContainer = document.querySelector("#d-day-mesage");
const container = document.querySelector("#d-day-container");
const intervalIdArr = [];
container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력</h3>";

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormet = inputYear + "-" + inputMonth +"-" + inputDate;
  const dateFormet = `${inputYear}-${inputMonth}-${inputDate}`;
  //console.log(inputYear, inputMonth, inputDate);
  return dateFormet;
};

const counterMaker = function () {
  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  if (remaining <= 0) {
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>타이머가 종료</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아님</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor((remaining / 60) % 60),
    remainingSec: Math.floor(remaining) % 60,
  };

  // const documentObj = {
  //   days: document.getElementById("days"),
  //   hours: document.getElementById("hours"),
  //   min: document.getElementById("min"),
  //   sec: document.getElementById("sec"),
  // };

  const timeKeys = Object.keys(remainingObj);
  const documentArr = ["days", "hours", "min", "sec"];

  let i = 0;
  for (let tag of documentArr) {
    //of는 배열 in은 객체
    document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
    i++;
  }

  // --------------------------------------------------------------------
  // for (let i = 0; i < timeKeys.length; i++) {
  //   documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
  // }
  // //위에 for문과 같음
  // documentObj.days.textContent = remainingObj.remainingDate;
  // documentObj.hours.textContent = remainingObj.remainingHours;
  // documentObj.min.textContent = remainingObj.remainingMin;
  // documentObj.sec.textContent = remainingObj.sec;
  // let i = 0;
  // for (let key in documentObj) {
  //   documentObj[key].textContent = remainingObj[timeKeys[i]];
  //   i++;
  // }
};
const starter = function () {
  container.style.display = "flex";
  messageContainer.style.display = "none";
  counterMaker();
  const intervalId = setInterval(counterMaker, 1000);
  intervalIdArr.push(intervalId);
};

const setClearInterval = function () {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-Day를 입력</h3>";
  messageContainer.style.display = "flex";
  for (let i = 0; i < intervalIdArr.lenght; i++) {
    clearInterval(intervalIdArr[i]);
  }
};
