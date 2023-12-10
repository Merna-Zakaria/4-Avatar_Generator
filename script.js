
var skins = ["ffdbb4", "edb98a", "fd9841", "fcee93", "d08b5b", "ae5d29", "614335"];
var eyes = ["default", "dizzy", "eyeroll", "happy", "close", "hearts", "side", "wink", "squint", "surprised", "winkwacky", "cry"];
var eyebrows = ["default", "default2", "raised", "sad", "sad2", "unibrow", "updown", "updown2", "angry", "angry2"];
var mouths = ["default", "twinkle", "tongue", "smile", "serious", "scream", "sad", "grimace", "eating", "disbelief", "concerned", "vomit"];
var hairstyles = ["bold", "longhair", "longhairbob", "hairbun", "longhaircurly", "longhaircurvy", "longhairdread", "nottoolong", "miawallace", "longhairstraight", "longhairstraight2", "shorthairdreads", "shorthairdreads2", "shorthairfrizzle", "shorthairshaggy", "shorthaircurly", "shorthairflat", "shorthairround", "shorthairwaved", "shorthairsides"];
var haircolors = ["bb7748_9a4f2b_6f2912", "404040_262626_101010", "c79d63_ab733e_844713", "e1c68e_d0a964_b88339", "906253_663d32_3b1d16", "f8afaf_f48a8a_ed5e5e", "f1e6cf_e9d8b6_dec393", "d75324_c13215_a31608", "59a0ff_3777ff_194bff"];
var facialhairs = ["none", "magnum", "fancy", "magestic", "light"];
var clothes = ["vneck", "sweater", "hoodie", "overall", "blazer"];
var fabriccolors = ["545454", "65c9ff", "5199e4", "25557c", "e6e6e6", "929598", "a7ffc4", "ffdeb5", "ffafb9", "ffffb1", "ff5c5c", "e3adff"];
var backgroundcolors = ["ffffff", "f5f6eb", "e5fde2", "d5effd", "d1d0fc", "f7d0fc", "d0d0d0"];
var glasses = ["none", "rambo", "fancy", "old", "nerd", "fancy2", "harry"];
var glassopacities = ["10", "25", "50", "75", "100"];
var tattoos = ["non", "harry", "airbender", "krilin", "front", "tribal", "tribal2", "throat"];
var accesories = ["none", "earphones", "earring1", "earring2", "earring3"];
var current_skincolor = "edb98a";
var current_hairstyle = "longhair";
var current_haircolor = "bb7748_9a4f2b_6f2912";
var current_fabriccolors = "545454";
var current_backgroundcolors = "ffffff";
var current_glassopacity = 0.5;

const onChangeSkin = (id) => {
    current_skincolor = id;
    document.querySelectorAll('#skin #body')[0].setAttribute('fill', `#${id}`)
}
const onChangeEye = (id) => {
    Array.from(document.querySelectorAll('#eyes g')).forEach(val => val.style.display = 'none')
    document.querySelector(`#eyes #e_${id}`).style.display = 'block'
}
const onChangeEyebrow = (id) => {
    Array.from(document.querySelectorAll('#eyebrows g')).forEach(val => val.style.display = 'none')
    document.querySelector(`#eyebrows #eb_${id}`).style.display = 'block'
}
const onChangeMouth = (id) => {
    Array.from(document.querySelectorAll('#mouths g')).forEach(val => val.style.display = 'none')
    document.querySelector(`#mouths #m_${id}`).style.display = 'block'
}
const onChangeBackground = (bgColor) => {
    const hair_back_bg_ele = document.querySelector(`#hair_back #background`)
    hair_back_bg_ele && hair_back_bg_ele.setAttribute('fill', `#${bgColor}`)
}
const onChangeHairStyle = (id) => {
    current_hairstyle = id
    onChangeHairColor(current_haircolor)
    const hair_front_ele = document.querySelector(`#hair_front .h_${id}`)
    const hair_back_ele = document.querySelector(`#hair_back .h_${id}`)
    Array.from(document.querySelectorAll('#hair_front g')).forEach(val => val.style.display = 'none');
    Array.from(document.querySelectorAll('#hair_back g')).forEach(val => val.style.display = 'none');
    hair_front_ele && (hair_front_ele.style.display = 'block');
    hair_back_ele && (hair_back_ele.style.display = 'block');
}
const onChangeHairColor = (haircolor) => {
    current_haircolor = haircolor
    const hair_front_tinted_ele = document.querySelector(`#hair_front .h_${current_hairstyle} .tinted`)
    const hair_back_tinted_ele = document.querySelector(`#hair_back .h_${current_hairstyle} .tinted`)
    hair_front_tinted_ele && hair_front_tinted_ele.setAttribute('fill', `#${haircolor[0]}`)
    hair_back_tinted_ele && hair_back_tinted_ele.setAttribute('fill', `#${haircolor[1]}`)
    Array.from(document.querySelectorAll('#facialhair g .tinted')).forEach(val => val.setAttribute('fill', `#${haircolor[2]}`))

}
const onChangeFacialHairStyle = (id) => {
    const facialhair_ele = document.querySelector(`#facialhair #f_${id}`)
    Array.from(document.querySelectorAll('#facialhair g')).forEach(val => val.style.display = 'none')
    facialhair_ele && (facialhair_ele.style.display = 'block')
}
const onChangeCloth = (id) => {
    Array.from(document.querySelectorAll('#clothes g')).forEach(val => val.style.display = 'none')
    document.querySelector(`#clothes #c_${id}`).style.display = 'block'
}
const onChangeFabricColor = (id) => {
    current_fabriccolors = id
    Array.from(document.querySelectorAll('#clothes g .tinted')).forEach(val => val.setAttribute('fill', `#${id}`))
}
onChangeGlass = (id) => {
    const glasses_ele = document.querySelector(`#glasses #g_${id}`)
    Array.from(document.querySelectorAll('#glasses g')).forEach(val => val.style.display = 'none')
    glasses_ele && (glasses_ele.style.display = 'block')
}
onChangeGlassOpacity = (id) => {
    Array.from(document.querySelectorAll('.glass')).forEach(val => val.setAttribute('fill-opacity', id))
}
onChangeTattoo = (id) => {
    const tattoo_ele = document.querySelector(`#tattoos #t_${id}`)
    Array.from(document.querySelectorAll('#tattoos g')).forEach(val => val.style.display = 'none')
    tattoo_ele && (tattoo_ele.style.display = 'block')

}
onChangeAccessory = (id) => {
    const accesories_ele = document.querySelector(`#accesories #a_${id}`)
    Array.from(document.querySelectorAll('#accesories g')).forEach(val => val.style.display = 'none')
    accesories_ele && (accesories_ele.style.display = 'block')
}
const random = () => {
    var rand_skins = skins[Math.floor(Math.random() * skins.length)];
    var rand_eyes = eyes[Math.floor(Math.random() * eyes.length)];
    var rand_eyebrows = eyebrows[Math.floor(Math.random() * eyebrows.length)];
    var rand_mouths = mouths[Math.floor(Math.random() * mouths.length)];
    var rand_hairstyles = hairstyles[Math.floor(Math.random() * hairstyles.length)];
    var rand_haircolors = haircolors[Math.floor(Math.random() * haircolors.length)];
    var rand_facialhairs = facialhairs[Math.floor(Math.random() * facialhairs.length)];
    var rand_clothes = clothes[Math.floor(Math.random() * clothes.length)];
    var rand_fabriccolors = fabriccolors[Math.floor(Math.random() * fabriccolors.length)];
    var rand_backgroundcolors = backgroundcolors[Math.floor(Math.random() * backgroundcolors.length)];
    var rand_glasses = glasses[Math.floor(Math.random() * glasses.length)];
    var rand_glassopacities = parseInt(glassopacities[Math.floor(Math.random() * glassopacities.length)]) / 100;
    var rand_tattoos = tattoos[Math.floor(Math.random() * tattoos.length)];
    var rand_accesories = accesories[Math.floor(Math.random() * accesories.length)];
    current_skincolor = rand_skins;
    current_fabriccolors = rand_fabriccolors;
    current_backgroundcolors = rand_backgroundcolors;
    current_glassopacity = rand_glassopacities;
    current_hairstyle = rand_hairstyles;
    current_haircolor = rand_haircolors;

    onChangeSkin(rand_skins)
    onChangeEye(rand_eyes)
    onChangeEyebrow(rand_eyebrows)
    onChangeMouth(rand_mouths)
    onChangeBackground(rand_backgroundcolors)
    onChangeHairStyle(rand_hairstyles)
    onChangeHairColor(rand_haircolors?.split('_'))
    onChangeFacialHairStyle(rand_facialhairs)
    onChangeCloth(rand_clothes)
    onChangeFabricColor(rand_fabriccolors)
    onChangeGlass(rand_glasses)
    onChangeGlassOpacity(rand_glassopacities)
    onChangeTattoo(rand_tattoos)
    onChangeAccessory(rand_accesories)
}

const handelButtonClick = (e) => {
    let html = ''
    let skin, eye, eyebrow, mouth, hairstyle, haircolor, haircolor_front, facialhair, clothe, fabriccolor,
        backgroundcolor, glass, glassopacity, tattoo, accesory
    let clickedBtnId = e.srcElement.id
    let clickedBtnText = e.srcElement.innerHTML
    document.getElementById('options_title').innerHTML = `select ${clickedBtnText}`
    switch (clickedBtnId) {
        case "skincolor":
            for (let i = 0; i < skins.length; i++) {
                skin = skins[i];
                html += "<div class='skins' id='s_" + skin + "' style='background-color:#" + skin + ";'></div>";
            }
            break;
        case "eyes":
            for (i = 0; i < eyes.length; i++) {
                eye = eyes[i];
                html += "<div class='eyes' id='e_" + eye + "' style='background-color:#" + current_skincolor + ";background-position:" + (i * -53) + "px 0px;'></div>";
            }
            break;
        case "eyebrows":
            for (i = 0; i < eyebrows.length; i++) {
                eyebrow = eyebrows[i];
                html += "<div class='eyebrows' id='eb_" + eyebrow + "' style='background-color:#" + current_skincolor + ";background-position:" + (i * -53) + "px -53px;'></div>";
            }
            break;
        case "mouths":
            for (i = 0; i < mouths.length; i++) {
                mouth = mouths[i];
                html += "<div class='mouths' id='m_" + mouth + "' style='background-color:#" + current_skincolor + ";background-position:" + (i * -53) + "px -106px;'></div>";
            }
            break;
        case "hairstyles":
            for (i = 0; i < hairstyles.length; i++) {
                hairstyle = hairstyles[i];
                html += "<div class='hairstyles' id='h_" + hairstyle + "' style='background-color:#ffffff;background-position:" + (i * -53) + "px -159px;'></div>";
            }
            break;
        case "haircolors":
            for (i = 0; i < haircolors.length; i++) {
                haircolor = haircolors[i];
                haircolor_front = haircolor.split("_");
                html += "<div class='haircolors' id='hc_" + haircolor + "' style='background-color:#" + haircolor_front[0] + ";'></div>";
            }
            break;
        case "facialhairs":
            for (i = 0; i < facialhairs.length; i++) {
                facialhair = facialhairs[i];
                haircolor_front = facialhair.split("_");
                html += "<div class='facialhairs' id='f_" + facialhair + "' style='background-color:#ffffff;background-position:" + (i * -53) + "px -212px;'></div>";
            }
            break;
        case "clothes":
            for (var i = 0; i < clothes.length; i++) {
                clothe = clothes[i];
                html += "<div class='clothes' id='c_" + clothe + "' style='background-color:#ffffff;background-position:" + (i * -53) + "px -265px;'></div>";
            }
            break;
        case "fabriccolors":
            for (var i = 0; i < fabriccolors.length; i++) {
                fabriccolor = fabriccolors[i];
                html += "<div class='fabriccolors' id='f_" + fabriccolor + "' style='background-color:#" + fabriccolor + ";'></div>";
            }
            break;
        case "backgroundcolors":
            for (var i = 0; i < backgroundcolors.length; i++) {
                backgroundcolor = backgroundcolors[i];
                html += "<div class='backgroundcolors' id='g_" + backgroundcolor + "' style='background-color:#" + backgroundcolor + ";'></div>";
            }
            break;
        case "glasses":
            for (var i = 0; i < glasses.length; i++) {
                glass = glasses[i];
                html += "<div class='glasses' id='g_" + glass + "' style='background-color:#ffffff;background-position:" + (i * -53) + "px -313px;'></div>";
            }
            break;
        case "glassopacity":
            for (var i = 0; i < glassopacities.length; i++) {
                glassopacity = glassopacities[i];
                html += "<div class='glassopacity' id='o_" + glassopacity + "' style='background-color:#ffffff;'>" + glassopacity + "%</div>";
            }
            break;
        case "tattoos":
            for (var i = 0; i < tattoos.length; i++) {
                tattoo = tattoos[i];
                html += "<div class='tattoos' id='t_" + tattoo + "' style='background-color:#ffffff;background-position:" + (i * -53) + "px -419px;'></div>";
            }
            break;
        case "accesories":
            for (var i = 0; i < accesories.length; i++) {
                accesory = accesories[i];
                html += "<div class='accesories' id='a_" + accesory + "' style='background-color:#ffffff;background-position:" + (i * -53) + "px -369px;'></div>";
            }
            break;
    }
    document.getElementById('options_div').innerHTML = html

}

const handelOptionClick = (e) => {
    let clickedOptionEle = e.srcElement.className
    let [prefix, ...clickedOptionId] = e.srcElement.id?.split('_')
    console.log('e', clickedOptionId)
    switch (clickedOptionEle) {
        case "skins":
            onChangeSkin(clickedOptionId)
            break;
        case "eyes":
            onChangeEye(clickedOptionId)
            break;
        case "eyebrows":
            onChangeEyebrow(clickedOptionId)
            break;
        case "mouths":
            onChangeMouth(clickedOptionId)
            break;
        case "hairstyles":
            onChangeHairStyle(clickedOptionId)
            break;
        case "haircolors":
            onChangeHairColor(clickedOptionId)
            break;
        case "facialhairs":
            onChangeFacialHairStyle(clickedOptionId)
            break;
        case "clothes":
            onChangeCloth(clickedOptionId)
            break;
        case "fabriccolors":
            onChangeFabricColor(clickedOptionId)
            break;
        case "backgroundcolors":
            onChangeBackground(clickedOptionId)
            break;
        case "glasses":
            onChangeGlass(clickedOptionId)
            break;
        case "glassopacity":
            onChangeGlassOpacity(clickedOptionId / 100)
            break;
        case "tattoos":
            onChangeTattoo(clickedOptionId)
            break;
        case "accesories":
            onChangeAccessory(clickedOptionId)
            break;
    }

}

document.getElementById('random').addEventListener('click', () => random())
document.getElementById('menu_list').addEventListener('click', (e) => handelButtonClick(e))
document.getElementById('options_div').addEventListener('click', (e) => handelOptionClick(e))
