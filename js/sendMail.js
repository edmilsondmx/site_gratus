document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.init("SEU_USER_ID"); // Substituir pelo User ID do EmailJS

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", formData)
        .then(() => {
            let responseMessage = document.getElementById("responseMessage");
            
            responseMessage.className = "small success";
            responseMessage.textContent = "E-mail enviado com sucesso!";
            document.getElementById("contactForm").reset();

            setTimeout(() => {
                responseMessage.textContent = "";
                responseMessage.className = "small";
            }, 5000);
        })
        .catch(() => {
            let responseMessage = document.getElementById("responseMessage");
            responseMessage.className = "small error";
            responseMessage.textContent = "Erro ao enviar a mensagem.";

            // Remove a mensagem após 5 segundos (5000ms)
            setTimeout(() => {
                responseMessage.textContent = "";
                responseMessage.className = "small";
            }, 5000);
        });
});