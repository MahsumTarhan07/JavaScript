const responses = [
    "Merhaba! Nasıl yardımcı olabilirim?",
    "Tamam anladım.",
    "Bunu duymak hoşuma gitti.",
    "Üzgünüm, ama ne yazık ki buna yanıt veremem.",
    "Belki biraz daha açıklayabilir misiniz?",
    "Bu konuda biraz araştırma yapmam gerekecek.",
    "Elbette, her zaman buradayız.",
    "Bu konuda size yardımcı olmak için buradayız.",
    "Kusura bakmayın, şu anda müsait değilim.",
    "İnternet Bağlantınız Yok",
];

const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener('keydown', function (e) {
    if (e.code === "Enter" && input.value) {
        const message = input.value;
        const response = responses[Math.floor(Math.random() * responses.length)];

        const chat = "<p><strong>Sen:</strong> " + message + "</p><p><strong>Bot:</strong> " + response + "</p>";
        output.innerHTML += chat;
        input.value = "";

    }
});
