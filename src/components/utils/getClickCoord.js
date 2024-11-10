export default function getClickCoord(e) {
  const click = {};
  const rect = e.target.getBoundingClientRect();
  click.x = e.clientX - rect.left;
  click.y = e.clientY - rect.top;
  if(click.x <= 42) { click.numb = 1;} else if(click.x >= 740) { click.numb = 2;} else { click.numb = 0;}
  return click;
}
