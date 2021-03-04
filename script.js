"use strict"

document.addEventListener("DOMContentLoaded", function () {
   if (document.documentElement.clientWidth < 1000) { // Смена текста
      document.querySelector(".scanner .section__title").textContent = "Съемка видео";
      document.querySelectorAll(".accessories__card_type1-desc").forEach((item) => {
         item.textContent = "Обширный ассортимент чехлов лля каждой модели. Цветовая гамма, отличное качество, премиальные материалы и дополнительные возможности призваны удовлетворить даже самый притязательный вкус.";
      })
   }
   if (document.documentElement.clientWidth < 550) { // Смена текста
      document.querySelectorAll(".accessories__card_type1-desc")[1].textContent = "Беспроводная зарядная станция Duo Pad быстро заряжает одновременно два устройства, одно из которых охлаждается.";
   }

});