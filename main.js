const faqs = document.querySelectorAll(".faq");
const questions = document.querySelectorAll(".question");


questions.forEach((question) => {
    question.addEventListener("click" , (e) => {

        const faq = e.target.parentElement.parentElement;
        faq.classList.toggle("active");

    });
});

