//Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество символов, то border инпута становится зелёным, 
//если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

    const input = document.getElementById("validation-input");

    const totalLenght = input.getAttribute("data-length");
    const intTotallenght = parseInt(totalLenght, 10);
    
    input.oninput = function() {
      if (input.value.length === intTotallenght) {
        input.classList.remove("invalid");
        input.classList.add("valid");
      }
      if (input.value.length === 0) {
        input.classList.remove("valid");
        input.classList.remove("invalid");
      }
      if (input.value.length !== intTotallenght && input.value.length !== 0) {
        input.classList.add("invalid");
      }
    };