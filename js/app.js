function getFormattedDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1; // Месяцы начинаются с 0
  let year = date.getFullYear();

  // Форматируем день и месяц, чтобы они всегда были двухзначными
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  // Получаем последние две цифры года
  year = year.toString().slice(-2);

  // Форматируем дату
  return `${day}-${month}-${year}`;
}

function getDatesArray() {
  const today = new Date();

  const todayFormatted = getFormattedDate(today);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowFormatted = getFormattedDate(tomorrow);

  const tomorrow2 = new Date(today);
  tomorrow2.setDate(today.getDate() + 2);
  const tomorrow2Formatted = getFormattedDate(tomorrow2);

  return [todayFormatted, tomorrowFormatted, tomorrow2Formatted];
}

console.log(); // Пример вывода: ["24-06-24", "25-06-24", "26-06-24"]
getDatesArray().forEach((dateString) => {
  const img = new Image();
  img.src = `https://energy.volyn.ua/spozhyvacham/perervy-u-elektropostachanni/hrafik-vidkliuchen/!img/${dateString}.jpg`;
  img.alt = `Графіки на ${dateString} ще не опубліковані`;
  img.onerror = () => removePreviewIcon(img);
  document.body.appendChild(img);
})

function removePreviewIcon(elem){
  const alt = document.createTextNode( elem.getAttribute('alt') );
  elem.parentNode.insertBefore( alt, elem );
  elem.parentNode.removeChild( elem );
}
