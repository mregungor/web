const AVP_2022_Images = [{"title":"AvP1_H12_1.png","href":"https://github.com//mregungor/AvP/blob/main/2022-AvP1_DersNotlari/AvP1_H12_1.png"},{"title":"AvP1_H12_2.png","href":"https://github.com//mregungor/AvP/blob/main/2022-AvP1_DersNotlari/AvP1_H12_2.png"},{"title":"AvP1_H12_3.png","href":"https://github.com//mregungor/AvP/blob/main/2022-AvP1_DersNotlari/AvP1_H12_3.png"},{"title":"AvP1_H13_1.png","href":"https://github.com//mregungor/AvP/blob/main/2022-AvP1_DersNotlari/AvP1_H13_1.png"},{"title":"AvP1_H13_2.png","href":"https://github.com//mregungor/AvP/blob/main/2022-AvP1_DersNotlari/AvP1_H13_2.png"},{"title":"AvP1_H13_3.png","href":"https://github.com//mregungor/AvP/blob/main/2022-AvP1_DersNotlari/AvP1_H13_3.png"},{"title":"AvP1_H13_4.png","href":"https://github.com//mregungor/AvP/blob/main/2022-AvP1_DersNotlari/AvP1_H13_4.png"},{"title":"AvP1_H13_5.png","href":"https://github.com//mregungor/AvP/blob/main/2022-AvP1_DersNotlari/AvP1_H13_5.png"},{"title":"AvP1_H13_6.png","href":"https://github.com//mregungor/AvP/blob/main/2022-AvP1_DersNotlari/AvP1_H13_6.png"},{"title":"AvP1_H13_7.png","href":"https://github.com//mregungor/AvP/blob/main/2022-AvP1_DersNotlari/AvP1_H13_7.png"},{"title":"AvP_H10Uyg_1.png","href":"https://github.com//mregungor/AvP/blob/main/2022-AvP1_DersNotlari/AvP_H10Uyg_1.png"}]

const lightBoxDiv = document.querySelector('#lightBox')

AVP_2022_Images.forEach(item => {
    lightBoxDiv.innerHTML += ` <div class='border' style="padding:10px;">
                                    <a href="${item.href}/?raw=true">
                                        <img
                                        width="100%"
                                        src="${item.href}/?raw=true"
                                        data-bilderrahmen="gallery-02"
                                        data-bilderrahmen-title="${item.title}"
                                /></a>
                                <p>${item.title}</p>
                                </div>`
})
