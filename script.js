// DIRBAM OBJEKTO VIDUJE-----------------------------------------------------------
// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
// 6. Sukurti funkcijas, kurios:
// 6.1. Pakeičia NVO statusą į true.
// 6.2. Pakeičia NVO statusą į false.
// 6.3. Keičia NVO statusą iš true į false ir iš false į true.
// 7. Sukurti funkcijas, kurios grąžina:
// 7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
// 7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
// 8. Sukurti funkcijas, kurios prideda:
// 8.1. Naują veiklos šalį prie šalių masyvo.
// 8.2. Naują veiklos rūšį prie veiklų masyvo.
// 9. Sukurti funkcijas, kurios pašalina:
// 9.1. Veiklos šalį iš šalių masyvo.
// 9.2. Veiklos rūšį iš veiklų masyvo.


let company1 = {
    'company name': 'UAB Turbita',
    opened: '2010-10-10',
    companyCode: 254875,
    employees: ['Tomas', 'Darius', 'Ieva', 'Antanas'],
    ceo: 'Rolandas Rolandavicius',
    nvo: true,
    workingLocations: ['Lietuva', 'Latvija', 'Estija'],
    activityAreas: ['Patikra', 'Remontas'],
    contacts: {
        phone: '+37060019000',
        email: 'uabturbita@email.com',
        address: {
            country: 'Lietuva',
            city: 'Panevezys',
            street: 'Kerbedzio st.',
            apartment: 10,
        },
    },

    getFullAddress: function() {        
        return console.log(`${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`)
    },

    setStatusTrue: function() {
        this.nvo = true
        return console.log(this.nvo, typeof this.nvo)
    },

    setStatusFalse: function() {
        this.nvo = false
        return console.log(this.nvo, typeof this.nvo)
    },

    countries: function() {    
        return console.log(company1.workingLocations.join(', ') + '.')
    },

    statusChange: function() {
        if (this.nvo) {
            this.nvo = true;
        } else {
            this.nvo = false;           
        }        
    },
};
console.log(company1);
company1.getFullAddress()
company1.setStatusTrue()
company1.setStatusFalse()
console.log(company1);
company1.setStatusTrue();
console.log(company1);
company1.getFullAddress()
console.log(company1.statusChange())
console.log(company1.statusChange())






// DIRBAM OBJEKTO ISOREJE----------------------------------------------------------

// let company2 = {};

// company2['company name'] = 'UAB Burita';
// company2.opened = '2000-01-01';
// company2.companyCode = 215487;
// company2.employees = ['Tomas', 'Darius', 'Ieva', 'Antanas'];
// company2.ceo = 'Rolandas Rolandavicius';
// company2.nvo = true;
// company2.workingLocations = ['Lietuva', 'Latvija', 'Estija'];
// company2.activityAreas = ['Burito', 'Kebukas'];
// company2.contacts = {};
// company2.contacts.phone = '+37060019000';
// company2.contacts.email = 'uabturbita@email.com';
// company2.contacts.address = {};
// company2.contacts.address.country = 'Lietuva';
// company2.contacts.address.city = 'Kaunas';
// company2.contacts.address.street = 'Kauno st.';
// company2.contacts.address.apartment = 10;

// console.log(company2);

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".

// let fullAddress = function() {
//     return console.log(`${company2.contacts.address.street} ${company2.contacts.address.apartment}, ${company2.contacts.address.city}, ${company2.contacts.address.country}.`)
// }
// fullAddress()

// 6.1. Pakeičia NVO statusą į true.
// let setStatusTrue = function() {
//     company2.nvo = true
//     return console.log(company2.nvo, typeof company2.nvo)
// }
// setStatusTrue()

// // 6.2. Pakeičia NVO statusą į false.
// let setStatusFalse = function() {
//     company2.nvo = false
//     return console.log(company2.nvo, typeof company2.nvo)
// }
// setStatusFalse()


// 6.3. Keičia NVO statusą iš true į false ir iš false į true.
// let statusChange = (status) => status === true ? false : true;
// setStatusTrue()
// company2.nvo = statusChange(company2.nvo); // false
// console.log(company2.nvo, typeof company2.nvo);
// company2.nvo = statusChange(company2.nvo); // true
// console.log(company2.nvo, typeof company2.nvo);
// company2.nvo = statusChange(company2.nvo)
// console.log(company2.nvo, typeof company2.nvo);
// setStatusFalse()
// company2.nvo = statusChange(company2.nvo)
// console.log(company2.nvo, typeof company2.nvo);


// 7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
// let countries = function() {    
//     return console.log(company2.workingLocations.join(', ') + '.')
// }
// countries()
// // 7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
// let areas = function() {
//     return console.log(company2.activityAreas.join(' ir ') + '.')
// }
// areas()

// // 8.1. Naują veiklos šalį prie šalių masyvo.
// let addCountry = function(country) {
//     company2.workingLocations.push(country)
//     return console.log(company2.workingLocations)
// }
// addCountry('Danija')
// addCountry('Vokietija')
// addCountry('Lenkija')
// addCountry('Olandija')

// // 8.2. Naują veiklos rūšį prie veiklų masyvo.
// let addActivity = function(activity) {
//     company2.activityAreas.push(activity)
//     return console.log(company2.activityAreas)
// }
// addActivity('Mesainiai')
// addActivity('Koldunai')


// // 9.1. Veiklos šalį iš šalių masyvo.
// let removeCountry = (countries, indexToRemove) => {
//     countries.splice(indexToRemove, 1)
//     return console.log(company2.workingLocations)
// };
// removeCountry(company2.workingLocations, 1)
// removeCountry(company2.workingLocations, -1)

// // 9.2. Veiklos rūšį iš veiklų masyvo.
// let removeActivity = (activities, indexToRemove) => {
//     activities.splice(indexToRemove, 1)
//     return console.log(company2.activityAreas)
// };
// removeActivity(company2.activityAreas, 2)
// removeActivity(company2.activityAreas, -1)



