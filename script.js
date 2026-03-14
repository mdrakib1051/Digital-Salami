// Typography Wishes in Bangla
const wishes = [
    "আপনার ঈদ হোক আনন্দময় ও রঙিন। এই ছোট সালামি আপনার ঈদের খুশিকে আরেকটু বাড়িয়ে তুলুক!",
    "ত্যাগের মহিমায় উদ্ভাসিত হোক আপনার জীবন। বড়দের সালাম করুন, ছোটদের ভালোবাসুন। ঈদ মোবারক!",
    "এক মাস সিয়াম সাধনার পর আপনার জন্য এই উপহার। হাসি-খুশিতে কাটুক আপনার প্রতিটি মুহূর্ত।",
    "সালামি মানেই ছোটবেলার সেই স্মৃতি। এই ডিজিটাল সালামি আপনার মুখে হাসি ফোটাবে আশা করি!",
    "ঈদ নিয়ে আসুক অফুরন্ত খুশি আর বারাকা। প্রিয়জনদের সাথে আনন্দ ভাগ করে নিন।"
];

let userName = "";

function goToStep2() {
    userName = document.getElementById('userName').value.trim();
    if (userName === "") {
        alert("বস্, আগে নামটা তো লিখুন!");
        return;
    }

    document.getElementById('step-1').classList.add('hidden');
    document.getElementById('step-2').classList.remove('hidden');

    // Start the slot magic automatically
    setTimeout(startSlotMachine, 500);
}

function startSlotMachine() {
    // Random amount between 1 and 100
    const finalAmount = Math.floor(Math.random() * 100) + 1;
    const amountStr = finalAmount.toString().padStart(3, '0');

    const reels = [
        document.getElementById('reel1'),
        document.getElementById('reel2'),
        document.getElementById('reel3')
    ];

    reels.forEach((reel, index) => {
        let html = '';
        // Create 50 random numbers for spinning effect
        for (let i = 0; i < 50; i++) {
            html += `<div class="slot-number">${Math.floor(Math.random() * 10)}</div>`;
        }
        // Last number is the final result
        html += `<div class="slot-number">${amountStr[index]}</div>`;
        reel.innerHTML = html;

        // Animate spin
        setTimeout(() => {
            reel.style.transform = `translateY(-${50 * 160}px)`;
        }, 100);
    });

    // After animation ends, show the card
    setTimeout(() => {
        showFinalCard(finalAmount);
    }, 5500);
}

function showFinalCard(amount) {
    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-3').classList.remove('hidden');

    document.getElementById('finalName').innerText = userName;
    document.getElementById('finalAmount').innerText = amount;
    
    // Pick a random wish
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById('wishText').innerText = randomWish;

    // Celebration Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ca8a04', '#ffffff', '#ffd700']
    });
}
