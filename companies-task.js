let company1 = {
    'company name': 'Company ABC',
    opened: 2022,
    companyCode: 156465431,
    employees: 25,
    ceo: 'John Doe',
    nvo: true,
    workingLocations: ['Lithuania', 'Latvia'],
    activityAreas: ['Marketing', 'Sales'],
    contacts: {
        phone: '+3706548715',
        email: 'info@companyabc.lt',
        address: {
            country: 'Lithuania',
            city: 'Vilnius',
            street: 'Vilniaus st.',
            apartment: 10,
        },
    },
    getInfo: function() {
        // return `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`

        // let street = this.contacts.address.street
        // let apartment = this.contacts.address.apartment
        // let city = this.contacts.address.city
        // let country = this.contacts.address.country

        let { street, apartment, city, country } = this.contacts.address

        let output = `${street} ${apartment}, ${city}, ${country}!`

        return output
    },
    setNVO: function() {
        this.nvo = true
    },
    setNonNVO: function() {
        this.nvo = false
    },
    switchNVO: function() {
        // if (this.nvo) {
        //     this.nvo = false
        // } else {
        //     this.nvo = true
        // }

        this.nvo = !this.nvo
    },
    getWorkingLocations: function() {
        return 'Working locations: ' + this.workingLocations.join(', ') + '.'
    },
    getActivityAreas: function() {
        return 'Activity areas: ' + this.activityAreas.join(', ') + '.'
    },
    addWorkingLocation: function(newLocation) {
        this.workingLocations.push(newLocation)

        return this.workingLocations
    },
    addActivityArea: function(newArea) {
        this.activityAreas.push(newArea)

        return this.activityAreas
    },
    removeWorkingLocation: function(locationToRemove) {
        // this.workingLocations = this.workingLocations.filter(location => location !== locationToRemove)

        let updatedWorkingLocations = this.workingLocations.filter(location => location !== locationToRemove)
        this.workingLocations = updatedWorkingLocations

        return this.workingLocations
    },
    removeActivityArea: function(areaToRemove) {
        let updatedAreas = this.activityAreas.filter(area => area !== areaToRemove)
        this.activityAreas = updatedAreas
        return this.activityAreas
    }
}

console.log(company1.getInfo())
company1.switchNVO()
console.log(company1.getWorkingLocations())
console.log(company1.getActivityAreas())
console.log(company1.addWorkingLocation('Spain'))
console.log(company1.addWorkingLocation('Italy'))
console.log(company1.addActivityArea('B2B sales'))
console.log(company1.removeWorkingLocation('Spain'))
console.log(company1.removeWorkingLocation('Italy'))
console.log(company1.removeActivityArea('Sales'))

// let company2 = Object()
let company2 = {}
company2['company name'] = 'Company XYZ'
company2.opened = 2023
company2.companyCode = 4564687313
company2.employees = 10
company2.ceo = 'Doe John'
company2.nvo = false
company2.workingLocations = ['Lithuania', 'Poland']
company2.activityAreas = ['Tourism', 'Sales']
company2.contacts = {}
company2.contacts.phone = '+370645486431'
company2.contacts.email = 'info@companyxyz.lt'
company2.contacts.address = {}
company2.contacts.address.country = 'Lithuania'
company2.contacts.address.city = 'Kaunas'
company2.contacts.address.street = 'Vilniaus st.'
company2.contacts.address.apartment = 125
company2.getInfo = function() {
    let { street, apartment, city, country } = this.contacts.address

    let output = `${street} ${apartment}, ${city}, ${country}!`

    return output
}
company2.setNVO = function() {
    this.nvo = true
}
company2.setNonNVO = function() {
    this.nvo = false
}
company2.switchNVO = function() {
    this.nvo = !this.nvo
}
company2.getWorkingLocations = function() {
    return 'Working locations: ' + this.workingLocations.join(', ') + '.'
}
company2.getActivityAreas = function() {
    return 'Activity areas: ' + this.activityAreas.join(', ') + '.'
}
company2.addWorkingLocation = function(newLocation) {
    this.workingLocations.push(newLocation)

    return this.workingLocations
}
company2.addActivityArea = function(newArea) {
    this.activityAreas.push(newArea)

    return this.activityAreas
}
company2.removeWorkingLocation = function(locationToRemove) {
    let updatedWorkingLocations = this.workingLocations.filter(location => location !== locationToRemove)
    this.workingLocations = updatedWorkingLocations

    return this.workingLocations
}
company2.removeActivityArea = function(areaToRemove) {
    let updatedAreas = this.activityAreas.filter(area => area !== areaToRemove)
    this.activityAreas = updatedAreas
    return this.activityAreas
}

console.log(company2.getInfo())
company2.switchNVO()
console.log(company2.getWorkingLocations())
console.log(company2.getActivityAreas())
console.log(company2.addWorkingLocation('Spain'))
console.log(company2.addWorkingLocation('Italy'))
console.log(company2.addActivityArea('B2B sales'))
console.log(company2.removeWorkingLocation('Spain'))
console.log(company2.removeWorkingLocation('Italy'))
console.log(company2.removeActivityArea('Sales'))