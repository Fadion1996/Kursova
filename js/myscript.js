// function submit() {
//     var height = document.getElementById("height").value;
//     var width = document.getElementById("width").value;
//     var long = document.getElementById("long").value;
// //  точність оброблювальної поверхні
//     var acc = document.getElementById("accuracy");
//     var accuracy = sel.options[sel.selectedIndex].text;
// //  Шорсткість деталі
//     var r = document.getElementById("ra");
//     var ra = sel.options[sel.selectedIndex].text;
// //  Матеріал деталі
//     var st = document.getElementById("steel");
//     var steel = sel.options[sel.selectedIndex].text;
// //  матеріал ріжучого інструмента
//     var inst = document.getElementById("instrument");
//     var instrument = sel.options[sel.selectedIndex].text;
//
//     document.getElementById("demo").innerHTML = "type_val";
//
//
// }

// 2. Розміри циліндр (Діаметр, довжина), конус (максимальний-мінімальний Діаметр), канавка (ширина Діаметр), отвір (Діаметр довжина )

//  глибина подача швидкість

// Вибираємо тип деталі
var listModel = document.getElementById("type_model");
// var accuracy = document.getElementById("accuracy");
var ra = document.getElementById("ra");
var material = document.getElementById("material");

function changeModel() {
 var selectedValue = listModel.options[listModel.selectedIndex].value;
 if (selectedValue == 1) {//циліндр відкритий
   document.getElementsByName('height')[0].placeholder='Діаметр';
   document.getElementsByName('long')[0].placeholder='Довжина циліндра';
// для мм.
   document.getElementById("before_height").style.visibility = "visible";
   document.getElementById("before_width").style.visibility = "hidden";
   document.getElementById("before_long").style.visibility = "visible";
// для елементів поверхні
   document.getElementById("height").style.visibility = "visible";
   document.getElementById("width").style.visibility = "hide";
   document.getElementById("long").style.visibility = "visible";
 }else if (selectedValue == 2) {//циліндр закритий
   document.getElementsByName('height')[0].placeholder='Діаметр';
   document.getElementsByName('width')[0].placeholder='Діаметр зовнішній';
   document.getElementsByName('long')[0].placeholder='Довжина циліндра';
// для мм.
   document.getElementById("before_height").style.visibility = "visible";
   document.getElementById("before_width").style.visibility = "visible";
   document.getElementById("before_long").style.visibility = "visible";
// для елементів
   document.getElementById("height").style.visibility = "visible";
   document.getElementById("width").style.visibility = "visible";
   document.getElementById("long").style.visibility = "visible";
 }else if (selectedValue == 3) {//циліндр з отвором
   document.getElementsByName('height')[0].placeholder='Діаметр зовнішній';
   document.getElementsByName('width')[0].placeholder='Діаметр внутрішній';
   document.getElementsByName('long')[0].placeholder='Довжина циліндра';
// для мм.
   document.getElementById("before_height").style.visibility = "visible";
   document.getElementById("before_width").style.visibility = "visible";
   document.getElementById("before_long").style.visibility = "visible";
// для поверхні
   document.getElementById("height").style.visibility = "visible";
   document.getElementById("width").style.visibility = "visible";
   document.getElementById("long").style.visibility = "visible";
 }else if (selectedValue == 4) {//отвір
   document.getElementsByName('height')[0].placeholder='Діаметр отвору';
   document.getElementsByName('long')[0].placeholder='Довжина';
// для мм.
   document.getElementById("before_height").style.visibility = "visible";
   document.getElementById("before_width").style.visibility = "hidden";
   document.getElementById("before_long").style.visibility = "visible";
// для поверхні
   document.getElementById("height").style.visibility = "visible";
   document.getElementById("width").style.visibility = "hidden";
   document.getElementById("long").style.visibility = "visible";
 }else if (selectedValue == 5) {//конус
   document.getElementsByName('height')[0].placeholder='Максимальний діаметр';
   document.getElementsByName('width')[0].placeholder='Мінімальний діаметр';
   document.getElementsByName('long')[0].placeholder='Довжина конуса';
// для мм.
   document.getElementById("before_height").style.visibility = "visible";
   document.getElementById("before_width").style.visibility = "hidden";
   document.getElementById("before_long").style.visibility = "visible";
//  для поверхні
   document.getElementById("height").style.visibility = "visible";
   document.getElementById("width").style.visibility = "hidden";
   document.getElementById("long").style.visibility = "visible";
 }else if (selectedValue == 6) {//сфера
   document.getElementsByName('height')[0].placeholder='Діаметр в мм.';
   document.getElementById("height").style.visibility = "visible";
// для мм.
   document.getElementById("before_height").style.visibility = "visible";
   document.getElementById("before_width").style.visibility = "hidden";
   document.getElementById("before_long").style.visibility = "hidden";
// для поверхні
   document.getElementById("width").style.visibility = "hidden";
   document.getElementById("long").style.visibility = "hidden";
 }else if (selectedValue == 7) {//канавка
   // document.getElementsByName('height')[0].placeholder='Висота канавки в мм.';
   document.getElementsByName('width')[0].placeholder='Ширина канавки';
   document.getElementsByName('long')[0].placeholder='Довжина канавки';
//  для мм.
   document.getElementById("before_height").style.visibility = "hidden";
   document.getElementById("before_width").style.visibility = "visible";
   document.getElementById("before_long").style.visibility = "visible";
// для поверхні
   document.getElementById("height").style.visibility = "hidden";
   document.getElementById("width").style.visibility = "visible";
   document.getElementById("long").style.visibility = "visible";
 }else if (selectedValue == 8) {//зовнішня фаска
   document.getElementsByName('height')[0].placeholder='Висота фаски';
   document.getElementsByName('width')[0].placeholder='Ширина фаски';
   document.getElementsByName('long')[0].placeholder='Довжина фаски';
// для мм.
   document.getElementById("before_height").style.visibility = "visible";
   document.getElementById("before_width").style.visibility = "visible";
   document.getElementById("before_long").style.visibility = "visible";
// для поверхні
   document.getElementById("height").style.visibility = "visible";
   document.getElementById("width").style.visibility = "visible";
   document.getElementById("long").style.visibility = "visible";
 }
}

function myFunction() {

    var s = 15; // подача мм./об. в залежності від різального інструмента
    var height = document.getElementsByName('height')[0].value;
    var width = document.getElementsByName('width')[0].value;
    var long = document.getElementsByName('long')[0].value;
    var selectedValue = listModel.options[listModel.selectedIndex].value;
    // var accuracyValue = accuracy.options[accuracy.selectedIndex].value; // 1-h12, 2-h11, 3-h10, 4-h9, 5-h8, 6-h7, 7-h6.
    var raValue = ra.options[ra.selectedIndex].value;                   // 1-Ra12.6, 2-Ra6.3, 3-Ra3.2, 4-Ra1.6, 5-Ra0.8.
    var materialValue = material.options[material.selectedIndex].value; // 1-Конструкційні , 2-Леговані, 3-Жароміцні, 4-Кольорові.
    var vt, hb, s, to, td, tvid, nt, z, tsht, tobs, mat_inst, kv, sc, vtc, ntc, c, cc, toc, tvidс, tobsc, zc, tshtc, verstat;
    // Розрахунок
    // Вибір ріжучого інструмента "Його характеристики"
    // материал режучего инструмента
    // для НВ 450 - 500 - Р9М4К8, Р18
    // для НВ 250 -360 - Р6М5К5, Р9

    if (materialValue = 1) {
      hb = 450;
      mat_inst = "Р9М4К8";
      mat_instc = "Т15К6";
    }else if (materialValue = 2) {
      mat_inst = "Р18";
      mat_instc = "ВК6";
      hb = 250;
    }else if (materialValue = 3) {
      mat_inst = "Р6М5К5";
      mat_instc = "ВК6";
      hb = 360;
    }else if (materialValue = 4) {
      mat_inst = "Т5К10-21"
      mat_instc = "Т15К6";
      hb = 500;
    }

    if (selectedValue == 1){
      // Подача при черновой обработке
      if ( long < 3 ){
        s = 1.2;
      } else if (long < 5 && long > 3) {
        s = 1;
      } else if (long < 8 && long > 5) {
        s = 0.8;
      } else if (long > 8) {
        s = 0.5;
      }
      // Подача при чистовой обработки
      if ( raValue == 1){
        sc = 0.5;
      } else if ( raValue == 2) {
        sc = 0.4;
      } else if ( raValue == 3) {
        sc = 0.3;
      } else if ( raValue == 4) {
        sc = 0.2;
      }

      // Розраховуємо теоретичну швидкість різання
      kv = 0.87;
      vt = (hb*0.1*long)/(60*s*width)*kv; // чорнова
      vtc = (hb*0.1*long)/(60*sc*width)*kv; // чистова

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*long); // чорнова
      ntc = (1000*vtc)/(3.14*long); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*long*nt)/1000; // чорнова
      cc = (3.14*long*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (long+1)/(nt*s); //хв. для черновой
      toc = (long+1)/(ntc*sc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*0.07*to; // хв. для чорновой
      tobsc = 0.6*0.07*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой


      // Додатковий час
      td = 0.4; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой
      // Визначаємо штучнокалькуляційний час

      tsht = (to + td)/(1 + z/100); // хв. для чорновой
      tshtc = (toc + td)/(1 + zc/100); // для чистовой

    }else if (selectedValue == 2) {
      // Подача при черновой обработке
      if ( long < 3 ){
        s = 1.2;
      } else if (long < 5 && long > 3) {
        s = 1;
      } else if (long < 8 && long > 5) {
        s = 0.8;
      } else if (long > 8) {
        s = 0.5;
      }
      // Подача при чистовой обработки
      if ( raValue == 1){
        sc = 0.5;
      } else if ( raValue == 2) {
        sc = 0.4;
      } else if ( raValue == 3) {
        sc = 0.3;
      } else if ( raValue == 4) {
        sc = 0.2;
      }

      // Розраховуємо теоретичну швидкість різання
      kv = 0.87;
      vt = (hb*0.1*long)/(60*s*width)*kv; // чорнова
      vtc = (hb*0.1*long)/(60*sc*width)*kv; // чистова

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*long); // чорнова
      ntc = (1000*vtc)/(3.14*long); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*long*nt)/1000; // чорнова
      cc = (3.14*long*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (long+1)/(nt*c); //хв. для черновой
      toc = (long+1)/(ntc*cc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*0.07*to; // хв. для чорновой
      tobsc = 0.6*0.07*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой


      // Додатковий час
      td = 0.4; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой
      // Визначаємо штучнокалькуляційний час

      tsht = (to + td)/(1 + z/100); // хв. для чорновой
      tshtc = (toc + td)/(1 + zc/100); // для чистовой

    } else if (selectedValue == 3) {
      // Подача при черновой обработке
      if ( long < 3 ){
        s = 1.2;
      } else if (long < 5 && long > 3) {
        s = 1;
      } else if (long < 8 && long > 5) {
        s = 0.8;
      } else if (long > 8) {
        s = 0.5;
      }
      // Подача при чистовой обработки
      if ( raValue == 1){
        sc = 0.5;
      } else if ( raValue == 2) {
        sc = 0.4;
      } else if ( raValue == 3) {
        sc = 0.3;
      } else if ( raValue == 4) {
        sc = 0.2;
      }

      // Розраховуємо теоретичну швидкість різання
      kv = 0.87;
      vt = (hb*0.1*long)/(60*s*width)*kv; // чорнова
      vtc = (hb*0.1*long)/(60*sc*width)*kv; // чистова

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*long); // чорнова
      ntc = (1000*vtc)/(3.14*long); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*long*nt)/1000; // чорнова
      cc = (3.14*long*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (long+1)/(nt*c); //хв. для черновой
      toc = (long+1)/(ntc*cc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*0.07*to; // хв. для чорновой
      tobsc = 0.6*0.07*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой


      // Додатковий час
      td = 0.4; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой
      // Визначаємо штучнокалькуляційний час

      tsht = (to + td)/(1 + z/100); // хв. для чорновой
      tshtc = (toc + td)/(1 + zc/100); // для чистовой

    } else if ( selectedValue == 4) {
      // Подача при черновой обработке
      if ( long < 3 ){
        s = 1.2;
      } else if (long < 5 && long > 3) {
        s = 1;
      } else if (long < 8 && long > 5) {
        s = 0.8;
      } else if (long > 8) {
        s = 0.5;
      }
      // Подача при чистовой обработки
      if ( raValue == 1){
        sc = 0.5;
      } else if ( raValue == 2) {
        sc = 0.4;
      } else if ( raValue == 3) {
        sc = 0.3;
      } else if ( raValue == 4) {
        sc = 0.2;
      }

      // Розраховуємо теоретичну швидкість різання
      kv = 0.87;
      vt = (hb*0.1*long)/(60*s*height)*kv; // чорнова
      vtc = (hb*0.1*long)/(60*sc*height)*kv; // чистова

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*long); // чорнова
      ntc = (1000*vtc)/(3.14*long); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*long*nt)/1000; // чорнова
      cc = (3.14*long*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (long+1)/(nt*c); //хв. для черновой
      toc = (long+1)/(ntc*cc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*0.07*to; // хв. для чорновой
      tobsc = 0.6*0.07*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой


      // Додатковий час
      td = 0.4; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой
      // Визначаємо штучнокалькуляційний час

      tsht = (to + td)/(1 + z/100); // хв. для чорновой
      tshtc = (toc + td)/(1 + zc/100); // для чистовой

    } else if ( selectedValue == 5) {
      // Подача при черновой обработке
      if ( long < 3 ){
        s = 1.2;
      } else if (long < 5 && long > 3) {
        s = 1;
      } else if (long < 8 && long > 5) {
        s = 0.8;
      } else if (long > 8) {
        s = 0.5;
      }
      // Подача при чистовой обработки
      if ( raValue == 1){
        sc = 0.5;
      } else if ( raValue == 2) {
        sc = 0.4;
      } else if ( raValue == 3) {
        sc = 0.3;
      } else if ( raValue == 4) {
        sc = 0.2;
      }

      // Розраховуємо теоретичну швидкість різання
      kv = 0.87;
      vt = (hb*0.1*long)/(60*s*height)*kv; // чорнова
      vtc = (hb*0.1*long)/(60*sc*height)*kv; // чистова

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*long); // чорнова
      ntc = (1000*vtc)/(3.14*long); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*long*nt)/1000; // чорнова
      cc = (3.14*long*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (long+1)/(nt*c); //хв. для черновой
      toc = (long+1)/(ntc*cc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*0.07*to; // хв. для чорновой
      tobsc = 0.6*0.07*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой


      // Додатковий час
      td = 0.4; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой
      // Визначаємо штучнокалькуляційний час

      tsht = (to + td)/(1 + z/100); // хв. для чорновой
      tshtc = (toc + td)/(1 + zc/100); // для чистовой

    } else if ( selectedValue == 6) {
      // Подача при черновой обработке
      if ( long < 3 ){
        s = 1.2;
      } else if (long < 5 && long > 3) {
        s = 1;
      } else if (long < 8 && long > 5) {
        s = 0.8;
      } else if (long > 8) {
        s = 0.5;
      }
      // Подача при чистовой обработки
      if ( raValue == 1){
        sc = 0.5;
      } else if ( raValue == 2) {
        sc = 0.4;
      } else if ( raValue == 3) {
        sc = 0.3;
      } else if ( raValue == 4) {
        sc = 0.2;
      }

      // Розраховуємо теоретичну швидкість різання
      kv = 0.87;
      vt = (hb*0.1*height)/(60*s)*kv; // чорнова
      vtc = (hb*0.1*height)/(60*sc)*kv; // чистова

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*height); // чорнова
      ntc = (1000*vtc)/(3.14*height); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*height*nt)/1000; // чорнова
      cc = (3.14*height*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (height+1)/(nt*c); //хв. для черновой
      toc = (height+1)/(ntc*cc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*0.07*to; // хв. для чорновой
      tobsc = 0.6*0.07*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой


      // Додатковий час
      td = 0.4; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой
      // Визначаємо штучнокалькуляційний час

      tsht = (to + td)/(1 + z/100); // хв. для чорновой
      tshtc = (toc + td)/(1 + zc/100); // для чистовой

    } else if ( selectedValue == 7) {
      // Подача при черновой обработке
      if ( long < 3 ){
        s = 1.2;
      } else if (long < 5 && long > 3) {
        s = 1;
      } else if (long < 8 && long > 5) {
        s = 0.8;
      } else if (long > 8) {
        s = 0.5;
      }
      // Подача при чистовой обработки
      if ( raValue == 1){
        sc = 0.5;
      } else if ( raValue == 2) {
        sc = 0.4;
      } else if ( raValue == 3) {
        sc = 0.3;
      } else if ( raValue == 4) {
        sc = 0.2;
      }

      // Розраховуємо теоретичну швидкість різання
      kv = 0.87;
      vt = (hb*0.1*long)/(60*s*width)*kv; // чорнова
      vtc = (hb*0.1*long)/(60*sc*width)*kv; // чистова

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*long); // чорнова
      ntc = (1000*vtc)/(3.14*long); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*long*nt)/1000; // чорнова
      cc = (3.14*long*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (long+1)/(nt*c); //хв. для черновой
      toc = (long+1)/(ntc*cc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*0.07*to; // хв. для чорновой
      tobsc = 0.6*0.07*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой

      // Додатковий час
      td = 0.4; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой
      // Визначаємо штучнокалькуляційний час

      tsht = (to + td)/(1 + z/100); // хв. для чорновой
      tshtc = (toc + td)/(1 + zc/100); // для чистовой

    }else if (selectedValue == 8) {
      // Подача при черновой обработке
      if ( long < 3 ){
        s = 1.2;
      } else if (long < 5 && long > 3) {
        s = 1;
      } else if (long < 8 && long > 5) {
        s = 0.8;
      } else if (long > 8) {
        s = 0.5;
      }
      // Подача при чистовой обработки
      if ( raValue == 1){
        sc = 0.5;
      } else if ( raValue == 2) {
        sc = 0.4;
      } else if ( raValue == 3) {
        sc = 0.3;
      } else if ( raValue == 4) {
        sc = 0.2;
      }

      // Розраховуємо теоретичну швидкість різання
      kv = 0.87;
      vt = (hb*0.1*long)/(60*s*width)*kv; // чорнова
      vtc = (hb*0.1*long)/(60*sc*width)*kv; // чистова

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*long); // чорнова
      ntc = (1000*vtc)/(3.14*long); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*long*nt)/1000; // чорнова
      cc = (3.14*long*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (long+1)/(nt*c); //хв. для черновой
      toc = (long+1)/(ntc*cc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*0.07*to; // хв. для чорновой
      tobsc = 0.6*0.07*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой


      // Додатковий час
      td = 0.4; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой
      // Визначаємо штучнокалькуляційний час

      tsht = (to + td)/(1 + z/100); // хв. для чорновой
      tshtc = (toc + td)/(1 + zc/100); // для чистовой

    }

    // Вибір верстата
    if ( s > 0.8 || s < 1.2) {
      verstat = "1А341";
    }else if ( s > 0.4 || raValue < 0.8) {
      verstat = "1П365";
    }

    // Виведення результатів для чорнової обробки

    document.getElementById("result").innerHTML = "Виведеня результатів";
    document.getElementById("type_chorn").innerHTML = "Чорнова обробка";
    document.getElementById("podach").innerHTML = "Подача: S = " + s + " мм./об.";
    document.getElementById("rezym_riz").innerHTML = "Швидкість різання для чорнової Vt = " + Number(vt).toFixed(3) +" м/хв.";
    document.getElementById("normal_time").innerHTML = "Норми часу:<br> Основний час для чорнової: То = " + Number(to).toFixed(2) + " хв."
    document.getElementById("sht_time").innerHTML = "Штучно калькуляційний для чорнової: Тшт = " + Number(tsht).toFixed(2) + " хв.;";
    document.getElementById("type_instrument").innerHTML = "Матеріал ріжучого інструмента для чорнової обробки: " + mat_inst;

    // Виведення результатів для чистової обробки

    document.getElementById("type_clean").innerHTML = "Чистова обробка";
    document.getElementById("podach_clear").innerHTML = "Подача: S = " + s + " мм./об.";
    document.getElementById("rezym_riz_clear").innerHTML = "Швидкість різання для чистової: Vt = " + Number(vtc).toFixed(3) +" м/хв";
    document.getElementById("normal_time_clear").innerHTML = "Норми часу: Основний час для чистової: То = " + Number(toc).toFixed(2) + " хв.";
    document.getElementById("sht_time_clear").innerHTML = "Штучно калькуляційний для чистової: Тшт = " + Number(tshtc).toFixed(2) + " хв.;";
    document.getElementById("type_instrument_clear").innerHTML = "Матеріал ріжучого інструмента для чистової обробки: " + mat_instc;
    document.getElementById("type_varstat").innerHTML = "Тип верстата: Револьверно-токарний верстат " + verstat;
    // document.getElementById("spravka").innerHTML = "<br> Справка: <br>Т5К10 Чорнове точіння, розточка, фрезерування <br>Т30К4 Тонке точіння на високих V з малими s <br> ВК6 Напів чистове точіння, розточка і фрезерування";
    document.getElementById("imageid").src="img/" + verstat + ".jpg";

// ВК6 Получистовое точение,расточка и фрезер
// ВК6 ОМ Чистовая обработка на высоких V и умеренных подачах. СПИД жесткая
// ВК6 ОМ Тонкое и чистовое точение, фрезерование
// ВК6 М Чистовое точение и чистовое фрезерование
// Т14К8 Получистовое точение и расточка
// ТТ7К12 Строгание стали и стального литья
// ТТ8К6 Чистовое фрезерование спец.чугунов
// ТТ10К8Б Получистовая обработка
// ВК10 ОМ Предварит.обработка, припуск неравный
// ВК10 М
// ВК8 Черновая и обдирочная обработка
// ТТ7К12 Точение с ударной нагрузкой
// Т30К4 Тонкое точение на высоких V c малыми s
// Т15К6 Чистовое точение и расточка
// Т14К8 Получистовое точение и расточка
// ТТ20К9 Получистовое точение, расточка, фрезеров.
// Т5К10 Черновое точение,расточка,фрезерование

// "Норми часу:<br>Тк — загальний (калькуляційний) час на виконання ТО; <br>  Тшт — штучний час, що витрачається на обробку кожної деталі; <br> Тпз — підготовчо-заключний час<br><br>";
}
