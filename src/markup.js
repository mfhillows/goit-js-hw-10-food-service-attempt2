import menuItemCard from "./templates/menu-item.hbs";
import cards from "./menu.json"
const menuItemList = document.querySelector(".menu")
menuItemList.insertAdjacentHTML("beforeend", menuItemCard(cards));