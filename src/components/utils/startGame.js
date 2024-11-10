import closeModal from "./closeModal";
import getClickCoord from "./getClickCoord";
import styleModal from "./styleModal";

export default function startGame() {
  let rafH;
  const field = document.getElementById("canvas");
  if (!field.getContext) {
    alert('Ваш браузер не поддерживает тег "canvas"');
  }
  const Wc = field.width;
  const Hc = field.height;
  const ctx = field.getContext("2d");
  document.getElementById("start").addEventListener("click", showGame);
  function showGame() {
    const heros = [];
    const shots = [];
    let colorB2 = "rgb(50, 11, 79)";
    let colorB1 = "rgb(145, 15, 6)";
    let count = 0;
    let point1 = 0;
    let point2 = 0;
    for (let i = 1; i < 3; i++) {
      heros.push({
        X: i === 1 ? 22 : 758,
        Y: i === 1 ? 20 : 370,
        flag: i,
        speed: document.getElementById(`sd${i}`).value * 1,
        color: i === 1 ? "rgb(242, 114, 229)" : "rgb(53, 108, 219)",
      });
    }
    function drawHeros() {
      ctx.clearRect(0, 0, Wc, Hc);
      heros.forEach((item) => {
        ctx.beginPath();
        ctx.arc(item.X, item.Y, 20, 0, 2 * Math.PI, true);
        ctx.closePath();
        let rateFire =
          item.flag === 1
            ? document.getElementById("sh1").value
            : document.getElementById("sh2").value;

        if (count === 0 || count % (10 - rateFire) === 0) {
          shots.push({
            id: 0,
            Xs: item.X,
            Ys: item.Y,
            speedB: 3,
            mark: item.flag,
            colorS: item.flag === 1 ? colorB1 : colorB2,
          });
        }

        ctx.fillStyle = item.color;
        ctx.fill();
        item.Y += item.speed;
        if (item.Y + item.speed > Hc - 15 || item.Y + item.speed < 15) {
          item.speed = -item.speed;
        }
      });
 
      field.addEventListener("mousemove", (e) => {
        const mouse = getClickCoord(e);
        if (mouse.numb === 0) { return; }
        const foundHero = heros.find((item) => item.flag === mouse.numb);
        if(foundHero.speed > 0 && Math.round(mouse.y) >= foundHero.Y + 10 && Math.round(mouse.y) <= foundHero.Y + 15) {
          foundHero.speed = -foundHero.speed;
        }
        if(foundHero.speed < 0 && Math.round(mouse.y) >= foundHero.Y - 15 && Math.round(mouse.y) <= foundHero.Y - 10) {
          foundHero.speed = -foundHero.speed;
        }
      }, {once: true});

      shots.forEach((el, index) => {
        ctx.beginPath();
        ctx.arc(el.Xs, el.Ys, 5, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.fillStyle = el.colorS;
        ctx.fill();
        el.id = `${el.mark}-${index}`;
        if(el.mark === 1) {el.Xs += el.speedB} else {el.Xs -= el.speedB};

        if (el.mark ===1 && el.Xs > Wc - 26 && el.Ys > heros[1].Y - 20 && el.Ys < heros[1].Y + 20
        ) {
          point1++; 
          document.getElementById('gr1').textContent = point1;
        }

        if (el.mark ===2 && el.Xs < 20 && el.Ys > heros[0].Y - 20 && el.Ys < heros[0].Y + 20
        ) {
          point2++;
          document.getElementById('gr2').textContent = point2;
        }
        if (el.Xs + el.speedB > Wc - 18 || el.Xs + el.speedB < 18) {
          shots.shift();
        }
      });

      count++;
      rafH = requestAnimationFrame(drawHeros);
    }

    heros.forEach((item) => {
      document
        .getElementById(`sd${item.flag}`)
        .addEventListener("change", (e) => {
          item.speed = e.target.value * 1;
        });
    });

    drawHeros();

    document.getElementById("stop").addEventListener("click", () => {
      window.cancelAnimationFrame(rafH);
    });
    /**
     * Поскольку изменить состояние компонентов из этой функции и других функций, вызванных отсюда же я не сумел,
     * показыать модалку пришлось добавленипем класса, а стилизацию модалки пришлось вынести в отдельную функцию
     * styleModal. И в ней уже стилизовать модалку нативным способом и добавлением классов.
     */
    
    field.addEventListener("click", (e) => {
      const click = getClickCoord(e);
      const foundHero = heros.find((el) => el.flag === click.numb);
      const foundShot = shots.find((el) => el.mark === foundHero.flag);
      if (!foundHero) return;
      if (click.y <= foundHero.Y + 30 && click.y >= foundHero.Y - 30) {
        document.querySelector(".modal-wrapper").classList.add("active");
        styleModal(foundHero.flag, foundShot.colorS);
      }
    });

    document.getElementById("modal-button").addEventListener("click", (e) => {
      e.preventDefault();
      let colorBillet = "";
      const numberHero = document.querySelector(".modal-form").dataset.hero;
      document.querySelectorAll(".modal-form__radio").forEach((item) => {
        if (item.checked) {
          colorBillet = getComputedStyle(item.nextSibling).backgroundColor;
        }
      });
      if (numberHero * 1 === 1) {
        colorB1 = colorBillet;
      }
      if (numberHero * 1 === 2) {
        colorB2 = colorBillet;
      }
      setTimeout(closeModal, 50, e);
    });
  }
}
