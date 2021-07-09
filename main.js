const culture_series = document.getElementById("box-1");
const volunteer_program = document.getElementById("box-2");
const mentorship_program = document.getElementById("box-3");
const training_program = document.getElementById("box-4");
const big_img_frame = document.getElementById('big-img-frame')
const head_text = document.getElementById('head_text');
const paragraph_text = document.getElementById('paragraph_text');
const overlay = document.getElementById('overlay');
const text_box = document.querySelector(".link-box-size");
const hidden_text = document.querySelector(".hidden_text");

const program_text = [
  {
    head: "Student Life @ ALU",
    text: "ALU offers a wide variety of events aimed at building community and showcasing our students.Events are ongoing throughout the academic year and range from monthly community lunches and Assemblies, to yearly student run events such as ArtsFest, and Wellness Week.",
  },

  {
    head: "Culture Series",
    text: "Coupling psycho-education with soft skills and application tools, Culture Series is a Student Life Team offering that invests in your non-academic learning opportunities to cultivate your social and self regulatory skills. Working effectively in groups and alone against tasks are skills highly sought after in the modern professional workplace, public, private or civil society. These active learning workshops equip you with the information, tools and practical settings to refine your holistic learning outside of academics."
  },

  {
    head: "Volunteer Program",
    text: "Volunteering is a value addition opportunity for both volunteers and institutions. With this program you have the opportunity to gain experience within the ALU administrative workspace while benefitting from a purposeful professional development structure provided by the study internships department. By both nurturing your professional workspace experience and encouraging an applied voluntary spirit, with this program you are positioned to target your professional growth uniquely before entering the job/entrepreneurial market."
  },

  {
    head: "Mentorship Program",
    text: "Having experienced peers and/or professionals you can access through the Mentorship program can both smoothen your transitions in work, school & life. Make use of the peers & professionals within the mentorship program to help you navigate your growth and prepare you to help others along the same process."
  },

  {
    head: "Training Program",
    text: "The Training Program offers you an opportunity to learn facilitation skills necessary to host a successful training session from a classroom session to specialized upskilling. Learn a valuable skill set with the training program that will contribute to your success transferring other skills and knowledge whenever in your professional life you need to."
  },

];



  volunteer_program.addEventListener("mouseover", display_text)
  volunteer_program.addEventListener("click", change_text2);
  volunteer_program.addEventListener("mouseleave", change_back);

  culture_series.addEventListener("mouseover",   display_text);
  culture_series.addEventListener("click",   change_text1);
  culture_series.addEventListener("mouseleave",   change_back);

  mentorship_program.addEventListener("click", change_text3);
  mentorship_program.addEventListener("mouseleave", change_back);

  training_program.addEventListener("click",  change_text4);
  training_program.addEventListener("mouseleave",  change_back);



function change_text1(){

    head_text.innerText = program_text[1].head;
    paragraph_text.innerText = program_text[1].text;
    big_img_frame.style.backgroundImage = "url('Images/Screen Shot 2021-06-18 at 9.05.50 PM.png')";
    overlay.style.backgroundColor = "rgba(0,0,0,0.8)"

}

function change_text2(){

    head_text.innerText = program_text[2].head;
    paragraph_text.innerText = program_text[2].text;
    big_img_frame.style.backgroundImage = "url('Images/Screen Shot 2021-06-18 at 9.05.50 PM.png')";
    overlay.style.backgroundColor = "rgba(0,0,0,0.8)"

}

function change_text3(){

    head_text.innerText = program_text[3].head;
    paragraph_text.innerText = program_text[3].text;
    big_img_frame.style.backgroundImage = "url('Images/Screen Shot 2021-06-18 at 9.05.50 PM.png')";
    overlay.style.backgroundColor = "rgba(0,0,0,0.8)"

}

function change_text4(){

    head_text.innerText = program_text[4].head;
    paragraph_text.innerText = program_text[4].text;
    big_img_frame.style.backgroundImage = "url('Images/Screen Shot 2021-06-18 at 9.05.50 PM.png')";
    overlay.style.backgroundColor = "rgba(0,0,0,0.8)"

}

function change_back(){

  head_text.innerText = program_text[0].head;
  paragraph_text.innerText = program_text[0].text;
  big_img_frame.style.backgroundImage = "url('Images/student_life1.jpeg')";
  overlay.style.backgroundColor = "rgba(0,0,0,0.4)"
}

function display_text(){
  hidden_text.style.display = "block";
}
