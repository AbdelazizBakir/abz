import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

class Contact {
constructor(props) {
  init(props);
  this.state = {contacts: []};
  this.headers = [
      { key: 'id_c', label: 'Id'},
      { key: 'f_name', label: 'FName' },
      { key: 'l_name', label: 'LName' },
      { key: 'email', label: 'Email' }
      ];
  this.deleteContact = this.deleteContact.bind(this);
}
componentDidMount() {
const url = 'http://localhost/atlas/app/pages/contact/contacts.php'
axios.get(url).then(response => response.data)
.then((data) => {
this.setState({ contacts: data })
console.log(this.state.contacts)
})
}

deleteContact(id, event) { //alert(id)
event.preventDefault();
if(window.confirm("Are you sure want to delete?")) {
  axios({
      method: 'post',
      url: 'http://localhost/devtest/reactjs/contacts.php/?delete=' + id
  })
  .then(function (response) {
      //handle success
      console.log(response)
      if(response.status === 200) {
          alert("Message deleted successfully");
      }
  })
  .catch(function (response) {
      //handle error
      console.log(response)
  });
}
}}
// message => "grid-col-10 grid-row-10 col-span-10 row-span-10 sm:row-span-10 sm:col-span-10"

export default function contact() {
  return (
    <> 
      <div className='flex static min-h-screen top-4 right-2 left-2 sm:mt-4'>
        <div className='grid grid-col-11'>
          <h1 className='flex relative justify-center itmes-center px-2 pt-20 font-bold text-2xl my-2 lg:max-w-7xl lg:px-4'>
            Contact
          </h1>
            <div className="flex justify-center itmes-center relative mt-2 mx-1">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-md font-medium text-gray-700">
                          Prénom
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-amber-300 border-2 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Nom
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-blue-500 focus:border-blue-500 border-amber-300 border-2 block w-full shadow-sm sm:text-sm rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        E-mail
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-amber-300 border-2 rounded-md"
                        />
                      </div>
                       
                      <div className="w-full
                                      h-32
                                      px-4
                                      py-3
                                      border-2 border-gray-300
                                      rounded-sm
                                      outline-none
                                      focus:border-blue-400">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                        </label>
                        <input
                          type="text"
                          name="message"
                          id="message"
                          autoComplete="message"
                          className="mt-2 focus:ring-blue-500 focus:border-blue-500 block h-full w-full shadow-sm sm:text-sm border-amber-300 border-2 rounded-md"
                        />
                      </div>

                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
        </div>
    </div>
    </>
  )
}

