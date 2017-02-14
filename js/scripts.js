function Telefon(marka, cena, kolor) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}

var SamsungGalaxyS6 = new Telefon("Samsung Galaxy S6", 2000, "Biały"),
	iPhone6S = new Telefon("Iphone 6S", 2500, "Srebrny"),
	OnePlusOne = new Telefon("OnePlusOne", 1500, "Czarny");

	iPhone6S.printInfo();
	SamsungGalaxyS6.printInfo();
	OnePlusOne.printInfo();
