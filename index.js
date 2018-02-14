import axios from 'axios'
import Routes from './routes/web'

const router = new Routes();


window.axios = axios;
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import Companies from './components/companies'
import Users from './components/users'

router.setRoute('#companies', Companies)
router.setRoute('#users', Users)

router.observe();




// const cmp = new Companies();
//
//
//
//
//
// console.log(cmp);