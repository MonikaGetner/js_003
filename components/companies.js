export default class Companies {
    constructor() {
        this.container = document.querySelector('.container');  //zmienna globalna widoczna w kazdej metodzie
        this.getData();
    }


    getData() {
        axios('companies')
            .then(result => this.drawList(result.data));
    }

    drawList(companies) {

        this.container.innerHTML = '';

        let tpl = `
            <button>Dodaj</button>
            <hr>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
        `;

        companies.forEach(company => {

            tpl += `

                <tr>
                    <td>${company.id}</td>
                    <td>${company.name}</td>
                    <td><button  data-id="${company.id}" class="btn btn-primary edit">Edit</button></td>
                    <td><button data-id="${company.id}" class="btn btn-danger delete">Delete</button></td>
                </tr>

            `;

        });


        tpl += `</table>`;


        this.container.insertAdjacentHTML('afterbegin', tpl);

        this.deleteCompany();
        this.editCompany();
    }

    deleteCompany() {

        const elements = this.container.querySelectorAll('.delete');

        elements.forEach(item => {
            item.addEventListener('click', event => {

                axios.delete(`companies/${event.target.getAttribute('data-id')}`)
                    .then(result => {
                        this.getData();
                    })

            })
        })

    }

    editCompany() {

        const elements = this.container.querySelectorAll('.edit');

        elements.forEach(item => {
            item.addEventListener('click', event => {
                const id = event.target.getAttribute('data-id');
                axios(`companies/${id}`)
                    .then(result => {
                        //this.getData();
                          console.log(id);
                       // $('#exampleModal').modal();

                            $('#myModal').modal();


                       // const inputName = document.querySelector('.name');
                       // console.log(inputName);
                       //inputName.value = result.data.name;

                      //  $('#exampleModal').modal();

                      //  document.querySelector('.after-edit').addEventListener('click', e => {

                       //     const name = inputName.value;

                        //    axios.put(`companies/${id}`, {name})
                          //      .then(result => {

                          //          $('#exampleModal').modal('toggle');
                            //    })
                        })
                    })




           // })
        })

    }


}