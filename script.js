let userData = {
    name: "",
    district: ""
};

// Step 1 -> Step 2
function goToStep2() {
    userData.name = document.getElementById('userName').value.trim();
    if (!userData.name) return alert("দয়া করে আপনার নাম লিখুন!");
    
    document.getElementById('step-1').classList.add('hidden');
    document.getElementById('step-2').classList.remove('hidden');
}

// Step 2 -> Step 3
function goToStep3() {
    userData.district = document.getElementById('districtSelect').value;
    if (!userData.district) return alert("আপনার জেলা নির্বাচন করুন!");

    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-3').classList.remove('hidden');
    
    setTimeout(startSlotSpin, 800);
}

function startSlotSpin() {
    const amount = Math.floor(Math.random() * 100) + 1;
    const amountStr = amount.toString().padStart(3, '0');
    
    const reels = [document.getElementById('reel1'), document.getElementById('reel2'), document.getElementById('reel3')];
    
    reels.forEach((reel, i) => {
        let html = '';
        // 60 numbers for a long premium spin
        for (let n = 0; n < 60; n++) {
            html += `<div class="slot-number">${Math.floor(Math.random() * 10)}</div>`;
        }
        html += `<div class="slot-number">${amountStr[i]}</div>`;
        reel.innerHTML = html;

        setTimeout(() => {
            reel.style.transform = `translateY(-${60 * 160}px)`;
        }, 100);
    });

    setTimeout(() => {
        showFinalStep(amount);
    }, 6500); // Wait for spin to finish
}

function showFinalStep(amount) {
    document.getElementById('step-3').classList.add('hidden');
    document.getElementById('step-4').classList.remove('hidden');

    document.getElementById('finalName').innerText = userData.name;
    document.getElementById('finalDistrict').innerText = "Location: " + userData.district;
    document.getElementById('finalAmount').innerText = amount;

    const wishes = [
        "আপনার ঈদ কাটুক রয়্যাল স্টাইলে। এই ডিজিটাল সালামি আপনার জন্য ছোট্ট একটি উপহার!",
        "শুভ ঈদ! পরিবারের সবার সাথে আনন্দ আর হাসি-খুশিতে ভরে উঠুক আপনার দিনটি।",
        "এক মাস সিয়াম সাধনার পর আপনার এই ঈদ উপহার। অনেক অনেক দোয়া রইলো আপনার জন্য!",
        "সালামি পাওয়া মানেই ঈদের খুশি কয়েক গুণ বেড়ে যাওয়া। ঈদ মোবারক!",
        "আপনার এই ঈদ হোক জীবনের সেরা ঈদ। প্রিয়জনদের সাথে দারুণ কাটুক প্রতিটি মুহূর্ত।"
    ];
    
    document.getElementById('wishText').innerText = wishes[Math.floor(Math.random() * wishes.length)];

    // Celebration
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#ffffff', '#064e3b']
    });
}
