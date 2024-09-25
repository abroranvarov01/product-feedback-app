import { getCategory, getData } from "./service.js";

const categoryTab = document.querySelector(".category_tab");
const itemsList = document.querySelector(".items_list");

const categoryRender = async () => {
  const data = await getCategory();
  categoryTab.innerHTML = data
    .map(
      (item) =>
        `
      <button class="bg-btnBg rounded-[10px] py-[6px] px-[15px] font-semibold text-tetxColor category__btn">
           ${item}
      </button>
     `
    )
    .join("");
  const category__btns = document.querySelectorAll(".category__btn");
  category__btns.forEach((item) => {
    item.addEventListener("click", async () => {
  
      renderData(item);   
    });
  });
};
categoryRender();

const renderData = async (item) => {
    const data = await getData(item?.textContent.trim());

    console.log(data , 'data');

  itemsList.innerHTML = data
    .map(
      (item) => `
        <li class="bg-[#fff] flex justify-between items-center pt-[28px] pr-[38px] pb-[28px] pl-[38px] rounded-[10px] mb-[20px]">
          <div class="flex gap-[40px]">
            <div class="w-[40px] h-[53px] pt-[14px] pb-[8px] bg-[#f2f4fe] rounded-[10px] text-center">
              <div class="pl-[16px] pr-[16px]">
                <img src="./img/arrow.top.svg" alt="img" />
              </div>
              <p class="text-[#3a4374] pl-[9px] pr-[9px] text-[13px] font-[700] mb-[8px]">${item.id}</p>
            </div>
            <div>
              <h2 class="font-bold text-[18px] text-[#3a4374] mb-[4px]">${item.title}</h2>
              <p class="font-normal text-[16px] text-[#647196] mb-[12px]">${item.description}</p>
              <a class="bg-[#f2f4ff] rounded-[10px] pt-[5px] pr-[16px] pb-[5px] pl-[16px] font-semibold text-[13px] text-[#4661e6]" href="#">${item.type}</a>
            </div>
          </div>
          <div class="flex gap-[8px] justify-center">
            <img src="./img/com.svg" alt="img">
            <p>${item.votes}</p>
          </div>
        </li>
      `
    )
    .join("");
};
renderData();
