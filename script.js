function hesapla() {
    
    // 1. ADIM: Sayfadaki kutucuklardan verileri alalım (GİRDİLER)
    // document.getElementById(...) komutu, kimliğine (id) göre elemanı bulur.
    let yolcuSayisi = document.getElementById("yolcu-sayisi").value;
    let gezegen = document.getElementById("gezegen").value;
    let vipSeciliMi = document.getElementById("vip-hizmet").checked; // Kutucuk işaretli mi? (True/False)

    // 2. ADIM: Güvenlik Kontrolü (Validasyon)
    // Eğer kullanıcı sayı girmemişse uyaralım ve işlemi durduralım.
    if (yolcuSayisi == "" || yolcuSayisi < 1) {
        alert("Lütfen geçerli bir yolcu sayısı girin! 🛑");
        return; // Fonksiyonu burada kes, aşağıya inme.
    }

    // 3. ADIM: Fiyat Belirleme (Business Logic)
    let biletFiyati;

    if (gezegen == "mars") {
        biletFiyati = 1000000;
    } else if (gezegen == "ay") {
        biletFiyati = 50000;
    } else if (gezegen == "yorunge") {
        biletFiyati = 10000;
    }

    // 4. ADIM: Matematik İşlemi
    let toplamTutar = yolcuSayisi * biletFiyati;

    // Eğer VIP seçildiyse, kişi başı 500$ ekleyelim
    if (vipSeciliMi == true) {
        let ekstraUcret = 500 * yolcuSayisi;
        toplamTutar = toplamTutar + ekstraUcret;
    }

    // 5. ADIM: Sonucu Ekrana Yazdır (ÇIKTI)
    let sonucKutusu = document.getElementById("sonuc-alani");

    // HTML kodları kullanarak içine yazıyoruz
    sonucKutusu.innerHTML = `
        <h3>HESAPLANDI! ✅</h3>
        <p>Seçilen Gezegen: <strong>${gezegen.toUpperCase()}</strong></p>
        <p>Yolcu Sayısı: <strong>${yolcuSayisi} Kişi</strong></p>
        <hr>
        <p style="font-size: 1.5rem;">TOPLAM TUTAR: <strong>${toplamTutar} $</strong></p>
    `;

    // Kutuyu görünür yap
    sonucKutusu.style.display = "block";
}