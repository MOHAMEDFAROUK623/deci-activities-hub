class User {
    constructor(
        id, firstName, lastName, maidenName, age, gender, email, phone, username, password, birthDate, image,
        bloodGroup, height, weight, eyeColor, hair, ip, address, macAddress, university, bank, company,
        ein, ssn, userAgent, crypto, role
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.maidenName = maidenName;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
        this.birthDate = birthDate;
        this.image = image;
        this.bloodGroup = bloodGroup;
        this.height = height;
        this.weight = weight;
        this.eyeColor = eyeColor;
        this.hair = hair;
        this.ip = ip;
        this.address = address;
        this.macAddress = macAddress;
        this.university = university;
        this.bank = bank;
        this.company = company;
        this.ein = ein;
        this.ssn = ssn;
        this.userAgent = userAgent;
        this.crypto = crypto;
        this.role = role;
    }

    displayInfo() {
        console.log(`User: ${this.firstName} ${this.lastName} (Username: ${this.username})`);
        console.log(`Email: ${this.email}, Phone: ${this.phone}`);
        console.log(`Address: ${this.address.address}, ${this.address.city}, ${this.address.state}`);
        console.log(`Company: ${this.company.name}, Position: ${this.company.title}`);
        console.log(`Bank: ${this.bank.cardNumber} (${this.bank.cardType}), Exp: ${this.bank.cardExpire}`);
        console.log(`Crypto Wallet: ${this.crypto.wallet} (${this.crypto.coin}, ${this.crypto.network})`);
        console.log(`Role: ${this.role}`);
    }
}

export default User;
