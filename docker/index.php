<html>
<head>
    <title>Sample html</title>
</head>
<body>
    <?php if(isset($_POST['submit'])){ ?>
        <h1>Informacion recibida</h1>
        <?php if(!isset($_FILES['excely'])){ ?>
            <h4>Sube algo ¿no?</h4>
        <?php } else { 
            require_once('./vendor/autoload.php');
            $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($_FILES['excely']['tmp_name']);
            $sheet = $spreadsheet->getActiveSheet(); 
        ?>
            <table border>
                <?php foreach($sheet->getRowIterator() as $row){ ?>
                <tr>
                    <?php  
                        $cellIterator = $row->getCellIterator();
                        $cellIterator->setIterateOnlyExistingCells(FALSE);
                        foreach ($cellIterator as $cell) {
                    ?>
                        <td> <?= $cell->getValue() ?> </td>
                        <?php } ?>
                </tr>
                <?php } ?>
            </table>
        <?php } ?>
    <?php } else { 
        $conn = pg_connect("host=db port=5432 dbname=dockerlab user=dockerlab password=kingdom");
        $result = pg_query($conn, "select * from executions");
        $dataset = pg_fetch_all($result);
        if(!$dataset){
            $dataset = [];
        }
    ?>
        <table border>
                <tr>
                    <td>ID</td>
                    <td>description</td>
                    <td>row</td>
                </tr>
                <?php foreach($dataset as $row){ ?>
                <tr>
                    <?php  
                        foreach ($row as $cell) {
                    ?>
                        <td> <?= $cell ?> </td>
                        <?php } ?>
                </tr>
                <?php } ?>
        </table> 
    <?php } ?>
    <h1>Selecciona un archivo para leerlo</h1>
    <form action="" method="POST" enctype="multipart/form-data">
        <label for="excely">Archivo de excel paps:</label>
        <input type="file" name="excely" id="excely" required>
        <button type="submit" name="submit">Leer</button>
    </form>
</body>
</html>