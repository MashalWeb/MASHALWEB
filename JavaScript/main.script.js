let icons = document.getElementById("icons");
let fl = 1;
icons.addEventListener('click', ()=>{
    if(fl===1){
    icons.style.background = '#0081a8';
    icons.children[0].classList.replace('ri-cloud-fill','ri-cloud-off-fill');
    document.querySelector("#weather").style.display = "flex";
    fl=0;
    }
    else if(fl===0){
    icons.style.background = '#ffffff04';
    icons.children[0].classList.replace('ri-cloud-off-fill','ri-cloud-fill');
    document.querySelector("#weather").style.display = "none";
    fl=1;
    }
    
})
let errorMessage = document.querySelector("#err");
window.addEventListener("load", ()=>{
    document.querySelector("#js-preloader").classList.add('loaded')
})
window.addEventListener("scroll", (e)=>{
    if(window.scrollY >=80){
        document.querySelector("header").classList.add("back")
    }
    else if(window.scrollY < 80){
        document.querySelector("header").classList.remove("back")
    }
})
const menuClickOne = document.querySelector(".navPart1");
const menuClickTwo = document.querySelector(".navPart2");
const showSecNav = document.querySelector(".respNavImg");
let flage = 1;

let flageT = 1;

const sec9th = document.getElementById("9th");
const sec10th = document.getElementById("10th");
const sec11th = document.getElementById("11th");
const sec12th = document.getElementById("12th");
const selectClassPage = document.getElementById("selectClass");

showSecNav.addEventListener("click", ()=>{
    document.querySelector(".secNav").style.display = "block";
})

document.querySelector(".close").addEventListener("click", ()=>{
    document.querySelector(".secNav").style.display = "none";
})
menuClickOne.addEventListener("click", ()=>{
    
    if(flage ===1){
        document.querySelector(".show").style.display = "block";
        flage =0;
    }
    else if(flage ===0){
        document.querySelector(".show").style.display = "none";
        flage =1;
    }
})

menuClickTwo.addEventListener("click", ()=>{
    
    if(flageT ===1){
        document.querySelector(".show2").style.display = "block";
        flageT =0;
    }
    else if(flageT ===0){
        document.querySelector(".show2").style.display = "none";
        flageT =1;
    }
})
let ifSelect9th = document.getElementById("box9th")
ifSelect9th.addEventListener("click", ()=>{
    sec9th.style.display = "flex";
    selectClassPage.style.display = "none";
})

let ifSelect10th = document.getElementById("box10th");
ifSelect10th.addEventListener("click", ()=>{
    sec9th.style.display = "none"
    selectClassPage.style.display = "none"
    sec10th.style.display = "flex"
})

let ifSelect11th = document.getElementById("box11th");
ifSelect11th.addEventListener("click", ()=>{
    sec11th.style.display = "flex"
    selectClassPage.style.display = "none"
    sec10th.style.display = "none"
})

let ifSelect12th = document.getElementById("box12th");
ifSelect12th.addEventListener("click", ()=>{
    sec12th.style.display = "flex"
    selectClassPage.style.display = "none"
    sec11th.style.display = "none"
})
let backToMain = document.querySelectorAll(".BackToPage");
backToMain.forEach(function(back){
    back.addEventListener("click",()=>{
        sec9th.style.display = "none"
        sec10th.style.display = "none"
        sec11th.style.display = "none"
        sec12th.style.display = "none"
        selectClassPage.style.display = "flex"
    })
})

let underTextContent = "Get your Ninth Class KPK Board All Subjects Notes here! Download chapter-wise solved PDF notes for all subjects according to the latest syllabus. These notes are from Khyber Pakhtunkhwa Boards and can be easily downloaded or viewed online. Print them out for a hard copy.";

let textParaOne = "For all KPK students who are looking to quickly learn or prepare for all subjects, we offer notes available in both English and Urdu medium. Additionally, you can find 9th class solved previous years' past papers on our website.";

let textParaTwo = "Solved Easy notes for IX class chapter-wise are freely available on MashalWeb for learning purposes. By studying to learn these notes you can easily get more than 80% Marks in each subject. If you are a teacher then you can also provide or suggest these KPK Board Notes to your students. If you are a student then you can also share these notes with your fellows for better and excellent achievement in final year exams Papers.";
let textParathree = "You can download Ninth Class Notes on this website based on your study group's requirements. If your syllabus is in English Medium, you can download the notes in URDU Language, and if you're an English Medium student, you can get the notes in the English Language with the latest syllabus updates. We understand that many students want concise notes for all chapters, so we provide notes according to your specific requirements.";
let textParafour = "Looking for 9th Class Khyber Pakhtunkhwa Board PDF Notes? Mashalweb provides high-quality IX class Chapter-wise PDF Notes for all subjects, designed according to the latest syllabus. Prepare these notes for your Final Year Exams/Papers preparations and get higher marks. We offer notes for all Khyber Pakhtunkhwa Boards, including General Mathematics, Physics, Chemistry, Biology, Urdu, Pakistan studies, Computer Science, English Grammar, Islamite, and other Science or Arts Subjects. Available in PDF for all Pakistan Boards, including Sindh Karachi, Federal, KPK, Balochistan, and AJK Boards.";
let textParafive = "Prepare for your 9th class exams with ease by using our PDF notes. Our notes are designed with concise definitions and question-answer solutions. You can also practice by taking chapter MCQ quizzes that will help you learn short question answers, fill in the blanks, as well as VIVA or practice-related question answers.At MashalWeb, we provide easy steps for learning Ninth Class Notes. These important steps make it easy for you to learn question answers. You can solve and learn chapter-wise MCQ quizzes online and use the available PDFs on our website. If you find some questions difficult, practice them twice a day. Remember, MCQs are helpful for writing paragraphs or solving short questions. Combine your lecture notes with the topic headings and highlight them using different colors like red or green highlighters to easily remember difficult questions. You can also print out these notes for easy reference in the future. Writing these notes in a notebook will also help strengthen your learning process.We have different writers' notes of Ninth | IX | 9th Class available on our website. Take advantage of our best online MCQ quizzes for practice of multiple-choice question answers, short and long question answers. We also have past papers available for students' exam and test preparations.";



let underTextContent2 = "Get your tenth Class KPK Board All Subjects Notes here! Download chapter-wise solved PDF notes for all subjects according to the latest syllabus. These notes are from Khyber Pakhtunkhwa Boards and can be easily downloaded or viewed online. Print them out for a hard copy.";

let textParaOne2 = "For all KPK students who are looking to quickly learn or prepare for all subjects, we offer notes available in both English and Urdu medium. Additionally, you can find 10th class solved previous years' past papers on our website.";

let textParaTwo2 = "Solved Easy notes for tenth class chapter-wise are freely available on MashalWeb for learning purposes. By studying to learn these notes you can easily get more than 80% Marks in each subject. If you are a teacher then you can also provide or suggest these KPK Board Notes to your students. If you are a student then you can also share these notes with your fellows for better and excellent achievement in final year exams Papers.";
let textParathree2 = "You can download tenth Class Notes on this website based on your study group's requirements. If your syllabus is in English Medium, you can download the notes in URDU Language, and if you're an English Medium student, you can get the notes in the English Language with the latest syllabus updates. We understand that many students want concise notes for all chapters, so we provide notes according to your specific requirements.";
let textParafour2 = "Looking for 10th Class Khyber Pakhtunkhwa Board PDF Notes? Mashalweb provides high-quality IX class Chapter-wise PDF Notes for all subjects, designed according to the latest syllabus. Prepare these notes for your Final Year Exams/Papers preparations and get higher marks. We offer notes for all Khyber Pakhtunkhwa Boards, including General Mathematics, Physics, Chemistry, Biology, Urdu, Pakistan studies, Computer Science, English Grammar, Islamite, and other Science or Arts Subjects. Available in PDF for all Pakistan Boards, including Sindh Karachi, Federal, KPK, Balochistan, and AJK Boards.";
let textParafive2 = "Prepare for your 10th class exams with ease by using our PDF notes. Our notes are designed with concise definitions and question-answer solutions. You can also practice by taking chapter MCQ quizzes that will help you learn short question answers, fill in the blanks, as well as VIVA or practice-related question answers.At MashalWeb, we provide easy steps for learning tenth Class Notes. These important steps make it easy for you to learn question answers. You can solve and learn chapter-wise MCQ quizzes online and use the available PDFs on our website. If you find some questions difficult, practice them twice a day. Remember, MCQs are helpful for writing paragraphs or solving short questions. Combine your lecture notes with the topic headings and highlight them using different colors like red or green highlighters to easily remember difficult questions. You can also print out these notes for easy reference in the future. Writing these notes in a notebook will also help strengthen your learning process.We have different writers' notes of tenth | 10th Class available on our website. Take advantage of our best online MCQ quizzes for practice of multiple-choice question answers, short and long question answers. We also have past papers available for students' exam and test preparations.";



let underTextContent3 = "Get your elventh Class KPK Board All Subjects Notes here! Download chapter-wise solved PDF notes for all subjects according to the latest syllabus. These notes are from Khyber Pakhtunkhwa Boards and can be easily downloaded or viewed online. Print them out for a hard copy.";

let textParaOne3 = "For all KPK students who are looking to quickly learn or prepare for all subjects, we offer notes available in both English and Urdu medium. Additionally, you can find 11th class solved previous years' past papers on our website.";

let textParaTwo3 = "Solved Easy notes for elventh class chapter-wise are freely available on MashalWeb for learning purposes. By studying to learn these notes you can easily get more than 80% Marks in each subject. If you are a teacher then you can also provide or suggest these KPK Board Notes to your students. If you are a student then you can also share these notes with your fellows for better and excellent achievement in final year exams Papers.";
let textParathree3 = "You can download elventh Class Notes on this website based on your study group's requirements. If your syllabus is in English Medium, you can download the notes in URDU Language, and if you're an English Medium student, you can get the notes in the English Language with the latest syllabus updates. We understand that many students want concise notes for all chapters, so we provide notes according to your specific requirements.";
let textParafour3 = "Looking for 11th Class Khyber Pakhtunkhwa Board PDF Notes? Mashalweb provides high-quality IX class Chapter-wise PDF Notes for all subjects, designed according to the latest syllabus. Prepare these notes for your Final Year Exams/Papers preparations and get higher marks. We offer notes for all Khyber Pakhtunkhwa Boards, including General Mathematics, Physics, Chemistry, Biology, Urdu, Pakistan studies, Computer Science, English Grammar, Islamite, and other Science or Arts Subjects. Available in PDF for all Pakistan Boards, including Sindh Karachi, Federal, KPK, Balochistan, and AJK Boards.";
let textParafive3 = "Prepare for your 11th class exams with ease by using our PDF notes. Our notes are designed with concise definitions and question-answer solutions. You can also practice by taking chapter MCQ quizzes that will help you learn short question answers, fill in the blanks, as well as VIVA or practice-related question answers.At MashalWeb, we provide easy steps for learning elventh Class Notes. These important steps make it easy for you to learn question answers. You can solve and learn chapter-wise MCQ quizzes online and use the available PDFs on our website. If you find some questions difficult, practice them twice a day. Remember, MCQs are helpful for writing paragraphs or solving short questions. Combine your lecture notes with the topic headings and highlight them using different colors like red or green highlighters to easily remember difficult questions. You can also print out these notes for easy reference in the future. Writing these notes in a notebook will also help strengthen your learning process.We have different writers' notes of elventh | 11th Class available on our website. Take advantage of our best online MCQ quizzes for practice of multiple-choice question answers, short and long question answers. We also have past papers available for students' exam and test preparations.";



let underTextContent4 = "Get your twelfth Class KPK Board All Subjects Notes here! Download chapter-wise solved PDF notes for all subjects according to the latest syllabus. These notes are from Khyber Pakhtunkhwa Boards and can be easily downloaded or viewed online. Print them out for a hard copy.";

let textParaOne4 = "For all KPK students who are looking to quickly learn or prepare for all subjects, we offer notes available in both English and Urdu medium. Additionally, you can find 12th class solved previous years' past papers on our website.";

let textParaTwo4 = "Solved Easy notes for twelfth class chapter-wise are freely available on MashalWeb for learning purposes. By studying to learn these notes you can easily get more than 80% Marks in each subject. If you are a teacher then you can also provide or suggest these KPK Board Notes to your students. If you are a student then you can also share these notes with your fellows for better and excellent achievement in final year exams Papers.";
let textParathree4 = "You can download twelfth Class Notes on this website based on your study group's requirements. If your syllabus is in English Medium, you can download the notes in URDU Language, and if you're an English Medium student, you can get the notes in the English Language with the latest syllabus updates. We understand that many students want concise notes for all chapters, so we provide notes according to your specific requirements.";
let textParafour4 = "Looking for 12th Class Khyber Pakhtunkhwa Board PDF Notes? Mashalweb provides high-quality IX class Chapter-wise PDF Notes for all subjects, designed according to the latest syllabus. Prepare these notes for your Final Year Exams/Papers preparations and get higher marks. We offer notes for all Khyber Pakhtunkhwa Boards, including General Mathematics, Physics, Chemistry, Biology, Urdu, Pakistan studies, Computer Science, English Grammar, Islamite, and other Science or Arts Subjects. Available in PDF for all Pakistan Boards, including Sindh Karachi, Federal, KPK, Balochistan, and AJK Boards.";
let textParafive4 = "Prepare for your 12th class exams with ease by using our PDF notes. Our notes are designed with concise definitions and question-answer solutions. You can also practice by taking chapter MCQ quizzes that will help you learn short question answers, fill in the blanks, as well as VIVA or practice-related question answers.At MashalWeb, we provide easy steps for learning twelfth Class Notes. These important steps make it easy for you to learn question answers. You can solve and learn chapter-wise MCQ quizzes online and use the available PDFs on our website. If you find some questions difficult, practice them twice a day. Remember, MCQs are helpful for writing paragraphs or solving short questions. Combine your lecture notes with the topic headings and highlight them using different colors like red or green highlighters to easily remember difficult questions. You can also print out these notes for easy reference in the future. Writing these notes in a notebook will also help strengthen your learning process.We have different writers' notes of twelfth | 12th Class available on our website. Take advantage of our best online MCQ quizzes for practice of multiple-choice question answers, short and long question answers. We also have past papers available for students' exam and test preparations.";

let mainText = "For all KPK students who are looking to quickly learn or prepare for all subjects, we offer notes available in both English and Urdu medium. Additionally, you can find 9th, 10th, 11th and 12th class solved previous years' past papers on our website.";
let mainText5 = "Solved Easy notes for ninth to twelfth class chapter-wise are freely available on MashalWeb for learning purposes. By studying to learn these notes you can easily get more than 80% Marks in each subject. If you are a teacher then you can also provide or suggest these KPK Board Notes to your students. If you are a student then you can also share these notes with your fellows for better and excellent achievement in final year exams Papers.";
let mainText2 = "Looking for 9th to 12th Class Khyber Pakhtunkhwa Board PDF Notes? Mashalweb provides high-quality given class Chapter-wise PDF Notes for all subjects, designed according to the latest syllabus. Prepare these notes for your Final Year Exams/Papers preparations and get higher marks. We offer notes for all Khyber Pakhtunkhwa Boards, including General Mathematics, Physics, Chemistry, Biology, Urdu, Pakistan studies, Computer Science, English Grammar, Islamite, and other Science or Arts Subjects. Available in PDF for Malakand all KPK Boards.";

let mainText4 = "Prepare for your 9th to 12th class exams with ease by using our PDF notes. Our notes are designed with concise definitions and question-answer solutions. You can also practice by taking chapter MCQ quizzes that will help you learn short question answers, fill in the blanks, as well as VIVA or practice-related question answers.At MashalWeb, we provide easy steps for learning ninth to twelfth Class Notes. These important steps make it easy for you to learn question answers. You can solve and learn chapter-wise MCQ quizzes online and use the available PDFs on our website. If you find some questions difficult, practice them twice a day. Remember, MCQs are helpful for writing paragraphs or solving short questions. Combine your lecture notes with the topic headings and highlight them using different colors like red or green highlighters to easily remember difficult questions. You can also print out these notes for easy reference in the future. Writing these notes in a notebook will also help strengthen your learning process.We have different writers' notes of Given Class available on our website. Take advantage of our best online MCQ quizzes for practice of multiple-choice question answers, short and long question answers. We also have past papers available for students' exam and test preparations.";
let mainText3 = "Get your all Class KPK Board All Subjects Notes here! Download chapter-wise solved PDF notes for all subjects according to the latest syllabus. These notes are from Khyber Pakhtunkhwa Boards and can be easily downloaded or viewed online. Print them out for a hard copy.";

function addContent(textContent, elementNameInString, uploadTarget){
    const elemet = document.createElement(`${elementNameInString}`);
    elemet.className = "jsAddText";
    elemet.innerHTML = `<p>${textContent}</p>`;
    uploadTarget.appendChild(elemet);
}
addContent(underTextContent,"dev",sec9th);
addContent(textParaOne,"dev",sec9th);
addContent(textParaTwo,"dev",sec9th);
addContent(textParathree,"dev",sec9th);
addContent(textParafour,"dev",sec9th);
addContent(textParafive,"dev",sec9th);

addContent(underTextContent2,"dev",sec10th);
addContent(textParaOne2,"dev",sec10th);
addContent(textParaTwo2,"dev",sec10th);
addContent(textParathree2,"dev",sec10th);
addContent(textParafour2,"dev",sec10th);
addContent(textParafive2,"dev",sec10th);

addContent(underTextContent3,"dev",sec11th);
addContent(textParaOne3,"dev",sec11th);
addContent(textParaTwo3,"dev",sec11th);
addContent(textParathree3,"dev",sec11th);
addContent(textParafour3,"dev",sec11th);
addContent(textParafive3,"dev",sec11th);

addContent(underTextContent4,"dev",sec12th);
addContent(textParaOne4,"dev",sec12th);
addContent(textParaTwo4,"dev",sec12th);
addContent(textParathree4,"dev",sec12th);
addContent(textParafour4,"dev",sec12th);
addContent(textParafive4,"dev",sec12th);

const mainNotes = document.getElementById("notesDesc");


addContent(mainText, "p", mainNotes);
addContent(mainText2, "p", mainNotes);
addContent(mainText3, "p", mainNotes);
addContent(mainText4, "p", mainNotes);
addContent(mainText5, "p", mainNotes);

function sendComment() {
    (function () {
        emailjs.init("niJGiyFp8lWuCE8yV");

    })();
    let serviceID = "service_6656eac";
    let templateID = "template_tw68tmd";

    let params = {
        comUser: document.querySelector("#comUser").value,
        comEmail: document.querySelector("#comEmail").value,
        commentMsg: document.getElementById("comment").value
    };

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            errorMessage.classList.add("errorActive");
            errorMessage.innerHTML = "👍 Your Message is send";
            errorMessage.style.background = "green";
            console.log("message send");
            setTimeout(() => {
              errorMessage.classList.remove("errorActive");
            }, 3000);
            document.querySelectorAll("input").forEach((inp)=>{
                inp.value = "";
                document.querySelectorAll("textarea").forEach(((area)=>{
                    area.value = ""
                }))
            })

        })
        .catch((err) => {
            errorMessage.classList.add("errorActive");
            errorMessage.innerHTML = "🛑 Error in sending your Message";
            errorMessage.style.background = "red"
            setTimeout(() => {
              errorMessage.classList.remove("errorActive");
            }, 3000);
            console.log("🛑Error in sending your message!! ", err);
        });
}
