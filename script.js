document.addEventListener("DOMContentLoaded",function(){

  const btn = document.querySelector(".btn");

  const day = document.querySelector(".DD");

  const month = document.querySelector(".MM");

  const year = document.querySelector(".YY");

  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();

  const currentMonth = currentDate.getMonth() + 1;

  const currentDay = currentDate.getDate();

  const errD = document.querySelector(".err-d");
  const errM = document.querySelector(".err-m");
  const errY = document.querySelector(".err-y");
  const labelDay = document.querySelector(".lb-d");
  const labelM = document.querySelector(".lb-m");
  const labelY = document.querySelector(".lb-y");
  const validDay = document.querySelector(".err-vd");
  const validMOnth = document.querySelector(".err-vm");
  const validYear = document.querySelector(".err-vy");


  const yearsSp = document.querySelector(".years-sp");
  const monthSp = document.querySelector(".month-sp");
  const daySp  = document.querySelector(".days-sp");

  const validDate = document.querySelector(".err-valid");




  let yearValue = 0;
  let monthValue = 0; 
  let dayValue = 0;




  const isValidDate = (day, month, year) => {
    // Months with 31 days
    const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];

    // Check if the month is valid
    if (month < 1 || month > 12) return false;

    // Check if the day is valid for the given month
    if (monthsWith31Days.includes(month)) {
      return day >= 1 && day <= 31;
    } else if (month === 2) {
      // February case: Leap year check
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      return day >= 1 && day <= (isLeapYear ? 29 : 28);
    } else {
      // Months with only 30 days
      return day >= 1 && day <= 30;
    }
  };



  const getY = () => {
    let adjustedYear = currentYear;
    let adjustedMonth = currentMonth;
    let adjustedDay = currentDay;
  
    // Adjust for negative month difference
    if (monthValue > adjustedMonth) {
      adjustedYear -= 1;
      adjustedMonth += 12;
    }
  
    // Adjust for negative day difference
    if (dayValue > adjustedDay) {
      adjustedMonth -= 1;
      adjustedDay += 30; // Approximate days in a month
    }
  
    return adjustedYear - yearValue;
  };
  
  const getM = () => {
    let adjustedMonth = currentMonth;
    if (monthValue > currentMonth) {
      adjustedMonth += 12;
    }
    return adjustedMonth - monthValue;
  };
  
  const getD = () => {
    let adjustedDay = currentDay;
    if (dayValue > currentDay) {
      adjustedDay += 30; // Approximate days in a month
    }
    return adjustedDay - dayValue;
  };
  

  
  year.addEventListener("input",()=>{
    yearValue = Number(year.value);

    if(year.value.trim() === ""){
      year.classList.add("invalid");
    }else{
      year.classList.remove("invalid");
      errY.classList.remove("active");
      labelY.classList.remove("err");
    }
    if (year.value.trim()> currentYear){
      validYear.classList.add("active");
      year.classList.add("invalid");
      labelY.classList.add("err");
    }else{
      validYear.classList.remove("active");
      year.classList.remove("invalid");
      labelY.classList.remove("err");
    }
  });
 

  month.addEventListener("input",()=>{
      monthValue = Number(month.value);
      if(month.value.trim() === ""){
        month.classList.add("invalid");
      }else{
        month.classList.remove("invalid");
        errM.classList.remove("active");
        labelM.classList.remove("err");
      }
      if (month.value.trim()> 12){
        validMOnth.classList.add("active");
        month.classList.add("invalid");
        labelM.classList.add("err");
      }else{
        validMOnth.classList.remove("active");
        month.classList.remove("invalid");
        labelM.classList.remove("err");
      }
  
     
  });

  day.addEventListener("input",()=>{
      dayValue = Number(day.value);

      if(day.value.trim() === ""){
        day.classList.add("invalid");
      }
      else{
        day.classList.remove("invalid");
        errD.classList.remove("active");
        labelDay.classList.remove("err");
      }
      if (day.value.trim()> 31){
        validDay.classList.add("active");
        day.classList.add("invalid");
        labelDay.classList.add("err");
      }else{
        validDay.classList.remove("active");
        day.classList.remove("invalid");
        labelDay.classList.remove("err");
      }

     
  });



  btn.addEventListener("click",(e)=>{

    e.preventDefault();

    // const dayVal = Number(day.value);
    // const monthVal = Number(month.value);
    // const yearVal = Number(year.value);

    let isValid = true;
   
    if(day.value.trim() === ""){
      day.classList.add("invalid");
      errD.classList.add("active");
      labelDay.classList.add("err");
      isValid = false;
    }else{
      day.classList.remove("invalid");
      errD.classList.remove("active");
      labelDay.classList.remove("err");
    }
 

    if(month.value.trim() === ""){
      month.classList.add("invalid");
      errM.classList.add("active");
      labelM.classList.add("err");
      isValid = false;

    }else{
      month.classList.remove("invalid");
      errM.classList.remove("active");
      labelM.classList.remove("err");
    }
    if(year.value.trim() === ""){
      year.classList.add("invalid");
      errY.classList.add("active");
      labelY.classList.add("err");
      isValid = false;
    }else{
      year.classList.remove("invalid");
      errY.classList.remove("active");
      labelY.classList.remove("err");
    }

    if(!isValid) return;

    if (year.value.trim()> currentYear){
      validYear.classList.add("active");
      year.classList.add("invalid");
      labelY.classList.add("err");
      return;
    }else{
      validYear.classList.remove("active");
      year.classList.remove("invalid");
      labelY.classList.remove("err");
    }

    if (month.value.trim()> 12){
      validMOnth.classList.add("active");
      month.classList.add("invalid");
      labelM.classList.add("err");
      return;
    }else{
      validMOnth.classList.remove("active");
      month.classList.remove("invalid");
      labelM.classList.remove("err");
    }


    if (day.value.trim()> 31){
      validDay.classList.add("active");
      day.classList.add("invalid");
      labelDay.classList.add("err");
      return;
    }else{
      validDay.classList.remove("active");
      day.classList.remove("invalid");
      labelDay.classList.remove("err");
    }

    yearsSp.textContent = getY();
    monthSp.textContent = getM();
    daySp.textContent = getD();
  });

});