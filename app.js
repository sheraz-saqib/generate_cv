const fName = document.getElementById('Fname'),
allInput= document.querySelectorAll('input'),
Lname = document.getElementById('Lname'),
form = document.querySelector('.form'),
container = document.querySelector('.container'),
phone = document.getElementById('phone'),
email = document.getElementById('email'),
edu = document.getElementById('edu'),
feculty = document.getElementById('feculty'),
age = document.getElementById('age'),
exp = document.getElementById('exp'),
reign = document.getElementById('reign'),
address = document.getElementById('address'),
skill_office = document.getElementById('skill_office'),
skill_uiAndUx = document.getElementById('skill_ui/ux'),
skill_html = document.getElementById('skill_html'),
skill_css = document.getElementById('skill_css'),
skill_php = document.getElementById('skill_php'),
skill_js = document.getElementById('skill_js'),
cnic = document.getElementById('cnic'),
about_us = document.getElementById('about_us');

// cv Reference

const cv_userFname = document.getElementById('cv_userFname'),
cv_container = document.getElementById('cv_container'),
cv_user_name = document.getElementById('cv_user_name'),
cv_user_img = document.getElementById('cv_user_img'),
cv_user_age = document.getElementById('cv_user_age'),
cv_user_reign = document.getElementById('cv_user_reign'),
cv_user_cnic = document.getElementById('cv_user_cnic'),
cv_user_quail = document.getElementById('cv_user_quail'),
cv_user_feculty = document.getElementById('cv_user_feculty'),
cv_user_exp = document.getElementById('cv_user_exp'),
cv_user_about = document.getElementById('cv_user_about'),
cv_user_contact = document.getElementById('cv_user_contact'),
cv_user_email = document.getElementById('cv_user_email'),
backbutton = document.getElementById('backbutton'),
backbuttonDiv = document.getElementById('backbuttonDiv'),
cv_user_address = document.getElementById('cv_user_address'),
cv_user_skill_1 = document.getElementById('cv_user_skill_1'),
cv_user_skill_2 = document.getElementById('cv_user_skill_2'),
cv_user_skill_3 = document.getElementById('cv_user_skill_3'),
cv_user_skill_4 = document.getElementById('cv_user_skill_4'),
cv_user_skill_6 = document.getElementById('cv_user_skill_6'),
cv_user_skill_5 = document.getElementById('cv_user_skill_5');

// last button
const user_img_input = document.getElementById('user_img_input') ,
choose_btn = document.getElementById('choose_btn'),
submitBtn = document.getElementById('submit');






form.addEventListener('submit',(e)=>{
    e.preventDefault()
    });
    

function printValues(){
    if(fName.value.trim() !='' && age.value.trim() !='' && reign.value.trim() != '' && cnic.value.trim() != '' && edu.value.trim() != '' &&
    about_us.value.trim() !='' && phone.value.trim() != '' && email.value.trim() !='' && address.value.trim()
    ){
        let user_full_name = `${fName.value.trim() } ${Lname.value.trim()}`;

        cv_userFname.innerText = fName.value.trim();
        cv_user_name.innerText = user_full_name;
        cv_user_age.innerText = age.value.trim();
        cv_user_reign.innerText = reign.value.trim()
        cv_user_cnic.innerText = cnic.value.trim()
        cv_user_quail.innerText = edu.value.trim()
        cv_user_feculty.innerText = feculty.value.trim()
        cv_user_exp.innerText = exp.value.trim()
        cv_user_about.innerText = about_us.value.trim()
        cv_user_contact.innerText = phone.value.trim()
        cv_user_email.innerText = email.value.trim()
        cv_user_address.innerText = address.value.trim()
    // border
   



    // skills
        if(skill_uiAndUx.checked){
            cv_user_skill_1.style.display = 'block';
        }else{
            cv_user_skill_1.style.display = 'none';
        }
    
        if (skill_html.checked){
            cv_user_skill_2.style.display = 'block';
        }else{
            cv_user_skill_2.style.display = 'none';
        }
    
        if(skill_css.checked){
            cv_user_skill_3.style.display = 'block'
        }else{
            cv_user_skill_3.style.display = 'none';
        }
    
        if(skill_js.checked){
            cv_user_skill_4.style.display = 'block'
        }else{
            cv_user_skill_4.style.display = 'none';
        }
    
        if(skill_php.checked){
            cv_user_skill_5.style.display = 'block'
        }
        else{
            cv_user_skill_5.style.display = 'none';
        }
        if(skill_office.checked){
            cv_user_skill_6.style.display = 'block'
        }else{
            cv_user_skill_6.style.display = 'none';
        }
        cv_container.style.display = 'block'
        container.style.display = 'none';
        backbuttonDiv.style.display = 'block';
    }
    // border trns
    if (fName.value.trim() !== ''){
        fName.style.border = 'transparent'
}
if (age.value.trim() !== ''){
    age.style.border = 'transparent'
}
if (reign.value.trim() !== ''){
reign.style.border = 'transparent'
}
if (cnic.value.trim() !== ''){
cnic.style.border = 'transparent'
}
if (edu.value.trim() !== ''){
edu.style.border = 'transparent'
}
if (feculty.value.trim() !== ''){
feculty.style.border = 'transparent'
}
if (exp.value.trim() !== ''){
exp.style.border = 'transparent'
}
if (about_us.value.trim() !== ''){
about_us.style.border = 'transparent'
}
if (phone.value.trim() !== ''){
phone.style.border = 'transparent'
}
if (email.value.trim() !== ''){
email.style.border = 'transparent'
}
if (address.value.trim() !== ''){
address.style.border = 'transparent'
}
if (Lname.value.trim() !== ''){
Lname.style.border = 'transparent'
}
// broder red
    if (fName.value.trim() == ''){
        fName.style.border = '1px solid rgb(194, 61, 61)'
}
if (age.value.trim() == ''){
    age.style.border = '1px solid rgb(194, 61, 61)'
}
if (reign.value.trim() == ''){
reign.style.border = '1px solid rgb(194, 61, 61)'
}
if (cnic.value.trim() == ''){
cnic.style.border = '1px solid rgb(194, 61, 61)'
}
if (edu.value.trim() == ''){
edu.style.border = '1px solid rgb(194, 61, 61)'
}
if (feculty.value.trim() == ''){
feculty.style.border = '1px solid rgb(194, 61, 61)'
}
if (exp.value.trim() == ''){
exp.style.border = '1px solid rgb(194, 61, 61)'
}
if (about_us.value.trim() == ''){
about_us.style.border = '1px solid rgb(194, 61, 61)'
}
if (phone.value.trim() == ''){
phone.style.border = '1px solid rgb(194, 61, 61)'
}
if (email.value.trim() == ''){
email.style.border = '1px solid rgb(194, 61, 61)'
}
if (address.value.trim() == ''){
address.style.border = '1px solid rgb(194, 61, 61)'
}
if (Lname.value.trim() == ''){
Lname.style.border = '1px solid rgb(194, 61, 61)'
}











}
    



choose_btn.addEventListener('click',()=>{
    user_img_input.click()
})

user_img_input.addEventListener('input',(e)=>{
    let img = e.target.files[0];
    let createUrl = URL.createObjectURL(img);
    cv_user_img.src = createUrl;

})

submitBtn.addEventListener('click',()=>{
  
    printValues()
})
backbutton.addEventListener('click',()=>{
    cv_container.style.display = 'none';
container.style.display = 'block';
backbuttonDiv.style.display = 'none';
})
