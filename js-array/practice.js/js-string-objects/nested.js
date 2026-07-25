const college = {
    name: 'vnc',
    address: 'baily road',
    students:800,
    events:['21 Feb','Independence Day', 'Victory Day'],
    people:{
        count: 200,
        principal:{
            name:'Payel',
            yearsOfExperience:39,
            degree:"English"
        }
    }
}
console.log(college.people.count);
console.log(college['people']['count']);

college['events'][2]='Eid Ul Azha';
console.log(college.events);