import {footer} from "./modules/footer.js"
import {sidebar} from "./modules/sidebar.js"
import {navbar} from "./modules/navbar.js"

const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;

    
    if(url === "/"){
        res.setHeader('Content-Type','text/html');
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Ventartemis</title>
        
          <!-- Google Font: Source Sans Pro -->
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
          <!-- Font Awesome -->
          <link rel="stylesheet" href="views/assets/plugins/fontawesome-free/css/all.min.css">
          <!-- overlayScrollbars -->
          <link rel="stylesheet" href="views/assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
          <!-- Theme style -->
          <link rel="stylesheet" href="views/assets/plugins/adminlte/css/adminlte.min.css">
        
          <!-- DataTables -->
          <link rel="stylesheet" href="views/assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
          <link rel="stylesheet" href="views/assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
          <link rel="stylesheet" href="views/assets/plugins/datatables-buttons/css/buttons.bootstrap4.min.css">
        
            <!-- jQuery -->
          <script src="views/assets/plugins/jquery/jquery.min.js"></script>
          <!-- Bootstrap 4 -->
          <script src="views/assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
          <!-- overlayScrollbars -->
          <script src="views/assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
          <!-- AdminLTE App -->
          <script src="views/assets/plugins/adminlte/js/adminlte.min.js"></script>
        
          <!-- DataTables  & Plugins -->
          <script src="views/assets/plugins/datatables/jquery.dataTables.min.js"></script>
          <script src="views/assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
          <script src="views/assets/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
          <script src="views/assets/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
          <script src="views/assets/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
          <script src="views/assets/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
          <script src="views/assets/plugins/jszip/jszip.min.js"></script>
          <script src="views/assets/plugins/pdfmake/pdfmake.min.js"></script>
          <script src="views/assets/plugins/pdfmake/vfs_fonts.js"></script>
          <script src="views/assets/plugins/datatables-buttons/js/buttons.html5.min.js"></script>
          <script src="views/assets/plugins/datatables-buttons/js/buttons.print.min.js"></script>
          <script src="views/assets/plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
        
        </head>
        <body class="hold-transition sidebar-mini layout-fixed">
        <!-- Site wrapper -->
        <div class="wrapper">
          <!-- Navbar -->
            ${navbar}
          <!-- /.navbar -->
          <!-- Main Sidebar Container -->
            ${sidebar}
          <!-- Content Wrapper. Contains page content -->
          <div class="content-wrapper">
            <!-- Content Header (Page header) -->
        
            



            <!-- /.content -->
          </div>
          <!-- /.content-wrapper -->
          ${footer}
          <!-- /.control-sidebar -->
        </div>
        <!-- ./wrapper -->
        
        </body>
        </html>
        `);
        res.end();
    }

    if(url === "/users"){

    }

    if(url === "/categories"){

    }

    if(url === "/products"){

    }

    if(url === "/employees"){

    }

    if(url === "/customers"){

    }

    if(url === "/sales"){

    }

    if(url === "/shopping"){

    }
    
    res.end();

});

server.listen(7000);