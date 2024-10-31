
// Анимация для .marketing и .comprehensive-approach (появление с изменением прозрачности)
gsap.from(".marketing", {
  scrollTrigger: {
    trigger: ".marketing", // Когда элемент .marketing будет виден
    start: "top 80%",      // Начало анимации при достижении 80% окна просмотра
    end: "top 40%",        // Конец анимации при достижении 40% окна просмотра
    scrub: true,           // Плавная анимация при прокрутке
    markers: false         // Отключить маркеры для отладки
  },
  opacity: 0,              // Анимация появления от 0 до 1 прозрачности
  duration: 2              // Длительность анимации
});

gsap.from(".comprehensive-approach", {
  scrollTrigger: {
    trigger: ".comprehensive-approach",
    start: "top 80%",
    end: "top 40%",
    scrub: true,
    markers: false
  },
  opacity: 0,
  duration: 2
});

// Анимация для .scheme (выезд слева)
gsap.from(".scheme", {
  scrollTrigger: {
    trigger: ".scheme",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
    markers: false
  },
  x: "-100%",              // Стартовая позиция слева за пределами экрана
  opacity: 0,              // Элемент появляется с изменением прозрачности
  duration: 2
});

// Анимация для .scheme-1 (выезд справа)
gsap.from(".scheme-1", {
  scrollTrigger: {
    trigger: ".scheme-1",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
    markers: false
  },
  x: "100%",               // Стартовая позиция справа за пределами экрана
  opacity: 0,              // Элемент появляется с изменением прозрачности
  duration: 2
});
// Таймлайн для анимаций с изменением размера
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".frame",     // Триггер для запуска анимаций
    start: "top 80%",      // Когда верхний край .frame достигает 80% высоты окна
    end: "top 30%",        // Когда верхний край .frame достигает 30% высоты окна
    scrub: 1,              // Убираем рывки, делаем более плавную синхронизацию
    markers: false         // Маркеры можно включить для отладки
  }
});

// Анимация увеличения размера для .frame
tl.fromTo(".frame", {
  scale: 0,                // Стартовый размер
  opacity: 0               // Прозрачность 0
}, {
  scale: 1,                // Конечный размер
  opacity: 1,              // Полная видимость
  duration: 2,             // Длительность анимации
  ease: "power3.out"       // Плавное завершение анимации
});

// Анимация увеличения размера для .frame-e2
tl.fromTo(".frame-e2", {
  scale: 0,                // Стартовый размер
  opacity: 0               // Прозрачность 0
}, {
  scale: 1,                // Конечный размер
  opacity: 1,              // Полная видимость
  duration: 2,
  ease: "power3.out"       // Плавное завершение анимации
}, "-=1.5");               // Начать немного раньше, чем закончится анимация .frame

// Анимация для мышки: круговое движение
gsap.to(".mouse", {
  scrollTrigger: {
    trigger: ".frame",     // Триггер анимации
    start: "top 80%",      // Начало движения мышки
    end: "top 30%",        // Окончание анимации
    scrub: 1,              // Плавное движение
    markers: false         // Маркеры отключены
  },
  rotation: 360,           // Плавное вращение мышки
  x: 100,                  // Движение по кругу вправо
  y: 100,                  // Движение по кругу вниз
  duration: 2,             // Длительность движения
  ease: "power1.inOut"     // Плавное начало и завершение движения
});

// После завершения кругового движения, мышка возвращается в исходное положение
gsap.to(".mouse", {
  scrollTrigger: {
    trigger: ".frame-e2",   // Триггер после завершения анимации .frame-e2
    start: "top 30%",       // Момент начала возврата
    end: "top 30%",         // Конец прокрутки
    scrub: 1,               // Плавное возвращение
    markers: false          // Маркеры отключены
  },
  x: 0,                    // Вернуть мышку на исходную позицию по X
  y: 0,                    // Вернуть мышку на исходную позицию по Y
  rotation: 0,             // Вернуть вращение в исходное положение
  duration: 1,             // Длительность возвращения
  ease: "power1.out"        // Плавное возвращение
});

// Появление .branding-e0 после завершения всех предыдущих анимаций
tl.from(".branding-e0", {
  opacity: 0,              // Начальная прозрачность
  y: 50,                   // Легкое смещение по вертикали для плавного появления
  duration: 1,             // Длительность анимации появления
  ease: "power3.out",      // Плавное завершение анимации
  scrollTrigger: {
    trigger: ".branding-e0", // Появляется при прокрутке до этого элемента
    start: "top 80%",        // Начало анимации при достижении 80% экрана
    end: "top 40%",          // Окончание при достижении 40%
    scrub: 1                 // Плавная анимация синхронизирована с прокруткой
  }
});
// Регистрация плагина ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Анимация выезда элементов справа
gsap.fromTo(
  [".polygon", ".polygon-3", ".polygon-4", ".rectangle", ".rectangle-5", ".rectangle-6", ".billboard-pieces"],
  { x: 300, opacity: 0 },  // Начальное положение — за экраном справа, элемент невидим
  { 
    x: 0,                  // Выезд на экран
    opacity: 1,             // Появление элементов
    duration: 1.5,          // Длительность анимации
    ease: "power2.out",     // Плавный эффект
    scrollTrigger: {
      trigger: ".polygon",  // Триггер анимации (можно использовать любой общий элемент)
      start: "top 80%",     // Анимация начинается, когда верх первого элемента достигает 80% экрана
      end: "top 30%",       // Анимация завершена при достижении 30% экрана
      scrub: true,          // Синхронизация с прокруткой
      markers: false        // Отключаем маркеры (включите для отладки)
    }
  }
);

// Анимация для .polygon (из низкой насыщенности в полную)
gsap.fromTo(".polygon", 
  { opacity: 0 },         // Начальная прозрачность
  {
    scrollTrigger: {
      trigger: ".polygon",   // Триггер для запуска анимации
      start: "top 10%",      // Начало анимации, когда верхний край .polygon достигнет 10% экрана
      end: "top 30%",        // Конец анимации при достижении 30%
      scrub: true,           // Синхронизировать с прокруткой
      markers: false         // Отключаем маркеры
    },
    opacity: 1,              // Достижение полной насыщенности
    duration: 1              // Длительность анимации
  }
);

// Анимация для .polygon-3 (из низкой насыщенности в полную)
gsap.fromTo(".polygon-3", 
  { opacity: 0 },         // Начальная прозрачность
  {
    scrollTrigger: {
      trigger: ".polygon-3",  // Триггер для запуска анимации
      start: "top 10%",       // Начало анимации, когда верхний край .polygon-3 достигнет 10% экрана
      end: "top 30%",         // Конец анимации при достижении 30%
      scrub: true,            // Синхронизация с прокруткой
      markers: false          // Отключаем маркеры
    },
    opacity: 1,              // Достижение полной насыщенности
    duration: 1              // Длительность анимации
  }
);

// Анимация для .polygon-4 (из низкой насыщенности в полную)
gsap.fromTo(".polygon-4", 
  { opacity: 0 },         // Начальная прозрачность
  {
    scrollTrigger: {
      trigger: ".polygon-4",  // Триггер для запуска анимации
      start: "top 10%",       // Начало анимации, когда верхний край .polygon-4 достигнет 10% экрана
      end: "top 30%",         // Конец анимации при достижении 30%
      scrub: true,            // Синхронизация с прокруткой
      markers: false          // Отключаем маркеры
    },
    opacity: 1,              // Достижение полной насыщенности
    duration: 1              // Длительность анимации
  }
);


// Анимация для .pr
gsap.fromTo([".pr",".polygon", ".rectangle-a", ".rectangle-9", ".rectangle-8"], 
  { opacity: 0.5 },         // Чуть более высокая начальная прозрачность для .pr
  {
    scrollTrigger: {
      trigger: ".pr",
      start: "top 30%",
      end: "top 30%",
      scrub: true,
      markers: false
    },
    opacity: 1,              // Плавное увеличение до полной насыщенности
    duration: 1
  }
);


// Регистрация плагина ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Создаем общий таймлайн для синхронной анимации
let onnewtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".polygon-7",    // Триггер для запуска анимации
    start: "top+=700px",      // Анимация начинается, когда верх элемента проходит 700 пикселей от верхней части страницы
    end: "top+=1500px",       // Анимация заканчивается через 1500 пикселей после начала
    scrub: true,              // Плавная синхронизация с прокруткой
    markers: false,           // Отключаем маркеры
    invalidateOnRefresh: true // Пересчитывать триггеры при изменении размеров окна
  }
});


// Анимация для элементов с атрибутами fill-rule и clip-rule
gsap.to(["[fill-rule]", "[clip-rule]"], {
  scrollTrigger: {
    trigger: "[fill-rule]",    // Проверим, что элемент с fill-rule существует
    start: "top 120%",          // Начало анимации, когда элемент достигает 80% экрана
    end: "top 30%",            // Конец анимации при 30%
    scrub: true,               // Плавная синхронизация с прокруткой
    markers: false             // Включите маркеры для отладки
  },
  rotation: 360,               // Вращение на 360 градусов
  transformOrigin: "50% 50%",  // Центр вращения — центр элемента
  duration: 2,                 // Длительность анимации
  ease: "power2.inOut"         // Плавное начало и окончание
});


// Плавное появление .polygon-7 с непрозрачности
onnewtl.fromTo(".polygon-7", 
  { opacity: 0, visibility: "visible" }, // Сначала элемент невидим и скрыт
  { 
    opacity: 1,                          // Конечная прозрачность (полностью видимый)
    duration: 2,                         // Длительность анимации (плавное появление)
    ease: "power1.out"                   // Плавное завершение
  }
);

// Появление .production
onnewtl.fromTo(".production", 
  { opacity: 0, y: 50, visibility: "visible" },  // Сначала невидимо, появляется с небольшим сдвигом
  { 
    opacity: 1,                 // Конечная прозрачность (полностью видимый)
    y: 0,                       // Смещение на исходную позицию
    duration: 2,                // Длительность анимации (плавное появление)
    ease: "power1.out"          // Плавное завершение
  }, "-=2");                    // Появляется одновременно с .polygon-7

// Появление .end-to-end-solutions с плавной прозрачностью
onnewtl.fromTo(".end-to-end-solutions", 
  { opacity: 0, y: 50, visibility: "visible" },  // Сначала невидимо
  { 
    opacity: 1,                 // Конечная прозрачность (полностью видимый)
    y: 0,                       // Смещение на исходную позицию
    duration: 2,                // Длительность анимации (плавное появление)
    ease: "power1.out"          // Плавное завершение
  }, "-=1");                    // Появляется через 1 секунду после .production





// Анимация для img11 и .design
gsap.to(".img11", {
  scrollTrigger: {
    trigger: ".img11",
    start: "top center",
    onEnter: () => {
      gsap.to(".img11", {
        opacity: 1,
        rotation: 10,
        transformOrigin: "50% 50%",
        duration: 1,
        visibility: "visible",  // Делаем видимым
        ease: "power2.inOut"
      });
      gsap.to(".design", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        visibility: "visible",  // Делаем видимым
        ease: "power2.inOut",
        delay: 0.2
      });
    },
    onLeaveBack: () => {
      gsap.to(".img11", {
        rotation: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });
      gsap.to(".design", {
        opacity: 0,
        y: -50,
        duration: 0.5,
        visibility: "hidden",  // Скрываем обратно
        ease: "power2.inOut"
      });
    }
  }
});

// Анимация для img12 и .graphic
gsap.to(".img12", {
  scrollTrigger: {
    trigger: ".img12",
    start: "top center",
    onEnter: () => {
      gsap.to(".img12", {
        opacity: 1,
        rotation: 10,
        transformOrigin: "50% 50%",
        duration: 1,
        visibility: "visible",  // Делаем видимым
        ease: "power2.inOut"
      });
      gsap.to(".graphic", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        visibility: "visible",  // Делаем видимым
        ease: "power2.inOut",
        delay: 0.2
      });
    },
    onLeaveBack: () => {
      gsap.to(".img12", {
        rotation: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });
      gsap.to(".graphic", {
        opacity: 0,
        y: -50,
        duration: 0.5,
        visibility: "hidden",  // Скрываем обратно
        ease: "power2.inOut"
      });
    }
  }
});

// Анимация для img13 и .motion
gsap.to(".img13", {
  scrollTrigger: {
    trigger: ".img13",
    start: "top center",
    onEnter: () => {
      gsap.to(".img13", {
        opacity: 1,
        rotation: 10,
        transformOrigin: "50% 50%",
        duration: 1,
        visibility: "visible",  // Делаем видимым
        ease: "power2.inOut"
      });
      gsap.to(".motion", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        visibility: "visible",  // Делаем видимым
        ease: "power2.inOut",
        delay: 0.2
      });
    },
    onLeaveBack: () => {
      gsap.to(".img13", {
        rotation: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });
      gsap.to(".motion", {
        opacity: 0,
        y: -50,
        duration: 0.5,
        visibility: "hidden",  // Скрываем обратно
        ease: "power2.inOut"
      });
    }
  }
});

// Анимация для img14 и .text-b
gsap.to(".img14", {
  scrollTrigger: {
    trigger: ".img14",
    start: "top center",
    onEnter: () => {
      gsap.to(".img14", {
        opacity: 1,
        rotation: 10,
        transformOrigin: "50% 50%",
        duration: 1,
        visibility: "visible",  // Делаем видимым
        ease: "power2.inOut"
      });
      gsap.to(".text-b", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        visibility: "visible",  // Делаем видимым
        ease: "power2.inOut",
        delay: 0.2
      });
    },
    onLeaveBack: () => {
      gsap.to(".img14", {
        rotation: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });
      gsap.to(".text-b", {
        opacity: 0,
        y: -50,
        duration: 0.5,
        visibility: "hidden",  // Скрываем обратно
        ease: "power2.inOut"
      });
    }
  }
});



gsap.to(".creative-department", {
  scrollTrigger: {
    trigger: ".creative-department",  // Триггер анимации
    start: "top center",              // Начало анимации, когда элемент в центре экрана
    onEnter: () => {
      gsap.to(".creative-department", {
        opacity: 1,                   // Появляется
        visibility: "visible",        // Делает видимым
        x: 0,                         // Возвращаем в исходное положение
        duration: 1,                  // Длительность анимации
        ease: "power2.inOut"          // Плавное начало и конец
      });
    },
    onLeaveBack: () => {
      gsap.to(".creative-department", {
        opacity: 0,                   // Исчезает
        visibility: "hidden",         // Скрывается
        x: 100,                       // Возвращаем вправо
        duration: 1,                  // Длительность анимации
        ease: "power2.inOut"          // Плавное начало и конец
      });
    }
  }
});

// Анимация для .web-mobile-development (появление с увеличением непрозрачности)
gsap.to(".web-mobile-development", {
  scrollTrigger: {
    trigger: ".web-mobile-development",
    start: "top center",
    onEnter: () => {
      gsap.to(".web-mobile-development", {
        opacity: 1,
        visibility: "visible",
        duration: 1,
        ease: "power2.inOut"
      });
    },
    onLeaveBack: () => {
      gsap.to(".web-mobile-development", {
        opacity: 0,
        visibility: "hidden",
        duration: 1,
        ease: "power2.inOut"
      });
    }
  }
});

// Анимация для .web-mobile-department (появление с выездом слева)
gsap.to(".web-mobile-department", {
  scrollTrigger: {
    trigger: ".web-mobile-department",
    start: "top center",
    onEnter: () => {
      gsap.to(".web-mobile-department", {
        opacity: 1,
        visibility: "visible",
        x: 0,                            // Возвращаем в исходное положение
        duration: 1,
        ease: "power2.inOut"
      });
    },
    onLeaveBack: () => {
      gsap.to(".web-mobile-department", {
        opacity: 0,
        visibility: "hidden",
        x: -100,                         // Возвращаем обратно влево
        duration: 1,
        ease: "power2.inOut"
      });
    }
  }
});

// Анимация для .rectangle-b (появление с выездом справа)
gsap.to(".rectangle-b", {
  scrollTrigger: {
    trigger: ".rectangle-b",
    start: "top center",
    onEnter: () => {
      gsap.to(".rectangle-b", {
        opacity: 1,
        visibility: "visible",
        x: 0,                            // Возвращаем в исходное положение
        duration: 1,
        ease: "power2.inOut"
      });
    },
    onLeaveBack: () => {
      gsap.to(".rectangle-b", {
        opacity: 0,
        visibility: "hidden",
        x: 100,                          // Возвращаем обратно вправо
        duration: 1,
        ease: "power2.inOut"
      });
    }
  }
});



// Регистрация плагина ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Анимация для выезда и появления элемента .advertisement
gsap.fromTo(".advertisement", 
  { x: -300, opacity: 0 },             // Начальные значения (слева, прозрачность)
  { 
    x: 0, opacity: 1,                  // Появление с перемещением и непрозрачностью
    duration: 1,                       // Длительность анимации
    ease: "power2.out",                // Плавный эффект
    scrollTrigger: {
      trigger: ".advertisement",       // Триггер анимации
      start: "top center",             // Когда верх элемента касается центра экрана
      end: "bottom 80%",               // Заканчивается, когда низ элемента достигнет 80% высоты экрана
      scrub: true,                     // Плавная синхронизация с прокруткой
      markers: false                   // Отключить маркеры (можно включить для отладки)
    }
  }
);

// Используем qtl (shorthand для timeline) для последовательной анимации
let qtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".advertisement",         // Триггер — появление элемента .advertisement
    start: "top center",               // Анимация начинается, когда .advertisement попадает в центр экрана
    end: "+=1000",                     // Продолжительность анимации (1000px прокрутки)
    scrub: true,                       // Плавная синхронизация с прокруткой
    markers: false                     // Отключаем маркеры для отладки
  }
});
// Первая анимация длится дольше, чтобы быть более заметной
qtl.fromTo(".logoimgdown img", 
  { opacity: 0, rotation: 0, scale: 0.5 },  // Начальные значения
  { 
    opacity: 1, 
    rotation: 360, 
    scale: 1, 
    duration: 3,                 // Длительность увеличена до 4 секунд
    transformOrigin: "50% 50%", 
    ease: "power2.out"
  }
)
.to(".logoimgdown img", { opacity: 0, duration: 2 }, "-=0.1");  // Исчезновение с перекрытием на 0.1 сек


// Анимация для .logoimgdown-2 img с перекрытием на 0.3
qtl.fromTo(".logoimgdown-2 img", 
  { opacity: 0, rotation: 0, scale: 0.5 }, 
  { 
    opacity: 1, 
    rotation: 360, 
    scale: 1, 
    duration: 1, 
    transformOrigin: "50% 50%", 
    ease: "power2.out"
  }
)
.to(".logoimgdown-2 img", { opacity: 0, duration: 1 }, "-=0.3");  // Исчезновение с перекрытием на 0.3 сек

// Анимация для .logoimgdown-3 img с перекрытием на 0.3
qtl.fromTo(".logoimgdown-3 img", 
  { opacity: 0, rotation: 0, scale: 0.5 }, 
  { 
    opacity: 1, 
    rotation: 360, 
    scale: 1, 
    duration: 1, 
    transformOrigin: "50% 50%", 
    ease: "power2.out"
  }
)
.to(".logoimgdown-3 img", { opacity: 0, duration: 1 }, "-=0.3");  // Исчезновение с перекрытием на 0.3 сек



// Анимация для .advertising-promotion-department (появление с выездом слева)
gsap.to(".advertising-promotion-department", {
  scrollTrigger: {
    trigger: ".advertising-promotion-department", // Триггер анимации
    start: "top center",                          // Начало анимации, когда элемент появляется в центре экрана
    onEnter: () => {
      gsap.to(".advertising-promotion-department", {
        opacity: 1,                               // Появление элемента
        visibility: "visible",                    // Делаем элемент видимым
        x: 0,                                     // Возвращаем в исходное положение
        duration: 1,                              // Длительность анимации
        ease: "power2.inOut"                      // Плавное начало и конец анимации
      });
    },
    onLeaveBack: () => {
      gsap.to(".advertising-promotion-department", {
        opacity: 0,                               // Исчезновение элемента
        visibility: "hidden",                     // Скрываем элемент
        x: -100,                                  // Возвращаем обратно влево за экран
        duration: 1,                              // Длительность анимации
        ease: "power2.inOut"                      // Плавное начало и конец анимации
      });
    }
  }
});
// Анимация для .advertisement (появление с выездом справа)
gsap.to(".advertisement", {
  scrollTrigger: {
    trigger: ".advertisement",     // Триггер анимации
    start: "top center",           // Начало анимации, когда элемент появляется в центре экрана
    onEnter: () => {
      gsap.to(".advertisement", {
        opacity: 1,                // Появление элемента
        visibility: "visible",     // Делаем элемент видимым
        x: 0,                      // Возвращаем в исходное положение (сдвиг вправо)
        duration: 1,               // Длительность анимации
        ease: "power2.inOut"       // Плавное начало и конец анимации
      });
    },
    onLeaveBack: () => {
      gsap.to(".advertisement", {
        opacity: 0,                // Исчезновение элемента
        visibility: "hidden",      // Скрываем элемент
        x: 100,                    // Возвращаем обратно вправо за экран
        duration: 1,               // Длительность анимации
        ease: "power2.inOut"       // Плавное начало и конец анимации
      });
    }
  }
});
