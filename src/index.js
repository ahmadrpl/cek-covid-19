import './script/component/app-bar.js';
import $ from "jquery";
import main from "./script/main.js";
import dt from "datatables.net";
import 'datatables.net/js/jquery.dataTables.min.js';
$(document).ready(function() {
    $('#example').DataTable();
} );
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './style.css';

main();
