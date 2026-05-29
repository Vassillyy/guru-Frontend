import { type ITopic } from '@/entities/topic';

export const configFormElements: ITopic = {
  value: 'form-elements',
  name: 'Получение и изменение значений формы, отправка данных',
  content: {
    introduction:
      'Формы и элементы управления имеют множество специальных свойств. Они предоставляют удобный доступ к данным формы, позволяют управлять состоянием полей, а также контролировать отправку данных на сервер.',
    sections: [
      {
        title: 'Навигация: формы и элементы',
        content:
          'Формы в документе входят в специальную коллекцию document.forms. Это «именованная» коллекция: можно получить форму как по её имени, так и по порядковому номеру в документе.\n' +
          'При получении формы, любой элемент доступен в именованной коллекции form.elements. Эти навигационные свойства не зависят от структуры тегов внутри формы — все элементы управления, как бы глубоко они ни находились, доступны в коллекции form.elements.\n' +
          'Существует сокращённая запись: доступ к элементу можно получить через form[name], без явного обращения к form.elements.',
        addition:
          'document.forms.my — форма с name="my"\n' +
          'document.forms[0] — первая форма на странице\n\n' +
          'Если в форме несколько элементов с одинаковым name, form.elements[name] вернёт коллекцию.\n' +
          'Если у элемента изменить атрибут name, в сокращённой записи он будет доступен и под старым, и под новым именем.',
        examples:
          '<form name="my" id="myForm">\n' +
          '  <input name="one" value="1">\n' +
          '  <input name="two" value="2">\n' +
          '  <input type="radio" name="gender" value="male"> Муж\n' +
          '  <input type="radio" name="gender" value="female"> Жен\n' +
          '</form>\n\n' +
          '<script>\n' +
          '  // 1. document.forms по имени\n' +
          '  const form = document.forms.my;\n' +
          '  console.log(form.elements.one.value); // "1"\n\n' +
          '  // 2. document.forms по индексу\n' +
          '  const firstForm = document.forms[0];\n' +
          '  console.log(firstForm.elements.two.value); // "2"\n\n' +
          '  // 3. Сокращённая запись form.name\n' +
          '  console.log(form.one.value); // "1" (то же, что form.elements.one)\n' +
          '  console.log(form.one === form.elements.one); // true\n\n' +
          '  // 4. Коллекция для radio (несколько элементов с одним name)\n' +
          '  const radios = form.elements.gender;\n' +
          '  console.log(radios[0].value); // "male"\n' +
          '  console.log(radios[1].value); // "female"\n' +
          '</script>',
      },
      {
        title: '<fieldset> как «подформа»',
        content:
          'Форма может содержать один или несколько элементов <fieldset>, которые служат для группировки элементов управления. У <fieldset> есть свойство elements, которое работает аналогично form.elements — возвращает коллекцию вложенных элементов управления.',
        addition:
          'Можно получить элемент как через форму, так и через fieldset — результат будет одинаковым.',
        examples:
          '<form name="myForm">\n' +
          '  <fieldset name="userFields">\n' +
          '    <input name="login" type="text" placeholder="Логин">\n' +
          '    <input name="email" type="email" placeholder="Email">\n' +
          '  </fieldset>\n' +
          '</form>\n\n' +
          '<script>\n' +
          '  // Получаем форму через document.forms по имени\n' +
          '  const form = document.forms.myForm;\n\n' +
          '  // Доступ к элементу через форму\n' +
          '  console.log(form.elements.login); // <input name="login">\n\n' +
          '  // Получаем fieldset по имени\n' +
          '  const fieldset = form.elements.userFields;\n' +
          '  console.log(fieldset); // <fieldset name="userFields">\n\n' +
          '  // Доступ к элементу через fieldset (это тот же элемент, что и через форму)\n' +
          '  console.log(fieldset.elements.login === form.elements.login); // true\n\n' +
          '  // У fieldset тоже есть коллекция elements\n' +
          '  console.log(fieldset.elements.email); // <input name="email">\n' +
          '</script>',
      },
      {
        title: 'Обратная ссылка: element.form',
        content:
          'Любой элемент управления внутри формы имеет свойство .form, которое ссылается на родительскую форму. Это обратная связь: форма ссылается на свои элементы через elements, а элементы ссылаются обратно на форму через .form.',
        addition:
          'Свойство .form есть у всех элементов управления (input, select, textarea, button) и ссылается на родительскую форму. Позволяет получить доступ к форме из любого её элемента.',
        examples:
          '<form name="myForm">\n' +
          '  <input name="login" value="admin">\n' +
          '</form>\n\n' +
          '<script>\n' +
          '  // Получаем элемент через форму\n' +
          '  const input = document.forms.myForm.elements.login;\n' +
          '  // Через element.form получаем обратно форму\n' +
          '  console.log(input.form); // <form name="myForm">\n' +
          '  console.log(input.form === document.forms.myForm); // true\n' +
          '</script>',
      },
      {
        title: 'input и textarea: чтение и изменение значения',
        content:
          'Для получения или изменения содержимого элементов input и textarea используется свойство .value (строка).\n' +
          'Для чекбоксов (checkbox) и радиокнопок (radio) — свойство .checked (булево значение).',
        addition:
          'У textarea нельзя использовать .innerHTML — он возвращает только изначальное содержимое, а не текущее значение. Всегда используйте .value.',
        examples:
          '<input type="text" id="nameInput" value="Привет">\n' +
          '<input type="checkbox" id="agreeInput" checked>\n' +
          '<textarea id="messageInput">Текст</textarea>\n\n' +
          '<script>\n' +
          '  const nameInput = document.getElementById("nameInput");\n' +
          '  const agreeInput = document.getElementById("agreeInput");\n' +
          '  const messageInput = document.getElementById("messageInput");\n\n' +
          '  // Чтение значений\n' +
          '  console.log(nameInput.value); // "Привет"\n' +
          '  console.log(agreeInput.checked); // true\n' +
          '  console.log(messageInput.value); // "Текст"\n\n' +
          '  // Изменение значений\n' +
          '  nameInput.value = "Новое значение";\n' +
          '  agreeInput.checked = false;\n' +
          '  messageInput.value = "Новый текст";\n' +
          '  console.log(nameInput.value); // "Новое значение"\n' +
          '  console.log(agreeInput.checked); // false\n' +
          '  console.log(messageInput.value); // "Новый текст"\n' +
          '</script>',
      },
      {
        title: 'select и option: чтение и изменение значения',
        content:
          'Элемент <select> имеет три важных свойства:\n' +
          '• select.options — коллекция подэлементов <option>\n' +
          '• select.value — значение выбранного в данный момент <option>\n' +
          '• select.selectedIndex — номер выбранного <option>\n\n' +
          'Три способа установить значение в <select>:\n' +
          '1. option.selected = true\n' +
          '2. select.value = значение\n' +
          '3. select.selectedIndex = номер\n\n' +
          'Для создания нового <option> используется короткий синтаксис:\n' +
          'new Option(text, value, defaultSelected, selected)\n' +
          '• text — текст внутри <option>\n' +
          '• value — значение\n' +
          '• defaultSelected — если true, ставится HTML-атрибут selected\n' +
          '• selected — если true, элемент будет выбранным',
        addition:
          'Для select с атрибутом multiple (множественный выбор) нужно использовать option.selected.\n' +
          'Свойства <option>:\n' +
          '• option.selected — выбрана ли опция\n' +
          '• option.index — номер опции среди других в <select>\n' +
          '• option.value — значение опции\n' +
          '• option.text — содержимое опции (то, что видит пользователь)',
        examples:
          '<select id="single">\n' +
          '  <option value="apple">Яблоко</option>\n' +
          '  <option value="pear">Груша</option>\n' +
          '  <option value="banana">Банан</option>\n' +
          '</select>\n\n' +
          '<select id="multipleSelect" multiple>\n' +
          '  <option value="blues" selected>Блюз</option>\n' +
          '  <option value="rock" selected>Рок</option>\n' +
          '  <option value="classic">Классика</option>\n' +
          '</select>\n\n' +
          '<script>\n' +
          '  // Три способа выбрать "Банан" в single select\n' +
          '  const single = document.getElementById("single");\n' +
          '  single.options[2].selected = true;\n' +
          '  // single.selectedIndex = 2;\n' +
          '  // single.value = "banana";\n\n' +
          '  // Получение всех выбранных значений из multiple select\n' +
          '  const multiple = document.getElementById("multipleSelect");\n' +
          '  const selected = Array.from(multiple.options)\n' +
          '    .filter(opt => opt.selected)\n' +
          '    .map(opt => opt.value);\n' +
          '  console.log(selected); // ["blues", "rock"]\n\n' +
          '  // Создание и добавление новой опции через new Option\n' +
          '  const newOption = new Option("Классика", "classic");\n' +
          '  single.append(newOption);\n' +
          '  newOption.selected = true;\n' +
          '  console.log(single.value); // "classic"\n' +
          '</script>',
      },
      {
        title: 'Отправка формы: событие и метод submit',
        content:
          'Событие submit срабатывает при попытке отправки формы (нажатие Enter в поле или кнопка с type="submit"). Используется для валидации данных перед отправкой.\n' +
          'Метод form.submit() отправляет форму из JavaScript. В отличие от реальной отправки, событие submit при этом не генерируется.',
        addition:
          '• event.preventDefault() в обработчике submit отменяет отправку\n' +
          '• При нажатии Enter в текстовом поле также генерируется click на кнопке submit',
        examples:
          '<form id="testForm">\n' +
          '  <input type="text" name="login" placeholder="Логин">\n' +
          '  <input type="submit" id="submitBtn" value="Отправить">\n' +
          '</form>\n' +
          '<button id="dynamicSubmit">Отправить из JS</button>\n\n' +
          '<script>\n' +
          '  const form = document.getElementById("testForm");\n' +
          '  const submitBtn = document.getElementById("submitBtn");\n\n' +
          '  // Демонстрация: при нажатии Enter в поле генерируется click на кнопке submit\n' +
          '  submitBtn.onclick = () => console.log("click на кнопке submit");\n\n' +
          '  // Обработка отправки\n' +
          '  form.onsubmit = (event) => {\n' +
          '    event.preventDefault();\n' +
          '    console.log("submit: форма отправлена - логин", form.elements.login.value);\n' +
          '  };\n\n' +
          '  // Программная отправка (submit не генерируется)\n' +
          '  document.getElementById("dynamicSubmit").onclick = () => {\n' +
          '    console.log("Вызов form.submit() — событие submit не сгенерируется");\n' +
          '    form.submit();\n' +
          '  };\n' +
          '</script>',
      },
    ],
  },
};
