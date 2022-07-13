
// Filter
const courses = [{
        id: 1,
        name: "t1"
    },
    {
        id: 2,
        name: "t2"
    },
    {
        id: 3,
        name: "t3"
    },
    {
        id: 3,
        name: "t4"
    },
]

function renderCourse(courses){
    var list = document.querySelector('#list-courses')
    var htmls = courses.map(function(course)
    {
        return `
        <li>
            <h4>${course.name}</h4>
        </li>   
        `;
    }
    );
    list.innerHTML = htmls.join(" ")
}
renderCourse(courses)

