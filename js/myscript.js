// Вибираємо тип деталі

var listModel = document.getElementById("type_model");
var ra = document.getElementById("ra");
var material = document.getElementById("material");

function changeModel() {
 var selectedValue = listModel.options[listModel.selectedIndex].value;
 if (selectedValue == 1) {//циліндр відкритий
   document.getElementsByName('height')[0].placeholder='Діаметр в мм.';
   document.getElementsByName('long')[0].placeholder='Довжина циліндра в мм.';
// для елементів поверхні
   document.getElementById("height").style.visibility = "visible";
   document.getElementById("width").style.visibility = "hide";
   document.getElementById("long").style.visibility = "visible";
 }else if (selectedValue == 2) {//циліндр закритий
   document.getElementsByName('height')[0].placeholder='Діаметр в мм.';
   document.getElementsByName('width')[0].placeholder='Діаметр зовнішній в мм.';
   document.getElementsByName('long')[0].placeholder='Довжина циліндра в мм.';
// для елементів
   document.getElementById("height").style.visibility = "visible";
   document.getElementById("width").style.visibility = "visible";
   document.getElementById("long").style.visibility = "visible";
 }else if (selectedValue == 3) {//циліндр з отвором
   document.getElementsByName('height')[0].placeholder='Діаметр зовнішній в мм.';
   document.getElementsByName('width')[0].placeholder='Діаметр внутрішній в мм.';
   document.getElementsByName('long')[0].placeholder='Довжина циліндра в мм.';
// для поверхні
   document.getElementById("height").style.visibility = "visible";
   document.getElementById("width").style.visibility = "visible";
   document.getElementById("long").style.visibility = "visible";
 }else if (selectedValue == 4) {//отвір
   document.getElementsByName('height')[0].placeholder='Діаметр отвору в мм.';
   document.getElementsByName('long')[0].placeholder='Довжина в мм.';
// для поверхні
   document.getElementById("height").style.visibility = "visible";
   document.getElementById("width").style.visibility = "hidden";
   document.getElementById("long").style.visibility = "visible";
 }else if (selectedValue == 5) {//конус
   document.getElementsByName('height')[0].placeholder='Максимальний діаметр в мм.';
   document.getElementsByName('width')[0].placeholder='Мінімальний діаметр в мм.';
   document.getElementsByName('long')[0].placeholder='Довжина конуса в мм.';
//  для поверхні
   document.getElementById("height").style.visibility = "visible";
   document.getElementById("width").style.visibility = "visible";
   document.getElementById("long").style.visibility = "visible";
 }else if (selectedValue == 6) {//сфера
   document.getElementsByName('height')[0].placeholder='Діаметр в мм.';
   document.getElementById("height").style.visibility = "visible";
// для поверхні
   document.getElementById("width").style.visibility = "hidden";
   document.getElementById("long").style.visibility = "hidden";
 }else if (selectedValue == 7) {//канавка
   // document.getElementsByName('height')[0].placeholder='Висота канавки в мм.';
   document.getElementsByName('width')[0].placeholder='Ширина канавки в мм.';
   document.getElementsByName('long')[0].placeholder='Довжина канавки в мм.';
// для поверхні
   document.getElementById("height").style.visibility = "hidden";
   document.getElementById("width").style.visibility = "visible";
   document.getElementById("long").style.visibility = "visible";
 }else if (selectedValue == 8) {//зовнішня фаска
   document.getElementsByName('height')[0].placeholder='Висота фаски в мм.';
   document.getElementsByName('width')[0].placeholder='Ширина фаски в мм.';
   document.getElementsByName('long')[0].placeholder='Довжина фаски в мм.';
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
    var vt, hb, s, to, td, tvid, nt, z, t, ns, tsht, tobs, mat_inst, kv, sc, vtc, ntc, c, cc, toc, tvidс, tobsc, zc, tshtc, verstat;
    // Розрахунок
    // Вибір ріжучого інструмента "Його характеристики"
    // материал режучего инструмента
    // для НВ 450 - 500 - Р9М4К8, Р18
    // для НВ 250 -360 - Р6М5К5, Р9

    cv = 165;

    if (materialValue = 1) {
      mat_inst = "Р9М4К8";
      mat_instc = "Т15К6";
    }else if (materialValue = 2) {
      mat_inst = "Р18";
      mat_instc = "ВК6";
    }else if (materialValue = 3) {
      mat_inst = "Р6М5К5";
      mat_instc = "ВК6";
    }else if (materialValue = 4) {
      mat_inst = "Т5К10-21"
      mat_instc = "Т15К6";
    }

    if ( raValue == 1 ){
      s = 0.45;
      sc = 0.25;
      t = 0.5; // глибина різання
    } else if (raValue == 2) {
      s = 0.25;
      sc = 0.14;
      t = 1; // глибина різання
    } else if (raValue == 3) {
      s = 0.14;
      sc = 0.08;
      t = 2.2; // глибина різання
    } else if (raValue == 4) {
      s = 0.08;
      sc = 0.04;
      t = 3.5; // глибина різання
    } else if (raValue == 4) {
      s = 0.08;
      sc = 0.04;
      t = 4.6; // глибина різанн
    }

    if (selectedValue == 1){
      // Подача при черновой/чистовой обработке
      chorn_type = "точильна";
      clear_type = "розточна";

      // Розраховуємо теоретичну швидкість різання
      kv = 0.75; // поправочний коефіцієнт
      vt = (cv)/(60*t*s)*kv; // чорнова
      vtc = (cv)/(60*t*sc)*kv; // чистова

      // Розрахуемо кількість проходів

      ns = long/t;

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*height); // чорнова
      ntc = (1000*vtc)/(3.14*height); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*height*nt)/1000; // чорнова
      cc = (3.14*height*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (long*ns)/(nt*s); //хв. для черновой
      toc = (long*ns)/(ntc*sc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*to; // хв. для чорновой
      tobsc = 0.6*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой

      // Додатковий час
      td = 0.35; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой

      // Визначаємо штучнокалькуляційний час
      tsht = (to + td)/(1 + z/100); // хв. для чорновой
      tshtc = (toc + td)/(1 + zc/100); // для чистовой

    }else if (selectedValue == 2) {
      // Подача при черновой/чистовой обработке
      chorn_type = "точильна";
      clear_type = "розточна";

      // Розраховуємо теоретичну швидкість різання
      kv = 0.75; // поправочний коефіцієнт
      vt = (cv)/(60*t*s)*kv; // чорнова
      vtc = (cv)/(60*t*sc)*kv; // чистова

      // Розрахуемо кількість проходів

      ns = long/t;

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*((height-width)/2)); // чорнова
      ntc = (1000*vtc)/(3.14*((height-width)/2)); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*((height-width)/2)*nt)/1000; // чорнова
      cc = (3.14*((height-width)/2)*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (long*ns)/(nt*s); //хв. для черновой
      toc = (long*ns)/(ntc*sc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*to; // хв. для чорновой
      tobsc = 0.6*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой

      // Додатковий час
      td = 0.35; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой

      // Визначаємо штучнокалькуляційний час
      tsht = (to + td)/(1 + z/100); // хв. для чорновой
      tshtc = (toc + td)/(1 + zc/100); // для чистовой

    } else if (selectedValue == 3) {
      chorn_type = "свердлильна";
      clear_type = "розсвердлювальна";
      // Подача при черновой обработке
      // Розточування врахувати

      // Розраховуємо теоретичну швидкість різання
      kv = 0.87; // поправочний коефіцієнт
      vt = (cv)/(60*t*s)*kv; // чорнова
      vtc = (cv)/(60*t*sc)*kv; // чистова

      // Розрахуемо кількість проходів

      ns = long/t;

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*width); // чорнова
      ntc = (1000*vtc)/(3.14*width); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*width*nt)/1000; // чорнова
      cc = (3.14*width*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (long*ns)/(nt*s); //хв. для черновой
      toc = (long*ns)/(ntc*sc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*to; // хв. для чорновой
      tobsc = 0.6*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой

      // Додатковий час
      td = 0.35; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой

      // Визначаємо штучнокалькуляційний час
      tsht = (to + td)/(1 + z/100); // хв. для чорновой
      tshtc = (toc + td)/(1 + zc/100); // для чистовой



      // Додатковий час
      td = 0.4; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой

      // Визначаємо штучнокалькуляційний час
      tsht = (to + td)/(1 + z/100); // хв. для чорновой
      tshtc = (toc + td)/(1 + zc/100); // для чистовой

    } else if ( selectedValue == 4) {
      chorn_type = "свердлильна";
      clear_type = "розсвердлювальна";
      // Подача при черновой обработке
      // Розточування врахувати

      // Розраховуємо теоретичну швидкість різання
      kv = 0.87; // поправочний коефіцієнт
      vt = (cv)/(60*t*s)*kv; // чорнова
      vtc = (cv)/(60*t*sc)*kv; // чистова

      // Розрахуемо кількість проходів

      ns = long/t;

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*height); // чорнова
      ntc = (1000*vtc)/(3.14*height); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*height*nt)/1000; // чорнова
      cc = (3.14*height*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (long*ns)/(nt*s); //хв. для черновой
      toc = (long*ns)/(ntc*sc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*to; // хв. для чорновой
      tobsc = 0.6*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой

      // Додатковий час
      td = 0.35; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой

      // Визначаємо штучнокалькуляційний час
      tsht = (to + td)/(1 + z/100); // хв. для чорновой
      tshtc = (toc + td)/(1 + zc/100); // для чистовой

    } else if ( selectedValue == 5) {
      chorn_type = "точильна";
      clear_type = "розточна";
      // Подача при черновой обработке
      // Розточування врахувати

      // Розраховуємо теоретичну швидкість різання
      kv = 0.75; // поправочний коефіцієнт
      vt = (cv)/(60*t*s)*kv; // чорнова
      vtc = (cv)/(60*t*sc)*kv; // чистова

      // Розрахуемо кількість проходів

      ns = long/t;

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*((height-width)/2)); // чорнова
      ntc = (1000*vtc)/(3.14*((height-width)/2)); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*((height-width)/2)*nt)/1000; // чорнова
      cc = (3.14*((height-width)/2)*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (long*ns)/(nt*s); //хв. для черновой
      toc = (long*ns)/(ntc*sc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*to; // хв. для чорновой
      tobsc = 0.6*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой

      // Додатковий час
      td = 0.35; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой

    } else if ( selectedValue == 6) {
      chorn_type = "точильна";
      clear_type = "розточна";
      // Подача при черновой обработке

      // Розраховуємо теоретичну швидкість різання
      kv = 0.75; // поправочний коефіцієнт
      vt = (cv)/(60*t*s)*kv; // чорнова
      vtc = (cv)/(60*t*sc)*kv; // чистова

      // Розрахуемо кількість проходів

      ns = long/t;

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*height); // чорнова
      ntc = (1000*vtc)/(3.14*height); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*height*nt)/1000; // чорнова
      cc = (3.14*height*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (height*ns)/(nt*s); //хв. для черновой
      toc = (height*ns)/(ntc*sc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*to; // хв. для чорновой
      tobsc = 0.6*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой

      // Додатковий час
      td = 0.35; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой

    } else if ( selectedValue == 7) {
      chorn_type = "точильна";
      clear_type = "розточна";
      // Подача при черновой обработке

      // Розраховуємо теоретичну швидкість різання
      kv = 0.75; // поправочний коефіцієнт
      vt = (cv)/(60*t*s)*kv; // чорнова
      vtc = (cv)/(60*t*sc)*kv; // чистова

      // Розрахуемо кількість проходів

      ns = long/t;

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*width); // чорнова
      ntc = (1000*vtc)/(3.14*width); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*width*nt)/1000; // чорнова
      cc = (3.14*width*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (long*ns)/(nt*s); //хв. для черновой
      toc = (long*ns)/(ntc*sc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*to; // хв. для чорновой
      tobsc = 0.6*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой

      // Додатковий час
      td = 0.35; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой

    }else if (selectedValue == 8) {
      chorn_type = "точильна";
      clear_type = "точильна";
      // Подача при черновой обработке

      // Розраховуємо теоретичну швидкість різання
      kv = 0.75; // поправочний коефіцієнт
      vt = (cv)/(60*t*s)*kv; // чорнова
      vtc = (cv)/(60*t*sc)*kv; // чистова

      // Розрахуемо кількість проходів

      ns = long/t;

      // Розраховуємо частоту оберту шпинделя
      nt = (1000*vt)/(3.14*((height-width)/2)); // чорнова
      ntc = (1000*vtc)/(3.14*((height-width)/2)); // чистова

      // Розраховуємо дійсну швидкість різання
      c = (3.14*((height-width)/2)*nt)/1000; // чорнова
      cc = (3.14*((height-width)/2)*ntc)/1000; // чистова

      // Норми часу
      // Визначаємо Основний час обробки
      to = (long*ns)/(nt*s); //хв. для черновой
      toc = (long*ns)/(ntc*sc); // для чистовой

      // Визначаємо Обслуговуючий час
      tobs = 0.6*to; // хв. для чорновой
      tobsc = 0.6*toc; // хв. для чистовой

      // Визначаємо час на відпочинок
      tvid = 0.12*to // хв.
      tvidc = 0.12*toc; // хв. для чистовой

      // Додатковий час
      td = 0.35; // хв.
      z = tobs + tvid; // для чорновой
      zc = tobsc + tvidc; // для чистовой

    }

    maxVt = 384;  // максимальна швидкість різання
    minVt = 186;  //мінімальна швидкість різання

    if (nt < minVt) {
      c = minVt;
      cc = minVt;
    }else if (nt > maxVt) {
      c = maxVt;
      cc = maxVt;
    }

    // Вибір верстата
    if (raValue == 1 || raValue == 2) {
      // verstat = "1П365";
      verstat = "1А341";
    }else if (raValue == 3 || raValue == 4 || raValue == 5) {
      verstat = "1П365";
      // verstat = "1А341";
    }


    // Виведення результатів для чорнової обробки

    document.getElementById("result").innerHTML = "Виведеня результатів";
    document.getElementById("type_chorn").innerHTML = "Чорнова " + chorn_type + " обробка";
    document.getElementById("podach").innerHTML = "Подача: S = " + s + " мм./об.";
    document.getElementById("prohod").innerHTML = "Кількість проходів: " + ns;
    document.getElementById("obert").innerHTML = "Частота обертання шпинделя: " + nt;
    document.getElementById("rezym_riz").innerHTML = "Швидкість різання для чорнової Vt = " + Number(c).toFixed(3) +" м/хв.";
    document.getElementById("normal_time").innerHTML = "Норми часу:<br> Основний час для чорнової: То = " + Number(to).toFixed(2) + " хв."
    document.getElementById("sht_time").innerHTML = "Штучно калькуляційний для чорнової: Тшт = " + Number(tsht).toFixed(2) + " хв.;";
    document.getElementById("type_instrument").innerHTML = "Матеріал ріжучого інструмента для чорнової обробки: " + mat_inst;

    // Виведення результатів для чистової обробки

    document.getElementById("type_clear").innerHTML = "Чистова " + clear_type + " обробка";
    document.getElementById("podach_clear").innerHTML = "Подача: S = " + sc + " мм./об.";
    document.getElementById("prohod_clear").innerHTML = "Кількість проходів: " + ns;
    document.getElementById("obert_clear").innerHTML = "Частота обертання шпинделя: " + ntc;
    document.getElementById("rezym_riz_clear").innerHTML = "Швидкість різання для чистової: Vt = " + Number(cc).toFixed(3) +" м/хв";
    document.getElementById("normal_time_clear").innerHTML = "Норми часу: Основний час для чистової: То = " + Number(toc).toFixed(2) + " хв.";
    document.getElementById("sht_time_clear").innerHTML = "Штучно калькуляційний для чистової: Тшт = " + Number(tshtc).toFixed(2) + " хв.;";
    document.getElementById("type_instrument_clear").innerHTML = "Матеріал ріжучого інструмента для чистової обробки: " + mat_instc;
    document.getElementById("type_varstat").innerHTML = "Тип верстата: Револьверно-токарний верстат " + verstat;
    document.getElementById("imageid").src="img/" + verstat + ".jpg";
}
